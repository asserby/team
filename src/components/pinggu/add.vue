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
		<div class="c_add">
			<div class="content">
				<div class="ibox">
					<div class="ibox-content">
						<form action="">
							<ul>
								<li style="background:#F8AC5A;">
									<h3>
										思
										<br />
										想
										<br />
										道
										<br />
										德
										<br />
										风
										<br />
										险
									</h3>
									<div><ol v-for="item in red1" v-html="item"></ol></div>
									<a href="javascript:;" @click="add1">点击增加新的风险点</a>
								</li>
								<li style="background:#1BB394;">
									<h3>
										职
										<br />
										位
										<br />
										职
										<br />
										责
										<br />
										风
										<br />
										险
									</h3>
									<div><ol v-for="item in red2" v-html="item"></ol></div>
									<a href="javascript:;" @click="add2">点击增加新的风险点</a>
								</li>
								<li style="background:#1D84C6;">
									<h3>
										业
										<br />
										务
										<br />
										环
										<br />
										节
										<br />
										风
										<br />
										险
									</h3>
									<div><ol v-for="item in red3" v-html="item"></ol></div>
									<a href="javascript:;" @click="add3">点击增加新的风险点</a>
								</li>
								<li style="background:#24C6C8;">
									<h3>
										制
										<br />
										度
										<br />
										机
										<br />
										制
										<br />
										风
										<br />
										险
									</h3>
									<div><ol v-for="item in red4" v-html="item"></ol></div>
									<a href="javascript:;" @click="add4">点击增加新的风险点</a>
								</li>
								<li style="background:#BABABA;">
									<h3>
										环
										<br />
										境
										<br />
										风
										<br />
										险
									</h3>
									<div><ol v-for="item in red5" v-html="item"></ol></div>
									<a href="javascript:;" @click="add5">点击增加新的风险点</a>
								</li>
							</ul>
						</form>
						<div class="link">
							<router-link to="baocun" class="btn-primary">保存</router-link>
							<a href="javascript:;" class="btn-primary bin" @click="routerTo2">提交</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'C_add',
	data() {
		return {
			show: false,
			red1: [
				'<li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">风险点：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li>'
			],
			red2: [
				'<li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">风险点：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li>'
			],
			red3: [
				'<li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">风险点：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li>'
			],
			red4: [
				'<li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">风险点：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li>'
			],
			red5: [
				'<li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">风险点：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li>'
			],
			id: ''
		};
	},
	created() {
		this.id = this.$route.query.id;
	},
	methods: {
		routerTo2() {
			if (this.id == 1) {
				this.$router.push({ path: 'geren' });
			} else {
				this.$router.push({ path: 'geren' });
			}
		},
		add1() {
			// let oBox = this.$refs.ff.cloneNode(true);
			// console.log(oBox);
			// let target = this.$refs.target;
			// target.appendChild(oBox)
			let aa =
				'<li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">风险点：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li>';
			this.red1.push(aa);
		},
		add2() {
			let aa =
				'<li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">风险点：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li>';
			this.red2.push(aa);
		},
		add3() {
			let aa =
				'<li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">风险点：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li>';
			this.red3.push(aa);
		},
		add4() {
			let aa =
				'<li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">风险点：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li>';
			this.red4.push(aa);
		},
		add5() {
			let aa =
				'<li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">风险点：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li><li style="height:33.3333%;border-bottom:1px solid #E7EAEC;display:flex;"><label for="" style="height:100%;width:10%;text-align: center;line-height: 48px;font-size:14px;font-weight: bold;color:#707375;background:#F5F5F5;">防控措施：</label><textarea style="width:90%;height:100%;box-sizing: border-box;padding:10px;border:1px solid #E5E6E7;resize: none;"></textarea></li>';
			this.red5.push(aa);
		}
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
.c_add {
	height: calc(100% - 140px);
	background: #f3f3f4;
	overflow: auto;
	padding: 20px;
	animation: left 0.5s linear forwards;
}
form ul > li {
	display: flex;
	padding: 20px 10px;
	margin-bottom: 1px;
}
form ul > li > h3,
form ul > li > a {
	width: 10%;
	box-sizing: border-box;
}
form ul > li > div {
	flex-grow: 2;
}
form ul > li > h3 {
	color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
}
form ul > li ol {
	height: 160px;
	background: #eee;
}
form ul > li ol:not(:first-child) {
	margin-top: 20px;
}
form ul > li a {
	width: 13%;
	height: 34px;
	font-size: 14px;
	background: #ed5666;
	color: #fff;
	text-align: center;
	line-height: 34px;
	margin-left: 10px;
	border-radius: 5px;
	align-self: flex-end;
}
.link {
	text-align: center;
	padding-top: 20px;
}
.btn-primary {
	background-color: #1ab394;
	color: #fff;
	cursor: pointer;
	color: #fff;
	border-radius: 3px;
	padding: 6px 12px;
	font-size: 12px;
	line-height: 1.5;
	text-align: center;
	margin-left: 5px;
}
.bin {
	background: #1d84c6;
}
</style>
