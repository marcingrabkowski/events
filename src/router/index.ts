import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventView from '../views/EventView.vue'
import CreateEvent from '../views/Events/Forms/Create.vue'
import EventsListView from '../views/EventsListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/events',
      name: 'events',
      component: EventsListView
    },
    {
      path: '/event/:id',
      name: 'eventView',
      component: EventView
    },
    {
      path: '/event/create',
      name: 'createEvent',
      component: CreateEvent
    },
  ]
})

export default router
