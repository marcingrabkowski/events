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
</template>

<script>
    export default {
        props: ['event', 'v$', 'submited']
    }
</script>