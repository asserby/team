<template>
	<div class="chufen">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">加班</a>
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
		<div class="overtime">
			<div class="content">
				<div class="ibox">
					<div class="ibox-title">
						<h5>加班申请</h5>
						<router-link to="jiabanj" class="btn-primary">历史记录</router-link>
					</div>
					<div class="ibox-content">
						<div class="form">
							<div>
								<label for="">开始时间：</label>
								<input type="datetime-local" step="01" class="console" style="width:240px;" />
							</div>
							<div>
								<label for="">结束时间：</label>
								<input type="datetime-local" step="01" class="console" style="width:240px;" />
							</div>
							<div>
								<label for="">加班时长：</label>
								<input type="number" min="0" class="console" style="width:175px;" />
								<span class="tian">小时</span>
							</div>
							<div>
								<label for="">加班原因：</label>
								<textarea name="" id="" cols="30" rows="10"></textarea>
							</div>
							<div>
								<label for="">审批人：</label>
								<select class="console" style="width:540px;">
									<option value="">吕卫东</option>
								</select>
							</div>
							<div>
								<label for=""></label>
								<button>保 存</button>
							</div>
						</div>
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
.overtime {
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
	position: absolute;
	right: 14px;
	top: 5px;
}
.qing {
	right: 100px;
	background-color: #1ab394;
}
.form > div {
	display: flex;
	margin-bottom: 15px;
}
.form > div .tian {
	width: 60px;
	height: 34px;
	text-align: center;
	line-height: 35px;
	border: 1px solid #e5e6e7;
	font-size: 14px;
	color: #676a6c;
	position: relative;
	left: -2px;
	top: 0;
}
.form > div textarea {
	width: 540px;
	height: 55px;
	border-color: #e5e6e7;
	padding: 10px;
}
.form > div input.shen {
	background: #eeeeee;
}
.form button {
	background: #1ab394;
}
</style>
