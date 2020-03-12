<template>
	<div class="chufen">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">单位风险点</a>
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
		<div class="content">
			<div>
				<h2 class="text-center">莱芜交警加强执勤执法安全防护</h2>
				<div>
					<p>
						“开展执勤执法安全防护大检查、组织执勤执法安全防护演练；通过缩短执勤时间、机关民警轮换上岗、增加轮换频率等方式，开展关爱民警、警务辅助人员活动……”从8月23日起，莱芜市公安局交警支队从坚持问题导向入手，狠抓各项防范措施落实，加强民警执勤执法安全防护工作。
						<br />
						<br />
						&nbsp; &nbsp;
						交警支队成立联合检查组对各大队执勤执法安全防护措施落实情况开展一次集中检查，重点检查是否按规定配置足够数量的警示标志、反光锥筒、警示灯等安全防护设施；民警上岗是否严格执行查处交通违法行为、处理交通事故必须穿着反光背心，佩带单警装备的规定；检查上路巡逻警车是否开启警灯，在设卡查车或处理交通事故时，是否将执勤警车停放在安全地点等问题，对检查中发现的隐患和严重问题进行通报批评，并督促立即整改。在集中检查的基础上，各大队组织开展自查，发现问题及时纠正。开展安全防护警示教育，将渉警伤亡事故作为典型案例，深刻剖析、查找存在的问题，对照工作实际加强警示教育；组织各大队集中开展安全防护实战模拟演练，重点训练地形复杂路段设卡拦截、查处酒驾等行动的方式方法；训练交通事故现场勘查以及夜间、雨雾天气执勤安全防护等内容，提高民警安全防护能力。组织开展关爱民警、警务辅助人员活动，认真执行《交警系统关爱民警十项措施》等规定要求，通过缩短执勤时间、机关民警轮换上岗、增加轮换频率等方式，让长期执勤执法的民警和警务辅助人员得到休整。
						<br />
					</p>
				</div>
				<p class="text-right">时间：2017-09-04</p>
				<router-link to="gonggao">返回</router-link>
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
.content {
	height: calc(100% - 140px);
	overflow: auto;
	background: #f3f3f4;
}
.content > div {
	width: 80%;
	background: #fff;
	margin: 0 auto;
	margin-top: 20px;
	border-top: 1px solid #e7eaec;
	padding: 40px;
	box-sizing: border-box;
	position: relative;
}
.text-center {
	font-size: 24px;
	font-weight: normal;
	text-align: center;
	font-weight: 100;
	color: #686b6d;
	margin-top: 5px;
	margin-bottom: 10px;
}
.text-right {
	text-align: right;
}
p {
	font-size: 15px;
	line-height: 26px;
	margin-bottom: 10px;
	color: #686b6d;
}
.content > div a {
	background-color: #1ab394;
	border-color: #1ab394;
	color: #fff;
	border-radius: 3px;
	padding: 6px 12px;
	position: absolute;
	left: 50%;
	bottom: -70px;
	transform: translateX(-50%);
}
</style>
