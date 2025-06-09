<template>
  <div >
   <NavBar/>
   <RouterView></RouterView>
  </div>
 
</template>

<script>


import NavBar from './components/NavBar/NavBar.vue';
export default {
  name: "App",
  components:{
    NavBar,
   
  }
};
</script>

<style>
@import "./assets/tailwind.css";
</style>