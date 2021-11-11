// Inserting date of purchase field with text-input

let purchaseDateLabel = document.createElement("label")
purchaseDateLabel.setAttribute("for", "date")
purchaseDateLabel.textContent = "Date of Purchase"

let purchaseDate = document.createElement("INPUT")
purchaseDate.setAttribute("type", "text")
purchaseDate.setAttribute("id", "date")


document.body.appendChild(purchaseDateLabel)
document.body.appendChild(purchaseDate)
