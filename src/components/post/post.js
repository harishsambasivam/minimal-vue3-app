const template = `
  <header >
    {{ text }}
  </header>
`;

export default {
  template,
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { ref } = Vue;
    const text = new ref(props.message);
    return { text };
  },
};
