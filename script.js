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

const getGitRepos = async (login) => {
  try {
    const response = await fetch(`${apiBaseURL}/${login}/repos`);
    if (response.status !== 200) {
      new Error(`Something went wrong! Status Code: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const renderProfile = (data) => {
  let profileSnnipet = ``;
  profileSnnipet += `
             <div class="profile-userpic">
               <img src="${data.avatar_url}" class="d-block">
             </div>
             <div class="profile-usertitle">
`;

  if (data.name !== null) {
    profileSnnipet += `<div class="profile-usertitle-name">${data.name}</div>`;
  }

  profileSnnipet += `
          <div class="profile-usertitle-job">
          ${data.login}
          </div>
          </div>
          <div class="portlet light bordered">
          <!-- STAT -->
          <div class="row list-separated profile-stat">
          <div class="col-md-6 col-sm-6 col-xs-6" >
               <div class="uppercase profile-stat-title">${data.followers}</div>
               <div class="uppercase profile-stat-text">Followers</div>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-6">
          <div class="uppercase profile-stat-title">${data.following}</div>
          <div class="uppercase profile-stat-text">Following</div>
          </div>
          </div>
  `;
  if (data.bio !== null) {
    profileSnnipet += `<div><h4 class="profile-desc-title">About ${data.name}</h4>
      <span class="profile-desc-text">${data.bio}</span></div>`;
  }

  if (data.twitter_username !== null) {
    profileSnnipet += `<div class="margin-top-20 profile-desc-link">
      <i class="fab fa-twitter"></i>
      <a target="_blank" href="https://www.twitter.com/${data.twitter_username}">@${data.twitter_username}</a>
      </div>`;
  }

  profileSnnipet += `</div>`;
  document.querySelector("#profile").innerHTML = profileSnnipet;
};








