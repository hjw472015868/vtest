<template>
	<div>

		<button type="" v-on:click="haha">哈哈</button><br>
		<button type="" v-on:click="hehe">呵呵</button><br>
		<button type="" v-on:click="">翻转</button>

		<!-- v-model双向数据绑定 -->
		<input type="text" name="" value="" v-model.number="msg"><br>
		<p>{{msg}}</p>
		<p>{{message}}</p>
		
		<P>-----------------------------------------------------</P>

		<input type="text" name="" v-model.number="num1">
		+
		<input type="text" name="" value="" v-model.number="num2">
		=
		<input type="text" name="" value="" v-model.number="num3" v-on:click="sum">

		<P>-----------------------------------------------------</P>

		<p>Ask a question:</p>
		<input type="" name="" value="" v-model="question">
		<p v-text="anwser"></p>


	</div>
</template>


<script>
	export default{
		name:"fordata",
		data(){
			return{
				msg:"Hello",
				message:"",
				num1:"",
				num2:"",
				num3:"",
				question:"",
				anwser:"你不问, 我就不答",
			}
		},
		watch:{//监听器
			msg: function(data){
				if (data == "haha") {
					alert("haha");
				}
				console.log(data);

				setTimeout(()=>{
					this.message = data;
				}, 1000)
			}
		},
		methods:{
			haha:function(){
				console.log('哈哈哈被点击了!');
			},
			hehe(){
				console.log('我是呵呵呵')
			},
			sum(){
				this.num3 = this.num1+this.num2;
				console.log(this.num3);
				return this.num3;
			}
		}
		
	}
</script>


<style type="text/css">
	
</style>



























