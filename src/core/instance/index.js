import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}


// 将各种方法挂到VUE的原型链上

// 初始化
initMixin(Vue)
// 数据绑定
stateMixin(Vue)
// 事件
eventsMixin(Vue)
// 生命周期
lifecycleMixin(Vue)
// 渲染
renderMixin(Vue)

export default Vue
