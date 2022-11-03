const list = document.getElementById("main-list");
const url = "https://studyplan-back-production.up.railway.app/";

axios.get(url).then(function (res) {
  const { data: items } = res;
  loadItems(items);
});

function loadItems(items) {
  items.forEach((item, index) => {
    const control_div = `<li id='item-${index}'><div><input type="checkbox" id=${item.title} name=${item.title} value=${item.title}>
        <label for=${item.title}> ${item.title}</label><br></br></div></li>`;

    console.log("in froeach");
    const new_li = document.createElement("li");
    new_li.innerHTML = control_div;
    list.append(new_li);
  });
}
