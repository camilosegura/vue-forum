import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: sourceData,
  getters: {

  },
  actions: {
    createPost (context, post) {
      const postId = 'greatPost' + Math.random()
      post['.key'] = postId

      context.commit('setPost', {postId, post})
      context.commit('appendPostToThread', {postId, threadId: post.threadId})
      context.commit('appendPostToUser', {postId, userId: post.userId})
    }
  },
  mutations: {
    setPost (state, {postId, post}) {
      Vue.set(state.posts, postId, post)
    },
    appendPostToThread (state, {postId, threadId}) {
      Vue.set(state.threads[threadId].posts, postId, postId)
    },
    appendPostToUser (state, {postId, userId}) {
      Vue.set(state.users[userId].posts, postId, postId)
    }
  }
})

export default store
