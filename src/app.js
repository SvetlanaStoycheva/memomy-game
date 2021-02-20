//https://www.youtube.com/watch?v=Xm4BObh4MhI    //09:40

document.addEventListener('DOMContentLoaded', () => {
    
    //card options
    const cardsArr = [
        { name: 'cheeseburger', img: 'src/images/cheeseburger.png' },
        { name: 'fries', img: 'src/images/fries.png' },
        { name: 'hotdog', img: 'src/images/hotdog.png' },
        { name: 'ice-cream', img: 'src/images/ice-cream.png' },
        { name: 'milkshake', img: 'src/images/milkshake.png' },
        { name: 'pizza', img: 'src/images/pizza.png' },
        { name: 'cheeseburger', img: 'src/images/cheeseburger.png' },
        { name: 'fries', img: 'src/images/fries.png' },
        { name: 'hotdog', img: 'src/images/hotdog.png' },
        { name: 'ice-cream', img: 'src/images/ice-cream.png' },
        { name: 'milkshake', img: 'src/images/milkshake.png' },
        { name: 'pizza', img: 'src/images/pizza.png' },
    ]

    cardsArr.sort(() => 0.5 - Math.random())
    console.log(cardsArr)

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenIds = [];
    let cardWon = [];

    function createBoard() {
        for(i = 0; i < cardsArr.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'src/images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }
    

    function flipCard(e) {
        let cardId = this.getAttribute('data-id');
        // console.log(cardId);
        cardsChosen.push(cardsArr[cardId].name);
        // console.log(cardsChosen)
        cardsChosenIds.push(cardId);
        // console.log(cardsChosenIds)
        this.setAttribute('src', cardsArr[cardId].img);

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        // console.log(cardsChosenIds[0])

        if (cardsChosenIds[0] === cardsChosenIds[1]) {
            alert('You have clicked twice on the same image');
            cards[cardsChosenIds[0]].setAttribute('src', 'src/images/blank.png')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You have found a match!');
            cards[cardsChosenIds[0]].setAttribute('src', 'src/images/white.png');
            cards[cardsChosenIds[1]].setAttribute('src', 'src/images/white.png');
            cards[cardsChosenIds[0]].removeEventListener('cllick', flipCard);
            cards[cardsChosenIds[1]].removeEventListener('cllick', flipCard);
            cardWon.push(cardsChosen);
        } else {
            alert('Sorry, try again!');
            cards[cardsChosenIds[0]].setAttribute('src', 'src/images/blank.png');
            cards[cardsChosenIds[1]].setAttribute('src', 'src/images/blank.png');
        }
        cardsChosen = [];
        cardsChosenIds = [];

        resultDisplay.textContent = cardWon.length;
        if (cardWon.length === cardsArr.length / 2) {
            resultDisplay.textContent = 'Congradulations! You have won!';
        }
        console.log(cardWon)
    }



createBoard();
})