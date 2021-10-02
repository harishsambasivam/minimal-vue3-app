import Posts from "./src/components/posts/posts.js";

const App = {
  components: {
    Posts,
  },
};

window.addEventListener("load", () => {
  Vue.createApp(App).mount("#app");
});
