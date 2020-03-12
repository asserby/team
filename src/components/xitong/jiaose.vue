<template>
	<div class="zuzhi">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">角色管理</a>
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
		<div class="role">
			<table>
				<tbody>
					<tr>
						<th>序号</th>
						<th>角色名称</th>
						<th>角色描述</th>
						<th>状态</th>
						<th>操作</th>
					</tr>
					<tr>
						<td>1</td>
						<td>党委成员</td>
						<td></td>
						<td>正常</td>
						<td>
							<a href="javascript:;" class="btn-primary">权限设置</a>
							<a href="javascript:;" class="btn-primary bin">成员管理</a>
						</td>
					</tr>
					<tr>
						<td>2</td>
						<td>纪委成员</td>
						<td></td>
						<td>正常</td>
						<td>
							<a href="javascript:;" class="btn-primary">权限设置</a>
							<a href="javascript:; " class="btn-primary bin">成员管理</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Add_company',
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
	height: 100vh;
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
em {
	font-style: normal;
}
.role {
	background: #fff;
	padding: 20px 20px;
	padding-bottom: 20px;
	height: calc(100% - 180px);
	overflow-y: scroll;
	animation: left 0.5s linear forwards;
}
table {
	width: 95%;
	border-collapse: collapse;
	text-align: left;
	font-size: 14px;
	color: #666;
	border: 1px solid #e7e7e7;
	margin: 20px auto 0;
}
td,
th {
	padding: 8px;
	border: 1px solid #e7e7e7;
}
tr td:nth-child(2),
th:nth-child(2) {
	width: 30% !important;
}
th {
	background: #f5f5f6;
}
.btn-primary {
	background-color: #1bb394;
	color: #fff;
	cursor: pointer;
	color: #fff;
	border-radius: 3px;
	padding: 2px 5px;
	font-size: 12px;
	line-height: 1.5;
	text-align: center;
	margin-left: 3px;
}
.bin {
	background: #23c6c8;
}
tr {
	background: #fff !important;
}
tr:hover {
	background: #f5f5f6 !important;
}
</style>
