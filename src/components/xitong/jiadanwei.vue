<template>
	<div class="zuzhi">
		<div class="content-tabs">
			<div class="page-tabs clearfix">
				<div class="page-tabs-content">
					<a href="javascript:;">首页</a>
					<a href="javascript:;" class="active">添加单位</a>
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
		<div class="add_company">
			<div class="form">
				<div>
					<label for="">单位名称：</label>
					<input type="text" class="console" placeholder="单位名称" />
				</div>
				<div>
					<label for="">单位名称：</label>
					<input type="text" class="console" value="莱芜市" id="suggestId" v-model="address_detail" />
				</div>
				<div>
					<label for=""></label>
					<button>查询</button>
				</div>
				<div>
					<label for="">经纬度：</label>
					<input type="text" class="console" placeholder="所在地址的经纬度" v-model="userlocation.lng + '' + userlocation.lat" />
				</div>
				<div>
					<label for=""></label>
					<div id="allmap"></div>
				</div>
				<div>
					<label for=""></label>
					<button>添加</button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Add_company',
	data() {
		return {
			show: false,
			address_detail: '莱芜市', //详细地址
			userlocation: { lng: '', lat: '' }
		};
	},
	mounted() {
		this.$nextTick(function() {
			var th = this;
			// 创建Map实例
			var map = new BMap.Map('allmap');
			// 初始化地图,设置中心点坐标，
			var point = new BMap.Point(121.160724, 31.173277); // 创建点坐标，汉得公司的经纬度坐标
			map.centerAndZoom(point, 15);
			map.enableScrollWheelZoom();
			var ac = new BMap.Autocomplete({ //建立一个自动完成的对象
				input: 'suggestId',
				location: map
			});
			var myValue;
			ac.addEventListener('onconfirm', function(e) {
				//鼠标点击下拉列表后的事件
				var _value = e.item.value;
				myValue = _value.province + _value.city + _value.district + _value.street + _value.business;
				this.address_detail = myValue;
				setPlace();
			});

			function setPlace() {
				map.clearOverlays(); //清除地图上所有覆盖物
				function myFun() {
					th.userlocation = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
					map.centerAndZoom(th.userlocation, 18);
					map.addOverlay(new BMap.Marker(th.userlocation)); //添加标注
				}

				var local = new BMap.LocalSearch(map, {
					//智能搜索
					onSearchComplete: myFun
				});
				local.search(myValue);

				//测试输出坐标（指的是输入框最后确定地点的经纬度）
				map.addEventListener('click', function(e) {
					//经度
					console.log(th.userlocation.lng);
					//维度
					console.log(th.userlocation.lat);
				});
			}
		});
	}
};
</script>

<style scoped>
.zuzhi {
	margin-left: 280px;
	padding: 50px 0 0 15px;
	height: 100vh;
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
em {
	font-style: normal;
}
.add_company {
	height: calc(100% - 180px);
	padding: 30px;
	overflow: auto;
	animation: left 0.5s linear forwards;
}
.form > div {
	display: flex;
	margin-bottom: 15px;
}
#allmap {
	height: 400px;
	width: 650px;
	border: 1px solid #ddd;
}
</style>
