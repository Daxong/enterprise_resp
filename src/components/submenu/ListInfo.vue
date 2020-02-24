<template>
    <div>
    <a-row type="flex" justify="space-around">
        <a-col :span="22">
            <div id="stockInfoId">股票信息
                <table class="ntable ntable-odd">
                    <tbody>
                    <tr>
                        <td class="tb-key" width="20%">上市类型</td><td class="tb-val" width="30%">深交所中小板A股</td>
                        <td class="tb-key" width="20%">更新时间</td><td class="tb-val" width="30%">2020-02-18 16:46:19</td>
                    </tr>
                    <tr>
                        <td class="tb-key" width="20%">总市值</td><td class="tb-val" width="30%">322.62亿</td>
                        <td class="tb-key" width="20%">市净率</td><td class="tb-val" width="30%">3.28</td>
                    </tr>
                    <tr>
                        <td class="tb-key" width="20%">流通市值</td><td class="tb-val" width="30%">213.90亿</td>
                        <td class="tb-key" width="20%">市盈率</td><td class="tb-val" width="30%">80.11</td>
                    </tr>
                    <tr>
                        <td class="tb-key" width="20%">成交额</td><td class="tb-val" width="30%">25.11亿</td>
                        <td class="tb-key" width="20%">成交量</td><td class="tb-val" width="30%">332.92万</td>
                    </tr>
                    <tr>
                        <td class="tb-key" width="20%">涨停</td><td class="tb-val" width="30%">-</td>
                        <td class="tb-key" width="20%">跌停</td><td class="tb-val" width="30%">-</td>
                    </tr>
                    <tr>
                        <td class="tb-key" width="20%">上市日期</td><td class="tb-val" width="30%">2010-04-09</td>
                        <td class="tb-key" width="20%">网上发行日期</td><td class="tb-val" width="30%">2010-03-29</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </a-col>
        <a-col :span="22">
            <div id="baseInfoId">基本信息
                <table id="marketBaseInfoDataId" class="ntable ntable-odd">
                    <tbody>
                    <tr>
                        <td class="tb-key">企业全称</td><td class="tb-val" colspan="3">北京大北农科技集团股份有限公司</td>
                    </tr>
                    <tr>
                        <td class="tb-key">英文名称</td><td class="tb-val" colspan="3">Beijing Dabeinong Technology Group Co.,Ltd</td>
                    </tr>
                    <tr>
                        <td class="tb-key" width="20%">上市曾用名</td><td class="tb-val" width="30%">--</td>
                        <td class="tb-key" width="20%">工商登记</td><td class="tb-val" width="30%">91110000102006956C</td>
                    </tr>
                    <tr>
                        <td class="tb-key" width="20%">注册资本(元)</td><td class="tb-val" width="30%">42.0亿</td>
                        <td class="tb-key" width="20%">所属行业</td><td class="tb-val" width="30%">农牧饲渔</td>
                    </tr>
                    <tr>
                        <td class="tb-key" width="20%">雇员人数</td><td class="tb-val" width="30%">17230</td>
                        <td class="tb-key" width="20%">管理人员人数</td><td class="tb-val" width="30%">13</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </a-col>
        <a-col :span="22">
            <div id="introdSecurityId">证券简介
                <table id="marketIntrodSecurityDataId" class="ntable ntable-odd">
                    <tbody>
                    <tr>
                        <td class="tb" width="20%">A股代码</td><td class="" width="30%">002385</td>
                        <td class="tb" width="20%">A股简称</td><td class="" width="30%">大北农</td>
                    </tr>
                    <tr>
                        <td class="tb" width="20%">B股代码</td><td class="" width="30%">--</td>
                        <td class="tb" width="20%">B股简称</td><td class="" width="30%">--</td>
                    </tr>
                    <tr>
                        <td class="tb" width="20%">H股代码</td><td class="" width="30%">--</td>
                        <td class="tb" width="20%">H股简称</td><td class="" width="30%">--</td>
                    </tr>
                    <tr>
                        <td class="tb" width="20%">证券类别</td><td class="" width="30%">深交所中小板A股</td>
                        <td class="tb" width="20%">律师事务所</td><td class="" width="30%">北京市天银律师事务所</td>
                    </tr>
                    <tr>
                        <td class="tb">会计师事务所</td><td class="" colspan="3">信永中和会计师事务所(特殊普通合伙)</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </a-col>
        <a-col :span="22">
            <idv id="coreThemeId">核心题材
                <a-card style="">
                    <p>要点1: 所属板块 MSCI中国 MSCI中盘 北京板块 标普概念 富时概念 机构重仓 农牧饲渔 农业种植 人造肉 融资融券 深成500 深股通 乡村振兴 移动支付 证金持股 中证500 猪肉概念 转基因</p>
                    <p>要点2: 经营范围 经依法登记,公司的经营范围:销售兽药(严禁经营兽用预防用生物制品);饲料加工(限分公司经营)。技术开发、技术服务、技术咨询、技术转让;畜牧和兽医科学研究与试验发展;动物营养保健品的技术开发;农业信息技术的开发、服务;销售饲料;出口本企业生产的饲料、动物营养保健品;进口本企业生产、科研所需的原辅材料、机械设备、仪表仪器及零配件;第二类增值电信业务中的信息服务业务(仅限互联网信息服务)。</p>
                    <p>要点3: 畜禽饲料、兽药疫苗、种猪与作物种子、农药化肥及农业互联网与金融服务 报告期内,公司主营业务未发生变化,主要为养殖户和种植户提供高附加值的产品与服务,围绕这个目标,公司提供的产品主要包括畜禽饲料、兽药疫苗、种猪与作物种子、农药化肥及农业互联网与金融服务等。公司主营业务收入主要来源于饲料业务。2015年度,饲料收入占主营业务收入的比重为90.99%,种子业务收入占主营业务收入的比重为4.23%,兽药疫苗等动保业务收入占主营业务收入的比重为2.11%,生猪销售业务收入占主营业务收入的比重为1.76%。</p>
                </a-card>
            </idv>
        </a-col>
        <a-col :span="22">
            <div id="shareholdersId">十大股东
                <a-table
                        :columns="shareholdersColumns"
                        :rowKey="record => record.login.uuid"
                        :dataSource="data"
                        :pagination="pagination"
                        :loading="loading"
                        @change="handleTableChange"
                >
                    <template slot="name" slot-scope="name">
                        {{name.first}} {{name.last}}
                    </template>
                </a-table>
            </div>
        </a-col>
        <a-col :span="22">
            <div id="equityHoldingsId">参股控股企业
                <a-table
                        :columns="equityHoldingsColumns"
                        :rowKey="record => record.login.uuid"
                        :dataSource="data"
                        :pagination="pagination"
                        :loading="loading"
                        @change="handleTableChange"
                >
                    <template slot="name" slot-scope="name">
                        {{name.first}} {{name.last}}
                    </template>
                </a-table>
            </div>
        </a-col>
        <a-col :span="22">
            <div id="dongshihuiId">
                董事会
                <a-table
                        :columns="dongshihuiColumns"
                        :rowKey="record => record.login.uuid"
                        :dataSource="data"
                        :pagination="pagination"
                        :loading="loading"
                        @change="handleTableChange"
                >
                    <template slot="name" slot-scope="name">
                        {{name.first}} {{name.last}}
                    </template>
                </a-table>
            </div>
        </a-col>
        <a-col :span="22">
            <div id="jianshihuiId">
                监事会
                <a-table
                        :columns="jianshihuiColumns"
                        :rowKey="record => record.login.uuid"
                        :dataSource="data"
                        :pagination="pagination"
                        :loading="loading"
                        @change="handleTableChange"
                >
                    <template slot="name" slot-scope="name">
                        {{name.first}} {{name.last}}
                    </template>
                </a-table>
            </div>
        </a-col>
        <a-col :span="22">
            <div id="gaoguanId">高管
                <a-table
                        :columns="jianshihuiColumns"
                        :rowKey="record => record.login.uuid"
                        :dataSource="data"
                        :pagination="pagination"
                        :loading="loading"
                        @change="handleTableChange"
                >
                    <template slot="name" slot-scope="name">
                        {{name.first}} {{name.last}}
                    </template>
                </a-table>
            </div>
        </a-col>
        <a-col :span="22">
            重要人员
            <table id="importantPersonId" class="ntable ntable-odd">
                <tbody>
                <tr>
                    <td class="tb" width="20%">总经理</td><td class="" width="30%">张立忠</td>
                    <td class="tb" width="20%">法人代表	</td><td class="" width="30%">邵根伙</td>
                </tr>
                <tr>
                    <td class="tb" width="20%">董秘</td><td class="" width="30%">陈忠恒</td>
                    <td class="tb" width="20%">董事长</td><td class="" width="30%">邵根伙</td>
                </tr>
                <tr>
                    <td class="tb" width="20%">证券事务代表</td><td class="" width="30%">雷泽丽</td>
                    <td class="tb" width="20%">独立董事</td><td class="" width="30%">冯玉军,陈磊</td>
                </tr>
                </tbody>
            </table>
        </a-col>
        <a-col :span="22">联系信息
            <table id="contactInfoId" class="ntable ntable-odd">
                <tbody>
                <tr>
                    <td class="tb" width="20%">联系电话</td><td class="" width="30%">010-82856450</td>
                    <td class="tb" width="20%">电子邮箱</td><td class="" width="30%"><a class="_clickContent" href="mailto:cwbgs@dbn.com.cn">cwbgs@dbn.com.cn</a></td>
                </tr>
                <tr>
                    <td class="tb" width="20%">传真</td><td class="" width="30%">010-82856430</td>
                    <td class="tb" width="20%">企业网址</td><td class="" width="30%"><a class="_clickContent" href="http://www.dbn.com.cn" target="_blank">www.dbn.com.cn</a></td>
                </tr>
                <tr>
                    <td class="tb" width="20%">区域</td><td class="" width="30%">北京</td>
                    <td class="tb" width="20%">邮政编码</td><td class="" width="30%">100080</td>
                </tr>
                <tr>
                    <td class="tb">办公地址</td><td class="" colspan="3"><a class="_clickContent" onclick="showDialogBaiduMap('北京市海淀区中关村大街27号中关村大厦14层')">北京市海淀区中关村大街27号中关村大厦14层</a></td>
                </tr>
                <tr>
                    <td class="tb">注册地址</td><td class="" colspan="3">北京市海淀区中关村大街27号中关村大厦14层</td>
                </tr>
                </tbody>
            </table>
        </a-col>
        <a-col :span="22">财务状况
            <div class="market-finance-box">
                <div class="left">
                    <div class="market-finance-celi active">总收入(亿元)</div>
                    <div class="market-finance-celi">净利润(亿元)</div>
                    <div class="market-finance-celi">总资产(亿元)</div>
                    <div class="market-finance-celi">净资产(亿元)</div>
                    <div class="market-finance-celi">净利率(%)</div>
                    <div class="market-finance-celi">毛利率(%)</div>
                </div>
                <div class="right">
                    <div id="finance-chart" _echarts_instance_="ec_1582171719214" style="-webkit-tap-highlight-color: transparent; user-select: none;">
                        <div style="position: relative; width: 917px; height: 264px; padding: 0px; margin: 0px; border-width: 0px; cursor: default;">
                            图表
                        </div>
                    </div>
                </div>
            </div>
        </a-col>

