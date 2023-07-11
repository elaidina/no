document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'In the morning he ran straight outside to build a snowman.'
    },
    {
      name: '1',
      img: 'Om morgenen løp han rett ut for å bygge en snømann.'
    },
    {
      name: '2',
      img: 'Dad helped them and at last they had a splendid snowman.'
    },
    {
      name: '2',
      img: 'Pappa hjalp dem og endelig hadde de en flott snømann.'
    },
    {
      name: '3',
      img: 'Tom ran indoors and fetched an old hat for his head and a carrot for his nose.'
    },
    {
      name: '3',
      img: 'Tom løp innendørs og hentet en gammel lue til hodet og en gulrot til nesen.'
    },
    {
      name: '4',
      img: 'It was getting dark.'
    },
    {
      name: '4',
      img: 'Det ble mørkt.'
    },
    {
      name: '5',
      img: 'They had a surprise when they went into the living room.'
    },
    {
      name: '5',
      img: 'De fikk seg en overraskelse da de gikk inn i stua.'
    },
    {
      name: '6',
      img: 'The Chrismas tree was covered in twinkling lights, tinsel and tiny toys.'
    },
    {
      name: '6',
      img: 'Juletreet var dekket av blinkende lys, tinsel og bittesmå leker.'
    },
    {
      name: '7',
      img: 'The robin was perched right at the top of the tree.'
    },
    {
      name: '7',
      img: 'Robinen satt rett på toppen av treet.'
    },
    {
      name: '8',
      img: 'It´s not fair.'
    },
    {
      name: '8',
      img: 'Det er ikke rettferdig.'
    },
    {
      name: '9',
      img: 'My angel should be at the top.'
    },
    {
      name: '9',
      img: 'Engelen min burde være på toppen.'
    },
    {
      name: '10',
      img: 'Kitty strolled into the room and spotted the robin.'
    },
    {
      name: '10',
      img: 'Kitty ruslet inn i rommet og fikk øye på robinen.'
    },
    {
      name: '11',
      img: 'At last it was Christmas Eve, the night when Father Christmas comes.'
    },
    {
      name: '11',
      img: 'Endelig var det julaften, natten da julenissen kommer.'
    },
    {
      name: '12',
      img: 'Tom went to bed, but he did not want to go to sleep.'
    },
    {
      name: '12',
      img: 'Tom gikk og la seg, men han ville ikke sove.'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

 


  function createBoard() {
    cardArray.forEach (function (item, i ) {
      const cardd = document.createElement('div')
      cardd.setAttribute('class', "box")
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')

      const cardtext = document.createElement('h5')
      cardtext.textContent = item.img
      cardd.setAttribute('data-id', i)
      cardd.addEventListener('click', flipCard)
      cardd.appendChild(card)
      grid.appendChild(cardd)
      cardd.appendChild(cardtext)
    })
  }  

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
     if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')

cards[optionOneId].parentElement.classList.remove("green")
      

      

      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      var audio = new Audio ("images/sound.mp3")
audio.play();
      // alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
      cards[optionOneId].parentElement.setAttribute('class', 'hide')
      cards[optionTwoId].parentElement.setAttribute('class', 'hide')

    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      cards[optionOneId].parentElement.classList.remove("green")
      cards[optionTwoId].parentElement.classList.remove("green")
      var audio1 = new Audio ("images/nothing.mp3")
audio1.play();
      // alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/no/level46.html'> Continue to next level </a>";


      var audio3 = new Audio ("images/end.mp3")
audio3.play();
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    
    this.classList.add("green")
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
    
  }

  createBoard()
})
