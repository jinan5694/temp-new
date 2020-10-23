import Vue from 'vue'
import VueI18n from 'vue-i18n'

import locale from 'element-ui/lib/locale'
import elLangEn from 'element-ui/lib/locale/lang/en'
import elLangZnCn from 'element-ui/lib/locale/lang/zh-CN'

import zhCN from './langs/zh-CN'
import enUs from './langs/en-US'

Vue.use(VueI18n)

const messages = {
  zh: { ...zhCN, ...elLangZnCn },
  en: { ...enUs, ...elLangEn }
}

const i18n = new VueI18n({
  locale: 'zh',
  messages
})

// 实现element插件的多语言切换
locale.i18n((key, value) => i18n.t(key, value))

export default i18n
