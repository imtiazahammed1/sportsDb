const loadData = () => {
    const input = document.getElementById("input-value");
    const inputValue = input.value;
    const error = document.getElementById("error");
    if (isNaN(inputValue)) {
        error.innerHTML = "*please give a number";
        input.value = "";
        main.innerHTML = "";
    }
    else if (inputValue == "") {
        error.innerHTML = "*search can't be empty. Please write some positive number";
        main.innerHTML = "";
    }
    else if (inputValue == 0) {
        error.innerHTML = "*zero(0) is not a positive number";
        input.value = "";
        main.innerHTML = "";
    }

    else if (inputValue < 0) {
        error.innerHTML = "*number can't be negative. Please write some positive number";
        input.value = "";
        main.innerHTML = "";
    }
    else if (inputValue > 52) {
        error.innerHTML = "*deck cards can't be more than 52. Please write some positive number which is fewer than 52";
        input.value = "";
        main.innerHTML = "";
    }
    else {
        main.innerHTML = "";
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputValue}`)
            .then(response => response.json())
            .then(data => displayCards(data.cards))

        input.value = "";
        error.innerHTML = "";
    }
}

const displayCards = (cards) => {
    const main = document.getElementById("main");
    for (const card of cards) {
        const div = document.createElement("div");
        div.classList.add("col-lg-4");
        div.classList.add("col-sm-6");
        div.classList.add("col-xs-12");
        div.classList.add("col-md-4");
        div.classList.add("my-3");
        div.innerHTML = `
        <div style= "margin-left: 70px;">
            <div class="card" style="width: 14rem;">
                    <img src="${card.image}" class="card-img-top" alt=" ">
                <div class="card-body">
                    <h5 class="card-title">${card.suit}</h5>
                    <p class="card-text">${card.code}</p>
                    <button onclick="displayDetails('${card.code}')" class="btn btn-primary">See Details</button>
                </div>
            </div>
        </div>
            `
        main.appendChild(div);
    }
}

const displayDetails = info => {



}