<!--        <a-col :span="22">-->
<!--            <div id="exterGuaranteeId">对外担保</div>-->
<!--            <div id="litigationId">诉讼仲裁</div>-->
<!--            <div id="marketViolationId">违规</div>-->
<!--            <div id="marketIssuanceRelatedId">发型相关</div>-->
<!--            <div id="marketProspectusId">招股书</div>-->
<!--        </a-col>-->
    </a-row>
    <a-row type="flex" justify="space-around">
        <a-col :span="22">主要指标</a-col>
        <a-col :span="14">
            <a-table
                    :columns="mainIndexColumns"
                    :rowKey="record => record.login.uuid"
                    :dataSource="data"
                    :pagination="pagination"
                    :loading="loading"
                    @change="handleTableChange"
            >
                <template slot="name" slot-scope="name">
                    {{name.first}} {{name.last}}
                </template>
            </a-table>
        </a-col>
        <a-col :span="8">图表</a-col>
    </a-row>

    <a-row type="flex" justify="space-around">
        <a-col :span="22" id="exterGuaranteeId">对外担保</a-col>
        <a-col :span="22">
            <a-table
                    :columns="exterGuaranteeColumns"
                    :rowKey="record => record.login.uuid"
                    :dataSource="data"
                    :pagination="pagination"
                    :loading="loading"
                    @change="handleTableChange"
            >
                <template slot="name" slot-scope="name">
                    {{name.first}} {{name.last}}
                </template>
            </a-table>
        </a-col>
    </a-row>
    <a-row type="flex" justify="space-around">
        <a-col :span="22">诉讼仲裁</a-col>
        <a-col :span="22">
            <a-table
                    :columns="litigationColumns"
                    :rowKey="record => record.login.uuid"
                    :dataSource="data"
                    :pagination="pagination"
                    :loading="loading"
                    @change="handleTableChange"
            >
                <template slot="name" slot-scope="name">
                    {{name.first}} {{name.last}}
                </template>
            </a-table>
        </a-col>
    </a-row>
    <a-row type="flex" justify="space-around">
        <a-col :span="22">发行相关</a-col>
        <a-col :span="22">
            <table id="marketIssuanceRelatedDataId" class="ntable ntable-odd">
                <tbody>
                <tr>
                    <td class="tb" width="20%">成立日期</td><td class="" width="30%">1994-10-18</td>
                    <td class="tb" width="20%">上市日期</td><td class="" width="30%">2010-04-09</td>
                </tr>
                <tr>
                    <td class="tb" width="20%">发行市盈率(倍)</td><td class="" width="30%">53.03</td>
                    <td class="tb" width="20%">网上发行日期</td><td class="" width="30%">2010-03-29</td>
                </tr>
                <tr>
                    <td class="tb" width="20%">发行方式</td><td class="" width="30%">网下询价配售</td>
                    <td class="tb" width="20%">每股面值(元)</td><td class="" width="30%">1.00</td>
                </tr>
                <tr>
                    <td class="tb" width="20%">发行量(股)</td><td class="" width="30%">6080万</td>
                    <td class="tb" width="20%">每股发行价(元)</td><td class="" width="30%">35.00</td>
                </tr>
                <tr>
                    <td class="tb" width="20%">发行费用(元)</td><td class="" width="30%">1.10亿</td>
                    <td class="tb" width="20%">发行总市值(元)</td><td class="" width="30%">21.3亿</td>
                </tr>
                <tr>
                    <td class="tb" width="20%">募集资金净额(元)</td><td class="" width="30%">20.2亿</td>
                    <td class="tb" width="20%">首日开盘价(元)</td><td class="" width="30%">60.00</td>
                </tr>
                <tr>
                    <td class="tb" width="20%">首日换手率</td><td class="" width="30%">72.22%</td>
                    <td class="tb" width="20%">首日收盘价(元)</td><td class="" width="30%">60.27</td>
                </tr>
                <tr>
                    <td class="tb" width="20%">网下配售中签率</td><td class="" width="30%">0.94%</td>
                    <td class="tb" width="20%">定价中签率</td><td class="" width="30%">0.81%</td>
                </tr>
                </tbody>
            </table>
        </a-col>
    </a-row>
        <a-row type="flex" justify="space-around">
            <a-col :span="22">招股书</a-col>
            <a-col :span="22">
                <a-table
                        :columns="prospectusColumns"
                        :rowKey="record => record.login.uuid"
                        :dataSource="data"
                        :pagination="pagination"
                        :loading="loading"
                        @change="handleTableChange"
                >
                    <template slot="name" slot-scope="name">
                        {{name.first}} {{name.last}}
                    </template>
                </a-table>
            </a-col>
        </a-row>
    </div>
