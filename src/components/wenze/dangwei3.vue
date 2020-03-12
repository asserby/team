<template>
	<div class="zuzhi">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">党委的主体责任</a>
				</div>
				<div class="page-img"><img src="../../assets/image/qian.png" /></div>
				<div class="btn-group" v-on:click="show = !show">
					<button>
						关闭操作
						<span class="caret"></span>
					</button>
					<ul class="dropdown-menu" v-show="show">
						<li><span>定位当前选项卡</span></li>
						<li class="line"></li>
						<li><span>关闭全部选项卡</span></li>
						<li><span>关闭其他选项卡</span></li>
					</ul>
				</div>
				<router-link to="/" class="roll-nav">
					<img src="../../assets/image/tui.png" />
					退出
				</router-link>
			</div>
		</div>
		<div class="clear_resp1">
			<div class="content">
				<div class="ibox">
					<div class="ibox-title"><router-link to="Ac_add" class="btn-primary zeng">增加</router-link></div>
					<div class="ibox-content">
						<table>
							<thead>
								<tr>
									<td>序号</td>
									<td>标题</td>
									<td>内容</td>
									<td>操作</td>
								</tr>
							</thead>
							<tbody id="tb">
								<tr v-for="(ig, index) in lists">
									<td>{{ ig.id }}</td>
									<td>
										<a href="javascript:;" @click="routercont(index)">{{ ig.tit }}</a>
									</td>
									<td>{{ ig.zhiwei }}</td>
									<td>
										<a href="javascript:;" class="btn-primary bin" @click="gai(index)">修改</a>
										<a href="javascript:;" class="btn-primary shan">删除</a>
									</td>
								</tr>
							</tbody>
						</table>
						<div class="jilu">
							<span>
								共
								<span>{{ lists.length }}</span>
								条记录
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Clear_resp1',
	data() {
		return {
			show: false,
			lists: [
				{
					id: '1',
					tit: '责任一',
					zhiwei: '党的教育和管理'
				},
				{
					id: '2',
					tit: '责任二',
					zhiwei: '党的教育和管理'
				},
				{
					id: '3',
					tit: '责任三',
					zhiwei: '党的教育和管理'
				},
				{
					id: '4',
					tit: '责任四',
					zhiwei: '党的教育和管理'
				},
				{
					id: '5',
					tit: '责任五',
					zhiwei: '党的教育和管理'
				}
			],
			title: '',
			a: ''
		};
	},
	methods: {
		routercont(_in) {
			var inx = this.a;
			this.$router.push({ path: 'contss', query: { idx: inx, inds: _in } });
		},
		gai(_ix) {
			var inx = this.a;
			this.$router.push({ path: 'xiugai', query: { idx: inx, ix: _ix } });
		}
	}
};
</script>
<style scoped>
.zuzhi {
	margin-left: 280px;
	padding: 50px 0 0 15px;
	box-sizing: border-box;
	height: 100vh;
}
.content-tabs {
	position: relative;
	height: 40px;
	background: #fafafa;
	line-height: 40px;
	border-bottom: solid 2px #2f4050;
	margin-left: -15px;
}
.page-tabs {
	display: block;
	margin-left: 40px;
	height: 42px;
	overflow: hidden;
}
.page-tabs-content {
	margin-left: 0px;
	float: left;
}
.page-tabs-content a {
	display: block;
	float: left;
	border-right: solid 1px #eee;
	padding: 0 12px;
	cursor: pointer;
	text-decoration: none;
	color: #000;
}
.page-tabs-content a:hover {
	background: #2f4050;
	color: #a7b1c2;
}
.active {
	background: #2f4050;
	color: #a7b1c2;
	color: #fff !important;
}
.page-img {
	right: 140px;
	border-left: solid 1px #eee;
	position: absolute;
	width: 40px;
	height: 40px;
	text-align: center;
	color: #999;
	z-index: 2;
	top: 0;
}
.btn-group {
	right: 60px;
	width: 80px;
	padding: 0;
	border-left: solid 1px #eee;
	position: absolute;
	height: 40px;
	text-align: center;
	color: #999;
	z-index: 2;
	top: 0;
	display: inline-block;
	vertical-align: middle;
	margin-left: 30px;
}
.btn-group button {
	width: 80px;
	background: #fff;
	border: 0;
	height: 39px;
	position: relative;
	outline: 0;
	font-family: inherit;
	font-size: 12px;
	line-height: inherit;
	cursor: pointer;
	text-transform: none;
	overflow: visible;
}
.caret {
	display: inline-block;
	width: 0;
	height: 0;
	margin-left: 2px;
	vertical-align: middle;
	border-top: 4px dashed;
	border-right: 4px solid transparent;
	border-left: 4px solid transparent;
}
.dropdown-menu {
	border: medium none;
	float: left;
	font-size: 12px;
	list-style: none outside none;
	padding: 0;
	position: absolute;
	text-shadow: none;
	top: 100%;
	right: 0;
	text-align: left;
	min-width: 160px;
	margin: 2px 0 0;
	background-color: #fff;
	background-clip: padding-box;
	z-index: 1000;
	border-radius: 0;
	box-shadow: 0 0 3px rgba(86, 96, 117, 0.3);
}
.dropdown-menu li span {
	border-radius: 3px;
	color: inherit;
	line-height: 25px;
	margin: 4px;
	text-align: left;
	font-weight: 400;
	display: block;
	padding: 3px 20px;
	clear: both;
	white-space: nowrap;
}
.line {
	height: 1px;
	margin: 9px 0;
	overflow: hidden;
	background-color: #e5e5e5;
}
.roll-nav {
	background: #fff;
	height: 40px;
	width: 60px;
	outline: 0;
	position: absolute;
	right: 0;
	text-align: center;
	color: #999;
	z-index: 2;
	top: 0;
	cursor: pointer;
	border-left: solid 1px #eee;
	text-decoration: none;
	font-size: 14px;
}
.roll-nav img {
	vertical-align: middle;
}
table {
	border-spacing: 0;
	border-collapse: collapse;
}
table tr:nth-of-type(odd) {
	background-color: #f3f3f4;
}
table tr:hover {
	background-color: #f3f3f4;
}
table tr > td {
	padding: 8px;
	font-size: 13px;
	color: #686b6d;
}
table .client-link {
	color: #686b6d;
	font-weight: bold;
}
table tr > td:nth-child(1) {
	width: 10%;
}
table tr > td:nth-child(2) {
	width: 75%;
}
table tr > td:nth-child(3) {
	width: 15%;
}
table tr > td span a {
	color: #fff;
}
.content {
	padding: 15px;
	background: #fff;
	box-sizing: border-box;
}
.ibox-title {
	padding: 15px 0;
	border-bottom: 1px solid #e7eaec;
}
.ibox-content {
	padding: 15px 0;
}
.badge-primary,
.label-primary {
	background-color: #1ab394;
	color: #fff;
}
.label {
	background-color: #1bb394;
	color: #5e5e5e;
	font-size: 10px;
	font-weight: 600;
	padding: 3px 8px;
	text-shadow: none;
	border-radius: 3px;
}
.badge-warning,
.label-warning {
	background-color: #f8ac59;
	color: #fff;
}
.clear_resp1 {
	height: calc(100% - 140px);
	background: #f3f3f4;
	overflow: auto;
	padding: 20px;
	animation: left 0.5s linear forwards;
}
.btn-primary {
	background-color: #1bb394;
	color: #fff;
	cursor: pointer;
	color: #fff;
	border-radius: 3px;
	padding: 6px 12px;
	font-size: 12px;
	line-height: 1.5;
	text-align: center;
	margin-left: 3px;
}
table {
	width: 100%;
}
thead tr {
	height: 46px;
	background: #1d84c6 !important;
}
thead tr td {
	color: #fff;
}
thead tr td,
tbody tr td {
	width: 20% !important;
}
thead tr td:nth-child(3),
tbody tr td:nth-child(3) {
	width: 40% !important;
}
thead tr td:nth-child(1),
tbody tr td:nth-child(1) {
	width: 5% !important;
}
tbody tr {
	background: #fff;
	border-bottom: 1px solid #e7eaec;
}
tbody tr:nth-child(odd) {
	background: #f9f9f9;
}
tbody tr td:nth-child(2) a {
	color: #347ab7;
}
tbody tr td:nth-child(4) a {
	padding: 2px 5px;
	margin: 0;
}
tbody tr td:nth-child(4) a:nth-child(1) {
	background: #f8ac5a;
}
tbody tr td:nth-child(4) a:nth-child(2) {
	background: #ed5666;
}
tbody tr:hover {
	background: #f5f5f5;
}
.jilu {
	margin-top: 30px;
	padding-bottom: 20px;
	text-align: right;
	font-size: 13px;
	color: #686b6d;
}
.jilu > span {
	padding: 3px 10px;
	border: 1px solid #dddddd;
	border-radius: 3px;
}
.jilu > span:hover {
	color: #23527c;
	background-color: #eee;
	border-color: #ddd;
}
</style>
