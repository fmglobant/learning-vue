import Vue from 'vue';

function ModalInjector (component, parent, propsData = {}) {
  const ComponentClass = Vue.extend(component);
  const instance = new ComponentClass({
    propsData: propsData
  });
  instance.$mount();

  parent.appendChild(instance.$el);

  instance.$on('onClose', () => {
    parent.removeChild(instance.$el);
  });

  instance.$on('onDone', (data) => {
    parent.removeChild(instance.$el);
  });

  return instance;
};

export default ModalInjector;