</template>

<script>
    const shareholdersColumns = [
        {
            title: '序号',
        },
        {
            title: '股东名称'
        },
        {
            title: '股份类型'
        },
        {
            title: '持股数(股)'
        },
        {
            title: '持股比例'
        },
        {
            title: '最终受益股份'
        },
        {
            title: '增减股'
        },
        {
            title: '变动比例'
        },
    ]
    const equityHoldingsColumns = [
        {
            title: '序号',
        },
        {
            title: '企业名称'
        },
        {
            title: '参股关系'
        },
        {
            title: '参股比例'
        },
        {
            title: '投资金额'
        },
        {
            title: '被参股公司净利润'
        },
        {
            title: '是否合并报表'
        },
        {
            title: '主营业务'
        },
    ]
    const dongshihuiColumns =[
        {
            title: '序号',
        },
        {
            title: '姓名'
        },
        {
            title: '性别'
        },
        {
            title: '年龄'
        },
        {
            title: '学历'
        },
        {
            title: '职务'
        },
        {
            title: '持股数'
        },
        {
            title: '薪酬'
        },
        {
            title: '本届任期'
        },
        {
            title: '公告日期'
        },
        {
            title: '个人简介'
        },
    ]
    const jianshihuiColumns =[
        {
            title: '序号',
        },
        {
            title: '姓名'
        },
        {
            title: '性别'
        },
        {
            title: '年龄'
        },
        {
            title: '学历'
        },
        {
            title: '职务'
        },
        {
            title: '持股数'
        },
        {
            title: '薪酬'
        },
        {
            title: '本届任期'
        },
        {
            title: '公告日期'
        },
        {
            title: '个人简介'
        },
    ]
    const mainIndexColumns = [
        {
            title: '指标'
        },
        {
            title: '2016'
        },
        {
            title: '2017'
        },
        {
            title: '2018'
        },
        {
            title: '2019'
        }
    ]
    const exterGuaranteeColumns = [
        {
            title: '序号'
        },
        {
            title: '被担保方'
        },
        {
            title: '担保方'
        },
        {
            title: '担保方式'
        },
        {
            title: '担保金额'
        },
        {
            title: '公告日期'
        },
        {
            title: '内容'
        }

    ]
    const litigationColumns = [
        {
            title: '序号'
        },
        {
            title: '案件名称'
        },
        {
            title: '原告方'
        },
        {
            title: '被告方'
        },
        {
            title: '诉讼类型'
        },
        {
            title: '公告日期'
        }
    ]
    const prospectusColumns = [
        {
            title: '序号'
        },
        {
            title: '名称'
        },
        {
            title: '内容'
        },
    ]
    export default {
        name: "ListInfo",
        data() {
            return {
                shareholdersColumns,
                equityHoldingsColumns,
                dongshihuiColumns,
                jianshihuiColumns,
                mainIndexColumns,
                exterGuaranteeColumns,
                litigationColumns,
                prospectusColumns
            }
        }
    }
</script>

<style scoped>
    .ntable {
        width: 100%;
        /*margin: 10px;*/
        color: #606266;
        border: #eeeeee 1px solid;
        box-sizing: border-box;
        font-size: 13px;
        line-height: 16px;
        font-family:微软雅黑, "Microsoft YaHei", PingFangSC-Regular, PingFangSC, HiraginoSansGB-W3, HiraginoSansGB, HelveticaNeue, Helvetica, Arial, ArialMT, "微软雅黑", "Microsoft YaHei";
    }
    .tb-key{
        background: #f7f7fa;
        color: #222;
        /*padding: 6px 6px;*/
        padding: 10px;
        border: #eeeeee 1px solid;
        word-break: break-all;
        font-size: 13px;
        line-height: 16px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .tb-val{
        color: #222;
        padding: 10px;
        border: #eeeeee 1px solid;
        word-break: break-all;
        font-size: 13px;
        line-height: 16px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
    .market-finance-box {
        width: 100%;
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
    }
    .market-finance-box .left {
        width: 131px;
        height: 264px;
        border-left: 1px solid #eee;
        border-right: 1px solid #eee;
        border-bottom: 1px solid #eee;
        margin-right: 5px;
    }
    .market-finance-box .right{
        -webkit-box-flex: 1.0;
        -moz-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1;
        height: 264px;
        width: calc(100% - 146px);
        border: 1px solid #eee;
    }
    .market-finance-celi {
        height: 44px;
        width: 130px;
        line-height: 44px;
        border-top: 1px solid #eee;
        padding-left: 15px;
        text-align: left;
    }
    .market-finance-celi active{
        color: #128BED;
        background: #F1F9FC;
    }
</style>