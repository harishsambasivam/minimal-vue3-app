import Post from "../post/post.js";

const template = `
  <div class="card" id="posts" style="width: 18rem;">
  <div class="card-header">
    Posts
  </div>
  <ul class="list-group list-group-flush" v-for="item in items" key="item.id">
  <Post class="list-group-item" :message="item.message"></Post>
  </ul>
</div>
`;

export default {
  template,
  components: {
    Post,
  },
  setup() {
    const { ref } = Vue;
    const items = new ref([
      { id: 1, message: "hello" },
      { id: 2, message: "hi" },
      { id: 3, message: "bonjour" },
    ]);
    return { items };
  },
};
