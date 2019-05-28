export default {
  name: 'Confirm',
  props: ['message'],
  methods: {
    onClose () {
      this.$emit('onClose');
    },
    onDone () {
      this.$emit('onDone');
    }
  }
}
