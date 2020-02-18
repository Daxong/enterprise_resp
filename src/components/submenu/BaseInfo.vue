<template>
    <div>
        <a-row type="flex" justify="space-around">
            <a-col :span="22">
                <table class="ntable noHover tdhover" style="margin-bottom: 0px;">
                    <thead>
                    <tr class="noHover">
                        <td class="tb-key">法定代表人信息</td>
                        <td class="tb-key">企业关联图谱</td>
                        <td class="tb-key">股权结构图</td>
                    </tr>
                    </thead>
                    <tbody class="noHover">
                    <tr>
                        <td height="180" style="width: 30%;">
                            <div>
                                <div style="height: 108px; width: 210px; padding-top: 20px; overflow: hidden; margin: 0px auto;">
                                    <div id="logoColor" class="logoColor" style="background-color: rgb(239, 152, 152);">陈</div>
                                    <div style="max-width: 235px; float: left;">
                                        <a href="#" class="link-oper operName">陈学军</a>
                                        <a href="#" target="_blank" class="link-oper-count">他关联 16 家企业 &gt;</a>
                                    </div>
                                </div>
                                <div style="margin-left: -5px; text-align: center;">
                                    <button type="button" class="el-button el-button--primary el-button--small"><!----><!---->
                                        <span>查看详情</span>
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td style="width: 35%;">
                            <div style="height: 108px; text-align: center; cursor: pointer;">
                                <a id="showTupu1"><img :src="relationshipImg" style="width: 263px;"></a>
                            </div>
                            <div class="ba-table-base" style="text-align: center;">
                                <button type="button" class="el-button el-button--primary el-button--small" id="showTupu1"><!----><!----><span>查看详情</span></button>
                            </div>
                        </td>
                        <td class="guquan-static-td" style="width: 35%;">
                            <div style="text-align: center; display: none;">
                                <img :src="relationshipImg" style="width: 100px;">
