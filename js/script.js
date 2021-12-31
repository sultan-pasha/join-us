let mems = document.querySelector(".mems");
let memsNum = mems.children.length;

while (memsNum < 20){
  new_mem = document.createElement("div");
  new_mem.className = "mem";
  mems.appendChild(new_mem);
  memsNum += 1
}