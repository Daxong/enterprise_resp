<template>
    <div>
        <a-row class="content-repo">
            <a-col :span="15">
                <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">

                    <a-row type="flex" justify="space-around">
                        <a-col :span="22" >
                            <a-card >
                                <a-card-meta title="公司名">
                                    <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                                </a-card-meta>
                                <a-row>
                                    <a-col :span="12">公司标签</a-col>
                                </a-row>
                                <a-row>
                                    <a-col :span="12">电话 官网</a-col>
                                </a-row>
                                <a-row>
                                    <a-col :span="12">邮箱</a-col>
                                    <a-col :span="12">地址</a-col>
                                </a-row>
                                <a-row>
                                    <a-col :span="12">主要产品</a-col>
                                </a-row>
                            </a-card>
                        </a-col>
                    </a-row>
                    <br>
                    <a-row type="flex" justify="space-around">
                        <a-col :span="22" >
                            <a-card >
                                <a-row>
                                    <a-col :span="12">新闻/事件</a-col>
                                </a-row>
                                <a-row>
                                    <a-col :span="22">新闻1</a-col>
                                </a-row>
                                <a-row>
                                    <a-col :span="22">新闻2</a-col>
                                </a-row>
                                <a-row>
                                    <a-col :span="22">新闻3</a-col>
                                </a-row>
                            </a-card>
                        </a-col>
                    </a-row>
                    <br>
                    <a-affix :offsetTop="this.top">
                        <a-row type="flex" justify="space-around">
                            <a-col :span="22" >
                                <a-menu v-model="current" mode="horizontal">
                                    <a-menu-item key="mail">1 </a-menu-item>
                                    <a-menu-item key="app" disabled>2 </a-menu-item>
                                    <a-sub-menu>
                                    <span slot="title" class="submenu-title-wrapper"
                                    ><a href="" target="_blank" rel="noopener noreferrer">3</a></span>
                                        <a-menu-item-group title="1-1">
                                            <a-menu-item key="setting:1">3.1.1</a-menu-item>
                                            <a-menu-item key="setting:2">3.1.2</a-menu-item>
                                        </a-menu-item-group>
                                        <a-menu-item-group title="1-2">
                                            <a-menu-item key="setting:3">3.2.1</a-menu-item>
                                            <a-menu-item key="setting:4">3.2.2</a-menu-item>
                                        </a-menu-item-group>
                                    </a-sub-menu>
                                    <a-menu-item key="alipay">

                                    </a-menu-item>
                                </a-menu>
                            </a-col>
                        </a-row>
                    </a-affix>
                    <!-- 路由 -->
                    <router-view></router-view>

                </div>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    // import BaseInfo from "@/components/submenu/BaseInfo";
    export default {
        name: "CpyDetail",
        components: {
            // BaseInfo
        },
        data() {
            return{
                top: 64,
            }
        }
    }
</script>

<style scoped>

</style>