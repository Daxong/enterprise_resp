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
                    <!-- 通知 -->
                    <a-popover placement="bottom">
                        <template slot="content">
                            <div
                                    class="demo-infinite-container"
                                    v-infinite-scroll="handleInfiniteOnLoad"
                                    :infinite-scroll-disabled="busy"
                                    :infinite-scroll-distance="10"
                            >
                                <!-- 通知列表 -->
                                <a-list :dataSource="data">
                                    <a-list-item slot="renderItem" slot-scope="item">
                                        <a-list-item-meta :description="item.email">
                                            <a slot="title" :href="item.href">{{item.name.last}}</a>
                                            <a-avatar
                                                    slot="avatar"
                                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                            />
                                        </a-list-item-meta>
                                        <div><a-icon type="delete"  :style="{color: '#eb2f96'}"/></div>
                                    </a-list-item>
                                    <div v-if="noticeloading && !busy" class="demo-loading-container">
                                        <a-spin />
                                    </div>
                                </a-list>
                            </div>
                        </template>
                        <a-badge count="5">
                            <a-icon type="notification" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px' }"/>
                        </a-badge>
                    </a-popover>
<!--                    <a-dropdown>-->
<!--                        <a-badge count="5">-->
<!--                            <a-icon type="notification" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px' }"/>-->
<!--                        </a-badge>-->

<!--                        <div slot="overlay">-->
<!--                            <div-->
<!--                                class="demo-infinite-container"-->
<!--                                v-infinite-scroll="handleInfiniteOnLoad"-->
<!--                                :infinite-scroll-disabled="busy"-->
<!--                                :infinite-scroll-distance="10"-->
<!--                            >-->
<!--                                &lt;!&ndash; 通知列表 &ndash;&gt;-->
<!--                                <a-list :dataSource="data">-->
<!--                                    <a-list-item slot="renderItem" slot-scope="item">-->
<!--                                        <a-list-item-meta :description="item.email">-->
<!--                                            <a slot="title" :href="item.href">{{item.name.last}}</a>-->
<!--                                            <a-avatar-->
<!--                                                    slot="avatar"-->
<!--                                                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"-->
<!--                                            />-->
<!--                                        </a-list-item-meta>-->
<!--                                        <div><a-icon type="delete"  :style="{color: '#eb2f96'}"/></div>-->
<!--                                    </a-list-item>-->
<!--                                    <div v-if="noticeloading && !busy" class="demo-loading-container">-->
<!--                                        <a-spin />-->
<!--                                    </div>-->
<!--                                </a-list>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </a-dropdown>-->
                    <a-divider type="vertical" :style="{ fontSize: '22px' }"/>
                    <a-dropdown>
                        <a-icon type="setting" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px' }"/>
                        <a-menu slot="overlay" @click="onClick">
                            <a-menu-item key="1">1st menu item</a-menu-item>
                            <a-menu-item key="2">2nd menu item</a-menu-item>
                            <a-menu-item key="3">3rd menu item</a-menu-item>
                        </a-menu>
                    </a-dropdown>
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
                                <a-card title="企业1">
                                    <a href="#" slot="extra">预览</a>
                                    <a-divider slot="extra" type="vertical" :style="{ fontSize: '15px', color: '#08c' }"/>
                                    <a href="#" slot="extra">详情</a>
                                    <a-row>
                                        <a-col :span="20">公司名栏</a-col>
                                        <a-col :span="4">分组</a-col>
                                    </a-row>
                                    <a-row>
                                        <a-col :span="12">法定代表人</a-col>
                                        <a-col :span="12">所属地区</a-col>
                                    </a-row>
                                    <a-row>
                                        <a-col :span="12">国标行业</a-col>
                                        <a-col :span="12">成立日期</a-col>
                                    </a-row>
                                    <a-row>
                                        <a-col :span="12">注册资金</a-col>
                                        <a-col :span="12">联系电话</a-col>
                                    </a-row>
                                </a-card>
                            </a-col>
                            <a-col :span="22" >
                                <a-card title="企业1">
                                    <a href="#" slot="extra">预览</a>
                                    <a-divider slot="extra" type="vertical" :style="{ fontSize: '15px', color: '#08c' }"/>
                                    <a href="#" slot="extra">详情</a>
                                    <a-row>
                                        <a-col :span="20">公司名栏</a-col>
                                        <a-col :span="4">分组</a-col>
                                    </a-row>
                                    <a-row>
                                        <a-col :span="12">法定代表人</a-col>
                                        <a-col :span="12">所属地区</a-col>
                                    </a-row>
                                    <a-row>
                                        <a-col :span="12">国标行业</a-col>
                                        <a-col :span="12">成立日期</a-col>
                                    </a-row>
                                    <a-row>
                                        <a-col :span="12">注册资金</a-col>
                                        <a-col :span="12">联系电话</a-col>
                                    </a-row>
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
                                    <a-icon type="plus-square" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px',marginLeft: '4px' }" @click="() => setModal1Visible(true)"/>
                                </a-tooltip>
                                <a-tooltip placement="top" title="删除附件" :getPopupContainer="getPopupContainer">
                                    <a-icon type="minus-square" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px',marginLeft: '4px' }" />
                                </a-tooltip>
                            </div>
                            <a-list class="demo-loadmore-list" itemLayout="horizontal" :dataSource="filedata">
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
                                    <div>下载</div>
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
                                        class="ant-modal-body"
                                        @cancel="() => setModal1Visible(false)"
                                >
                                <a-textarea :rows="4" @change="handleChange" :value="value"></a-textarea>
                                    <a-upload-dragger
                                            name="file"
                                            :multiple="true"
                                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                            @change="handleChange"
                                    >
                                        <span class="ant-upload-text">
                                            <a-icon type="cloud-upload" :style="{fontSize: '15px'}"/>点击或拖拽此区域上传附件,支持批量文件上传,不限格式与大小
                                        </span>
                                    </a-upload-dragger>
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
    .upload-file{
        height: 35px;
        padding-bottom: 10px;
    }
    /*p.ant-upload-drag-icon .anticon{*/
    /*    font-size: 17px;*/
    /*}*/
    .ant-modal-body {
        padding-bottom: 30px;
    }

    .demo-infinite-container {
        border: 1px solid #e8e8e8;
        border-radius: 4px;
        overflow: auto;
        padding: 8px 10px;
        height: 300px;
        background-color: #fff;

    }
    .demo-loading-container {
        position: absolute;
        bottom: 40px;
        width: 100%;
        text-align: center;
    }
</style>

<script>
    //通知伪消息
    import reqwest from 'reqwest';
    import infiniteScroll from 'vue-infinite-scroll';
    const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

    export default {
        name: "index",
        directives: { infiniteScroll },
        data() {
            return {
                modal1Visible: false,
                loading: true,
                //文件数据
                filedata: [],
                // 通知
                clicked: false,
                hovered: false,
                //通知伪消息
                data: [],
                noticeloading: false,
                busy: false,
            };
        },
        beforeMount() {
            this.fetchData(res => {
                this.data = res.results;
            });
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
        },
    };
</script>