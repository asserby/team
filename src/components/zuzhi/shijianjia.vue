<template>
	<div class="huaming">
		<zutop :name="name"/>
		<div class="form3">
			<div class="form">
				<div>
					<label for="c">标题：</label>
					<input type="text" class="console" v-model="biao" />
				</div>
				<div>
					<label for="b">内容：</label>
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
					<label for="c">召开时间：</label>
					<input type="datetime-local" class="console" v-model="time" />
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
	name: 'Form3',
	data() {
		return {
			content: `请输入内容`,
			editorOption: {},
			biao: '',
			time: '',
			name:'教育实践'
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
	created() {
		var dat = this.$route.query.id;
		console.log(dat);
		this.$ajax.get('http://localhost:8080/static/app2.json').then(data => {
			this.content = data.data[dat].conte;
			this.biao = data.data[dat].na;
			this.time = data.data[dat].time;
		});
	},
	components: {
		quillEditor,
		zutop
	}
};
</script>
<style scoped>
.huaming {
	margin-left: 280px;
	padding: 50px 0 0 15px;
	height: 100vh;
	overflow: hidden;
	box-sizing: border-box;
}
.form {
	background: #fff;
	padding: 20px 10px;
}
.form3 {
	height: 100%;
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
	width: 675px;
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
