<template>
  <div class="user-layout">
    <div class="lang">
      <app-lang></app-lang>
    </div>
    <div class="content">
      <div class="banner">
        <h3>Hello World</h3>
        <p>Ant Design 是西湖区最具影响力的 Web 设计规范</p>
      </div>
      <div class="form-wrapper">
        <router-view></router-view>
      </div>
    </div>
    <div class="footer">
      Copyright 2020
    </div>
  </div>
</template>

<script>
import AppLang from './components/lang'
export default {
  name: 'UserLayout',
  components: {
    AppLang
  }
}
</script>
<style lang="less" scoped>
.user-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  background: #f0f2f5;
  // background-image: url('/background.svg');
  // background-repeat: no-repeat;
  // background-size: cover;
}
.lang {
  flex: none;
  height: 40px;
  line-height: 44px;
  text-align: right;
}
.content {
  flex: 1;
  padding: 32px 0;
  .banner {
    text-align: center;
    margin-bottom: 48px;
  }
}
.form-wrapper {
  margin: 0 auto;
  width: 368px;
}
.footer {
  flex: none;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
}
</style>
