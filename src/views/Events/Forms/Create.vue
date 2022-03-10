<template>
<div class="row">
   <div class="col-lg-3"> </div>
   <div class="col-lg-6">
      <div class="card">
        <div class="card-header">
            <h5 style="margin:5px">Create Event</h5>
        </div>
         <div class="card-body">
            <div class="col-lg-12">
               <div class="row">
                  <EventCreateForm :event="event" />
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</template>


<script>
  import EventCreateForm from '@/components/Events/Forms/EventCreateForm.vue'

  export default {

    setup() {

    },

    components: {
      EventCreateForm
    },
    data() {
      return {
        items: [],
        submited: false
      }
    },
    methods: {

    },
    created() {

    },
  }
</script>