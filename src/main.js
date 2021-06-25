import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18n from "@/plugins/i18n";

const i18nLanguage = {
    ko: {
        hi: '안녕하세요'
    },
    en: {
        hi: 'Hello'
    }
}

const app = createApp(App)
app.use(router)
app.mixin(mixins)
app.use(i18n, i18nLanguage)
app.mount('#app')