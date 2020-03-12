<template>
	<div class="chufen">
		<zutop :name="name" />
		<div class="main">
			<div class="header">
				<router-link to="tianjia" class="fr">添加处分</router-link>
				<h2>党员纪律处分</h2>
			</div>
			<div class="ibox-content clearfix"></div>
		</div>
	</div>
</template>

<script>
import zutop from '../plugins/zutop.vue'
export default {
	name: 'chufen',
	data() {
		return {
			name:'党员违纪处分'
		};
	},
	components:{
		zutop
	}
};
</script>

<style scoped>
.chufen {
	margin-left: 280px;
	padding: 50px 15px 0;
}
.main {
	margin: 20px 15px 25px;
	background: #fff;
}
.main .header {
	padding: 14px 15px 7px;
	min-height: 48px;
	font-size: 14px;
	color: rgb(103, 106, 108);
	border-top: 4px solid #e7eaec;
	box-sizing: border-box;
}
.header h2 {
	font-size: 14px;
	color: rgb(103, 106, 108);
}
.ibox-content {
	padding: 15px 20px 20px;
	border-top: 1px solid #e7eaec;
	min-height: 620px;
}
.header a {
	color: #fff;
	background: #1ab394;
	padding: 1px 5px;
	font-size: 12px;
	line-height: 1.5;
	border-radius: 3px;
}
</style>
