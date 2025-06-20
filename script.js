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

const getGitHubProfile = async (login) => {
  try {
    const response = await fetch(`${apiBaseURL}/${login}`);
    if (response.status !== 200) {
      if (response.status === 404) {
        errorMessage(response.status);
      }
      new Error(`Something went wrong! Status Code: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};