<!--                                <p style="font-size: 12px; color: rgb(143, 147, 153); margin-top: 16px;">没有找到相关数据</p>-->
                            </div>
                            <div style="height: 108px; width: 310px; overflow: hidden; margin: 0px auto; cursor: pointer;">
                                <div id="guquanStatic">
                                    <svg width="325" height="480"><g transform="translate(12,22) scale(0.8)"><path class="link" fill="none" stroke-width="0.5px" stroke="#80c3a8" d="M0,0C10,0 10,55 20,55" style="stroke: rgb(254, 81, 81);"></path><path class="link" fill="none" stroke-width="0.5px" stroke="#80c3a8" d="M0,0C10,0 10,110 20,110"></path><path class="link" fill="none" stroke-width="0.5px" stroke="#80c3a8" d="M0,0C10,0 10,165 20,165"></path><path class="link" fill="none" stroke-width="0.5px" stroke="#80c3a8" d="M0,0C10,0 10,220 20,220"></path><path class="link" fill="none" stroke-width="0.5px" stroke="#80c3a8" d="M0,0C10,0 10,275 20,275"></path><g class="node" transform="translate(0,0)" style="opacity: 1;"><rect y="-25" height="50" width="335" fill="#ffffff" fill-opacity="0" stroke-width="0.5" style="stroke: rgb(153, 153, 153);"></rect><rect y="-25" height="50" width="5" style="fill: rgb(18, 139, 237); fill-opacity: 1;"></rect><text dy="3.5" dx="30.5" fill="#333333" style="font-size: 12px; font-weight: bold;">无锡威孚高科技集团股份有限公司</text><text dy="15.5" dx="305" fill="#128bed" style="font-size: 12px; cursor: pointer;"></text><text dy="20.5" dx="30.5" fill="#666666" style="font: 11px sans-serif;"></text><text dy="20.5" dx="95.5" fill="#ff7e00" style="font: 11px sans-serif;"></text><text dy="20.5" dx="150.5" fill="#666666" style="font: 11px sans-serif;"></text><text dy="20.5" dx="215.5" fill="#ff7e00" style="font: 11px sans-serif;"></text><path d="M7 -2 H17 V0 H7 Z" fill="#bbbbbb"></path><circle cx="12" cy="-1" r="6" fill="none" stroke="#999999" stroke-width="0.5"></circle></g><g class="node" transform="translate(20,55)" style="opacity: 1;"><rect y="-15" height="50" width="335" fill="#ffffff" fill-opacity="0" stroke-width="0.5" style="stroke: rgb(153, 153, 153);"></rect><rect y="-15" height="50" width="5" style="fill: rgb(254, 81, 81); fill-opacity: 1;"></rect><text dy="3.5" dx="30.5" fill="#333333" style="font-size: 12px; font-weight: bold;">A股</text><text dy="15.5" dx="305" fill="#128bed" style="font-size: 12px; cursor: pointer;"></text><text dy="20.5" dx="30.5" fill="#666666" style="font: 11px sans-serif;">股权比例：</text><text dy="20.5" dx="95.5" fill="#ff7e00" style="font: 11px sans-serif;">45.24%</text><text dy="20.5" dx="150.5" fill="#666666" style="font: 11px sans-serif;">认缴金额：</text><text dy="20.5" dx="215.5" fill="#ff7e00" style="font: 11px sans-serif;">19200.00万元</text><path fill="#bbbbbb"></path><circle cx="12" cy="7" fill="none" stroke="#999999" stroke-width="0.5"></circle></g><g class="node" transform="translate(20,110)" style="opacity: 1;"><rect y="-15" height="50" width="335" fill="#ffffff" fill-opacity="0" stroke-width="0.5" style="stroke: rgb(153, 153, 153);"></rect><rect y="-15" height="50" width="5" style="fill: rgb(74, 206, 177); fill-opacity: 1;"></rect><text dy="3.5" dx="30.5" fill="#333333" style="font-size: 12px; font-weight: bold;">国有法人股</text><text dy="15.5" dx="305" fill="#128bed" style="font-size: 12px; cursor: pointer;"></text><text dy="20.5" dx="30.5" fill="#666666" style="font: 11px sans-serif;">股权比例：</text><text dy="20.5" dx="95.5" fill="#ff7e00" style="font: 11px sans-serif;">28.65%</text><text dy="20.5" dx="150.5" fill="#666666" style="font: 11px sans-serif;">认缴金额：</text><text dy="20.5" dx="215.5" fill="#ff7e00" style="font: 11px sans-serif;">12156.61万元</text><path fill="#bbbbbb"></path><circle cx="12" cy="7" fill="none" stroke="#999999" stroke-width="0.5"></circle></g><g class="node" transform="translate(20,165)" style="opacity: 1;"><rect y="-15" height="50" width="335" fill="#ffffff" fill-opacity="0" stroke-width="0.5" style="stroke: rgb(153, 153, 153);"></rect><rect y="-15" height="50" width="5" style="fill: rgb(74, 206, 177); fill-opacity: 1;"></rect><text dy="3.5" dx="30.5" fill="#333333" style="font-size: 12px; font-weight: bold;">B股</text><text dy="15.5" dx="305" fill="#128bed" style="font-size: 12px; cursor: pointer;"></text><text dy="20.5" dx="30.5" fill="#666666" style="font: 11px sans-serif;">股权比例：</text><text dy="20.5" dx="95.5" fill="#ff7e00" style="font: 11px sans-serif;">20.83%</text><text dy="20.5" dx="150.5" fill="#666666" style="font: 11px sans-serif;">认缴金额：</text><text dy="20.5" dx="215.5" fill="#ff7e00" style="font: 11px sans-serif;">8840.00万元</text><path fill="#bbbbbb"></path><circle cx="12" cy="7" fill="none" stroke="#999999" stroke-width="0.5"></circle></g><g class="node" transform="translate(20,220)" style="opacity: 1;"><rect y="-15" height="50" width="335" fill="#ffffff" fill-opacity="0" stroke-width="0.5" style="stroke: rgb(153, 153, 153);"></rect><rect y="-15" height="50" width="5" style="fill: rgb(74, 206, 177); fill-opacity: 1;"></rect><text dy="3.5" dx="30.5" fill="#333333" style="font-size: 12px; font-weight: bold;">内部职工股</text><text dy="15.5" dx="305" fill="#128bed" style="font-size: 12px; cursor: pointer;"></text><text dy="20.5" dx="30.5" fill="#666666" style="font: 11px sans-serif;">股权比例：</text><text dy="20.5" dx="95.5" fill="#ff7e00" style="font: 11px sans-serif;">2.83%</text><text dy="20.5" dx="150.5" fill="#666666" style="font: 11px sans-serif;">认缴金额：</text><text dy="20.5" dx="215.5" fill="#ff7e00" style="font: 11px sans-serif;">1200.00万元</text><path fill="#bbbbbb"></path><circle cx="12" cy="7" fill="none" stroke="#999999" stroke-width="0.5"></circle></g><g class="node" transform="translate(20,275)" style="opacity: 1;"><rect y="-15" height="50" width="335" fill="#ffffff" fill-opacity="0" stroke-width="0.5" style="stroke: rgb(153, 153, 153);"></rect><rect y="-15" height="50" width="5" style="fill: rgb(74, 206, 177); fill-opacity: 1;"></rect><text dy="3.5" dx="30.5" fill="#333333" style="font-size: 12px; font-weight: bold;">社会法人股</text><text dy="15.5" dx="305" fill="#128bed" style="font-size: 12px; cursor: pointer;"></text><text dy="20.5" dx="30.5" fill="#666666" style="font: 11px sans-serif;">股权比例：</text><text dy="20.5" dx="95.5" fill="#ff7e00" style="font: 11px sans-serif;">2.45%</text><text dy="20.5" dx="150.5" fill="#666666" style="font: 11px sans-serif;">认缴金额：</text><text dy="20.5" dx="215.5" fill="#ff7e00" style="font: 11px sans-serif;">1040.00万元</text><path fill="#bbbbbb"></path><circle cx="12" cy="7" fill="none" stroke="#999999" stroke-width="0.5"></circle></g></g></svg>
                                </div>
                            </div>
                            <div style="text-align: center;">
                                <button type="button" class="el-button el-button--primary el-button--small" id="guquanStaticBtn"><!----><!---->
                                    <span>查看详情</span>
                                </button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </a-col>
            <a-col :span="22">
                <div id="corpdetailId">工商信息
                    <table class="ntable noHover">
                        <tbody class="noHover">
                        <tr>
                            <td width="20%" class="tb-key" :style="{borderTopWidth: '0px'}">注册资本</td>
                            <td width="30%" class="tb-val" style="border-top-width: 0px;">100895.057万元人民币</td>
                            <td width="20%" class="tb-key" style="border-top-width: 0px;">实缴资本</td>
                            <td width="30%" class="tb-val" style="border-top-width: 0px;">100895.057万元人民币</td>
                        </tr>
                        <tr>
                            <td class="tb-key">经营状态</td>
                            <td class="tb-val">存续（在营、开业、在册）</td>
                            <td width="18%" class="tb-key">成立日期</td>
                            <td class="tb-val">1988-10-27</td>
                        </tr>
                        <tr>
                            <td class="tb-key">注册号</td>
                            <td class="tb-val">320200000014926</td>
                            <td width="15%" class="tb-key">组织机构代码</td>
                            <td class="tb-val">25045696-7</td>
                        </tr>
                        <tr>
                            <td class="tb-key">纳税人识别号</td>
                            <td class="tb-val">91320200250456967N</td>
                            <td class="tb-key">统一社会信用代码</td>
                            <td class="tb-val">91320200250456967N</td>
                        </tr>
                        <tr>
                            <td class="tb-key">企业类型</td>
                            <td class="tb-val">股份有限公司(中外合资、上市)</td>
                            <td class="tb-key">所属行业</td>
                            <td class="tb-val">制造业</td>
                        </tr>
                        <tr>
                            <td class="tb-key">核准日期</td>
                            <td class="tb-val" style="max-width: 301px;">2019-06-12</td>
                            <td class="tb-key">登记机关</td>
                            <td class="tb-val">无锡市市场监督管理局</td>
                        </tr>
                        <tr>
                            <td class="tb-key">所属地区</td>
                            <td class="tb-val" style="max-width: 301px;">江苏省</td>
                            <td class="tb-key">英文名</td>
                            <td class="tb-val">Weifu High-Technology Group Co.,Ltd.</td>
                        </tr>
                        <tr>
                            <td class="tb-key">曾用名</td>
                            <td class="tb-val"><div><div>无锡威孚股份有限公司</div><div>无锡威孚高科技股份有限公司</div></div></td>
                            <td class="tb-key">参保人数</td>
                            <td class="tb-val">2525</td>
                        </tr>
                        <tr>
                            <td class="tb-key">人员规模</td>
                            <td class="tb-val"> 5000-9999人</td>
                            <td class="tb-key">营业期限</td>
                            <td class="tb-val"><span>1988-10-27</span> <span>至</span> <span>无固定期限</span></td>
                        </tr>
                        <tr>
                            <td class="tb-key">企业地址</td>
                            <td class="tb-val" colspan="3">
                                <span>无锡市新吴区华山路5号(生产经营地:1、无锡市新吴区华山路8号,2、无锡市新吴区长江路17号,3、无锡市新吴区锡协路139号,4、无锡市新吴区新华路13号)<a class="m-lc_a map">查看地图</a> <a href="customer/map-customer?keyNo=7b8f20e89c2e88229d9548494d0ba641" target="_blank" class="m-lc_a map">附近企业</a></span>
                            </td>
                        </tr>
                        <tr>
                            <td class="tb-key">经营范围</td>
                            <td class="tb-val" colspan="3">机械行业技术开发和咨询服务;内燃机燃油系统产品、燃油系统测试仪器和设备、汽车电子部件、汽车电器部件、非标设备、非标刀具、尾气后处理系统的制造;通用机械、五金交电、化工产品及原料(不含危险化学品)、汽车零部件、汽车(不含九座以下乘用车)的销售;内燃机维修)</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </a-col>

            <a-col :span="22">
                <div id="partnersId">股东信息
                    <a-table
                            :columns="partnersColumns"
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
        </a-row>
        <a-row type="flex" justify="space-around">
            <a-col :span="22">

                <a-row type="flex" justify="end">
                    <a-col :span="12">对外投资</a-col>
                    <a-col :span="4">
                        <a-select defaultValue="lucy" style="width: 120px" placeholder="注册资本">
                            <div slot="dropdownRender" slot-scope="menu">
                                <v-nodes :vnodes="menu" />
                                <a-divider style="margin: 4px 0;" />
                                <div style="padding: 8px; cursor: pointer;"><a-icon type="plus" /> Add item</div>
                            </div>
                            <a-select-option value="jack">Jack</a-select-option>
                            <a-select-option value="lucy">Lucy</a-select-option>
                        </a-select>

                    </a-col>
                    <a-col :span="4">
                        <a-select defaultValue="lucy" style="width: 120px" placeholder="投资比例">
                            <div slot="dropdownRender" slot-scope="menu">
                                <v-nodes :vnodes="menu" />
                                <a-divider style="margin: 4px 0;" />
                                <div style="padding: 8px; cursor: pointer;"><a-icon type="plus" /> Add item</div>
                            </div>
                            <a-select-option value="jack">Jack</a-select-option>
                            <a-select-option value="lucy">Lucy</a-select-option>
                        </a-select>

                    </a-col>

                    <a-col :span="4">
                        <a-select defaultValue="lucy" style="width: 120px" placeholder="全部状态">
                            <div slot="dropdownRender" slot-scope="menu">
                                <v-nodes :vnodes="menu" />
                                <a-divider style="margin: 4px 0;" />
                                <div style="padding: 8px; cursor: pointer;"><a-icon type="plus" /> Add item</div>
                            </div>
                            <a-select-option value="jack">Jack</a-select-option>
                            <a-select-option value="lucy">Lucy</a-select-option>
                        </a-select>

                    </a-col>
                </a-row>

            </a-col>

        </a-row>
        <a-row type="flex" justify="space-around">
            <a-col :span="22">
                <div id="companyInvestmentId">
                    <a-table
                            :columns="investmentColumns"
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
        </a-row>
        <a-row type="flex" justify="space-around">
            <a-col :span="22">
                <div id="HoldCompAreaId">控股企业
                    <a-table
                            :columns="holdCompColumns"
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
        </a-row>
        <a-row type="flex" justify="space-around">
            <a-col :span="22">
                <div id="employeesAreaId">主要人员
                    <a-table
                            :columns="employeeColumns"
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
        </a-row>

        <a-row type="flex" justify="space-around">
            <a-col :span="22">
                <div id="branchListAreaId">分支机构
                    <a-table
                            :columns="branchListColumns"
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
        </a-row>

        <a-row type="flex" justify="space-around">
            <a-col :span="22">
                <div id="changeListAreaId">变更记录
                    <a-table
                            :columns="changeListColumns"
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
        </a-row>
        <a-row type="flex" justify="space-around">
            <a-col :span="22">
                企业简介
                <a-card style="">
                    <p>无锡威孚高科技集团股份有限公司，是业绩优良的A、B股上市公司，中国企业500强。目前公司拥有10家全资和控股子公司，4家中外合资企业，总资产67.6亿元，员工五千余人，产品覆盖内燃机进气系统、内燃机燃油喷射系统、机动车尾气后处理系统。公司产品为国内各大汽车厂和柴油机厂配套，并远销美洲、中东、东南亚等地区。公司拥有雄厚的研发力量、先进的制造技术和完善的销售服务网络，并坚持不懈地致力于技术创新、研发实力的提升和服务体系的完善，集“国家级企业技术中心”、“博士后科研工作站”、“国家高技术研究发展计划成果产业化基地”于一身，主要技经指标连续30余年保持国内同行业领先地位，主导产品“锡字牌油泵油嘴”被评为“中国名牌”，“锡字牌”商标被评为“中国驰名商标”。 目前，威孚公司正跨入一个崭新的发展阶段。依托50余年发展所积累的技术、制造、采购、营销和管理优势，威孚人正以国际化的视野，创造性地集成优势资源，以高品质的产品与服务，满足客户高标准需求，以优秀的员工团队，打造中国汽车核心零部件领导品牌，向着“汽车（动力工程）核心零部件国内领军者”战略新目标奋勇迈进。</p>
                </a-card>
            </a-col>
        </a-row>
        <a-row type="flex" justify="space-around">
            <a-col>
                <div id="benefitPersonId">受益所有人</div>

                <div id="headOfficeId">总公司</div>

                <div id="publicityInfoId">企业公示</div>

