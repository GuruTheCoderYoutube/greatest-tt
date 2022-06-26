periods = document.querySelectorAll("td a")
let periodAndLink = {
    "English":"https://us04web.zoom.us/j/79454763567?pwd=EsQhGVQdG7cfN4YRc8pP-_6uykRwZR.1",
    "Chemistry":"",
    "Maths":"",
    "Hindi":"https://us04web.zoom.us/j/2162347629?pwd=ZzJ5cFdlT3E0UEJhT3NiUWMvbFNBUT09",
    "Economics":"",
    "History":"",
    "Geography":"https://us04web.zoom.us/j/6765486954?pwd=Nm1Vam5TNzVQOVp2R0g0d0VBb0l0Zz09",
    "Games":"",
    "Physics":"",
    "S.H.G":"",
    "CCA":"",
    "Biology":"",
    "Supw/Lib":"",
}


for (let periodBox of periods) {
    if (periodAndLink[periodBox.innerText] != "") {    
        periodBox.href = periodAndLink[periodBox.innerText]
    }
    else {
        periodBox.id = "open-modal"
    }
}