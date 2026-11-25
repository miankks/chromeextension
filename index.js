let myLeads = []

const inputEl = document.getElementById("input-el");
const inputButtonEl = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteButtonEl = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

const keysFromLocalStorage = JSON.parse(localStorage.getItem("keys"))

if (keysFromLocalStorage) {
    myLeads = keysFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("keys",JSON.stringify(myLeads))
        render(myLeads)
    })
})
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
                    <li>
                        <a target='_blank' href='${leads[i]}'>
                            ${leads[i]}
                        </a>
                    </li>`
    }
    ulEl.innerHTML = listItems
}

inputButtonEl.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("keys",JSON.stringify(myLeads))
    render(myLeads)
})

deleteButtonEl.addEventListener("dblclick", function() {
    localStorage.clear();
    myLeads= []
    render(myLeads)
})
