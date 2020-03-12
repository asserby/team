<template>
	<div class="chufen">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">档案人员</a>
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
		<div class="main">
			<div class="header"><h2>查看档案人员</h2></div>
			<div class="ibox-content clearfix">
				<label>
					查找：
					<input type="search" class="" aria-controls="personnel" />
				</label>
				<div class="clients-list">
					<table class="table table-striped table-hover">
						<thead style="background: #1c84c6; color: #fff;">
							<tr class="qhl-tabletr">
								<td>序号</td>
								<td>姓名</td>
								<td>部门</td>
								<td>操作</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td class="client-link">吕卫东</td>
								<td class="client-status">党委成员</td>
								<td class="client-status">
									<a href="javascript:;">填写</a>
									<a href="javascript:;">查看</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'chufen',
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
.main {
	margin: 20px 0 25px 15px;
	background: #fff;
	height: calc(100% - 140px);
	overflow: auto;
}
.main .header {
	padding: 14px 15px 7px;
	min-height: 48px;
	font-size: 14px;
	color: rgb(103, 106, 108);
	border-top: 4px solid #e7eaec;
	box-sizing: border-box;
}
.header h2 {
	font-size: 14px;
	color: rgb(103, 106, 108);
}
.ibox-content {
	padding: 15px 20px 20px;
	border-top: 1px solid #e7eaec;
	min-height: 620px;
}
.header a {
	color: #fff;
	background: #1ab394;
	padding: 1px 5px;
	font-size: 12px;
	line-height: 1.5;
	border-radius: 3px;
}
.clients-list tbody tr {
	border-bottom: 1px solid #e5e5e5;
}
.clients-list tbody tr:hover {
	background: #f5f5f5;
}
.clients-list table tr td {
	height: 46px;
	vertical-align: middle;
	border: none;
	padding: 8px;
	box-sizing: border-box;
	font-size: 14px;
}
.clients-list table {
	width: 100%;
	border-collapse: collapse;
}
.clients-list table tr > td:nth-child(1) {
	width: 221px;
}
.clients-list table tr > td:nth-child(2) {
	width: 242px;
}
.clients-list table tr > td:nth-child(3) {
	width: 631px;
}
.clients-list table tr > td:nth-child(4) {
	width: 380px;
}
.clients-list a {
	color: #337ab7;
}
.clients-list a:hover {
	color: #23527c;
}
.label {
	font-size: 10px;
	padding: 3px 8px;
	text-shadow: none;
	color: #fff;
	border-radius: 3px;
}
.label-primary {
	background: #1ab394;
}
.label-warning {
	background: #f8ac59;
}
.ibox-content label {
	font-weight: 700;
	font-size: 14px;
	margin-bottom: 5px;
	display: block;
	color: #676a6c;
}
.ibox-content label input {
	border: 1px solid #ccc;
	-webkit-appearance: none;
	width: 177px;
	height: 24px;
}
</style>
