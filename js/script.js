let mems = document.querySelector(".mems");
}

Object.values(mems.children).forEach(element => {
  element.addEventListener('click', user=>openUsersProfiles(user));
});

function openUsersProfiles(user){
  let userAccount = user.target.getAttribute('github-username').substring(1),
      url = `https://github.com/${userAccount}`;
      
  window.open(url, '_blank').focus();
}
