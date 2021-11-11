
function addWarranty(){
    let element = document.createElement('h3');
    element.innerHTML = '<h3>WhirlWind Warranty Registration<h3>'
    document.body.appendChild(element);   
}  
addWarranty()

function addSaveClose(){

}




let modelLabel = document.createElement("label")
modelLabel.textContent = "Model"
modelLabel.id = "modelLabel"
document.body.append(modelLabel)

let modelInput = document.createElement("input")
modelInput.placeholder = "Model"
modelInput.id = "modelInput"
modelInput.name = "Model"

document.body.append(modelInput)




