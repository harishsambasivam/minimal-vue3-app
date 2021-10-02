import Posts from "./src/components/posts.js";
import Navbar from "./src/components/navbar.js";
import Modal from "./src/components/modal.js";

const template = `
      <Navbar></Navbar>
      <Posts></Posts>
      <Modal></Modal>
`;

const App = {
  template,
  components: {
    Navbar,
    Posts,
    Modal,
  },
};

window.addEventListener("load", () => {
  Vue.createApp(App).mount("#app");
});
