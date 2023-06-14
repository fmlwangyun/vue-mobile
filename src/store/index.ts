import { createPinia } from 'pinia'
// 引入持久化插件
import { createPersistedState } from 'pinia-persistedstate-plugin'

// 创建store实例
const store = createPinia()
//使用持久化插件
store.use(createPersistedState())

export default store