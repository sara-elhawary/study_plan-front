const list = document.getElementById("main-list");

window.addEventListener("load", loadItems);

let items = {};

async function loadItems() {
  let openfile = window.showOpenFilePicker({ path: "../data.json" });
  let file = await openfile.getFile();
  let data = await file.json();
  console.log({ data });
}

// items.forEach((item, index) => {
//   const control_div = `<li id='item-${index}'><div><input type="checkbox" id=${item} name=${item} value=${item}>
//   <label for=${item}> ${item}</label><br></br></div></li>`;

//   const new_li = document.createElement("li");
//   new_li.innerHTML = control_div;
//   list.append(new_li);
// });
