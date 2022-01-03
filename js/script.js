let mems = document.querySelector(".mems");
let memsNum = mems.childElementCount;

while (memsNum < 20){
  new_mem = document.createElement("div");
  new_mem.className = "mem";
  mems.appendChild(new_mem);
  memsNum += 1
}

Object.values(mems.children).forEach(element => {
  element.addEventListener('click', user=>openUsersProfiles(user));
});

function openUsersProfiles(user){
  let userAccount = user.target.getAttribute('github-username').substring(1),
      url = `https://github.com/${userAccount}`;
      
  window.open(url, '_blank').focus();
}