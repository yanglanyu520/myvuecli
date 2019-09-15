import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/login/HelloWorld'
// import NewContact from '@/components/login/NewContact'
import Login from '@/views/login/index'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/newcontact',
    //   name: 'NewContact',
    //   component: NewContact
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
