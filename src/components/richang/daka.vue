<template>
	<div class="chufen">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">打卡</a>
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
		<div class="punch">
			<div class="content">
				<div class="ibox">
					<div class="ibox-title"><h5>考勤打卡</h5></div>
					<div class="ibox-content">
						<div class="form">
							<div>
								<label for="">上班打卡：</label>
								<div>
									<span>08:30</span>
									<em @click="d1" v-show="!sh" class="btn-primary">打卡</em>
									<i v-show="sh">{{ hoursTip }}</i>
									<i v-show="sh">{{ hour }}:</i>
									<i v-show="sh">{{ second }}</i>
								</div>
							</div>
							<div>
								<label for="">下班打卡：</label>
								<div>
									<span>11:30</span>
									<em @click="d2" v-show="!sh2" class="btn-primary">打卡</em>
									<i v-show="sh2">{{ hoursTip2 }}</i>
									<i v-show="sh2">{{ hour2 }}:</i>
									<i v-show="sh2">{{ second2 }}</i>
								</div>
							</div>
							<div>
								<label for="">上班打卡：</label>
								<div>
									<span>14:00</span>
									<em @click="d3" v-show="!sh3" class="btn-primary">打卡</em>
									<i v-show="sh3">{{ hoursTip3 }}</i>
									<i v-show="sh3">{{ hour3 }}:</i>
									<i v-show="sh3">{{ second3 }}</i>
								</div>
							</div>
							<div>
								<label for="">下班打卡：</label>
								<div>
									<span>18:00</span>
									<em @click="d4" v-show="!sh4" class="btn-primary">打卡</em>
									<i v-show="sh4">{{ hoursTip4 }}</i>
									<i v-show="sh4">{{ hour4 }}:</i>
									<i v-show="sh4">{{ second4 }}</i>
								</div>
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
			show: false,
			hoursTip: ' ',
			hoursTip2: ' ',
			hoursTip3: ' ',
			hoursTip4: ' ',
			hour: '',
			hour2: '',
			hour3: '',
			hour4: '',
			second: '',
			second2: '',
			second3: '',
			second4: '',
			sh: false,
			sh2: false,
			sh3: false,
			sh4: false
		};
	},
	methods: {
		d1: function() {
			this.sh = !this.sh;
			var self = this;
			var date = new Date();
			if (date.getHours() <= 8) {
				self.hoursTip = '打卡成功';
				self.hour = date.getHours();
				self.second = date.getMinutes();
			} else {
				self.hoursTip = '迟到';
				self.hour = date.getHours();
				self.second = date.getMinutes();
			}
		},
		d2: function() {
			this.sh2 = !this.sh2;
			var self = this;
			var date = new Date();
			if (date.getHours() >= 11) {
				self.hoursTip2 = '打卡成功';
				self.hour2 = date.getHours();
				self.second2 = date.getMinutes();
			} else {
				self.hoursTip2 = '早退';
				self.hour2 = date.getHours();
				self.second2 = date.getMinutes();
			}
		},
		d3: function() {
			this.sh3 = !this.sh3;
			var self = this;
			var date = new Date();
			if (date.getHours() <= 14) {
				self.hoursTip3 = '打卡成功';
				self.hour3 = date.getHours();
				self.second3 = date.getMinutes();
			} else {
				self.hoursTip3 = '迟到';
				self.hour3 = date.getHours();
				self.second3 = date.getMinutes();
			}
		},
		d4: function() {
			this.sh4 = !this.sh4;
			var self = this;
			var date = new Date();
			if (date.getHours() >= 18) {
				self.hoursTip4 = '打卡成功';
				self.hour4 = date.getHours();
				self.second4 = date.getMinutes();
			} else {
				self.hoursTip4 = '早退';
				self.hour4 = date.getHours();
				self.second4 = date.getMinutes();
			}
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
.punch {
	height: calc(100% - 140px);
	background: #f3f3f4;
	overflow: auto;
	padding: 20px;
	animation: left 0.5s linear forwards;
}
.form > div {
	display: flex;
	margin-bottom: 15px;
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
	margin-left: 3px;
}
.form > div > div {
	display: flex;
	align-items: center;
}
.form > div > div span {
	color: #686b6d;
	font-size: 13px;
}
</style>
