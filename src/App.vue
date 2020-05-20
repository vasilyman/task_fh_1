<template>
  <div>
    <nav class="is-top">
      <ul>
        <li>
          <router-link to="/">Task 1</router-link>
        </li>
        <li>
          <router-link to="/task2">Task 2</router-link>
        </li>
        <li>
          <router-link to="/task3">Task 3</router-link>
        </li>
        <li>
          <router-link to="/task4">Task 4</router-link>
        </li>
      </ul>
    </nav>
    <div class="has-fixed-top" :class="$route.name === 'task1' ? 'has-fixed-bottom' : ''">
      <router-view/>
    </div>
    <nav class="is-bottom" v-if="$route.name==='task1'">
      <ul>
        <li @click="variant=index+1" v-for="(item, index) in new Array(11)" :key="index">
          <a href="#">variant {{index+1}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');
  $nav-height: 3rem;

  html, body {
    margin: 0;
  }
  .has-fixed-top {
    margin-top: $nav-height;
  }
  .has-fixed-bottom {
    margin-bottom: $nav-height;
  }
  nav.is-bottom {
    position: fixed;
    bottom: 0;
    background-color: white;
  }
  nav.is-top {
    position: fixed;
    top: 0;
    background-color: white;
  }
  nav, nav ul {
    width: 100%;
  }
  nav ul {
    display: flex;
    justify-items: stretch;
    list-style-type: none;
    padding: 0;
    margin: 0;
    box-shadow: 0 0 15px rgba($color: #000000, $alpha: .3);
  }
  nav ul li {
    flex: 1;
    margin: auto .5rem;
  }
  nav ul li a {
    text-decoration: none;
    color: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    height: $nav-height;
  }
  nav ul li a:hover {
    background-color: #dddddd;
  }
</style>
