<template>
	<div class="chufen">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">备选项目</a>
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
			<div class="header clearfix"><a class="fr" href="javascript:;">添加任务</a></div>
			<h4>备选任务</h4>
			<ul>
				<li>
					<input type="checkbox" value="26" />
					<div>
						<h5>小金惊现两条“中国大鲵”</h5>
						<p></p>
						<p style="text-indent:2em;color:#373535;font-family:&quot;font-size:14px;">
							此次培训邀请了绵阳技术学院教授苟安经以及县纪委、县保密局的老师进行授课。授课内容根据红原实际精心筛选，包括发展党员工作程序、党内政治生活、红原县党史、新修订《党章》、新时代党的历史征程、党的民族宗教政策等内容，对入党积极分子进行了全方位的培训教育。
						</p>
						<p style="text-indent:2em;color:#373535;font-family:&quot;font-size:14px;">
							培训结束后，县委党校组织了基础知识考试，成绩合格者将统一发放结业证。通过此次培训，学员们对中国共产党的基本理论知识、党员的基本义务和权利等有了更加深入全面的了解，并为下一步发展党员工作打下了扎实的基础。
						</p>
						<p></p>
					</div>
					<div width="300px" style="margin-left:50px"><h5>单人认领</h5></div>
				</li>
				<li>
					<input type="checkbox" value="24" />
					<div>
						<h5>创新“容缺受理”服务</h5>
						<p>
							<span style="color:#373535;font-family:&quot;font-size:16px;">
								今年年初，红原县查尔玛乡以党员积分评星工作为契机，建成全县首家“党员积分超市”。截至目前，该乡已有30余名牧民党员凭党员积分在超市领取到相应物品。图为查龙村党员索科领到了积分物品——暖水瓶，这是他积极参加村义务劳动等凭综合评分获得的奖励。
							</span>
						</p>
					</div>
					<div width="300px" style="margin-left:50px"><h5>单人认领</h5></div>
				</li>
				<li>
					<input type="checkbox" value="25" />
					<div>
						<h5>创新“容缺受理”服务</h5>
						<p></p>
						<p style="text-indent:2em;color:#373535;font-family:&quot;font-size:14px;">
							加强政治建设。执行好“三会一课”、民主评议、民主生活会等制度，运用“例会集中学、科室讨论学、个人自主学”形式，常态抓好党的十九大精神学习贯彻。
						</p>
						<p style="text-indent:2em;color:#373535;font-family:&quot;font-size:14px;">
							加强能力建设。采取跟班学习、交流挂职等形式，提升业务工作能力，常态开展组工干部“走基层”活动，提升基层工作能力，开展季度“岗位比拼”活动，推进科室交叉轮岗，提升比学赶超能力。
						</p>
						<p></p>
					</div>
					<div width="300px" style="margin-left:50px"><h5>单人认领</h5></div>
				</li>
			</ul>
			<div class="anniu">
				<form action="" method="post" onsubmit="return false">
					<!-- <input type="hidden" value="" name="ids" class="ids"> -->
					<button class="ling-btn">领取</button>
					<button class="qun-btn">全选</button>
				</form>
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
	margin: 20px 0 0 15px;
	background: #fff;
	height: calc(100% - 140px);
	overflow: auto;
	padding: 30px;
	border-top: 1px solid #e7eaec;
}
.main .header {
	margin-bottom: 10px;
}
.main .header a {
	display: inline-block;
	width: 100px;
	height: 35px;
	text-align: center;
	line-height: 35px;
	background: #1c84c6;
	color: #fff;
	border-radius: 5px;
}
.main h4 {
	text-indent: 3em;
	background: #e3e5ed;
	line-height: 40px;
	margin: 5px 0 10px;
	font-size: 18px;
	color: #676a6c;
	position: relative;
}
.main h4:after {
	content: '';
	display: block;
	height: 25px;
	width: 5px;
	background: #1c84c6;
	position: absolute;
	left: 15px;
	top: 7.5px;
}
.main ul {
	padding-bottom: 30px;
}
.main ul li {
	display: flex;
	align-items: center;
	padding: 15px 50px 15px 0;
	border-bottom: 1px dashed #999;
	cursor: pointer;
}
.main ul li:hover {
	background: #f0f2f7;
}
.main ul li input {
	width: 88px;
	height: 18px;
	margin: 0 30px;
}
.main ul li h5 {
	font-size: 16px;
	font-weight: 400;
	margin: 12px 0 8px;
	color: #676a6c;
}
.main ul li p {
	font-size: 14px;
	line-height: 1.3;
	margin-bottom: 10px;
	color: #676a6c;
}
.anniu button {
	width: 90px;
	height: 30px;
	border-radius: 15px;
	border: none;
	color: #333;
	float: right;
	margin: 0 0 20px 20px;
	cursor: pointer;
}
.anniu button:hover {
	background: #e8e8e8;
}
</style>
