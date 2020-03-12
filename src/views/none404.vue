<template>
	<div>
		<h2>404 找不到此页面<br/>{{ time }}秒</h2>
	</div>
</template>

<script>
	export default{
		name:'none',
		data(){
			return{
				time:3
			}
		},
		created(){
				let timer = setInterval(()=>{
					this.time--;
					if(this.time == 0){
						clearInterval(timer);
						this.$router.go(-1);
					}
				},1000)
		}
	}
</script>

<style scoped>
	h2{
		width: 100vw;
		height:100vh;
		padding-top:30vh;
		text-align: center;
		font-size: 30px;
		box-sizing: border-box;
	}
</style>
