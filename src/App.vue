<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <header>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">EManager</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/events" class="nav-link">Events</RouterLink>
        <RouterLink to="/event/create" class="nav-link">Create event</RouterLink>
      </div>
    </div>
  </div>
</nav>
  </header>
<div class="container bodyContainer">
  <RouterView />
</div>
</template>

<style>
@import '@/assets/base.css';
</style>
