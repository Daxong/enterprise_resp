<template>
  <div id="app">
    <a-locale-provider :locale="zh_CN">
      <index></index>
    </a-locale-provider>
  </div>
</template>

<script>
import index from './components/Index.vue';
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
export default {
  name: 'app',
  data() {
    return {
      zh_CN,
    };
  },
  components: {
    index
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>
