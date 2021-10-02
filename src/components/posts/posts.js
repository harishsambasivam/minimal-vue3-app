import Post from "../post/post.js";

const template = `
  <div  id="posts" class="container">
  <ul class="list-group list-group-flush row" v-for="post in posts" key="post.id">
  <Post class="list-group-item" :title="post.title" :body="post.body"></Post>
  </ul>
</div>
`;

export default {
  template,
  components: {
    Post,
  },
  setup() {
    const { ref, onMounted } = Vue;
    const posts = new ref([]);

    onMounted(async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      posts.value = data;
    });

    return { posts };
  },
};
