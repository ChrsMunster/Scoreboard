let homeEl = document.getElementById("home-El")
let guestEl = document.getElementById("guest-El")

let countHome = 0
let countGuest = 0

function point1Home() {
    countHome += 1
    homeEl.textContent = countHome
}

function point2Home() {
    countHome += 2
    homeEl.textContent = countHome
}

function point3Home() {
    countHome += 3
    homeEl.textContent = countHome
}


function point1Guest() {
    countGuest += 1
    guestEl.textContent = countGuest
}

function point2Guest() {
    countGuest += 2
    guestEl.textContent = countGuest
}

function point3Guest() {
    countGuest += 3
    guestEl.textContent = countGuest
}