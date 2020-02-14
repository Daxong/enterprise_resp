<template>
    <a-row class="content-repo">
        <a-col :span="15">
            <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">
                <a-row type="flex" justify="space-around">
                    <a-col :span="22">
                        <a-input-search placeholder="输入企业名称" @search="onSearch" enterButton="搜索" size="large"/>
                    </a-col>
                </a-row>
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
                    <div class="files-menu">
                        <a-tooltip placement="top" title="上传附件" :getPopupContainer="getPopupContainer">
                            <a-icon type="plus-square" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px',marginLeft: '4px' }" @click="() => setModal1Visible(true)"/>
                        </a-tooltip>
                        <a-tooltip placement="top" title="删除附件" :getPopupContainer="getPopupContainer">
                            <a-icon type="minus-square" :style="{ fontSize: '22px', color: '#08c',marginTop: '4px',marginLeft: '4px' }" />
                        </a-tooltip>
                    </div>
                    <a-list class="loadmore-list" itemLayout="horizontal" :dataSource="filedata">
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
                <div class="timeline-menu">

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

                    <!-- 维护记录时间轴 -->
                    <div class="timeline">
                        <a-timeline mode="alternate">
                            <a-timeline-item>
                                <a-row>
                                    <a-col>Create a services site</a-col>
                                </a-row>
                                <a-row>
                                    <a-col>2015-09-01</a-col>
                                </a-row>
                            </a-timeline-item>
                            <a-timeline-item color="green">
                                <a-row>
                                    <a-col>Solve initial network problems</a-col>
                                </a-row>
                                <a-row>
                                    <a-col>2015-09-01</a-col>
                                </a-row>
                            </a-timeline-item>
                            <a-timeline-item>
                                <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
                                <a-row>
                                    <a-col>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                        beatae vitae dicta sunt explicabo.
                                    </a-col>
                                </a-row>
                                <a-row>
                                    <a-col>2015-09-01</a-col>
                                </a-row>
                            </a-timeline-item>
                            <a-timeline-item color="red">
                                <a-row>
                                    <a-col>
                                        Network problems being solved
                                    </a-col>
                                </a-row>
                                <a-row>
                                    <a-col>2015-09-01</a-col>
                                </a-row>
                            </a-timeline-item>
                            <a-timeline-item>
                                <a-row>
                                    <a-col>
                                        Create a services site
                                    </a-col>
                                </a-row>
                                <a-row>
                                    <a-col>2015-09-01</a-col>
                                </a-row>
                            </a-timeline-item>
                            <a-timeline-item>
                                <a-icon slot="dot" type="clock-circle-o" style="font-size: 16px;" />
                                <a-row>
                                    <a-col>
                                        Technical testing
                                    </a-col>
                                </a-row>
                                <a-row>
                                    <a-col>2015-09-01</a-col>
                                </a-row>
                            </a-timeline-item>
                        </a-timeline>
                    </div>

                </div>
            </div>
        </a-col>
    </a-row>
</template>

<style scoped>
    .content-repo {
        height: 100%;
    }
    /*.cpy-list{*/
    /*    height: 125px;*/
    /*    background: rgba(240,242,245,1);*/
    /*    margin: 10px 0 10px 0;*/
    /*    border-radius: 4px;*/
    /*}*/
    .files{
        height: 200px;
        width: 100%;
        /*background-color: #42b983;*/
        border-radius: 4px;
    }
    .files-menu {
        height: 30px;
        width: 100%;
        background-color: rgba(240,242,245,1);;
        border-radius: 4px;
    }
    .timeline-menu{
        height: 430px;
        /*background-color: #42b983;*/
        border-radius: 4px;
        position: relative;
    }
    .timeline{
        /*border: 1px solid #e8e8e8;*/
        border-radius: 4px;
        overflow: auto;
        padding: 8px 10px;
        height: 400px;
    }
    .timeline-add{
        height: 30px;
        width: 100%;
        background-color: rgba(240,242,245,1);;
        border-radius: 4px;
    }
    .ant-modal-body {
        padding-bottom: 30px;
    }

    /*.infinite-container {*/
    /*    !*border: 1px solid #e8e8e8;*!*/
    /*    border-radius: 4px;*/
    /*    overflow: auto;*/
    /*    padding: 8px 10px;*/
    /*    height: 300px;*/
    /*    background-color: #fff;*/

    /*}*/
    /*.loading-container {*/
    /*    position: absolute;*/
    /*    bottom: 40px;*/
    /*    width: 100%;*/
    /*    text-align: center;*/
    /*}*/

</style>

<script>
    // //通知伪消息
    // import reqwest from 'reqwest';
    // import infiniteScroll from 'vue-infinite-scroll';
    // const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

    export default {
        name: "index",
        // directives: { infiniteScroll },
        data() {
            return {
                modal1Visible: false,
                loading: true,

            };
        },
        methods: {

        },
    };
</script>