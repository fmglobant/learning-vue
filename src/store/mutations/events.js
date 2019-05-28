export default {
  loadEvents: (state, payload) => {
    state.events = payload;
  },
  addEvent: (state, payload) => {
    state.events.push(payload);
  }
};
