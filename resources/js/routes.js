import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/js/pages/Home';
import Edit from '@/js/pages/Sources/Edit';
import SourcesIndex from '@/js/pages/Sources/Index';
import IssuesIndex from '@/js/pages/Issues/Index';
import View from '@/js/pages/Issues/View';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sources',
      name: 'sources',
      component: SourcesIndex,
    },
    {
      path: '/sources/:id/edit',
      name: 'source.edit',
      component: Edit,
      props: true,
    },
    {
      path: '/issues',
      name: 'issues',
      component: IssuesIndex,
    },
    {
      path: '/issues/:id',
      name: 'issues.view',
      component: View,
      props: true,
    },
  ],
});

export default router;