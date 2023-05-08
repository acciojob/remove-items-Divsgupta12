//your JS code here. If required.
const selectinput = document.querySelector("#colorSelect");
const btn = document.querySelector("#btn");
btn.addEventListener("click",()=>selectinput.remove(selectinput.selectedIndex));