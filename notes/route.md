# 路由
- 尽量精简的数据初始化数量。
- 本地数据版本管理，后端就没有版本，前端版本没有意义。

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

initData

用例
basicLayout
blankLayout

beforeEach中根据meta信息判断
beforEnter

# topic
资源权限


