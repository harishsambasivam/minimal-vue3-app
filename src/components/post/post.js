const template = `
<div class="col-12">
<div class="card">
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">{{body}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
`;

export default {
  template,
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const { ref } = Vue;
    const title = new ref(props.title);
    const body = new ref(props.body);
    return { title, body };
  },
};
