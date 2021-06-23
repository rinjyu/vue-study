import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import RenderingVIf from "@/views/data-binding/RenderingVIf";
import RenderingVShow from "@/views/data-binding/RenderingVShow";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/data-binding',
    name: 'DataBinding',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBinding.vue')
  },
  {
    path: '/data-binding/html',
    name: 'DataBindingHtml',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBindingHtml.vue')
  },
  {
    path: '/data-binding/input-text',
    name: 'DataBindingInputText',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBindingInputText.vue')
  },
  {
    path: '/data-binding/input-number',
    name: 'DataBindingInputNumber',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBindingInputNumber.vue')
  },
  {
    path: '/data-binding/textarea',
    name: 'DataBindingTextarea',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBindingTextarea.vue')
  },
  {
    path: '/data-binding/select',
    name: 'DataBindingSelect',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBindingSelect.vue')
  },
  {
    path: '/data-binding/checkbox',
    name: 'DataBindingCheckbox',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBindingCheckbox.vue')
  },
  {
    path: '/data-binding/radio',
    name: 'DataBindingRadio',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBindingRadio.vue')
  },
  {
    path: '/data-binding/attribute',
    name: 'DataBindingAttribute',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBindingAttribute.vue')
  },
  {
    path: '/data-binding/button',
    name: 'DataBindingButton',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBindingButton.vue')
  },
  {
    path: '/data-binding/class',
    name: 'DataBindingClass',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBindingClass.vue')
  },
  {
    path: '/data-binding/style',
    name: 'DataBindingStyle',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBindingStyle.vue')
  },
  {
    path: '/data-binding/list',
    name: 'DataBindingList',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/data-binding/DataBindingList.vue')
  },
  {
    path: '/data-binding/rendering-v-if',
    name: 'RenderingVIf',
    component: RenderingVIf
  },
  {
    path: '/data-binding/rendering-v-show',
    name: 'RenderingVShow',
    component: RenderingVShow
  },
  {
    path: '/event/click',
    name: 'EventClick',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/event/EventClick.vue')
  },
  {
    path: '/event/change',
    name: 'EventChange',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/event/EventChange.vue')
  },
  {
    path: '/event/key',
    name: 'EventKey',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/event/EventKey.vue')
  },
  {
    path: '/event/computed',
    name: 'Computed',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/event/Computed.vue')
  },
  {
    path: '/event/watch',
    name: 'Watch',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/event/Watch.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router