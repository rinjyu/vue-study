import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import RenderingVIf from "@/views/data-binding/RenderingVIf";
import RenderingVShow from "@/views/data-binding/RenderingVShow";
import MockDataBindingList from "@/views/mock/MockDataBindingList";

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
  },
  {
    path: '/mock/data-binding-list',
    name: 'MockDataBindingList',
    component: MockDataBindingList
  },
  {
    path: '/component/nested',
    name: 'NestedComponent',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/component/NestedComponent.vue')
  },
  {
    path: '/component/parent1',
    name: 'ParentComponent1',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/component/ParentComponent1.vue')
  },
  {
    path: '/component/parent2',
    name: 'ParentComponent2',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/component/ParentComponent2.vue')
  },
  {
    path: '/component/parent3',
    name: 'ParentComponent3',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/component/ParentComponent3.vue')
  },
  {
    path: '/component/parent4',
    name: 'ParentComponent4',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/component/ParentComponent4.vue')
  },
  {
    path: '/component/parent5',
    name: 'ParentComponent5',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/component/ParentComponent5.vue')
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/slot/SlotUseModalLayout.vue')
  },
  {
    path: '/provide-inject',
    name: 'ProvideInjectParent',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/provide-inject/ProvideInjectParent.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/composition/Calculator.vue')
  },
  {
    path: '/composition1',
    name: 'CompositionAPI1',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/composition/CompositionAPI1.vue')
  },
  {
    path: '/composition2',
    name: 'CompositionAPI2',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/composition/CompositionAPI2.vue')
  },
  {
    path: '/composition3',
    name: 'CompositionAPI3',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/composition/CompositionAPI3.vue')
  },
  {
    path: '/composition4',
    name: 'CompositionAPI4',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/composition/CompositionAPI4.vue')
  },
  {
    path: '/composition-provide',
    name: 'CompositionAPIProvide',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/composition/CompositionAPIProvide.vue')
  },
  {
    path: '/custom-directive',
    name: 'CustomDirective',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/composition/CustomDirective.vue')
  },
  {
    path: '/mixins',
    name: 'Mixins',
    component: () => import( /* webpackPrefetch: true, webpackChunkName: "provide" */ '../views/composition/Mixins.vue')
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: () => import( /* webpackChunkName: "plugins" */ '../views/composition/Plugins.vue')
  },
  {
    path: '/store-access',
    name: 'StoreAccess',
    component: () => import( /* webpackChunkName: "plugins" */ '../views/vuex/StoreAccess.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router