<template>
	<div class="zuzhi">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">容错办理</a>
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
		<div class="fault">
			<div class="content">
				<div class="ibox">
					<div class="ibox-title"><a href="javascript:;" class="btn-primary">免费申请表</a></div>
					<div class="ibox-content">
						<div class="head">
							<div>
								<label for="">申请人员：</label>
								<select class="console">
									<option value="">请选择人员</option>
								</select>
							</div>
							<div>
								<label for="">申请时间：</label>
								<input type="date" class="console" />
								<span>到</span>
								<input type="date" class="console" />
							</div>
							<div><a href="javascript:;" class="btn-primary">搜索</a></div>
						</div>
						<table>
							<thead>
								<tr>
									<td>序号</td>
									<td>申请人员/单位</td>
									<td>申请时间</td>
									<td>状态</td>
									<td>操作</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td><a href="javascript:;">刘某</a></td>
									<td>2017-06-27</td>
									<td>正在处理</td>
									<td><a href="javascript:;" class="btn-primary">签收</a></td>
								</tr>
							</tbody>
						</table>
						<div class="tongji">
							<span class="show">
								共
								<span>1</span>
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
	name: 'Accountability',
	data() {
		return {
			show: false
		};
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
.form > div label {
	width: 16%;
	padding: 0 20px;
	padding-right: 30px;
	text-align: right;
	flex-grow: 0;
	flex-shrink: 0;
	font-size: 13px;
	color: #676a6c;
	font-weight: bold;
	padding-top: 7px;
}
.form > div .quill-editor {
	margin-bottom: 100px;
}
.ql-editor {
	height: 200px;
}
.console {
	width: 500px;
	height: 34px;
	box-sizing: border-box;
	padding: 6px 12px;
	border: 1px solid #e5e6e7;
}
.form button {
	background-color: #1c84c6;
	border-color: #1c84c6;
	color: #fff;
	padding: 6px 12px;
	border: none;
	border-radius: 5px;
}
.fault {
	height: calc(100% - 140px);
	background: #fff;
	overflow: auto;
	padding: 20px;
	animation: left 0.5s linear forwards;
	margin-top: 20px;
	box-sizing: border-box;
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
.head {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
}
.head label {
	font-size: 13px;
	color: #676a6c;
	font-weight: bold;
}
.console {
	width: 185px;
}
.head span {
	border-top: 1px solid #e5e6e7;
	border-bottom: 1px solid #e5e6e7;
	padding: 5.7px 10px;
	position: relative;
	left: 0;
	top: 2.5px;
	color: #8a8c8e;
}
table {
	width: 100%;
	margin-top: 10px;
}
thead tr {
	height: 46px;
	background: #1d84c6 !important;
}
thead tr td {
	color: #fff;
}
tbody tr:nth-child(odd) {
	background: #f9f9f9;
}
tbody tr:hover {
	background: #f5f5f5;
}
thead tr td,
tbody tr td {
	width: 20% !important;
}
thead tr td:nth-child(1),
tbody tr td:nth-child(1) {
	width: 10% !important;
}
thead tr td:nth-child(2),
tbody tr td:nth-child(2) {
	width: 30% !important;
}
.tongji {
	margin-top: 40px;
	text-align: left;
}
.tongji .show {
	padding: 5px 12px;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 14px;
	color: #686b6d;
}
</style>
