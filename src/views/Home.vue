<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div id="nav">
      <router-link to="/dashboard">dashboard</router-link> |
      <router-link to="/system/user">user</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
