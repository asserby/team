<template>
	<div class="huaming">
		<zutop :name="name"/>
		<div class="main">
			<div class="header">
				<h2>专题教育</h2>
				<div class="ibox-content clearfix">
					<div class="clearfix">
						<div class="slect">
							<select name="" id="">
								<option value="全部">全部</option>
								<option value="党委成员">党委成员</option>
								<option value="工会">工会</option>
								<option value="纪委">纪委</option>
								<option value="政工室">政工室</option>
								<option value="指挥中心">指挥中心</option>
								<option value="警务保障室">警务保障室</option>
								<option value="法制大队">法制大队</option>
								<option value="国内安全保卫大队">国内安全保卫大队</option>
								<option value="刑事侦查大队">刑事侦查大队</option>
								<option value="禁毒大队">禁毒大队</option>
								<option value="治安管理大队">治安管理大队</option>
								<option value="巡逻防爆大队">巡逻防爆大队</option>
							</select>
						</div>
						<router-link to="shijianjia" class="fr tian">添加资料</router-link>
						<form action="" method="post" onsubmit="return false">
							<div class="input-group">
								<input type="text" placeholder="查找党员" class="input form-control" name="name" value="" />
								<span class="input-group-btn">
									<button type="submit" class="btn-primary btns">
										<i class="fa fa-search"></i>
										搜索
									</button>
								</span>
							</div>
						</form>
					</div>
					<div class="clients-list">
						<table class="table table-striped table-hover">
							<thead style="background: #1c84c6; color: #fff;">
								<tr class="qhl-tabletr">
									<td>标题</td>
									<td>内容</td>
									<td>操作</td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td><a href="javascript:;" class="client-link">警示教育活动1</a></td>
									<td class="client-link">
										<p>
											2017年10月15日，市公安局召开了全市公安机关领导干部警示教育大会，教育民警进一步筑牢拒腐防变的思想防线，更好地肩负起人民警察为人民服务的光荣使命。
											<br />
											会议要求，各级公安机关民警特别是领导干部，要严格落实党风廉政建设责任，树立强烈的责任意识，坚持从严治警，时时遵守各项规定要求、处处注意自身言行举止，坚决不能“越红线”、“进雷池”，确保风清气正。要始终保持政治定力，坚守理想信念，永葆...
										</p>
									</td>
									<td class="client-status">
										<span class="label label-primary"><a href="javascript:;" style="color:#fff">修改</a></span>
										<span class="label label-warning"><a href="javascript:;" style="color:#fff">删除</a></span>
									</td>
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
import zutop from '../plugins/zutop.vue'
export default {
	name: 'huaming',
	data() {
		return {
			name:'教育实践'
		};
	},
	methods: {
		routerTo(index) {
			this.$router.push({ path: 'Form3', query: { id: index } });
		}
	},
	components:{
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
.main {
	margin: 20px 0 0 15px;
	background: #fff;
	height: calc(100% - 140px);
	overflow: hidden;
}
.main .header {
	padding: 14px 15px 7px;
	min-height: 48px;
	font-size: 14px;
	color: rgb(103, 106, 108);
	box-sizing: border-box;
	height: 100%;
	overflow: auto;
}
.header h2 {
	margin: 5px 0 10px;
	font-size: 24px;
	font-weight: 100;
}
.header p {
	font-size: 14px;
	color: rgb(103, 106, 108);
}
.ibox-content {
	padding: 15px 20px 20px;
	min-height: 620px;
}
.header .tian {
	color: #fff;
	background: #1ab394;
	padding: 1px 5px;
	font-size: 12px;
	line-height: 1.5;
	border-radius: 3px;
}
.ibox-content .tit {
	color: #686b6d;
	font-size: 13px;
	margin-bottom: 10px;
}
.ibox-content .slect {
	float: left;
	padding: 0 2%;
}
.ibox-content select {
	width: 100%;
	box-sizing: border-box;
	padding: 6px 12px;
	text-align: right;
	border: 1px solid #e5e6e7;
	border-radius: 1px;
	font-size: 14px;
	color: #686b6d;
	height: 34px;
}
form {
	float: right;
	width: 58%;
	margin-right: 1%;
}
.input-group {
	position: relative;
	display: table;
	width: 100%;
	height: 34px;
}
.input-group .form-control,
.input-group-addon,
.input-group-btn {
	display: table-cell;
}
.input-group .form-control {
	box-sizing: border-box;
	position: relative;
	z-index: 2;
	width: 100%;
	margin-bottom: 0;
	display: table-cell;
	padding: 6px 12px;
	text-align: right;
	border: 1px solid #e5e6e7;
	border-radius: 1px;
	font-size: 14px;
	color: #686b6d;
	text-align: left;
	border-right: none;
	height: 34px;
}
.input-group .input-group-btn {
	display: table-cell;
	width: 10%;
}
.input-group-btn:last-child > .btn,
.input-group-btn:last-child > .btn-group {
	z-index: 2;
	margin-left: -1px;
}
.btns {
	position: relative;
	left: -1px;
	top: 1px;
	width: 100%;
	height: 34px;
	border: none;
	z-index: 3;
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	background: #1ab394;
	color: #fff;
}
.clients-list {
	margin-top: 20px;
}
.clients-list table tr td {
	height: 46px;
	vertical-align: middle;
	border: none;
	padding: 8px;
	box-sizing: border-box;
}
.clients-list table {
	width: 100%;
	border-collapse: collapse;
}
.clients-list table tr > td:nth-child(1) {
	width: 16%;
}
.clients-list table tr > td:nth-child(2) {
	width: 66%;
}
.clients-list table tr > td:nth-child(3) {
	width: 16%;
}
.clients-list a {
	color: inherit;
	font-weight: bold;
}
.label {
	font-size: 10px;
	padding: 3px 8px;
	text-shadow: none;
	color: #fff;
	border-radius: 3px;
}
.label-primary {
	background: #1ab394;
}
.label-warning {
	background: #f8ac59;
}
</style>
