<template>
  <div id="app">
    <a-locale-provider :locale="zh_CN">
      <a-layout id="components-layout-top" >
        <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
          <a-row>
            <a-col :span="21">
              <a-menu mode="horizontal" theme="dark">
                <a-menu-item key="mail"> <a-icon type="inbox" />客商库</a-menu-item>
                <a-menu-item key="app" > <a-icon type="appstore" />企业搜索</a-menu-item>
              </a-menu>
            </a-col>
            <a-col :span="3">
              <a-tooltip placement="bottom" title="操作指南" :getPopupContainer="getPopupContainer">
                <a-icon type="bulb" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px' }" />
              </a-tooltip>
              <a-divider type="vertical" :style="{ fontSize: '22px', color: '#08c' }"/>
              <!-- 通知 -->
              <a-popover placement="bottom" >
                <template slot="content">
                  <div
                          class="infinite-container"
                          v-infinite-scroll="handleInfiniteOnLoad"
                          :infinite-scroll-disabled="busy"
                          :infinite-scroll-distance="10"
                          bordered="false"
                  >
                    <!-- 通知列表 -->
                    <a-list :dataSource="data">
                      <a-list-item slot="renderItem" slot-scope="item">
                        <a-list-item-meta :description="item.email">
                          <a slot="title" :href="item.href">{{item.name.last}}</a>
                        </a-list-item-meta>
                        <div><a-icon type="delete"  :style="{color: '#eb2f96'}"/></div>
                      </a-list-item>
                      <div v-if="noticeloading && !busy" class="loading-container">
                        <a-spin />
                      </div>
                    </a-list>
                  </div>
                </template>
                <a-badge count="5">
                  <a-icon type="notification" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px' }"/>
                </a-badge>
              </a-popover>
              <a-divider type="vertical" :style="{ fontSize: '22px' }"/>
              <a-popover placement="bottom">
                <a-icon type="setting" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px' }"/>
                <a-list itemLayout="horizontal" :dataSource="menudata" slot="content">
                  <a-list-item slot="renderItem" slot-scope="item">
                    <a-list-item-meta>
                      <a slot="title" >{{item.title}}</a>
                    </a-list-item-meta>
                  </a-list-item>
                </a-list>
              </a-popover>
              <a-divider type="vertical" :style="{ fontSize: '22px', color: '#08c' }"/>
              <a-tooltip placement="bottom" title="用户" :getPopupContainer="getPopupContainer">
                <a-icon type="user" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px' }"/>
              </a-tooltip>
            </a-col>
          </a-row>


        </a-layout-header>
        <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
          <!-- 中间部分 -->
<!--          <index></index>-->
<!--          <cpy-detail></cpy-detail>-->

        </a-layout-content>
        <a-layout-footer style="text-align: center">
          Enterprise repository ©2020 Created by Enlighten.com
        </a-layout-footer>
        <router-view></router-view>
      </a-layout>
    </a-locale-provider>
  </div>
</template>

<script>
// import index from './components/Index.vue';
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
//通知伪消息
import reqwest from 'reqwest';
import infiniteScroll from 'vue-infinite-scroll';
// import CpyDetail from "@/components/CpyDetail";
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

moment.locale('zh-cn');
export default {
  name: 'app',
  directives: { infiniteScroll },
  data() {
    return {
      zh_CN,
      // 通知
      clicked: false,
      hovered: false,
      //文件数据
      filedata: [],
      //通知伪消息
      data: [],
      noticeloading: false,
      busy: false,
      //设置
      menudata: [
        {
          title: 'Ant Design Title 1',
        },
        {
          title: 'Ant Design Title 2',
        },
        {
          title: 'Ant Design Title 3',
        },
        {
          title: 'Ant Design Title 4',
        },
      ],
    };
  },
  components: {
    // CpyDetail
    // index
  },
  beforeMount() {
    this.fetchData(res => {
      this.data = res.results;
    });
  },
  methods: {
    //通知
    hide() {
      this.clicked = false;
      this.hovered = false;
    },
    handleHoverChange(visible) {
      this.clicked = false;
      this.hovered = visible;
    },
    handleClickChange(visible) {
      this.clicked = visible;
      this.hovered = false;
    },
    //拉取通知
    fetchData(callback) {
      reqwest({
        url: fakeDataUrl,
        type: 'json',
        method: 'get',
        contentType: 'application/json',
        success: res => {
          callback(res);
        },
      });
    },
    handleInfiniteOnLoad() {
      const data = this.data;
      this.loading = true;
      if (data.length > 14) {
        this.$message.warning('Infinite List loaded all');
        this.busy = true;
        this.loading = false;
        return;
      }
      this.fetchData(res => {
        this.data = data.concat(res.results);
        this.loading = false;
      });
    },
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
.infinite-container {
  /*border: 1px solid #e8e8e8;*/
  border-radius: 4px;
  overflow: auto;
  padding: 8px 10px;
  height: 300px;
  background-color: #fff;

}
.loading-container {
  position: absolute;
  bottom: 40px;
  width: 100%;
  text-align: center;
}

</style>
