<template>
   <div class="row">
      <div class="col-lg-12">
         <h1>Events  <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">Add new</button></h1>
         <hr />
      </div>
      <EventItem v-for="item in $store.getters.events" v-bind:key="id" :item="item"/>
   </div>
   <div class="modal fade" id="exampleModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title">Create event</h5>
               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <EventCreateForm :event="event" />
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import EventItem from '@/components/Events/List/EventItem.vue'
import EventCreateForm from '@/components/Events/Forms/EventCreateForm.vue'

export default {
    components: {
        EventItem,
        EventCreateForm
    },
    data() {
        return {
            items: [],
            submited: false,
            response: ''
        }
    },
    methods: {
        async getData() {
            if (this.$store.getters.lockedEventsLoad) {
                try {
                    const response = await this.$http.get(
                        "http://127.0.0.1:3000/events.txt"
                    );
                    this.$store.commit('lockEventsLoad');

                    this.items = response.data;
                    this.$store.commit('setEvents', response.data)
                } catch (error) {
                    console.log(error);
                }
            }
        }, 
    },
    created() {
        this.getData();
    },
}
</script>