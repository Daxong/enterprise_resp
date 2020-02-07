import Vue from 'vue'
import App from './App.vue'
import {
    Button,
    Card,
    Col, Comment, Divider,
    Icon, Input, Layout, List, LocaleProvider,
    Menu, Modal, Row, Select, Tooltip
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


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
