const template = `
<div
class="modal"
id="exampleModal"
aria-labelledby="exampleModalLabel"
aria-hidden="true">
<div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Add Post</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
        aria-label="Close"
        @click="() => { title='', body=''}"
      ></button>
    </div>
    <div class="modal-body">
    <div class="mb-3">
    <label for="title" class="form-label">Post Title</label>
    <input type="text" class="form-control" id="post-title" placeholder="title" v-model="title">
  </div>
  <div class="mb-3">
    <label for="body" class="form-label">Post Message</label>
    <textarea class="form-control" id="post-body" rows="3" v-model="body"></textarea>
  </div>
  <div class="text-center">  
  <button type="button" data-bs-dismiss="modal"
  aria-label="Close" @click="addPost(title,body)" class="btn btn-dark">Upload</button>
    </div>
  </div>
</div>
</div></div>`;

export default {
  template,
  setup() {
    const { ref } = Vue;
    const body = new ref("");
    const title = new ref("");
    const uploading = new ref("false");
    const addPost = async (title, body) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title,
            body,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    };
    return { body, title, addPost };
  },
};
