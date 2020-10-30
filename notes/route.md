# 路由
layout可以作为布局
如果切换layout呢？

layout和初始化数据是耦合在一起还是分离？
倾向分离
但是雨鞋layout又是依赖初始化数据的

尽量精简的数据初始化数量。
本地数据版本管理，后端就没有版本，前端版本没有意义。

路由典型场景
page | layout | token
--|--|--
login | userLayout | false
register | userLayout | false
home | basicLayout | true
contract |  blankLayout | true


### Layouts
basicLayout
userLayout
blankLayout

angular是给路由加守卫（guade）

initData

可以访问路由 - canActivate
basicLayout
```
if (token) {
  initData(() => {
    next()
  })
} else {
  next('/login')
}
```
可以访问子路由 - canActivateChild
处理未保存的更改
预先获取组件数据

```
// 是否可以访问
if (canActivate) {
  next()
} else {
  next('/login')
  // or
  next('/304')
}
```
系统初始化不在basicLayout 或 ready 中做

用例
basicLayout
blankLayout

beforeEach中根据meta信息判断
beforEnter


