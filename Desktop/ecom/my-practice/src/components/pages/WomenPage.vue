<template>
    <div class="mt-20">
    <div v-for="products in filterProducts" :key="products.id">
        <ProductCard :products="products"/>
       </div>
    </div>
</template>

<script>
import { products } from '@/data/products';
import ProductCard from '../ProductCard.vue';

export default{
    name:"WomenPage",

    data(){
        return {
            Products:products,
            filterProducts:[],
        }
    },
     mounted(){

        this.filterProducts.push(this.Products.filter(p=>p.category=="Women"));

        console.log("i am at men page hurray",this.filterProducts);

     },
     components:{
        ProductCard,
     }
}

</script>