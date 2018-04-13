import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    ...sourceData,
    authId: 'VXjpr2WHa8Ux4Bnggym8QFLdv5C3'
  },
  getters: {
    authUser (state) {
      return state.users[state.authId]
    }
  },
  actions: {
    createPost (context, post) {
      const postId = 'greatPost' + Math.random()
      post['.key'] = postId
      post.userId = context.state.authId

      context.commit('setPost', {postId, post})
      context.commit('appendPostToThread', {postId, threadId: post.threadId})
      context.commit('appendPostToUser', {postId, userId: post.userId})

      return Promise.resolve(context.state.psots[postId])
    },
    updateUser (context, user) {
      context.commit('setUser', {userId: user['.key'], user})
    },
    createThread (context, {title, text, forumId}) {
      return new Promise((resolve, reject) => {
        const publishedAt = Math.floor(Date.now() / 1000)
        const userId = context.state.authId
        const threadId = 'greatThread' + Math.random()
        const post = {
          text: text,
          publishedAt,
          threadId: threadId
        }

        const thread = {
          '.key': threadId,
          title,
          forumId,
          publishedAt,
          userId
        }

        context.commit('setThread', {threadId, thread})
        context.dispatch('createPost', post)
          .then(post => {
            context.commit('setThread', {threadId, thread: {...thread, firstPostId: post['.key']}})
          })
        context.commit('appendThreadToForum', {forumId, threadId})
        context.commit('appendThreadToUser', {userId, threadId})

        resolve(context.state.threads[threadId])
      })
    },
    updateThread (context, {title, text, id}) {
      return new Promise((resolve, reject) => {
        const thread = context.state.threads[id]
        const post = context.state.posts[thread.firstPostId]

        const newThread = {...thread, title}
        const newPost = {...post, text}

        context.commit('setThread', {threadId: id, thread: newThread})
        context.commit('setPost', {postId: thread.firstPostId, post: newPost})

        resolve(newThread)
      })
    }
  },
  mutations: {
    setPost (state, {postId, post}) {
      Vue.set(state.posts, postId, post)
    },
    setUser (state, {userId, user}) {
      Vue.set(state.users, userId, user)
    },
    setThread (state, {threadId, thread}) {
      Vue.set(state.threads, threadId, thread)
    },
    appendPostToThread (state, {postId, threadId}) {
      const thread = state.threads[threadId]

      if (!thread.posts) {
        Vue.set(thread, 'posts', {})
      }

      Vue.set(thread.posts, postId, postId)
    },
    appendPostToUser (state, {postId, userId}) {
      const user = state.users[userId]

      if (!user.posts) {
        Vue.set(user, 'posts', {})
      }

      Vue.set(user.posts, postId, postId)
    },
    appendThreadToForum (state, {forumId, threadId}) {
      const forum = state.forums[forumId]

      if (!forum.threads) {
        Vue.set(forum, 'threads', {})
      }

      Vue.set(forum.threads, threadId, threadId)
    },
    appendThreadToUser (state, {userId, threadId}) {
      const user = state.users[userId]

      if (!user.threads) {
        Vue.set(user, 'threads', {})
      }

      Vue.set(user.threads, threadId, threadId)
    }
  }
})

export default store
