<template>
  <div class="hello">
    {{hello}}
    {{1+1}}
    {{"哈哈"}}
    {{true ? '对的' :'错的'}}
    <p>{{flag}}</p>
    <p v-html="hello1"></p><!--渲染文本, 会渲染元素的文本-->
    <p v-text="hello1"></p><!--渲染纯文本-->
    <span v-bind:class="ha">绑定class的ha</span>
    <span v-bind:title="ts">提示</span>
    <span v-bind:id="dbid">绑定id</span>
    <br>
    {{hello.split("").reverse().join("")}}<!--只能是单行语句, 不能是多行语句-->
  
    <div v-bind:class="bac">
      <!-- template不会生成便签, 但他是UI层的 -->
      <template v-if="show" v-bind:class="ha">
        <span>我是if=true时候的</span>
        <a href="#">哈哈</a>
        <span>iwen</span>
      </template>
      <template v-else="show" v-bind:id="dbid">
        <span>我是if=flase时候的</span>
        <a href="#">呵呵</a>
        <span>back</span>

        <!-- v-if 与 v-show的区别 -->
        <span v-show="show">我是v-show显示的内容</span>
      </template>
    </div>

    <div class="list">
          <ul>
            <li v-for="(name, index) in names" v-bind:key="index">{{name}}</li>
          </ul>
    </div>

    <template>
      <ul>
        <li v-for="(user, index) in users" :key="index">{{"序号:"+user.id+"姓名:"+user.name+"~"+"年纪:"+user.age}}</li>
      </ul>
    </template>

    <p v-if="bl">TRUE</p>

    <button type="" v-on:click="num++">加</button>
    <p>{{num}}</p>

    <button type="" v-on:click="handleClick">按钮1</button>
  
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        hello: 'Welcome to Your Vue.js App',
        flag:'我是flag',
        hello1: '<p>Welcome to Your Vue.js App</p>',
        ts:"我是提示",
        ha:"ha",
        dbid:"dbid",
        show:false,
        bac:"bac",
        names:["tom", "jack", "macle"],
        bl: 0?true:true,
        num:1,
        users:[
          {
            id:0,
            name:"json",
            age:20,
          },
          {
            id:1,
            name:"macle",
            age:21,
          },
          {
            id:2,
            name:"babo",
            age:22,
          },
        ],
    }
  },
  methods:{
    handleClick(){
      // this来索引当前data中的数据
      // console.log(this)
      // this指向当前组件
      this.show = !this.show;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ha{
  color:red;
}
#dbid{
  color: yellow;
}
.bac{
  background: purple;
  width: 300px;
  height: 300px;
}
</style>
