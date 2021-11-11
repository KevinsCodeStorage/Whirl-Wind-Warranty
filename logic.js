function warrantypage(){
    let element;
    let label;

element = document.createElement("h2");
element.innerHTML = "<h2>Warranty information<h2>"
document.body.appendChild(element);

label = document.createElement("label");
label.innerHTML = "first name"
document.body.appendChild(label);
element = document.createElement("input");
element.setAttribute("type","text")
document.body.appendChild(element);

label = document.createElement("label");
label.innerHTML = "last name"
document.body.appendChild(label);
element = document.createElement("input");
element.setAttribute("type","text")
element.innerHTML = "Last Name"
document.body.appendChild(element);
}
