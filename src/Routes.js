import Home from "./Components/Home.vue";

export const Routes = [
  {
    path: "/",
    component: Home
  },
  {
    path:'*',
    redirect:'/404'
  }
];
