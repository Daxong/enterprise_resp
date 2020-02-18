import Vue from 'vue'
import App from './App.vue'
// import Router from 'vue-router'
import router from '@/router';
import {
    Affix,
    Anchor, Avatar,
    Badge,
    Button,
    Card,
    Col, Comment, Divider, Dropdown,
    Icon, Input, Layout, List, LocaleProvider,
    Menu, Modal, Popover, Row, Select, Table, Timeline, Tooltip, Upload
} from 'ant-design-vue';
import TextArea from "ant-design-vue/lib/input/TextArea";
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);
Vue.use(Input);
Vue.use(Select);
Vue.use(Card);
Vue.use(Divider);
Vue.use(Tooltip);
Vue.use(Modal);
Vue.use(Comment);
Vue.use(TextArea);
Vue.use(Button);
Vue.use(List);
Vue.use(LocaleProvider);
Vue.use(Upload);
Vue.use(Popover);
Vue.use(Badge);
Vue.use(Dropdown);
Vue.use(Timeline);
Vue.use(Anchor);
Vue.use(Avatar);
Vue.use(Affix);
Vue.use(Table);
// Vue.use(Router);


Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
//     router,
// }).$mount('#app')

new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: {
        App
    },
    render: h => h(App),
}).$mount('#app')

