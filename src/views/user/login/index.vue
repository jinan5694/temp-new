<template>
  <div class="login">
    <el-input v-model="value"></el-input>
    <el-button @click="login">Login</el-button>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  setup(props, ctx) {
    const value = ref(null)
    function login() {
      localStorage.setItem('token', 'test_token')
      ctx.root.$router.push({ name: 'dashboard' })
    }
    return { value, login }
  }
}
</script>

<style></style>
