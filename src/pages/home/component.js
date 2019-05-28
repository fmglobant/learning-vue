import Vue from 'vue';
import {mapGetters, mapActions} from 'vuex';
import EventItem from '../../components/event-item';
import CreateEditEvent from '../../modals/create-event';
import Confirm from '../../modals/confirm';
import ModalInjector from '../../utils/modal-injector';

export default {
  name: 'HomePage',
  components: {
    'event-item': EventItem
  },
  methods: {
    ...mapActions([
      'loadEvents',
      'addEvent'
    ]),
    onOpenCreateEdit () {
      const instance = ModalInjector(CreateEditEvent, this.$root.$el);

      instance.$on('onDone', (data) => {
        this.addEvent(data);
      });
    },
    onReloadEvents () {
      const instance = ModalInjector(
        Confirm,
        this.$root.$el,
        {
          message: '¿Está seguro de querer refrescar la lista de eventos?'
        }
      );

      instance.$on('onDone', (data) => {
        this.loadEvents();
      });
    }
  },
  computed: {
    ...mapGetters([
      'getEvents'
    ])
  }
}
