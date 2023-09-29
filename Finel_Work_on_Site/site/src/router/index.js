import Vue from 'vue';
import VueRouter from 'vue-router';
import Home_page from '@/pages/Home_page.vue';
import Blog_page from '@/pages/Blog_page.vue';
import Project_page from '@/pages/Project_page.vue';
import NotFound from '@/pages/NotFound.vue';

Vue.use(VueRouter);

export default new VueRouter({
    // base: '/',
    mode: 'history',
    routes:[
        {
            path: '/Home',
            name: 'Home',
            component: Home_page
        },
        {
            path: '/Project',
            name: 'Project',
            component: Project_page
        },
        {
            path: '/Blog',
            name: 'Blog',
            component: Blog_page
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '*',
            component: NotFound
        }
    ]
});