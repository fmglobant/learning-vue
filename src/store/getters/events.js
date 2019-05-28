export default {
  getEvents: (state) => {
    return state.events;
  },
  getEvent: (state) => (id) => {
    return state.events.find(event => event.id === id);
  },
  eventsAreLoaded: (state) => {
    return state.events.length > 0;
  }
};
