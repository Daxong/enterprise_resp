<template>
    <a-layout id="components-layout-demo-top" >
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
                    <a-tooltip placement="bottom" title="通知消息" :getPopupContainer="getPopupContainer">
                        <a-icon type="notification" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px' }"/>
                    </a-tooltip>
                    <a-divider type="vertical" :style="{ fontSize: '22px' }"/>
                    <a-tooltip placement="bottom" title="设置" :getPopupContainer="getPopupContainer">
                        <a-icon type="setting" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px' }"/>
                    </a-tooltip>
                    <a-divider type="vertical" :style="{ fontSize: '22px', color: '#08c' }"/>
                    <a-tooltip placement="bottom" title="用户" :getPopupContainer="getPopupContainer">
                        <a-icon type="user" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px' }"/>
                    </a-tooltip>
                </a-col>
            </a-row>


        </a-layout-header>
        <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
            <a-row class="content-repo">
                <a-col :span="15">
                    <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
                        <a-input-search placeholder="输入企业名称" @search="onSearch" enterButton="搜索" size="large"/>
                        <br/>
                        <br/>
                        <a-row type="flex" justify="space-around">
                            <a-col :span="22" >
                                <a-card :loading="loading" title="企业1">
                                    企业简介1
                                    <a href="#" slot="extra">详情</a>
                                </a-card>
                            </a-col>
                            <a-col :span="22" >
                                <a-card :loading="loading" title="企业2">
                                    <a href="#" slot="extra">详情</a>
                                    企业简介2
                                </a-card>
                            </a-col>
                            <a-col :span="22" >
                                <a-card :loading="loading" title="企业3">
                                    <a href="#" slot="extra">详情</a>
                                    企业简介3
                                </a-card>
                            </a-col>
                            <a-col :span="22" >
                                <a-card :loading="loading" title="企业4">
                                    <a href="#" slot="extra">详情</a>
                                    企业简介4
                                </a-card>
                            </a-col>
                        </a-row>
                    </div>
                </a-col>
                <a-col :span="1"></a-col>
                <a-col :span="8">
                    <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
                        <a-divider orientation="left">客商分组</a-divider>
                        <a-select mode="multiple" :defaultValue="['a1', 'b2']" :style="{width: '100%', borderStyle: 'none'}" @change="handleChange" placeholder="点击选择分组" allowClear="true" showSearch="true">
                            <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i"
                            >{{(i + 9).toString(36) + i}}</a-select-option>
                        </a-select>
                        <a-divider orientation="left">附件列表</a-divider>
                        <div class="files">
                            <div class="files-add">
                                <a-tooltip placement="top" title="上传附件" :getPopupContainer="getPopupContainer">
                                    <a-icon type="plus-square" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px',marginLeft: '4px' }"/>
                                </a-tooltip>
                                <a-tooltip placement="top" title="删除附件" :getPopupContainer="getPopupContainer">
                                    <a-icon type="minus-square" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px',marginLeft: '4px' }" />
                                </a-tooltip>
                            </div>
                            <a-list class="demo-loadmore-list" itemLayout="horizontal" :dataSource="data" :locale="{emptyText: '暂无数据'}">
                                <a-list-item slot="renderItem" slot-scope="item">
                                    <a slot="actions">edit</a>
                                    <a slot="actions">more</a>
                                    <a-list-item-meta
                                            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                    >
                                        <a slot="title" href="https://www.antdv.com/">{{item.name.last}}</a>
                                        <a-avatar
                                                slot="avatar"
                                                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        />
                                    </a-list-item-meta>
                                    <div>content</div>
                                </a-list-item>
                            </a-list>
                        </div>
                        <a-divider orientation="left">维护记录</a-divider>
                        <div class="timeline">
                            <div class="timeline-add">
                                <a-tooltip placement="top" title="新增备注" :getPopupContainer="getPopupContainer">
                                    <a-icon type="plus-square" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px',marginLeft: '4px' }" @click="() => setModal1Visible(true)"/>
                                </a-tooltip>
                                <a-modal
                                        title="备注"
                                        style="top: 20px;"
                                        :visible="modal1Visible"
                                >
                                <template slot="footer">
                                    <a-button key="back" @click="() => setModal1Visible(false)">取消</a-button>
                                    <a-button key="submit" type="primary" :loading="loading" @click="() => setModal1Visible(false)">
                                        提交
                                    </a-button>
                                </template>
                                <a-textarea :rows="4" @change="handleChange" :value="value"></a-textarea>
                                </a-modal>
                            </div>
                        </div>
                    </div>
                </a-col>
            </a-row>
        </a-layout-content>
        <a-layout-footer style="text-align: center">
            Enterprise repository ©2020 Created by Enlighten.com
        </a-layout-footer>
    </a-layout>
</template>

<style scoped>
    .content-repo {
        height: 100%;
    }
    .cpy-list{
        height: 125px;
        background: rgba(240,242,245,1);
        margin: 10px 0 10px 0;
        border-radius: 4px;
    }
    .files{
        height: 200px;
        width: 100%;
        /*background-color: #42b983;*/
        border-radius: 4px;
    }
    .files-add {
        height: 30px;
        width: 100%;
        background-color: rgba(240,242,245,1);;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    .timeline{
        height: 500px;
        /*background-color: #42b983;*/
        border-radius: 4px;
    }
    .timeline-add{
        height: 30px;
        width: 100%;
        background-color: rgba(240,242,245,1);;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }
    .ant-select-selection{
        border-style: none;
    }
</style>

<script>
    export default {
        name: "index",
        data() {
            return {
                modal1Visible: false,
                loading: true,
            };
        },
        methods: {
            handleClick() {
                this.loading = !this.loading;
            },
            getPopupContainer(trigger) {
                return trigger.parentElement;
            },
            setModal1Visible(modal1Visible) {
                this.modal1Visible = modal1Visible;
            },
        },
    };
</script>