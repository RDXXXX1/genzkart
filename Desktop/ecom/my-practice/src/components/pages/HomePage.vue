<template>
    <div class="mt-20" >
    <!-- <div class="flex flex-wrap gap-10 items-center "> -->
        <!-- <div class="flex flex-wrap m-1 "> -->
<BannerCom/>
            <p class="mx-24  font-bold text-4xl ">Trending items for Men</p>
        <ProductCard  :products=" menProducts"/>   

          <p class="mx-24  font-bold text-4xl ">Trending items for Women</p>
          <ProductCard :products="womenProducts"/>

           <p class="mx-24  font-bold text-4xl ">Trending items for Kids</p>
          <ProductCard :products="kidsProducts"/>

           <p class="mx-24  font-bold text-4xl ">Trending  Beauty Products</p>
          <ProductCard :products="beautyProducts"/>

          <p class="mx-24  font-bold text-4xl ">GenZ new Arrivals</p>
          <ProductCard :products="genZProducts"/>

         

      
</div>

</template>

<script>
import ProductCard from '../ProductCard.vue';
import { products } from '@/data/products';
import BannerCom from '../BannerCom.vue';

 import { EventBus } from '@/main';
export default{
    name:"HomePage",

    data(){
        return{
            toDo:null,
            Products:products,
            TransferProducts:[],
        }
    },
    components:{
        ProductCard,
        BannerCom,
        
    },
    mounted(){

        this.TransferProducts.push(this.menProducts),
        this.TransferProducts.push(this.womenProducts),
        this.TransferProducts.push(this.kidsProducts),
        this.TransferProducts.push(this.beautyProducts),
        this.TransferProducts.push(this.genZProducts),

        console.log("my name is rd ",this.TransferProducts.menProducts);
 EventBus.$emit("TransferOfProducts",this.TransferProducts),

 console.log("my name is event ",EventBus.$emit("TransferOfProducts",this.TransferProducts));


},
computed:{
    menProducts(){
        
        return this.Products.filter(p=>p.category=="Men")
    },
    womenProducts(){
        return this.Products.filter(p=>p.category=="Women")
    },
    kidsProducts(){
        return this.Products.filter(p=>p.category=="Kids")
    },
    beautyProducts(){
        return this.Products.filter(p=>p.category=="Beauty")
    },
     genZProducts(){
        return this.Products.filter(p=>p.category=="GenZ")
    },

   



},
    
}

</script>