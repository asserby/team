import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
	  path:'/',
	  name:'Index',
	  meta:{
		  login:true
	  },
	  component:Index
  },
  {
    path:'/login',
    name:'Login',
    component:() => import('../views/Login.vue')
  },
  {
  	path:"/dangjian",
	meta:{
			  login:true
	},
  	component:() => import('../views/listbox/dangjian.vue'),
  	redirect:"/dangjian/zuzhi",
  	children:[
  		{path:"zuzhi",component:() => import('../components/zuzhi/zuzhi.vue')},
  		{path:"chufen",component:() => import('../components/zuzhi/chufen.vue')},
  		{path:"tianjia",component:() => import('../components/zuzhi/tianjia.vue')},
  		{path:"huamingce",component:() => import('../components/zuzhi/huamingce.vue')},
  		{path:"huajia",component:() => import('../components/zuzhi/huajia.vue')},
  		{path:"shijian",component:() => import('../components/zuzhi/shijian.vue')},
  		{path:"shijianjia",component:() => import('../components/zuzhi/shijianjia.vue')}
  	]
  },
  {
  	path:"/chaoshi",
	meta:{
			  login:true
	},
  	component:() => import('../views/listbox/chaoshi.vue'),
  	redirect:"/chaoshi/dangan",
  	children:[
  		{path:"dangan",component:() => import('../components/chaoshi/dangan.vue')},
  		{path:"beixuan",component:() => import('../components/chaoshi/beixuan.vue')},
  		{path:"bixuan",component:() => import('../components/chaoshi/bixuan.vue')},
  		{path:"wode",component:() => import('../components/chaoshi/wode.vue')}
  	]
  },
  {
  	path:"/pinggu",
	meta:{
			  login:true
	},
  	component:() => import('../views/listbox/pinggu.vue'),
  	redirect:"/pinggu/geren",
  	children:[
  		{path:"geren",component:() => import('../components/pinggu/geren.vue')},
  		{path:"danwei",component:() => import('../components/pinggu/danwei.vue')},
  		{path:"jiandu",component:() => import('../components/pinggu/jiandu.vue')},
  		{path:"add",component:() => import('../components/pinggu/add.vue')},
  		{path:"chakan",component:() => import('../components/pinggu/chakan.vue')},
  		{path:"baocun",component:() => import('../components/pinggu/baocun.vue')}
  	]
  },
  {
  	path:"/wenze",
	meta:{
			  login:true
	},
  	component:() => import('../views/listbox/wenze.vue'),
  	redirect:"/wenze/dangwei",
  	children:[
  		{path:"dangwei",component:() => import('../components/wenze/dangwei.vue')},
  		{path:"dangwei2",component:() => import('../components/wenze/dangwei2.vue')},
  		{path:"dangwei3",component:() => import('../components/wenze/dangwei3.vue')},
  		{path:"xiugai",component:() => import('../components/wenze/xiugai.vue')},
  		{path:"contss",component:() => import('../components/wenze/contss.vue')},
  		{path:"Ac_add",component:() => import('../components/wenze/Ac_add.vue')},
  		{path:"Situation",component:() => import('../components/wenze/Situation.vue')},
  		{path:"Situation2",component:() => import('../components/wenze/Situation2.vue')},
  		{path:"Situation3",component:() => import('../components/wenze/Situation3.vue')},
  		{path:"Situation4",component:() => import('../components/wenze/Situation4.vue')},
  		{path:"Violation",component:() => import('../components/wenze/Violation.vue')},
  		{path:"Vio_not",component:() => import('../components/wenze/Vio_not.vue')},
  		{path:"Fault",component:() => import('../components/wenze/Fault.vue')},
  		{path:"Cn_error",component:() => import('../components/wenze/Cn_error.vue')},
  		{path:"juicuo_form1",component:() => import('../components/wenze/juicuo_form1.vue')},
  		{path:"Pro_error",component:() => import('../components/wenze/Pro_error.vue')},
  		{path:"Edu_form",component:() => import('../components/wenze/Edu_form.vue')}
  	]
  },
  {
  	path:"/richang",
	meta:{
			  login:true
	},
  	component:() => import('../views/listbox/richang.vue'),
  	redirect:"/richang/gonggao",
  	children:[
  		{path:"gonggao",component:() => import('../components/richang/gonggao.vue')},
  		{path:"Content",component:() => import('../components/richang/Content.vue')},
  		{path:"Add_to",component:() => import('../components/richang/Add_to.vue')},
  		{path:"qingjia",component:() => import('../components/richang/qingjia.vue')},
  		{path:"My_leave",component:() => import('../components/richang/My_leave.vue')},
  		{path:"Approval",component:() => import('../components/richang/Approval.vue')},
  		{path:"chuchai",component:() => import('../components/richang/chuchai.vue')},
  		{path:"T_history",component:() => import('../components/richang/T_history.vue')},
  		{path:"jiaban",component:() => import('../components/richang/jiaban.vue')},
  		{path:"jiabanj",component:() => import('../components/richang/jiabanj.vue')},
  		{path:"daka",component:() => import('../components/richang/daka.vue')},
  		{path:"Yuedu",component:() => import('../components/richang/Yuedu.vue')},
  		{path:"jiahuizong",component:() => import('../components/richang/jiahuizong.vue')}
  	]
  },
  {
  	path:"/xitong",
	meta:{
			  login:true
	},
  	component:() => import('../views/listbox/xitong.vue'),
  	redirect:"/xitong/yonghu",
  	children:[
  		{path:"yonghu",component:() => import('../components/xitong/yonghu.vue')},
  		{path:"tianjia",component:() => import('../components/xitong/tianjia.vue')},
  		{path:"xtxiugai",component:() => import('../components/xitong/xtxiugai.vue')},
  		{path:"danweilist",component:() => import('../components/xitong/danweilist.vue')},
  		{path:"jiadanwei",component:() => import('../components/xitong/jiadanwei.vue')},
  		{path:"jiaose",component:() => import('../components/xitong/jiaose.vue')},
  		{path:"xuanze",component:() => import('../components/xitong/xuanze.vue')}
  	]
  },
  {
	  path:"*",
	  component:() => import('../views/none404.vue')
  }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
    routes
})
router.beforeEach((to,from,next) => {
	 const keys = localStorage.keys;
	 if(to.meta.login){
		 if(keys){
			 next()
		 }else{
			 next('/login')
		 }
	 }else{
		 next()
	 }
})
export default router
