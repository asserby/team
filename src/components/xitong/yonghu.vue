<template>
	<div class="zuzhi">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">用户列表</a>
				</div>
				<div class="page-img"><img src="../../assets/image/qian.png"></div>
				<div class="btn-group"  v-on:click="show = !show">
					<button>
						关闭操作
						<span class="caret"></span>
					</button>
					<ul class="dropdown-menu" v-show="show">
						<li>
							<span>定位当前选项卡</span>
						</li>
						<li class="line"></li>
						<li>
							<span>关闭全部选项卡</span>
						</li>
						<li>
							<span>关闭其他选项卡</span>
						</li>
					</ul>
				</div>
				<router-link to="/" class="roll-nav">
					<img src="../../assets/image/tui.png">
					 退出
				</router-link>
			</div>
		</div>
		<div class="List_user">
			<div class="zzbox-content clearfix">
				<ul class="yonghu-ul">
					<li @click="a(0)">
						<h2><i v-show="ass!=0"><img src="../../assets/image/4.png" alt=""></i><i v-show="ass==0"><img src="../../assets/image/5.jpg" alt=""></i>党委成员 <span>{{lis.length}}</span></h2>
						<ul v-show="ass==0" id="hide-ul">
							<li v-for="list in lis">
								<em>{{list.zhi}}</em>
								<em>{{list.name}}</em>
								<em>{{list.phone}}</em>
								<a href="javascript:;">用户变更</a>
							</li>
						</ul>
					</li>
					<li @click="a(1)">
						<h2><i v-show="ass!=1"><img src="../../assets/image/4.png" alt=""></i></i><i v-show="ass==1"><img src="../../assets/image/5.jpg" alt=""></i>工会 <span>{{lis.length}}</span></h2>
						<ul v-show="ass==1" id="hide-ul">
							<li v-for="list in lis">
								<em>{{list.zhi}}</em>
								<em>{{list.name}}</em>
								<em>{{list.phone}}</em>
								<a href="javascript:;">用户变更</a>
							</li>
						</ul>
					</li>
					<li @click="a(2)">
						<h2><i v-show="ass!=2"><img src="../../assets/image/4.png" alt=""></i></i><i v-show="ass==2"><img src="../../assets/image/5.jpg" alt=""></i>纪委 <span>{{lis.length}}</span></h2>
						<ul v-show="ass==2" id="hide-ul">
							<li v-for="list in lis">
								<em>{{list.zhi}}</em>
								<em>{{list.name}}</em>
								<em>{{list.phone}}</em>
								<a href="javascript:;">用户变更</a>
							</li>
						</ul>
					</li>
					<li @click="a(3)">
						<h2><i v-show="ass!=3"><img src="../../assets/image/4.png" alt=""></i></i><i v-show="ass==3"><img src="../../assets/image/5.jpg" alt=""></i>政工室 <span>{{lis.length}}</span></h2>
						<ul v-show="ass==3" id="hide-ul">
							<li v-for="list in lis">
								<em>{{list.zhi}}</em>
								<em>{{list.name}}</em>
								<em>{{list.phone}}</em>
								<a href="javascript:;">用户变更</a>
							</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'List_user',
		data(){
			return{
				show:false,
				lis:[
					{
						zhi:"局长",
						name:"吕卫东",
						phone:"13111111111",
					},
					{
						zhi:"部长",
						name:"吕卫习",
						phone:"15111111111",
					},
					{
						zhi:"科长",
						name:"吕卫难",
						phone:"17111111111",
					},
					{
						zhi:"科长",
						name:"吕卫难",
						phone:"17111111111",
					}
				],
				ass:0
			}
		},
		components: {
	
		},
		methods:{
			a(e){
				this.ass=e;
			}
		}
	}
</script>

<style scoped>
.zuzhi{margin-left:280px;padding:50px 15px 0;}
.content-tabs{position:relative;height:40px;background:#fafafa;line-height:40px;border-bottom:solid 2px #2f4050;margin-right:-15px;margin-left:-15px;}
.page-tabs{display:block;margin-left:40px;height:42px;overflow:hidden;}
.page-tabs-content{margin-left:0px;float:left;}
.page-tabs-content a{display:block;float:left;border-right:solid 1px #eee;padding:0 12px;cursor:pointer;text-decoration:none;color:#000;}
.page-tabs-content a:hover{background:#2f4050;color:#a7b1c2;}
.active{background:#2f4050;color:#a7b1c2;color:#fff!important;}
.page-img{right:140px;border-left:solid 1px #eee;position:absolute;width:40px;height:40px;text-align:center;color:#999;z-index:2;top:0;}
.btn-group{right:60px;width:80px;padding:0;border-left:solid 1px #eee;position:absolute;height:40px;text-align:center;color:#999;z-index:2;top:0;display:inline-block;vertical-align:middle;margin-left:30px;}
.btn-group button{width:80px;background:#fff;border:0;height:39px;position:relative;outline:0;font-family:inherit;font-size:12px;line-height:inherit;cursor:pointer;text-transform:none;overflow:visible;}
.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-right:4px solid transparent;border-left:4px solid transparent;}
.dropdown-menu{border:medium none;float:left;font-size:12px;list-style:none outside none;padding:0;position:absolute;text-shadow:none;top:100%;right:0;text-align:left;min-width:160px;margin:2px 0 0;background-color:#fff;background-clip:padding-box;z-index:1000;border-radius:0;box-shadow:0 0 3px rgba(86, 96, 117, .3);}
.dropdown-menu li span{border-radius:3px;color:inherit;line-height:25px;margin:4px;text-align:left;font-weight:400;display:block;padding:3px 20px;clear:both;white-space:nowrap;}
.line{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5;}
.roll-nav{background:#fff;height:40px;width:60px;outline:0;position:absolute;right:0;text-align:center;color:#999;z-index:2;top:0;cursor:pointer;border-left:solid 1px #eee;text-decoration:none;font-size:14px;}
.roll-nav img{vertical-align:middle;}
em{font-style:normal;}
.list_user{animation:left .5s linear forwards;}
.yonghu-ul i{margin-right:5px;}
.yonghu-ul i:nth-child(2) img{display:inline-block;vertical-align:middle;}
#hide-ul{padding-left:20px;}
#hide-ul a{background-color:#23c6c8;border-color:#23c6c8;color:#FFF;border-radius:3px;padding:3px 6px;margin-bottom:0;font-size:14px;}
#hide-ul a:hover{background-color:#1A7BB9;}
#hide-ul em{display:inline-block;width:25%;margin-left:20px;}
#hide-ul li{height:40px;line-height:40px;border-bottom:1px solid #EFEFEF;font-size:14px;}
#hide-ul li:last-child{border-bottom:none;}
.yonghu-ul li h2{background:#F3F3F3;text-indent:30px;margin:2px 0 1px;font-size:16px;height:50px;line-height:50px;color:#333333;font-weight:normal;position:relative;}
.yonghu-ul span{background:#FF0000;color:#FFFFFF;padding:0 10px;}
ul,li{list-style:none;}
.yonghu_list{padding:20px 20px;margin:0 -15px;background:#fff;height:calc(100% - 140px);overflow-y: scroll;animation:left .5s linear forwards;}
.yonghu_list h5{padding:14px 15px 7px;font-size:14px;margin:0 0 7px;color:#666;}
.zzbox-content{background-color:#fff;color:inherit;padding:15px 20px 20px;}
</style>
