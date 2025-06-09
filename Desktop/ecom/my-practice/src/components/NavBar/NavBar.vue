<!-- 
<template>
  <div class="h-20  flex justify-between items-center px-4 fixed top-0 w-full z-50 bg-white  ">
   
    <div class="flex items-center m-3">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzxAPq8BsMvq33e6gnKELbM6L3NKdy6gF5g&s"
        class="h-14 w-14 object-contain "
        alt="Logo"
      />
    </div>

  
    
    <div class="flex space-x-6 font-bold">
      <router-link to="/Men" class="cursor-pointe">Men</router-link>
      <router-link to="/Women" class="cursor-pointer">Women</router-link>
      <router-link to="/Kids" class="cursor-pointer">Kids</router-link>
      <router-link to="/Home" class="cursor-pointer">Home</router-link>
      <router-link to="/Beauty" class="cursor-pointer">Beauty</router-link>
      <router-link to="/GenZ" class="cursor-pointer">GenZ</router-link>
          </div>

   
    <div>
      
      <div class="w-full max-w-sm min-w-[200px] ">
  <div class="relative">
    <input
      class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
      placeholder="Search for Products" 
    />
    <button
      class="absolute top-1 right-1 flex items-center rounded bg-white-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" class="w-5 h-5 mr-2">
        <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
      </svg>
    </button> 
  </div>
</div>
    </div>

   
    <div class="mr-4 flex cursor-pointer">
        <img src="https://cdn0.iconfinder.com/data/icons/user-interface-198/64/user-login-interface-ui-512.png" class="h-14 w-14 object-contain ">
      <p  class="mr-4 mt-4 font-bold">Login </p>
    </div>
  </div>
</template>
<script>

export default{
name:"NavBar",

}

</script> -->



<template>
  <div class="fixed top-0 w-full z-50 bg-white shadow-md">
    <div class="flex justify-between items-center px-4 h-20">
      <!-- Logo -->
      <div class="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVzxAPq8BsMvq33e6gnKELbM6L3NKdy6gF5g&s"
          class="h-14 w-14 object-contain"
          alt="Logo"
        />
      </div>

      <!-- Hamburger button (only visible on mobile) -->
      <button @click="toggleMenu" class="lg:hidden focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="black" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>

      <!-- Navigation links (hidden on mobile, shown on desktop) -->
      <div class="hidden lg:flex space-x-6 font-bold">
        <router-link to="/Men" class="cursor-pointer">Men</router-link>
        <router-link to="/Women" class="cursor-pointer">Women</router-link>
        <router-link to="/Kids" class="cursor-pointer">Kids</router-link>
        <router-link to="/Home" class="cursor-pointer">Home</router-link>
        <router-link to="/Beauty" class="cursor-pointer">Beauty</router-link>
        <router-link to="/GenZ" class="cursor-pointer">GenZ</router-link>
      </div>

      <!-- Search + Login (hidden on mobile, shown on desktop) -->
      <div class="hidden lg:flex items-center space-x-4">
        <div class="relative w-64">
          <input
            class="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 text-sm"
            placeholder="Search for Products"
          />
          <button class="absolute right-2 top-2">
            🔍
          </button>
          
        </div>
        <div class="flex items-center cursor-pointer">
          <img src="https://cdn0.iconfinder.com/data/icons/user-interface-198/64/user-login-interface-ui-512.png" class="h-10 w-10" />
          <p class="ml-2 font-bold">Login</p>
        </div>
       
<div class="relative cursor-pointer p-2   " @click="navigateToCart">
  <img src="https://img.icons8.com/?size=100&id=3686&format=png&color=000000" class="h-6 w-6" alt="Bag Icon" />
  <p class="absolute top-0 right-0 bg-pink-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">{{cartItems.length}}</p>
</div>


      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isOpen" class="lg:hidden flex flex-col px-4 pb-4 space-y-2 font-semibold">
    <router-link to="/Women" @click.native="isOpen = false">Women</router-link>
<router-link to="/Kids" @click.native="isOpen = false">Kids</router-link>
<router-link to="/Home" @click.native="isOpen = false">Home</router-link>
<router-link to="/Beauty" @click.native="isOpen = false">Beauty</router-link>
<router-link to="/GenZ" @click.native="isOpen = false">GenZ</router-link>
      <div class="relative">
        <input
          class="w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 text-sm mt-2"
          placeholder="Search for Products"
        />
        <button class="absolute right-2 top-3">
          🔍
        </button>
      </div>
      <div class="flex items-center mt-2 cursor-pointer">
        <img src="https://cdn0.iconfinder.com/data/icons/user-interface-198/64/user-login-interface-ui-512.png" class="h-8 w-8" />
        <p class="ml-2 font-bold">Login</p>
      </div>
      <div class="relative cursor-pointer p-2   " @click="navigateToCart">
  <img src="https://img.icons8.com/?size=100&id=3686&format=png&color=000000" class="h-6 w-6" alt="Bag Icon" />
  <p class="absolute top-0 right-0 bg-pink-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">{{cartItems.length}}</p>
</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    navigateToCart(){
      this.$router.push('/cart')
    }
  },
  computed:{
    ...mapGetters('cart',['cartItems']),
    cartItemsLength(){
      return this.cartItems
    }
  },

  
};
</script>