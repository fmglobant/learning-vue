import http from '../../utils/http';

export default {
  addEvent: (context, payload) => {
    context.commit('addEvent', payload);
  },
  loadEvents: (context) => {
    http.get('/v2/5ce56fac2e0000798af83de9').then(response => {
      if (response.code === 200) {
        context.commit('loadEvents', response.events);
      }
    });
  }
};
