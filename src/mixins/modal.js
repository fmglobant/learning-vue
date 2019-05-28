import Vue from 'vue';

let dataModal = new Vue({
  data: { $modals: [{name: 'peql'}] }
});

const ModalMixin = {
  computed: {
    $modals: {
      get: function () {
        return dataModal.$data.modals;
      },
      set: function (modal) {
        dataModal.$data.modals = modal;
      }
    }
  }
};

export default ModalMixin;
