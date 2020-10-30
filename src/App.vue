<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Dashboard</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/system/user">user</router-link></li>
    </ul>
    <router-view />
  </div>
</template>
