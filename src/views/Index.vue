<template>
	<div class="index">
		<div class="in-top clearfix">
			<img src="../assets/image/huizhang.png" alt="徽章" class="fl" />
			<h1 class="fl">济南市公安局钢城区分局队伍控制管理平台</h1>
		</div>
		<ul class="nav clearfix">
			<li>
				<router-link to="/dangjian" class="fl btn">
					<img src="../assets/image/qi.png" />
					<p>党建工作</p>
				</router-link>
			</li>
			<li>
				<router-link to="/pinggu" class="fl btn">
					<img src="../assets/image/xin.png" />
					<p>风险评估</p>
				</router-link>
			</li>
			<li>
				<router-link to="/wenze" class="fl btn">
					<img src="../assets/image/gong.png" />
					<p>执纪问责</p>
				</router-link>
			</li>
			<li>
				<router-link to="/richang" class="fl btn">
					<img src="../assets/image/guan.png" />
					<p>日常管理</p>
				</router-link>
			</li>
			<li>
				<router-link to="/chaoshi" class="fl btn">
					<img src="../assets/image/qi.png" />
					<p>党员超市</p>
				</router-link>
			</li>
			<li>
				<router-link to="/xitong" class="fl btn">
					<img src="../assets/image/home.png" />
					<p>系统管理</p>
				</router-link>
			</li>
		</ul>
		<p class="btm">济南市公安局钢城区分局</p>
		<router-link to="/login" class="flx"><img src="../assets/image/home.png" width="12px" height="12px" /></router-link>
	</div>
</template>

<script>
export default {
	name: 'index',
	data() {
		return {};
	}
};
</script>

<style scoped>
.index {
	height: 100vh;
	background: url(../assets/image/index.jpg) no-repeat;
	background-size: 100% 100%;
	overflow: hidden;
}
.in-top {
	width: 767px;
	margin: 0 auto;
	text-align: center;
	padding-top: 10vh;
}
.in-top h1 {
	font-size: 34px;
	color: #fff;
	line-height: 77px;
	margin-left: 10px;
	font-weight: 100;
}
.nav {
	width: 900px;
	margin: 40px auto 0;
}
.nav li {
	width: 250px;
	margin: 20px 25px 0;
	text-align: center;
	float: left;
	color: #fff;
	animation: top 1s linear forwards;
}
@keyframes top {
	from {
		transform: translateY(0px);
		opacity: 0;
	}
	to {
		transform: translateY(-20px);
		opacity: 1;
	}
}
.nav .btn {
	display: block;
	width: 250px;
	height: 108px;
	padding: 25px 0;
	color: #fff;
	font-size: 20px;
}
.nav li:nth-child(1) .btn {
	background: #ff8c39;
}
.nav li:nth-child(2) .btn {
	background: #5aadff;
}
.nav li:nth-child(3) .btn {
	background: #e74a4a;
}
.nav li:nth-child(4) .btn {
	background: #bd3194;
}
.nav li:nth-child(5) .btn {
	background: #10c6b5;
}
.nav li:nth-child(6) .btn {
	background: #e74a4a;
}
.btm {
	text-align: center;
	position: absolute;
	left: 0;
	bottom: 0;
	color: #fff;
	font-size: 14px;
	width: 100%;
	margin-bottom: 10px;
}
.flx {
	position: fixed;
	height: 38px;
	width: 38px;
	background: #2f4050;
	text-align: center;
	border-radius: 50%;
	opacity: 0.5;
	line-height: 38px;
	top: 20px;
	right: 20px;
	z-index: 100;
}
.flx:hover {
	opacity: 1;
}
</style>
