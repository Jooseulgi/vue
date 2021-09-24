import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '@/views/LoginPage.vue';
// import SignupPage from '@/views/SignupPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history', //url에 #이 들어가는걸 막아준다
  //주의해야할것! 배포할때 history에 나오는 설정을 해줘야한다 (서버가정보를알수있게)
  routes: [
    {
      path: '/',
      //리다이렉트 ! localhost:8080으로 진입했을때 기본적으로 login페이지로 가게해준다
      redirect: '/login',
    },
    {
      path: '/login',
      // 만약 페이지가 30개면 먼저 한개를 보여주고 나머지 29개는 클릭햇을때 나오게하는게 코드 스플렛
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      //없는 페이지 주소들은 다 여기로!!
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});
