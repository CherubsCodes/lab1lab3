const names = document.getElementById("names");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const height = document.getElementById("height");
const phone = document.getElementById("phone");
const contacts = document.getElementById("contacts");
const btn = document.getElementById("btn");
const table = document.getElementById("table");

let ind = 3;

btn.addEventListener("click", () => 
{
    table.innerHTML += `<tr class="row"><td><p>${++ind}</p></td><td><p>${names.value}</p></td><td><p>${age.value}</p></td><td><p>${gender.value}</p></td><td><p>${height.value}</p></td><td><a href="tel:${phone.value}"><p>${phone.value}</p></a></td><td><a href="${contacts.value}"><p>Вк</p></a></td></tr>`
});

const left = document.getElementById("left");
const right = document.getElementById("right");

const pics = document.querySelector(".pics");

let offset = 0;

right.addEventListener("click", () =>
{
    offset += -300;
    if(offset<-900)
        offset=0
    pics.style.left = offset + "px";
});

left.addEventListener("click", () =>
    {
        offset += 300;
        if(offset==300)
            offset=-900
        pics.style.left = offset + "px";
    });