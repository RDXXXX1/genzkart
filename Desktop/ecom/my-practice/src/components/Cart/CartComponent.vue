<template>
  <div class="mt-20  bg-gray-100 w-full min-h-screen sm:p-20 sm:w-3/5  sm:bg-white  sm:mx-auto">
    <div class="bg-white mb-4">
      <p class="text-sm p-2 font-bold">CREDIT CARD OFFERS</p>
      <p class="text-xs ml-2 my-2 text-gray-500">10% Discount on ICICI Bank Credit & Debit Cards. Min Spend ₹3500, Max Discount ₹1000.</p>
      <p class="text-xs ml-2 my-2 text-gray-500">10% Discount on Axis Bank Credit Card. Min Spend ₹3500, Max Discount ₹1000.</p>
      <p class="text-xs ml-2 my-2 text-gray-500">10% Discount on Kotak Bank Credit Cards. Min Spend ₹3500, Max Discount ₹1000.</p>
    </div>
   
    <div v-if="cartItems.length==0" ><p>Shppoing bag is empty</p></div>
     <div v-else>
    <div v-for="item in cartItems" :key="item.id" class="flex my-2 bg-white ">
      <div class="w-1/3 h-1/2 p-1">
        <img :src="item.url" class="object-contain h-full w-full">
      </div>
      <div class="m-2 w-2/3 p-1">
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828778.png" alt="cross image" class="w-2 h-2 ml-auto cursor-pointer" @click="handleRemoveFromCart(item.id)">
        <p class="text-xs font-semibold m-1">{{ item.title.shortTitle }}</p>
       
        
        <p class="truncate whitespace-nowrap overflow-hidden text-sm text-gray-500 m-1">{{ item.title.longTitle }}</p>
        <p class="text-green-500 text-xs m-1">Deal of the day</p>
        <span class="font-semibold text-xs m-1">₹ {{ item.price.cost }}</span>
        <span class="line-through text-gray-500 text-xs">₹ {{ item.price.mrp }}</span>
        <span class="text-red-500 text-xs">({{ item.price.discount }} OFF)</span>
        <p class="text-xs"> <span class="text-xs text-gray-500 m-1">Express</span> Delivery in 2 days</p>
        <p class="font-bold text-xs m-1">Quantity : {{ item.quantity }}</p>
      </div>
    </div>

    
    <div class="bg-white mt-6 ">
      <p class="text-sm p-2 font-bold">PRICE DETAILS ({{ cartItems.length }} Products)</p>
      <hr />

      <div class="flex justify-between mr-2">
        <p class="text-sm ml-2 my-2 text-gray-500">MRP</p>
        <p class="text-sm ml-2 my-2 text-gray-500">₹ {{ totalMrp }}</p>
      </div>

      <div class="flex justify-between mr-2">
        <p class="text-sm ml-2 my-2 text-gray-500">Discount on MRP</p>
        <p class="text-sm ml-2 my-2 text-green-500">- ₹ {{ totalDiscount }}</p>
      </div>

      <div class="flex justify-between mr-2">
        <p class="text-sm ml-2 my-2 text-gray-500">Platform Fee <span class="text-pink-500 text-xs font-bold">Know More</span></p>
        <p class="text-sm ml-2 my-2 text-gray-500">₹ 0</p>
      </div>

      <div class="flex justify-between mr-2">
        <p class="text-sm ml-2 my-2 text-gray-500">Shipping Fee <span class="text-pink-500 text-xs font-bold">Know More</span></p>
        <p class="text-sm ml-2 my-2 text-gray-500">Free</p>
      </div>

      <hr />
      <div class="flex justify-between mr-2">
        <p class="text-sm font-semibold ml-2 py-4">Total Amount</p>
        <p class="text-sm font-semibold ml-2 py-4">₹ {{ totalCost }}</p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CartComponent',
  computed: {
    ...mapGetters('cart', ['cartItems']),
    totalCost() {
      return this.cartItems.reduce((sum, item) => sum + item.price.cost * item.quantity, 0);
    },
    totalMrp() {
      return this.cartItems.reduce((sum, item) => sum + item.price.mrp * item.quantity, 0);
    },
    totalDiscount() {
      return this.totalMrp - this.totalCost;
    }
  },
  methods: {
    ...mapActions('cart', ['addToCart', 'removeFromCart', 'clearCart']),

handleRemoveFromCart(id){
   
        return this.removeFromCart(id);
    }
  },
  mounted() {
    console.log("🛒 Cart Items:", this.cartItems);
  }
};
</script>