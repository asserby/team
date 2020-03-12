<template>
	<div class="denglu">
		<form class="clearfix" onsubmit="return false">
			<div class="fl inpWrap clearfix">
				<label for="username" class="fl">用户：</label>
				<input type="text" id="username" name="username" v-model="name"/>
			</div>
			<div class="fl inpWrap">
				<label for="password" class="fl">密码：</label>
				<input type="password" id="password" name="password" class="fl" v-model="password"/>
			</div>
			<input type="submit" class="fl btn" value="登录" @click="login" />
		</form>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	name: 'login',
	data() {
		return {
			name: '',
			password: ''
		};
	},
	methods: {
		async login() {
			if (this.name != '' && this.pass != '') {
				const res = await axios.get('http://kids.yuxiedu.net/index.php?s=/home/User/denlu',{
					params:{
						  username: this.name,
						  password: this.password
					}
				})
				if(res.data.id){
					localStorage.keys = res.data.username;
					this.$router.push('/');
				}else{
					this.name=this.password="";
					alert("您输入的用户名、密码有误,请重新输入！")
				}
			}
		}
	}
};
</script>

<style scoped>
.denglu {
	background: #154172 url(../assets/image/denglu.jpg) no-repeat top center;
	height: 100vh;
	position: relative;
}
form {
	width: 872px;
	color: #fff;
	position: absolute;
	left:50%;
	bottom:30vh;
	transform: translateX(-50%);
}
.inpWrap label {
	line-height: 41px;
	display: inline-block;
	margin-right: 36px;
	font-size: 19.5px;
}
.inpWrap input {
	display: inline-block;
	width: 218px;
	height: 41px;
	line-height: 41px;
	padding: 0 15px;
	background: url(../assets/image/biaodan.png) no-repeat;
	color: #fff;
	margin-right: 34px;
}
.btn {
	display: inline-block;
	width: 119px;
	height: 45px;
	background: url(../assets/image/btn.png) no-repeat;
	color: #fff;
	background-size: cover;
	font-size: 20px;
	margin-top: -0.5%;
	border-radius: 10px;
	cursor: pointer;
	line-height: 45px;
	text-align: center;
}
</style>
