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
               <form>
                  <div class="mb-3">
                     <label for="name" class="form-label">Name</label>
                     <input type="text" class="form-control" v-model="event.name" name="name" placeholder="Event name">
                     <span v-if="submited && v$.name.$invalid" class="errorMessage"> {{ v$.name.$silentErrors[0].$message }} </span>
                  </div>
                  <div class="mb-3">
                     <label for="date" class="form-label">Date</label>
                     <input type="datetime-local" class="form-control" v-model="event.date" name="date">
                     <span v-if="submited && v$.date.$invalid" class="errorMessage"> {{ v$.date.$silentErrors[0].$message }} </span>
                  </div>
                  <div class="mb-3">
                     <label for="description" class="form-label">Description</label>
                     <textarea class="form-control" id="description" v-model="event.description" name="description"></textarea>
                     <span v-if="submited && v$.description.$invalid" class="errorMessage"> {{ v$.description.$silentErrors[0].$message }} </span>
                  </div>
                  <div class="mb-3">
                     <label for="text" class="form-label">Picture (url)</label>
                     <input type="text" class="form-control" id="image" name="picture" v-model="event.image" placeholder="e.g. www.picture.com/doge.png">
                  </div>
                  <div class="mb-3">
                     <label for="type" class="form-label">Event type</label>
                     <select id="type" name="type" class="form-control" v-model="event.type">
                        <option value="1"> Sport</option>
                        <option value="2"> Culture</option>
                        <option value="3"> Health</option>
                     </select>
                     <span v-if="submited && v$.type.$invalid" class="errorMessage"> {{ v$.type.$silentErrors[0].$message }} </span>
                  </div>
                  <div class="mb-3">
                     <label for="phone_number" class="form-label">Phone number</label>
                     <input type="number" class="form-control" v-model="event.phone_number" name="phone_number" placeholder="+48 123456789">
                     <span v-if="submited && v$.phone_number.$invalid" class="errorMessage"> {{ v$.phone_number.$silentErrors[0].$message }} </span>
                  </div>
                  <div class="mb-3">
                     <label for="email" class="form-label">Contact email</label>
                     <input type="email" class="form-control" v-model="event.email" name="email" placeholder="email@email.com">
                     <span v-if="submited && v$.email.$invalid" class="errorMessage"> {{ v$.email.$silentErrors[0].$message }} </span>
                  </div>
                  <div class="mb-3">
                     <label for="place" class="form-label">Event place</label>
                     <input type="text" class="form-control" v-model="event.place" name="place" placeholder="Event place (city)">
                     <span v-if="submited && v$.place.$invalid" class="errorMessage"> {{ v$.place.$silentErrors[0].$message }} </span>
                  </div>
               </form>
            </div>
            <div class="modal-footer">
               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
               <button type="button" class="btn btn-danger" @click="clearForm">Clear</button>
               <button type="button" class="btn btn-primary" @click="submitForm">Save</button>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import EventItem from '@/components/Events/List/EventItem.vue'
import EventsFormHelper from '@/components/Events/Forms/EventsFormHelper'
import useValidate from "@vuelidate/core";
import {
    required,
    email
} from '@vuelidate/validators'
import {
    reactive,
    computed
} from 'vue'
import axios from 'axios';
import store from '../store'

export default {

    setup() {
        const event = reactive({
            name: '',
            date: '',
            description: '',
            picture: '',
            type: '',
            phone_number: '',
            email: '',
            place: ''
        })

        const rules = computed(() => {
            return {
                name: {
                    required
                },
                date: {
                    required
                },
                description: {
                    required
                },
                picture: {},
                type: {
                    required
                },
                phone_number: {
                    required
                },
                email: {
                    required,
                    email
                },
                place: {
                    required
                }
            }
        })

        const v$ = useValidate(rules, event)

        return {
            event,
            v$
        }
    },

    components: {
        EventItem
    },
    mounted() {

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
                console.log(!this.$store.getters.lockedEventsLoad)
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
        submitForm() {
            this.submited = true;

            if (!this.v$.$invalid) {

              //to powinno byc dopiero w then, ale nie mam endpointa
                this.$store.commit('addEvent', {
                    title: this.event.name,
                    date: this.event.date,
                    body: this.event.description,
                    image: EventsFormHelper.imageExists(this.event.picture) ? this.event.picture : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxFp-IkltO0_DxCbqBV0LIhcXRwDzkPfxtkQ&usqp=CAU',
                    type: '',
                    phone_number: '',
                    email: '',
                    place: ''
                })

                alert('form submitted, but endpoint doesnt exists :(')

                axios.post('/contact', this.event)
                    .then((res) => {
                     
                    })
                    .catch((error) => {
                   
                    }).finally(() => {
                    
                    });

                    this.clearForm();
            }
        },

        clearForm() {
            this.event.name = ''
            this.event.date = ''
            this.event.description = ''
            this.event.picture = ''
            this.event.type = ''
            this.event.phone_number = ''
            this.event.email = ''
            this.event.place = ''

            this.submited = 0;
        }

    },
    created() {
        this.getData();
    },
}
</script>