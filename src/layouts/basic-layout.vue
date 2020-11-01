<template>
  <div class="basic-layout">
    <h3>basic layout</h3>
    <ul>
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/system/user">user</router-link></li>
    </ul>
    <h4>{{ $store.state.currentUser.name }}</h4>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'BasicLayout'
}
</script>

<style></style>
