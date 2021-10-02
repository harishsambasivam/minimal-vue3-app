import Posts from "./src/components/posts/posts.js";
import Navbar from "./src/components/navbar/navbar.js";

const App = {
  components: {
    Navbar,
    Posts,
  },
};

window.addEventListener("load", () => {
  Vue.createApp(App).mount("#app");
});
