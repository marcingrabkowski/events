<template>
   <div class="col-lg-4 event">
      <div class="card" style="width: 100%; height:100%;">
         <img class="card-img-top event-image" v-bind:src="item.image" alt="Card image cap">
         <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.body }}</p>
            <router-link :to="`/event/${item.id}`">
               <button class="btn btn-primary">Show</button>
            </router-link>
         </div>
      </div>
   </div>
</template>

<script>
    export default {
        props: ['item']
    }
</script>