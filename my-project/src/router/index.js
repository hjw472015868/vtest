import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Events from '@/components/Event'
import Fordata from "@/components/fordata"
import StyleTest from "@/components/StyleTest"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: StyleTest,
    }
  ]
})
