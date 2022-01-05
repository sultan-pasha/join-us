let mems = document.querySelector(".mems");

Object.values(mems.children).forEach((mem, index) => {
  mem.addEventListener('click', user=>openUsersProfiles(user));
  mem.classList.add(`team-${Math.trunc(index / 5 + 1)}`);
});

function openUsersProfiles(user){
  let userAccount = user.target.getAttribute('github-username').substring(1),
      url = `https://github.com/${userAccount}`;
      
  window.open(url, '_blank').focus();
}
