<!-- 

<template>
  <div class="flex flex-wrap m-8 " >
    <div class="cursor-pointer   hover:border-yellow-100   m-auto mb-4  w-64 h-120" v-for="product in products" :key="product.id" @click="navigateTo(product.slug)">
     <div class="flex justify-center items-center">
        <img :src="product.url" class="w-48 h-64 p-2 object-contain justify-center items-center transition-transform duration-300 transform hover:scale-105">
      </div>
      <div class="px-10 ">
        <h3 class="font-bold"> {{ product.title.shortTitle }}</h3>
        <p class="truncate w-full text-gray-500 font-semibold text-sm"> {{ product.title.longTitle }}</p>
      
         <div class="text-sm space-x-2">
  <span class="font-semibold text-green-600">₹{{ product.price.cost }}</span>
  <span class="line-through text-gray-500">₹{{ product.price.mrp }}</span>
  <span class="text-red-500">({{ product.price.discount }} OFF)</span>
</div>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ProductCard',
  props: ['products'],
  mounted() {
    console.log(this.products);
  },
 methods:{
  navigateTo:function(link){
    
    this.$router.push(`/product-description/${link}`);
  }
 }

};
</script> -->




<!-- 

<template>
  <div class="flex flex-wrap" >
    <div class="cursor-pointer w-full   hover:border-yellow-100   md:m-auto mb-4  md:w-64 md:h-120" v-for="product in products" :key="product.id" @click="navigateTo(product.slug)">
     <div class="flex justify-center items-center ">
        <img :src="product.url" class=" w-full h-64 p-1 md:w-48 md:h-64 md:p-2 object-contain justify-center items-center transition-transform duration-300 transform hover:scale-105">
      </div>
      <div class="px-10 ">
        <h3 class="font-bold"> {{ product.title.shortTitle }}</h3>
        <p class="truncate w-full text-gray-500 font-semibold text-sm"> {{ product.title.longTitle }}</p>
      
         <div class="text-sm space-x-2">
  <span class="font-semibold text-green-600">₹{{ product.price.cost }}</span>
  <span class="line-through text-gray-500">₹{{ product.price.mrp }}</span>
  <span class="text-red-500">({{ product.price.discount }} OFF)</span>
</div>

      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'ProductCard',
  props: ['products'],
  mounted() {
    console.log(this.products);
  },
 methods:{
  navigateTo:function(link){
    
    this.$router.push(`/product-description/${link}`);
  }
 }

};
</script> -->




<template>
  <div class="flex flex-wrap justify-center">
    <div
      class="cursor-pointer p-4 w-full mb-4 sm:w-64 sm:h-auto sm:m-4"
      v-for="product in products"
      :key="product.id"
      @click="navigateTo(product.slug)"
    >
     
      <div class="sm:flex sm:justify-center sm:items-center">
        <img
          :src="product.url"
          class="w-full h-auto sm:w-48 sm:h-64 object-contain transition-transform duration-300 transform hover:scale-105"
        />
      </div>

      <div class="px-4 py-2">
        <h3 class="font-bold">{{ product.title.shortTitle }}</h3>
        <p class="truncate w-full text-gray-500 font-semibold text-sm">
          {{ product.title.longTitle }}
        </p>

        <div class="text-sm space-x-2 mt-1">
          <span class="font-semibold text-green-600">₹{{ product.price.cost }}</span>
          <span class="line-through text-gray-500">₹{{ product.price.mrp }}</span>
          <span class="text-red-500">({{ product.price.discount }} OFF)</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'ProductCard',
  props: ['products'],
  mounted() {
    console.log(this.products);
  },
 methods:{
  navigateTo:function(link){
    
    this.$router.push(`/product-description/${link}`);
  }
 }

};
</script>
