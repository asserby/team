<template>
	<div class="chufen">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">我的项目</a>
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
			<div class="header">项目列表</div>
			<div class="input-group clearfix">
				<input type="text" placeholder="标题查找" class="input form-control" name="name" value="" />
				<span class="input-group-btn">
					<button type="submit" class="btn btn btn-primary">
						<i class="fa fa-search"></i>
						搜索
					</button>
				</span>
			</div>
			<div class="coni">
				<table>
					<tr>
						<td class="client-link">26</td>
						<td><a href="" class="client-link">小金惊现两条“中国大鲵”</a></td>
						<td class="client-link">0</td>
						<td>
							<p style="text-indent:2em;color:#373535;font-family:&quot;font-size:14px;">
								此次培训邀请了绵阳技术学院教授苟安经以及县纪委、县保密局的老师进行授课。授课内容根据红原实际精心筛选，包括发展党员工作程序、党内政治生活、红原县党史、新修订《党章》、新时代党的历史征程、党的民族宗教政策等内容，对入党积极分子进行了全方位的培训教育。
							</p>
							<p style="text-indent:2em;color:#373535;font-family:&quot;font-size:14px;">
								此次培训邀请了绵阳技术学院教授苟安经以及县纪委、县保密局的老师进行授课。授课内容根据红原实际精心筛选，包括发展党员工作程序、党内政治生活、红原县党史、新修订《党章》、新时代党的历史征程、党的民族宗教政策等内容，对入党积极分子进行了全方位的培训教育。
							</p>
						</td>
						<td class="client-link">
							<p>
								此次培训邀请了绵阳技术学院教授苟安经以及县纪委、县保密局的老师进行授课。授课内容根据红原实际精心筛选，包括发展党员工作程序、党内政治生活、红原县党史、新修订《党章》、新时代党的历史征程、党的民族宗教政策等内容，对入党积极分子进行了全方位的培训教育。
							</p>
						</td>
						<td class="client-status">
							<span class="label label-primary"><a href="javascript:;" style="color:#fff">查看</a></span>
						</td>
					</tr>
					<tr>
						<td class="client-link">26</td>
						<td><a href="" class="client-link">小金惊现两条“中国大鲵”</a></td>
						<td class="client-link">0</td>
						<td>
							<p style="text-indent:2em;color:#373535;font-family:&quot;font-size:14px;">
								此次培训邀请了绵阳技术学院教授苟安经以及县纪委、县保密局的老师进行授课。授课内容根据红原实际精心筛选，包括发展党员工作程序、党内政治生活、红原县党史、新修订《党章》、新时代党的历史征程、党的民族宗教政策等内容，对入党积极分子进行了全方位的培训教育。
							</p>
							<p style="text-indent:2em;color:#373535;font-family:&quot;font-size:14px;">
								此次培训邀请了绵阳技术学院教授苟安经以及县纪委、县保密局的老师进行授课。授课内容根据红原实际精心筛选，包括发展党员工作程序、党内政治生活、红原县党史、新修订《党章》、新时代党的历史征程、党的民族宗教政策等内容，对入党积极分子进行了全方位的培训教育。
							</p>
						</td>
						<td class="client-link">
							<p>
								此次培训邀请了绵阳技术学院教授苟安经以及县纪委、县保密局的老师进行授课。授课内容根据红原实际精心筛选，包括发展党员工作程序、党内政治生活、红原县党史、新修订《党章》、新时代党的历史征程、党的民族宗教政策等内容，对入党积极分子进行了全方位的培训教育。
							</p>
						</td>
						<td class="client-status">
							<span class="label label-primary"><a href="javascript:;" style="color:#fff">查看</a></span>
						</td>
					</tr>
					<tr>
						<td class="client-link">26</td>
						<td><a href="" class="client-link">小金惊现两条“中国大鲵”</a></td>
						<td class="client-link">0</td>
						<td>
							<p style="text-indent:2em;color:#373535;font-family:&quot;font-size:14px;">
								此次培训邀请了绵阳技术学院教授苟安经以及县纪委、县保密局的老师进行授课。授课内容根据红原实际精心筛选，包括发展党员工作程序、党内政治生活、红原县党史、新修订《党章》、新时代党的历史征程、党的民族宗教政策等内容，对入党积极分子进行了全方位的培训教育。
							</p>
							<p style="text-indent:2em;color:#373535;font-family:&quot;font-size:14px;">
								此次培训邀请了绵阳技术学院教授苟安经以及县纪委、县保密局的老师进行授课。授课内容根据红原实际精心筛选，包括发展党员工作程序、党内政治生活、红原县党史、新修订《党章》、新时代党的历史征程、党的民族宗教政策等内容，对入党积极分子进行了全方位的培训教育。
							</p>
						</td>
						<td class="client-link">
							<p>
								此次培训邀请了绵阳技术学院教授苟安经以及县纪委、县保密局的老师进行授课。授课内容根据红原实际精心筛选，包括发展党员工作程序、党内政治生活、红原县党史、新修订《党章》、新时代党的历史征程、党的民族宗教政策等内容，对入党积极分子进行了全方位的培训教育。
							</p>
						</td>
						<td class="client-status">
							<span class="label label-primary"><a href="javascript:;" style="color:#fff">查看</a></span>
						</td>
					</tr>
				</table>
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
.main {
	margin: 20px 0 25px 15px;
	background: #fff;
	height: calc(100% - 140px);
	overflow: auto;
	padding: 30px;
	border-top: 1px solid #e7eaec;
	box-sizing: border-box;
}
.main .header {
	margin-bottom: 10px;
	margin-top: 5px;
	font-size: 24px;
	font-weight: 100;
}
.input-group {
	position: relative;
	width: 100%;
}
.input-group .form-control {
	float: left;
	width: 100%;
	background: #fff;
	border: 1px solid #e5e6e7;
	border-radius: 1px;
	padding: 6px 12px;
	font-size: 14px;
	box-sizing: border-box;
}
.input-group-btn {
	position: absolute;
	top: 0;
	right: 0;
}
.btn-primary {
	background-color: #1ab394;
	border-color: #1ab394;
	color: #fff;
	border: none;
	border-radius: 3px;
	display: inline-block;
	padding: 6px 12px;
	font-size: 14px;
	font-weight: 400;
	text-align: center;
}
table,
td {
	border-collapse: collapse;
}
.coni {
	padding-top: 30px;
	font-size: 14px;
}
table tr:nth-of-type(odd) {
	background-color: #f9f9f9;
}
table tr:hover {
	background-color: #f5f5f5;
}
table tr td {
	padding: 8px;
	width: auto;
}
table tr td:nth-child(4),
table tr td:nth-child(5) {
	width: 40%;
}
table tr td:nth-child(2) {
	width: 64px !important;
}
table tr td:nth-child(2) a {
	color: rgb(103, 106, 108);
	font-weight: 600;
}
.client-status .label-primary {
	background: #1ab394;
	color: #fff;
	padding: 3px 8px;
	white-space: nowrap;
	font-size: 14px;
	border-radius: 3px;
}
</style>
