<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    {{ $t('message.hello') }}
    <div><el-button type="primary">test</el-button></div>
    <router-view />
  </div>
</template>
