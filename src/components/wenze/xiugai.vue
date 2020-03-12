<template>
	<div class="zuzhi">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">党委的主体责任</a>
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
		<div class="ac_gai">
			<div class="form">
				<div>
					<label for="c">标题：</label>
					<input type="text" class="console" v-model="biao" />
				</div>
				<div>
					<label for="">主体：</label>
					<select class="console">
						<option value="1" v-show="id == 1">党委</option>
						<option value="2" v-show="id == 2">纪委</option>
						<option value="3" v-show="id == 3">支部</option>
					</select>
				</div>
				<div>
					<label for="b">详细信息：</label>
					<quill-editor
						v-model="content"
						ref="myQuillEditor"
						:options="editorOption"
						@blur="onEditorBlur($event)"
						@focus="onEditorFocus($event)"
						@change="onEditorChange($event)"
					></quill-editor>
				</div>
				<div>
					<label for=""></label>
					<a href="javascript:;" class="btn-primary" @click="backc">返回</a>
					<a href="javascript:;" class="btn-primary bin">确认</a>
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
	name: 'Ac_gai',
	data() {
		return {
			show: false,
			content: `请输入内容`,
			editorOption: {},
			biao: '',
			id: ''
		};
	},
	created() {
		this.id = this.$route.query.idx;
		let bv = this.id;
		if (bv == 1) {
			this.biao = '责任一';
			this.content = '加强对党等廉政建设的组织领导';
		}
		if (bv == 2) {
			this.biao = '责任二';
			this.content = '抓好本单位党风廉政建设工作计划、部署的贯彻实施情况';
		}
		if (bv == 3) {
			this.biao = '责任三';
			this.content = '党的教育和管理';
		}
		if (bv == 4) {
			this.biao = '违反政治纪律的行为';
			this.content =
				'第四十五条　组织、参加反对党的基本理论、基本路线、基本纲领、基本经验或者重大方针政策的集会、游行、示威等活动的，对策划者、组织者和骨干分子，给予开除党籍处分。 对其他参加人员或者以提供信息、资料、财物、场地等方式支持上述活动者，情节较轻的，给予警告或者严重警告处分；情节较重的，给予撤销党内职务或者留党察看处分；情节严重的，给予开除党籍处分。 对不明真相被裹挟参加，经批...';
		}
		if (bv == 5) {
			this.biao = '处分的种类和适用';
			this.content =
				'第六条　行政机关公务员处分的种类为： （一）警告； （二）记过； （三）记大过； （四）降级； （五）撤职； （六）开除。 第七条　行政机关公务员受处分的期间为： （一）警告，6个月； （二）记过，12个月； （三）记大过，18个月； （四）降级、撤职，24个月。 第八条　行政机关公务员在受处分期间不得晋升职务和级别，其中，受记过、记大过、降级、撤职处分的，不得晋升工...';
		}
		if (bv == 6) {
			this.biao = '下列情节之一的，可以从轻、减轻或免除问责：';
			this.content =
				'（一）情节轻微的； （二）主动承认错误并积极纠错，配合组织调查的； （三）积极采取措施减少损失、挽回影响的； （四）符合《莱芜市公安局钢城分局容错免责机制实施办法（试行）》规定的容错免责条件的； （五）其他从轻、减轻或免除问责的情节';
		}
		if (bv == 7) {
			this.biao = '情形一';
			this.content = '法律、法规没有明令禁止的；';
		}
	},
	methods: {
		onEditorReady(editor) {
			// 准备编辑器
		},
		onEditorBlur() {}, // 失去焦点事件
		onEditorFocus() {}, // 获得焦点事件
		onEditorChange() {}, // 内容改变事件
		backc() {
			if (this.id == 1) {
				this.$router.push({ path: 'dangwei', query: { id: 1 } });
			}
			if (this.id == 2) {
				this.$router.push({ path: 'dangwei', query: { id: 2 } });
			}
			if (this.id == 3) {
				this.$router.push({ path: 'dangwei', query: { id: 3 } });
			}
			if (this.id == 4) {
				this.$router.push({ path: 'Situation', query: { id: 1 } });
			}
			if (this.id == 5) {
				this.$router.push({ path: 'Situation', query: { id: 2 } });
			}
			if (this.id == 6) {
				this.$router.push({ path: 'Situation', query: { id: 3 } });
			}
			if (this.id == 7) {
				this.$router.push({ path: 'Situation', query: { id: 7 } });
			}
		}
	}
};
</script>
<style scoped>
.zuzhi {
	margin-left: 280px;
	padding: 50px 0 0 15px;
	box-sizing: border-box;
	height: 100vh;
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
.ac_gai {
	height: calc(100% - 140px);
	padding: 30px;
	overflow: auto;
	box-sizing: border-box;
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
	font-size: 14px;
	line-height: 1.5;
	text-align: center;
	margin-left: 3px;
	margin-right: 200px;
}
.bin {
	background: #1c84c6;
}
.form > div label {
	width: 16%;
	padding: 0 20px;
	padding-right: 30px;
	text-align: right;
	flex-grow: 0;
	flex-shrink: 0;
	font-size: 13px;
	color: #676a6c;
	font-weight: bold;
	padding-top: 7px;
}
.form > div .quill-editor {
	margin-bottom: 100px;
}
.ql-editor {
	height: 200px;
}
.console {
	width: 500px;
	height: 34px;
	box-sizing: border-box;
	padding: 6px 12px;
	border: 1px solid #e5e6e7;
}
.form button {
	background-color: #1c84c6;
	border-color: #1c84c6;
	color: #fff;
	padding: 6px 12px;
	border: none;
	border-radius: 5px;
}
</style>
