
myList = ["sveglia", "colazione", "lezione", "pranzo", "esercizi", "svago", "cena", "dormire"]
console.log(myList)
let ul = document.querySelector(".ul")


let i = 0;

// condizione
while (i < myList.length) {

    // stampo in console gli elementi della lista
    const myListElement = myList[i];
    // console.log("Nella mia lista c'è:", myListElement);
    const liElement = document.createElement("li");
    liElement.innerText = myListElement;
    ul.append(liElement);

    // istruzioni per terminare il ciclo
    i++
}



const { createApp } = Vue
createApp({
    data() {
        return {
            titolo: "Hello Veu To Do List",
            ul: "Lista di cose da fare:"

        }
    }
}).mount("#app")