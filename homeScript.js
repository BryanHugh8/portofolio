var tablinks = document.getElementsByClassName("tab-link");
var tabcontents = document.getElementsByClassName("tab-content");
var sidemenu = document.getElementById("side-menu");

function openTab(tab){
    for(tabl of tablinks){
        tabl.classList.remove("active-link");
    }

    for(tabc of tabcontents){
        tabc.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tab).classList.add("active-tab");
}

function openMenu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
    sidemenu.style.right = "-200px";
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxkBhbNpKRsXGln1ruci5Ca--whRjH4GHA7YH63nhMTk3M3KEMzP5GT5vnYPLsA80PaNw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message Sent!"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

