<template>
	<div class="chufen">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">请假汇总</a>
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
		<div class="j_summary">
			<div class="content">
				<div class="ibox">
					<div class="ibox-title"><h5>请假汇总</h5></div>
					<div class="ibox-content">
						<div class="head"><a href="javascript:;" class="btn-primary" @click="exportToExcel">导出Excel</a></div>
						<table id="table-content">
							<thead>
								<tr>
									<td>请假人</td>
									<td>审批人</td>
									<td>请假天数</td>
									<td>请假事由</td>
									<td>开始时间</td>
									<td>结束时间</td>
									<td>审批状态</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>管理员</td>
									<td>吕卫东</td>
									<td>7</td>
									<td>有事</td>
									<td>2017-12-08 00:00</td>
									<td>2017-12-08 00:00</td>
									<td>已撤销</td>
								</tr>
								<tr>
									<td>管理员</td>
									<td>吕卫东</td>
									<td>7</td>
									<td>有事</td>
									<td>2017-12-08 00:00</td>
									<td>2017-12-08 00:00</td>
									<td>已撤销</td>
								</tr>
								<tr>
									<td>管理员</td>
									<td>吕卫东</td>
									<td>7</td>
									<td>有事</td>
									<td>2017-12-08 00:00</td>
									<td>2017-12-08 00:00</td>
									<td>已撤销</td>
								</tr>
								<tr>
									<td>管理员</td>
									<td>吕卫东</td>
									<td>7</td>
									<td>有事</td>
									<td>2017-12-08 00:00</td>
									<td>2017-12-08 00:00</td>
									<td>已撤销</td>
								</tr>
								<tr>
									<td>管理员</td>
									<td>吕卫东</td>
									<td>7</td>
									<td>有事</td>
									<td>2017-12-08 00:00</td>
									<td>2017-12-08 00:00</td>
									<td>已撤销</td>
								</tr>
								<tr>
									<td>管理员</td>
									<td>吕卫东</td>
									<td>7</td>
									<td>有事</td>
									<td>2017-12-08 00:00</td>
									<td>2017-12-08 00:00</td>
									<td>已撤销</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import FileSaver from 'file-saver';
import XLSX from 'xlsx';
export default {
	name: 'J_summary',
	data() {
		return {
			show: false
		};
	},
	methods: {
		exportToExcel() {
			let xlsxParam = { raw: true };
			let et = XLSX.utils.table_to_book(document.getElementById('table-content'), xlsxParam);
			let etout = XLSX.write(et, {
				bookType: 'xlsx',
				bookSST: true,
				type: 'array'
			});
			try {
				FileSaver.saveAs(
					new Blob([etout], {
						type: 'application/octet-stream;charset=utf-8'
					}),
					'trade-publish.xlsx'
				); //trade-publish.xlsx 为导出的文件名
			} catch (e) {
				console.log(e, etout);
			}
			return etout;
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
.j_summary {
	height: calc(100% - 140px);
	background: #f3f3f4;
	overflow: auto;
	padding: 20px;
	animation: left 0.5s linear forwards;
}
.btn-primary {
	background-color: #ec4859;
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
.head {
	display: flex;
	align-items: center;
	height: 34px;
}
table {
	width: 100%;
}
thead tr {
	height: 46px;
	background: #1d84c6 !important;
}
thead tr td {
	color: #fff;
}
tbody tr td {
	padding: 15px 10px;
}
tbody tr {
	border-bottom: 1px solid #e7eaec;
	background: #fff !important;
}
tbody tr:hover {
	background: #f5f5f5 !important;
}
thead tr td,
tbody tr td {
	width: 10% !important;
}
thead tr td:nth-child(1),
tbody tr td:nth-child(1) {
	width: 8% !important;
}
thead tr td:nth-child(4),
tbody tr td:nth-child(4) {
	width: 15% !important;
}
</style>
