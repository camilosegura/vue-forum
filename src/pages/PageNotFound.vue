<template>
  <div class="col-full">
    <h1 :class="$style.heading">Not Found Page</h1>
    <p :class="$style.copy">Sorry, the page you are looking for was not found.
      <router-link :to="{name: 'Home'}">
        Go Home Page!
      </router-link>
    </p>
  </div>
</template>

<style module>
  .heading {
    font-size: 100px;
    text-align: center;
  }

  .copy {
    font-size: 40px;
    text-align: center;
  }
</style>
