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
				<a href="javascript:;" class="J_menuItem">
					<img src="../../assets/image/shuju.png" width="16px" height="16px" />
					用户管理
				</a>
				<i></i>
				<ul v-show="active == 0">
					<li><router-link to="yonghu" class="J_menuItem">用户列表</router-link></li>
					<li><router-link to="xttianjia" class="J_menuItem">添加用户</router-link></li>
					<li><router-link to="xtxiugai" class="J_menuItem">修改密码</router-link></li>
				</ul>
			</li>
			<li @click="active = 1" :class="{ active: active == 1 }">
				<a href="javascript:;" class="J_menuItem">
					<img src="../../assets/image/shezhi.png" width="16px" height="16px" />
					单位设置
				</a>
				<i></i>
				<ul v-show="active == 1">
					<li><router-link to="danweilist" class="J_menuItem">单位列表</router-link></li>
					<li><router-link to="jiadanwei" class="J_menuItem">添加单位</router-link></li>
				</ul>
			</li>
			<li @click="active = 2" :class="{ active: active == 2 }">
				<a href="javascript:;" class="J_menuItem">
					<img src="../../assets/image/qizi.png" width="16px" height="16px" />
					平台设置
				</a>
				<i></i>
				<ul v-show="active == 2">
					<li><router-link to="jiaose" class="J_menuItem">角色管理</router-link></li>
					<li><router-link to="xuanze" class="J_menuItem">选择表格</router-link></li>
				</ul>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'dangjian',
	data() {
		return {
			active: 0,
			show: false
		};
	},
	methods: {
		router1() {
			this.$router.push({ path: 'dangwei', query: { id: 1 } });
		},
		router2() {
			this.$router.push({ path: 'dangwei', query: { id: 2 } });
		},
		router3() {
			this.$router.push({ path: 'dangwei', query: { id: 3 } });
		},
		router4() {
			this.$router.push({ path: 'Situation', query: { id: 1 } });
		},
		router5() {
			this.$router.push({ path: 'Situation', query: { id: 2 } });
		},
		router6() {
			this.$router.push({ path: 'Situation', query: { id: 3 } });
		},
		router7() {
			this.$router.push({ path: 'Situation', query: { id: 7 } });
		}
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
