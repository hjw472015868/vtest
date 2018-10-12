<template>
	<div>
		{{msg}}<br>
		<p v-bind:class="{active:isActive, 'demo':Demo}" @click="pclick">{{pcontent}}</p>
		<p v-bind:class="styleobj" @click="pclick">{{pcontent}}</p>


		<p v-bind:class="arrDemo" @click="arrDemoClick">数组语法</p>

		<p v-bind:class='[{active:true}, "cid-" + cid]' >瞎几把灵活</p>

		<ul>
			<li v-bind:class="[{active:index%2},'demo']" v-for="(name,index) in names" v-bind:key="index">{{name}}</li>
		</ul>

	</div>
</template>

<script type="text/javascript">
	export default{
		name : "StyleTest",
		data(){
			return{
				msg:"StyleTest !",
				pcontent:"来点我试一试!",
				isActive:false,
				Demo:false,
				styleobj:{
					active:false,
					demo:false,
				},
				arrDemo:["active", "demo"],
				cid : 10,
				names:["jack", "shak", "tock"],
			}
		},
		methods:{
			pclick(){
				this.isActive = !this.isActive;
				this.Demo = !this.Demo;
				this.styleobj.demo = !this.styleobj.demo;
				this.styleobj.active = !this.styleobj.active;
				if (this.isActive) {
					this.pcontent = "草, 再点一下试试!";
				}else {
					this.pcontent = "mmp, 你还点上瘾了!";
				}
			},

			arrDemoClick(){
				console.log("点了")
				if (this.arrDemo.length==0) {
					this.arrDemo=["active", "demo"]
				}else {
					this.arrDemo = [];
				}
			}
		},

		computed:{
			comPclick:function(){
				this.msg = "qweqwe";
				return this.msg;
			}
		},
	}
</script>

<style type="text/css">
	.active{
		color:orange;
	}
	.demo{
		font-size: 20px;
	}
</style>