export default {
  name: 'CreateEditEvent',
  data () {
    return {
      eventId: '',
      eventName: ''
    }
  },
  methods: {
    onClose () {
      this.$emit('onClose');
    },
    onDone () {
      this.$emit('onDone', {
        id: this.eventId,
        name: this.eventName
      });
    }
  }
}
