import i18nConfig from '../next-i18next.config'

export const i18n = i18nConfig.i18n
export enum EI18nNs {
  common = 'common',
}

export enum EI18nCommon {
  title = 'title',
  locale = 'locale',
  close = 'close',
  generate = 'generate',
  data_from = 'data_from',
  select_your_tech = 'select_your_tech',
  switching = 'switching',
  save = 'save',
  // tech
  entry = 'category.entry',
  love = 'category.love',
  most = 'category.most',
  promote = 'category.promote',
  performance = 'category.performance',
  experience = 'category.experience',
  underestimate = 'category.underestimate',
  overrated = 'category.overrated',
  spiritual_pillars = 'category.spiritual_pillars',
  understand = 'category.understand',
  master = 'category.master',
  expect = 'category.expect',
  want = 'category.want',
  unused = 'category.unused',
  dislike = 'category.dislike',
}

export enum EI18nLang {
  zh = 'zh',
  en = 'en',
}
