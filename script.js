const apiBaseURL = `https://api.github.com/users`;

const errorMessage = (status) => {
  const messageDiv = document.querySelector("#message");
  let errmsg = ``;
  if (status === 404) {
    errmsg = `<div class="alert alert-danger text-center">Profile doesn't exist.</div>`;
  }

  messageDiv.innerHTML = errmsg;
  setTimeout(() => (messageDiv.innerHTML = ``), 5000);
};