<!--                <div id="compInfoAreaId">企业简介</div>-->
            </a-col>
        </a-row>
    </div>

</template>

<script>
    import reqwest from 'reqwest';
    //股东信息
    const partnersColumns = [
        {
            title: '序号',
        },
        {
            title: '股东名称'
        },
        {
            title: '持股比例'
        },
        {
            title: '认缴出资额(万元)'
        },
        {
            title: '认缴出资日期'
        }

    ];
    //对外投资
    const investmentColumns = [
        {
            title: '序号',
        },
        {
            title: '被投资企业名称'
        },
        {
            title: '法定代表人'
        },
        {
            title: '注册资本'
        },
        {
            title: '投资比例'
        },
        {
            title: '投资数额'
        },
        {
            title: '成立日期'
        },
        {
            title: '状态'
        }

    ];
    //控股企业
    const holdCompColumns = [
        {
            title: '序号',
        },
        {
            title: '控股企业名称'
        },
        {
            title: '投资比例'
        },
        {
            title: '投资链'
        },


    ];
    //主要人员
    const employeeColumns = [
        {
            title: '序号',
        },
        {
            title: '姓名'
        },
        {
            title: '职务'
        }
    ];
    //分支机构
    const branchListColumns =[
        {
            title: '序号',
        },
        {
            title: '机构名称'
        },
        {
            title: '备注'
        }
    ];
    const changeListColumns = [
        {
            title: '序号',
        },
        {
            title: '变更日期'
        },
        {
            title: '变更项目'
        },
        {
            title: '变更前'
        },
        {
            title: '变更后'
        },
    ];
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            sorter: true,
            width: '20%',
            scopedSlots: { customRender: 'name' },
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            filters: [{ text: 'Male', value: 'male' }, { text: 'Female', value: 'female' }],
            width: '20%',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
    ];
    export default {
        name: "BaseInfo",
        data() {
            return {
                relationshipImg: require("@/assets/xiaocha_empty-425368f0.png"),
                //股东信息
                partnersColumns,
                //对外投资
                investmentColumns,
                //控股企业
                holdCompColumns,
                //主要人员
                employeeColumns,
                //分支机构
                branchListColumns,
                //变更记录
                changeListColumns,
                //股东信息伪数据
                data: [],
                pagination: {},
                loading: false,
                columns,
            }
        },
        mounted() {
            this.fetch();
        },
        methods: {
            //股东信息
            handleTableChange(pagination, filters, sorter) {
                // console.log(pagination);
                const pager = { ...this.pagination };
                pager.current = pagination.current;
                this.pagination = pager;
                this.fetch({
                    results: pagination.pageSize,
                    page: pagination.current,
                    sortField: sorter.field,
                    sortOrder: sorter.order,
                    ...filters,
                });
            },
            fetch(params = {}) {
                // console.log('params:', params);
                this.loading = true;
                reqwest({
                    url: 'https://randomuser.me/api',
                    method: 'get',
                    data: {
                        results: 3,
                        ...params,
                    },
                    type: 'json',
                }).then(data => {
                    const pagination = { ...this.pagination };
                    // Read total count from server
                    // pagination.total = data.totalCount;
                    pagination.total = 3;
                    this.loading = false;
                    this.data = data.results;
                    this.pagination = pagination;
                });
            },
        },
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
    .noHover{
        width: 100%;
        color: #606266;
        border: #eeeeee 1px solid;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-size: 13px;
        line-height: 16px;
        font-family: 微软雅黑, "Microsoft YaHei", PingFangSC-Regular, PingFangSC, HiraginoSansGB-W3, HiraginoSansGB, HelveticaNeue, Helvetica, Arial, ArialMT, "微软雅黑", "Microsoft YaHei";
    }
    .logoColor{
        color: white;
        font-size: 28px;
        float: left;
        width: 54px;
        height: 54px;
        line-height: 50px;
        border: 1px solid #f0f0f0;
        border-radius: 4px !important;
        text-align: center;
    }
    .link-oper{
        display: block;
        font-size: 20px;
        line-height: 22px;
        color: #000000;
        margin-left: 18px;
        margin-top: 6px;
        font-weight: 500;
        width: 136px;
    }
    .link-oper-count{
        display: block;
        font-size: 14px;
        margin-left: 18px;
        margin-top: 8px;
        color: #F5A623 !important;
    }
    .el-button{
        display: inline-block;
        line-height: 1;
        white-space: nowrap;
        cursor: pointer;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-color: #e5e5e5;
        color: #606266;
        -webkit-appearance: none;
        text-align: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        outline: none;
        margin: 0;
        -webkit-transition: .1s;
        -o-transition: .1s;
        transition: .1s;
        font-weight: 500;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        padding: 12px 20px;
        font-size: 14px;
        border-radius: 4px;
    }
    .el-button--primary{
        color: #fff;
        background-color: #128bed;
        border-color: #128bed;
    }
    .el-button--small{
        padding: 9px 15px;
        font-size: 12px;
        border-radius: 3px;
    }
    .el-button--small{
        padding-top: 0;
        padding-bottom: 0;
        height: 30px;
        line-height: 28px;
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
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
</style>