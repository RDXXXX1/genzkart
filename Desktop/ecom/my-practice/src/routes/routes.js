import GenZPage from "@/components/pages/GenZPage.vue";
import BeautyPage from "@/components/pages/BeautyPage.vue";
import HomePage from "@/components/pages/HomePage.vue";
import KidsPage from "@/components/pages/KidsPage.vue";
import MenPages from "@/components/pages/MenPages.vue";
import WomenPage from "@/components/pages/WomenPage.vue";
import ProductDiscription from "@/components/ProductDiscription.vue";
import CartComponent from "@/components/Cart/CartComponent.vue";

const  routes=[

    {path:'/Beauty' ,component:BeautyPage},
    { path:'/GenZ',component:GenZPage},
    { path:'/',component:HomePage},
    { path:'/Home',component:HomePage},
    {path:'/Kids',component:KidsPage},
    {path:'/Men',component:MenPages},
    {path:'/Women',component:WomenPage},
    {path:'/product-description/:slug',component:ProductDiscription,props:true},
    {path:'/cart',component:CartComponent}

]

export default routes;