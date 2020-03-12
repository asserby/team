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
		<div class="see">
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
									<div>
										<ol>
											<li>
												<label for="">风险点：</label>
												<textarea name="" id="" cols="30" rows="10">121231231</textarea>
											</li>
											<li>
												<label for="">防控措施：</label>
												<textarea name="" id="" cols="30" rows="10">3123123123123</textarea>
											</li>
											<li>
												<label for="">实施计划：</label>
												<textarea name="" id="" cols="30" rows="10"></textarea>
											</li>
										</ol>
									</div>
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
									<div>
										<ol>
											<li>
												<label for="">风险点：</label>
												<textarea name="" id="" cols="30" rows="10">3453245</textarea>
											</li>
											<li>
												<label for="">防控措施：</label>
												<textarea name="" id="" cols="30" rows="10">1231321</textarea>
											</li>
											<li>
												<label for="">实施计划：</label>
												<textarea name="" id="" cols="30" rows="10"></textarea>
											</li>
										</ol>
									</div>
								</li>
								<li style="background:#FF0101;" v-show="show">
									<h3>
										监
										<br />
										督
										<br />
										意
										<br />
										见
									</h3>
									<div>
										<quill-editor
											v-model="content"
											ref="myQuillEditor"
											:options="editorOption"
											@blur="onEditorBlur($event)"
											@focus="onEditorFocus($event)"
											@change="onEditorChange($event)"
										></quill-editor>
									</div>
								</li>
							</ul>
						</form>
						<div class="link">
							<a href="javascript:;" class="btn-primary" @click="routerback">返回</a>
							<a href="javascript:;" class="btn-primary bin" v-show="!show" @click="clik">监督按钮</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
	components: {
		quillEditor
	},
	name: 'See',
	data() {
		return {
			show: false,
			content: `请输入内容`,
			editorOption: {},
			ids: ''
		};
	},
	methods: {
		clik() {
			this.show = true;
		},
		onEditorReady(editor) {
			// 准备编辑器
		},
		onEditorBlur() {}, // 失去焦点事件
		onEditorFocus() {}, // 获得焦点事件
		onEditorChange() {}, // 内容改变事件
		routerback() {
			if (this.ids == 1) {
				this.$router.push({ path: 'geren' });
			}
			if (this.ids == 2) {
				this.$router.push({ path: 'geren' });
			}
			if (this.ids == 3) {
				this.$router.push({ path: 'geren' });
			}
		}
	},
	created() {
		this.ids = this.$route.query.ids;
	},
	computed: {
		editor() {
			return this.$refs.myQuillEditor.quill;
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
.see {
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
form ul > li ol li {
	height: 33.3333%;
	border-bottom: 1px solid #e7eaec;
	display: flex;
}
form ul > li ol li label {
	height: 100%;
	width: 10%;
	text-align: center;
	line-height: 48px;
	font-size: 14px;
	font-weight: bold;
	color: #707375;
	background: #f5f5f5;
}
form ul > li ol li textarea {
	width: 90%;
	height: 100%;
	box-sizing: border-box;
	padding: 10px;
	border: 1px solid #e5e6e7;
	resize: none;
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
	background: #ed5666;
}
.quill-editor {
	background: #fff;
}
</style>
