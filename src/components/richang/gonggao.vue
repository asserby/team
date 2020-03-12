<template>
	<div class="chufen">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">公告设置</a>
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
		<div class="notice">
			<div class="content">
				<div class="ibox">
					<div class="ibox-title">
						<h5>公告设置</h5>
						<router-link to="Add_to" class="btn-primary">添加公告</router-link>
					</div>
					<div class="ibox-content clearfix">
						<table class="table table-striped table-hover">
							<thead style="background: #1c84c6; color: #fff;">
								<tr class="qhl-tabletr">
									<td>序号</td>
									<td>标题</td>
									<td>内容</td>
									<td>时间</td>
									<td>操作</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>全警振奋精神 强化责任担当 山东公安全面进入十九大安保工作状态</td>
									<td>
										<p>
											近日，按照山东省公安厅部署，全省各级公安机关迅速召开党的十九大安保动员部署会，动员全警振奋精神，强化责任担当，以高昂的斗志和优良的作风投入战斗，全面进入十九大安保实战状态。
										</p>
									</td>
									<td>2017-09-14</td>
									<td>
										<span class="label label-primary"><router-link to="Content" style="color:#fff">查看</router-link></span>
										<span class="label label-warning"><a href="javascript:;" style="color:#fff">删除</a></span>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>全警振奋精神 强化责任担当 山东公安全面进入十九大安保工作状态</td>
									<td>
										<p>
											近日，按照山东省公安厅部署，全省各级公安机关迅速召开党的十九大安保动员部署会，动员全警振奋精神，强化责任担当，以高昂的斗志和优良的作风投入战斗，全面进入十九大安保实战状态。
										</p>
									</td>
									<td>2017-09-14</td>
									<td>
										<span class="label label-primary"><router-link to="Content" style="color:#fff">查看</router-link></span>
										<span class="label label-warning"><a href="javascript:;" style="color:#fff">删除</a></span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'C_risk',
	data() {
		return {
			show: false
		};
	}
};
</script>
<style scoped>
.chufen {
	margin-left: 280px;
	padding: 50px 0 0 15px;
	height: 100%;
	box-sizing: border-box;
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
.content {
	background: #fff;
	width: 100%;
}
.ibox {
	clear: both;
	margin-bottom: 25px;
	margin-top: 0;
	padding: 0;
}
.ibox-title {
	background-color: #fff;
	border-color: #e7eaec;
	border-image: none;
	border-style: solid solid none;
	border-width: 4px 0 0;
	color: inherit;
	margin-bottom: 0;
	padding: 14px 15px 7px;
	position: relative;
}
.ibox-title h5 {
	display: inline-block;
	font-size: 14px;
	margin: 0 0 7px;
	padding: 0;
	text-overflow: ellipsis;
	float: left;
	color: #686b6d;
}
.ibox-content {
	background-color: #fff;
	color: inherit;
	padding: 15px 20px 20px;
	border-color: #e7eaec;
	border-image: none;
	border-style: solid solid none;
	border-width: 1px 0;
	clear: both;
	position: relative;
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
	padding: 3px 5px;
	text-shadow: none;
	border-radius: 3px;
}
.badge-warning,
.label-warning {
	background-color: #f8ac59;
	color: #fff;
}
.notice {
	height: calc(100% - 140px);
	background: #f3f3f4;
	overflow: auto;
	padding: 20px;
	animation: left 0.5s linear forwards;
}
.btn-primary {
	background-color: #1ab394;
	border-color: #1ab394;
	color: #fff;
	cursor: pointer;
	color: #fff;
	border-radius: 3px;
	padding: 2px 5px;
	font-size: 12px;
	line-height: 1.5;
	text-align: center;
	position: absolute;
	right: 14px;
	top: 14px;
}
thead tr {
	height: 46px;
	background: #1d84c6 !important;
}
thead tr td {
	color: #fff;
}
tbody tr td {
	padding: 15px 10px;
}
tbody tr {
	background: #fff !important;
	border-bottom: 1px solid #e7eaec;
}
thead tr td:nth-child(1),
tbody tr td:nth-child(1) {
	width: 5%;
}
thead tr td:nth-child(2),
tbody tr td:nth-child(2) {
	width: 15% !important;
}
thead tr td:nth-child(3),
tbody tr td:nth-child(3) {
	width: 40%;
}
thead tr td:nth-child(4),
tbody tr td:nth-child(4) {
	width: 10%;
}
thead tr td:nth-child(5),
tbody tr td:nth-child(5) {
	width: 10%;
}
tbody tr td .label {
	font-size: 14px;
}
</style>
