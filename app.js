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
  const { createStore } = Vuex;

  const store = createStore({
    state() {
      return {
        count: 0,
      };
    },
    mutations: {
      increment(state) {
        state.count++;
      },
    },
  });

  Vue.createApp(App).use(store).mount("#app");
});
