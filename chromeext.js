// let character = ["A", "B", "C", "D", "E", "a", "b", "c","d", "e", "-", ".", "!", "*", "@" ]

// let myLeads = ["www.yahoo.com", "www.awesomelead.com", "www.google.com"]
let myLeads = []

const inputEl = document.getElementById("input-el");
const inputButtonEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteButtonEl = document.getElementById("delete-btn")

// localStorage.clear()
const keysFromLocalStorage = JSON.parse(localStorage.getItem("keys"))


function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] +"'>" + myLeads[i] + "</a></li>"
        listItems += `
                    <li>
                        <a target='_blank' href='${myLeads[i]}'>
                            ${myLeads[i]}
                        </a>
                    </li>`
    }
    ulEl.innerHTML = listItems
}

if (keysFromLocalStorage) {
    myLeads = keysFromLocalStorage
    renderLeads()
}

inputButtonEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    localStorage.setItem("keys",JSON.stringify(myLeads))
    renderLeads()
    inputEl.value = ""
})

deleteButtonEl.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads= []
    renderLeads()
})

    // inputButtonEl.addEventListener("click", function() {
    //     myLeads.push(inputEl.value)
    //     ulEl.innerHTML += "<li><a href='inputEl.value'>" + inputEl.value +"</a></li>"
    //     inputEl.value = ""
    // })

  // function renderLead() {
            //     let listItem = "<li>" + inputEl.value + "</li>"
            //     ulEl.innerHTML += listItem
            // }
// for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // const li = document.createElement("li")
    // li.textContent = listItems
    // ulEl.append(li)
// }
// for (let i = 0; i < myLeads.length; i++) {
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }

