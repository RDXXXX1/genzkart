<template>
  <div class="m-20 flex flex-wrap border border-yellow-800 bg-yellow-50 p-6 rounded-lg shadow-lg">
    <div v-for="post in postData" :key="post.id" class="w-full md:w-1/2 lg:w-1/3 p-4">
      <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <p class="text-gray-700 font-semibold mb-2">{{ post.id }}</p>
        <p class="text-xl font-bold text-yellow-800 mb-4">{{ post.title }}</p>
        <p class="text-gray-600">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default{
    Name:'ApiComponent',

     data(){
        return{
            postData:null,

        }
    },
    
    mounted(){
        fetch('https://jsonplaceholder.typicode.com/posts').then(response=>response.json()).then( data=>{
    this.postData=data;
  console.log("post data",this.postData);
        }).catch(error=>console.error(error));




    }

}



</script>
