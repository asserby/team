<template>
	<div class="dangjian">
		<ul class="nav">
			<li class="nav-header">
				<router-link to="/list"><img src="../../assets/image/huizhang.png" /></router-link>
				<a class="fr rgt" href="javascript:;">
					<span>管理员</span>
					<span>
						党委成员/
						<br />
						超级管理员
					</span>
				</a>
			</li>
			<li @click="active = 0" :class="{ active: active == 0 }">
				<a href="javascript:;" class="J_menuItem">公告</a>
				<i></i>
				<ul v-show="active == 0">
					<li><router-link to="gonggao" class="J_menuItem">公告设置</router-link></li>
				</ul>
			</li>
			<li @click="active = 1" :class="{ active: active == 1 }">
				<a href="javascript:;" class="J_menuItem">出勤休假</a>
				<i></i>
				<ul v-show="active == 1">
					<li><router-link to="qingjia" class="J_menuItem">请假</router-link></li>
					<li><router-link to="chuchai" class="J_menuItem">出差</router-link></li>
					<li><router-link to="jiaban" class="J_menuItem">加班</router-link></li>
					<li><router-link to="daka" class="J_menuItem">打卡</router-link></li>
				</ul>
			</li>
			<li @click="active = 2" :class="{ active: active == 2 }">
				<a href="javascript:;" class="J_menuItem">统计报表</a>
				<i></i>
				<ul v-show="active == 2">
					<li><router-link to="Yuedu" class="J_menuItem">月季汇总</router-link></li>
					<li><router-link to="jiahuizong" class="J_menuItem">请假汇总</router-link></li>
				</ul>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'Accountability',
	data() {
		return {
			active: 0,
			show: false
		};
	}
};
</script>

<style scoped>
.dangjian {
	height: 100vh;
	background: #f3f3f4;
}
.nav {
	position: fixed;
	top: 0;
	left: 0;
	width: 280px;
	height: 100%;
	background: #2f4050;
	font-size: 14px;
	overflow-y: scroll;
}
.nav::-webkit-scrollbar {
	display: none;
}
.nav .nav-header {
	padding: 33px 45px;
	background: url(../../assets/image/header-profile.png) no-repeat;
}
.nav .rgt {
	margin-top: 10px;
	line-height: 30px;
	color: #dfe4ed;
	font-weight: 600;
}
.nav .rgt span:nth-child(1) {
	margin-top: 5px;
	display: block;
}
.nav .rgt span:nth-child(2) {
	font-size: 12px;
	font-weight: bold;
}
.nav-list a {
	color: #fff;
	display: block;
	font-weight: 600;
	padding: 14px 20px 14px 55px;
}
.router-link-active {
	background: #293846;
}
.nav-list:hover {
	background: #293846;
}
.nav > li {
	position: relative;
}
.nav > li i {
	width: 12px;
	height: 12px;
	background: url(../../assets/image/left.png) no-repeat;
	background-size: 100% 100%;
	position: absolute;
	right: 20px;
	top: 15px;
	transform: rotate(0deg);
	transition: all 0.2s 0s linear;
}
.nav > li img {
	vertical-align: -3px;
	margin-right: 6px;
}
.nav > li.active i {
	transform: rotate(-90deg);
}
.nav > li.active {
	border-left: 4px solid #19aa8d;
	background: #293846;
}
.nav > li:not(:nth-child(1)) > a {
	color: #fff;
	font-weight: 600;
	display: block;
	padding: 14px 20px 14px 55px;
	font-size: 13px;
}
.nav li > ul > li > a {
	color: #fff;
	font-weight: 600;
	display: block;
	padding: 14px 20px 14px 55px;
	font-size: 13px;
}
.nav > li > ul > li > a {
	padding-left: 80px;
}
:after,
:before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
:after,
:before {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
::-webkit-scrollbar {
	width: 6px;
	background-color: #f5f5f5;
}
::-webkit-scrollbar-thumb {
	background-color: #999;
}
::-webkit-scrollbar-track {
	background-color: #f5f5f5;
}
</style>
