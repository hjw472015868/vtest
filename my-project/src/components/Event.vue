<template>
	<!-- 在template中只能存在一个根组件 -->
	<div class="event">
		<ul>
			<li v-for="(name, index) in names" :key="index" v-on:click.once="getIndexAndValue(index, name, $event)">{{name}}</li>
		</ul>
		
		<button type="" v-on:click="arrpush">点击</button><br>	
		
		<input type="text" name="" value="" v-on:keyup="getKeyInfo($event)">
		<br>
		<input type="text" name="" value="" v-on:keyup.enter="getKeyInfo($event)">
		<button type="" @click="getOdd">我要奇数</button>
		<span v-text></span>

		<p>{{msg}}</p>
		<p>翻转字符串 {{ msgre() }}</p>

	</div>
</template>


<!-- script.要导出被外部访问 -->
<script type="text/javascript">
	export default{
		data(){
			return{
				names:["TOM", "jack", "babo"],
				index:0,
				nums:[1,2,3,4,5,6,7],
				odd:[],
				msg:"Hello , Nice to meet you!",
			}
		},
		methods:{
			getIndexAndValue(index, name, event){
				console.log(this)
				console.log(index, name)
				console.log(event)
			},
			arrpush(){
				this.index++;
				var str = "tom" + this.index;
				// this.names.push(str);
				this.names.concat(str);
			},
			getKeyInfo(event){
				console.log(event);
			},
			getOdd(){
				
				this.nums.filter(function(num){
						if (num%2==0) {
						console.log(num);
					}
				})
			},
			msgre(){
				return this.msg.split("").reverse().join("");
			}

		},
		computed:{
			// msgre(){
			// 	return this.message.split("").reverse().join("");
			// }
		},
	}
</script>


<style type="text/css" media="screen" lang="css">
	
</style>