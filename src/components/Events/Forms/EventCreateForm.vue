<template>
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
         <input type="text" class="form-control" id="image" name="picture" v-model="event.picture" placeholder="e.g. www.picture.com/doge.png">
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
      <div class="mb-3 text-end">
         <div class="form-group text-end">
         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
         <button type="button" class="btn btn-danger" @click="clearForm">Clear</button>
         <button type="button" class="btn btn-primary" @click="submitForm">Save</button>
         </div>
      </div>
   </form>
</template>
<style scoped>
.btn {
   margin: 5px;
}
</style>
<script>
import {
    reactive,
    computed
} from 'vue'
import useValidate from "@vuelidate/core";
import {
    required,
    email
} from '@vuelidate/validators'
import EventsFormHelper from '@/components/Events/Forms/EventsFormHelper'
import axios from 'axios'

export default {

    data() {
        return {
            items: [],
            submited: false
        }
    },
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
                picture: {
                    required
                },
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
    methods: {
        submitForm() {
            this.submited = true;
            console.log(this.v$);
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
    }

}
</script>