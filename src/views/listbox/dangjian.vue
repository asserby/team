<template>
	<div class="dangjian">
		<ul class="nav">
			<li class="nav-header">
				<router-link to="/list"><img src="../../assets/image/huizhang.png" /></router-link>
				<a class="fr rgt" href="javascript:;">
					<span>{{name}}</span>
					<span>
						党委成员
						<br />
						超级管理员
					</span>
				</a>
			</li>
			<li class="nav-list active"><router-link to="zuzhi">组织架构</router-link></li>
			<li class="nav-list"><router-link to="chufen">党员违纪处分</router-link></li>
			<li class="nav-list"><router-link to="huamingce">花名册</router-link></li>
			<li class="nav-list"><router-link to="shijian">教育实践</router-link></li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'dengjian',
	data() {
		return {
			name:''
		};
	},
	created(){
		this.name = localStorage.keys
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
</style>
