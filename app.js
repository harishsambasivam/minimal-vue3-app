import Posts from "./src/components/posts/posts.js";
import Navbar from "./src/components/navbar/navbar.js";
import Modal from "./src/components/modal/modal.js";

const App = {
  components: {
    Navbar,
    Posts,
    Modal,
  },
};

window.addEventListener("load", () => {
  Vue.createApp(App).mount("#app");
});
