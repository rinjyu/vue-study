import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from "@/views/data-binding/DataBinding";
import DataBindingHtml from "@/views/data-binding/DataBindingHtml";
import DataBindingInputText from "@/views/data-binding/DataBindingInputText";
import DataBindingInputNumber from "@/views/data-binding/DataBindingInputNumber";
import DataBindingTextarea from "@/views/data-binding/DataBindingTextarea";
import DataBindingSelect from "@/views/data-binding/DataBindingSelect";
import DataBindingCheckbox from "@/views/data-binding/DataBindingCheckbox";
import DataBindingRadio from "@/views/data-binding/DataBindingRadio";
import DataBindingAttribute from "@/views/data-binding/DataBindingAttribute";
import DataBindingButton from "@/views/data-binding/DataBindingButton";
import DataBindingClass from "@/views/data-binding/DataBindingClass";
import DataBindingStyle from "@/views/data-binding/DataBindingStyle";
import DataBindingList from "@/views/data-binding/DataBindingList";
import RenderingVIf from "@/views/data-binding/RenderingVIf";
import RenderingVShow from "@/views/data-binding/RenderingVShow";
import EventClick from "@/views/event/EventClick";
import EventChange from "@/views/event/EventChange";
import EventKey from "@/views/event/EventKey";
import Computed from "@/views/event/Computed";
import Watch from "@/views/event/Watch";

Vue.use(VueRouter)

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
    component: DataBinding
  },
  {
    path: '/data-binding/html',
    name: 'DataBindingHtml',
    component: DataBindingHtml
  },
  {
    path: '/data-binding/input-text',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/data-binding/input-number',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/data-binding/textarea',
    name: 'DataBindingTextarea',
    component: DataBindingTextarea
  },
  {
    path: '/data-binding/select',
    name: 'DataBindingSelect',
    component: DataBindingSelect
  },
  {
    path: '/data-binding/checkbox',
    name: 'DataBindingCheckbox',
    component: DataBindingCheckbox
  },
  {
    path: '/data-binding/radio',
    name: 'DataBindingRadio',
    component: DataBindingRadio
  },
  {
    path: '/data-binding/attribute',
    name: 'DataBindingAttribute',
    component: DataBindingAttribute
  },
  {
    path: '/data-binding/button',
    name: 'DataBindingButton',
    component: DataBindingButton
  },
  {
    path: '/data-binding/class',
    name: 'DataBindingClass',
    component: DataBindingClass
  },
  {
    path: '/data-binding/style',
    name: 'DataBindingStyle',
    component: DataBindingStyle
  },
  {
    path: '/data-binding/list',
    name: 'DataBindingList',
    component: DataBindingList
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
    component: EventClick
  },
  {
    path: '/event/change',
    name: 'EventChange',
    component: EventChange
  },
  {
    path: '/event/key',
    name: 'EventKey',
    component: EventKey
  },
  {
    path: '/event/computed',
    name: 'Computed',
    component: Computed
  },
  {
    path: '/event/watch',
    name: 'Watch',
    component: Watch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router