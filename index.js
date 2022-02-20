// insert solution here
const colors = document.querySelector("#insert");
colors.addEventListener("click", () => {
  const subject = document.querySelector("#subject");
  subject.insertAdjacentHTML(
    "afterbegin",
    `<div id="sectionBox" class="section-color ${insert.dataset.color}">Light Blue</div>`
  );
});

const deletes = document.querySelector("#delete");
deletes.addEventListener("click", () => {
  var self = document.getElementById("sectionBox");
  var parent = self.parentElement;
  var removed = parent.removeChild(self);
});

const changeColor = document.querySelector("#changeColor");
changeColor.addEventListener("click", () => {
  var name = document.getElementById("name");
  if (name.classList.contains("lightBlue")) {
    name.classList.remove("lightBlue");
  } else {
    name.classList.add("lightBlue");
  }
  //   name.classList.remove("lightBlue");
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
}
