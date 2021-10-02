const template = `<nav class="navbar navbar-light bg-light sticky-top">
<div class="container-fluid">
  <a class="navbar-brand">Articl</a>
  <form class="d-flex">
    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success me-2" type="submit">Search</button>
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add
    </button>
  </form>
</div>
</nav>`;

export default {
  template,
};
