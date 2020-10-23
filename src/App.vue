<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    {{ $t('message.hello') }}
    <pre>{{ state }}{{ test }}</pre>
    <div><el-button type="primary">test</el-button></div>
    <router-view />
  </div>
</template>
<script>
import { reactive, ref } from '@vue/composition-api'
export default {
  name: 'App',
  setup() {
    const test = ref('test')
    const state = reactive({
      foo: 'foo',
      bar: 'bar'
    })
    state.bar = 'baz'
    return { test, state }
  }
}
</script>
