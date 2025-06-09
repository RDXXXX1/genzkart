<template>
<div class="m-20 flex flex-wrap  border border-yellow-800">
<div v-for="post in postData" :key="post.id">
    <p>{{ post.id }}</p>
     <p>{{ post.title }}</p>
      <p>{{ post.body }}</p>

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
