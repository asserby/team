<template>
	<div class="huaming">
		<zutop :name="name"></zutop>
		<div class="main">
			<div class="header">
				<h2>党员管理</h2>
				<router-link to="huajia" class="fr tian">添加党员</router-link>
				<p>所有党员必须通过考察</p>
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
						<table>
							<tr>
								<td><a href="javascript:;" class="client-link">吕卫东</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">党委书记</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">罗学智</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">党委副书记</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">王庆成</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">党委副书记</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">付德营</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">纪委书记</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">张效青</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">纪检书记</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">李培荣</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">党委委员</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">李培荣</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">党委委员</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">李培荣</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">党委委员</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">李培荣</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">党委委员</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">李培荣</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">党委委员</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">李培荣</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">党委委员</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">李培荣</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">党委委员</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">李培荣</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">党委委员</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
							<tr>
								<td><a href="javascript:;" class="client-link">李培荣</a></td>
								<td>莱芜市公安局钢城分局</td>
								<td class="client-link">党委委员</td>
								<td class="client-link">辛庄派出所</td>
								<td>18663487177</td>
								<td class="client-status">
									<span class="label label-primary"><router-link to="huajia">修改</router-link></span>
									<span class="label label-warning"><router-link to="huajia">删除</router-link></span>
								</td>
							</tr>
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
			name:'花名册'
		};
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
	width: 30.6667%;
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
	width: 65%;
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
}
.clients-list table {
	width: 100%;
}
.clients-list table tr > td:nth-child(1) {
	width: auto;
}
.clients-list table tr > td:nth-child(2) {
	width: auto;
}
.clients-list table tr > td:nth-child(3) {
	width: auto;
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
