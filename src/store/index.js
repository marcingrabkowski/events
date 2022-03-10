import { createStore } from 'vuex'
import axios from 'axios';

export default createStore({
state: {
    events : [],
    lockedEventsLoad: true
  },
mutations: {
  setEvents(state, events) {
    state.events = events;
},
lockEventsLoad(state) {
  state.lockedEventsLoad = null;
},
addEvent(state, event) {
  state.events.push(event)
}
},
actions: {

  },
getters: {
  events: (state) => state.events,
  lockedEventsLoad: (state) => state.lockedEventsLoad
  }
})
