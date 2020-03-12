<template>
	<div class="zuzhi">
		<zutop :name="name"></zutop>
		<div class="form1">
			<div class="form">
				<div>
					<label for="a">党员姓名：</label>
					<select class="console" name="uid">
						<option value=""></option>
						<option value="0">请选择违纪党员</option>
						<option value="1">李培荣</option>
						<option value="2">王庆成</option>
						<option value="5">于刚</option>
						<option value="6">陈俊凯</option>
						<option value="7">倪鑫</option>
						<option value="8">陈道峰</option>
						<option value="9">吕卫东</option>
						<option value="10">倪涛</option>
						<option value="11">罗学智</option>
						<option value="12">张效青</option>
						<option value="13">赵锡忠</option>
						<option value="14">傅迎秋</option>
						<option value="15">付德营</option>
						<option value="16">武保华</option>
						<option value="17">伊希红</option>
						<option value="18">许莉</option>
						<option value="19">张其军</option>
						<option value="20">李秋凤</option>
						<option value="21">王文敏</option>
						<option value="22">许俊华</option>
						<option value="23">郭凤</option>
						<option value="24">张勇</option>
						<option value="25">郑浩生</option>
						<option value="26">李传德</option>
						<option value="27">王子生</option>
						<option value="28">李国华</option>
						<option value="29">展君霞</option>
						<option value="30">吴茂军</option>
						<option value="31">刘杰</option>
						<option value="32">陶善俊</option>
						<option value="33">李天虎</option>
						<option value="34">任海芹</option>
						<option value="35">伊刚</option>
						<option value="36">赵伟</option>
						<option value="37">尚绪波</option>
						<option value="38">李胜</option>
						<option value="39">李振义</option>
						<option value="40">陈坤</option>
						<option value="41">魏立培</option>
						<option value="42">高晨</option>
						<option value="43">李霄</option>
						<option value="44">刘彬</option>
						<option value="45">王福诚</option>
						<option value="46">王涛</option>
						<option value="47">赵宗斌</option>
						<option value="48">邹科</option>
						<option value="49">亓志永</option>
						<option value="50">吕海峰</option>
						<option value="51">张源泉</option>
						<option value="52">谭永贵</option>
						<option value="53">赵美玲</option>
						<option value="54">焦玉超</option>
						<option value="55">陈华</option>
						<option value="56">陈军</option>
						<option value="57">李兆军</option>
						<option value="58">任维涛</option>
						<option value="59">孙涛</option>
						<option value="60">魏书涛</option>
						<option value="61">朱振钊</option>
						<option value="62">张红德</option>
						<option value="63">李梅都</option>
						<option value="65">张某某</option>
						<option value="68">李秋凤</option>
						<option value="69">李正炜</option>
						<option value="71">李秋凤</option>
						<option value="72"></option>
					</select>
				</div>
				<div>
					<label for="b">违纪内容：</label>
					<quill-editor
						v-model="content1"
						ref="myQuillEditor"
						:options="editorOption"
						@blur="onEditorBlur($event)"
						@focus="onEditorFocus($event)"
						@change="onEditorChange($event)"
					></quill-editor>
				</div>
				<div>
					<label for="c">违纪时间：</label>
					<input type="datetime-local" class="console" />
				</div>
				<div>
					<label for="c">案件来源：</label>
					<input type="text" class="console" />
				</div>
				<div>
					<label for="d">事实内容：</label>
					<quill-editor
						v-model="content2"
						ref="myQuillEditor"
						:options="editorOption"
						@blur="onEditorBlur($event)"
						@focus="onEditorFocus($event)"
						@change="onEditorChange($event)"
					></quill-editor>
				</div>
				<div>
					<label for="d">处理结果：</label>
					<quill-editor
						v-model="content3"
						ref="myQuillEditor"
						:options="editorOption"
						@blur="onEditorBlur($event)"
						@focus="onEditorFocus($event)"
						@change="onEditorChange($event)"
					></quill-editor>
				</div>
				<div>
					<label for="d">结果运用：</label>
					<quill-editor
						v-model="content4"
						ref="myQuillEditor"
						:options="editorOption"
						@blur="onEditorBlur($event)"
						@focus="onEditorFocus($event)"
						@change="onEditorChange($event)"
					></quill-editor>
				</div>
				<div>
					<label for=""></label>
					<button>提 交 信 息</button>
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
import zutop from '../plugins/zutop.vue'
export default {
	name: 'Form1',
	data() {
		return {
			show:false,
			content1: ``,
			content2: ``,
			content3: ``,
			content4: ``,
			editorOption: {},
			name:'党员违纪处分'
		};
	},
	methods: {
		onEditorReady(editor) {
			// 准备编辑器
		},
		onEditorBlur() {}, // 失去焦点事件
		onEditorFocus() {}, // 获得焦点事件
		onEditorChange() {} // 内容改变事件
	},
	computed: {
		editor() {
			return this.$refs.myQuillEditor.quill;
		}
	},
	components: {
		quillEditor,
		zutop
	}
};
</script>
<style scoped>
.zuzhi {
	margin-left: 280px;
	height: 100%;
	padding: 50px 0 0 15px;
	height: 100vh;
	overflow: hidden;
	box-sizing: border-box;
}
.form1 {
	height: calc(100% - 140px);
	padding: 30px;
	overflow: auto;
}
.form > div {
	display: flex;
	margin-bottom: 15px;
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
@keyframes left {
	from {
		transform: translateX(50px);
		opacity: 0;
	}
	to {
		transform: translateX(0px);
		opacity: 1;
	}
}
</style>
