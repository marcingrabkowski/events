<template>
  <div class="row">
    <div class="col-lg-12">
      <h1>{{ item.title }}</h1>
      <p>{{ item.fullDescription }}</p>
  </div>
</div>
</template>


<script>
    export default {
  
    data() {
      return {
        item: ''
      }
    },
    methods: {
      addEvents() {

      },
        async getData() {
      try {
        const response = await this.$http.get(
          "http://127.0.0.1:3000/event.txt"
        );

        this.item = response.data;
      } catch (error) {
        console.log(error);
      }
    },

    },
     created() {
    this.getData();
  },
  }
</script>