export default {
  name: 'EventPage',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    event () {
        return this.$store.getters.getEvent(this.$route.params.id);
    }
  }
}
