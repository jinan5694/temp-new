<template>
  <div class="basic-layout">
    <h3>basic layout</h3>
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
