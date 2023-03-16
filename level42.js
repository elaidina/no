document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'As soon as he got home, he tried out his new toothbrush.'
    },
    {
      name: '1',
      img: 'Så snart han kom hjem, prøvde han ut den nye tannbørsten sin.'
    },
    {
      name: '2',
      img: 'Michelle was very excited.'
    },
    {
      name: '2',
      img: 'Michelle var veldig spent.'
    },
    {
      name: '3',
      img: 'It would soon be Christmas, so she wrote her wishes.'
    },
    {
      name: '3',
      img: 'Det skulle snart være jul, så hun skrev sine ønsker.'
    },
    {
      name: '4',
      img: 'We put on our hats, coats, scarves and gloves because it was cold outside.'
    },
    {
      name: '4',
      img: 'Vi tok på oss hatter, kåper, skjerf og hansker fordi det var kaldt ute.'
    },
    {
      name: '5',
      img: 'There were lots of families choosing Christmas trees at the Garden Centre.'
    },
    {
      name: '5',
      img: 'Det var mange familier som valgte juletrær på Hagesenteret.'
    },
    {
      name: '6',
      img: 'Which tree shall we get?'
    },
    {
      name: '6',
      img: 'Hvilket tre skal vi få?'
    },
    {
      name: '7',
      img: 'I like that one because it is really big.'
    },
    {
      name: '7',
      img: 'Jeg liker den fordi den er veldig stor.'
    },
    {
      name: '8',
      img: 'It is too big to fit in our car.'
    },
    {
      name: '8',
      img: 'Den er for stor til å få plass i bilen vår.'
    },
    {
      name: '9',
      img: 'They agreed on a very nice smaller tree.'
    },
    {
      name: '9',
      img: 'De ble enige om et veldig fint mindre tre.'
    },
    {
      name: '10',
      img: 'Dad fetched a trolley for the tree.'
    },
    {
      name: '10',
      img: 'Pappa hentet en vogn til treet.'
    },
    {
      name: '11',
      img: 'The kids helped to push the troley.'
    },
    {
      name: '11',
      img: 'Ungene hjalp til med å dytte trallen.'
    },
    {
      name: '12',
      img: 'They could choose two new tree decorations.'
    },
    {
      name: '12',
      img: 'De kunne velge to nye tredekorasjoner.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/no/level43.html'> Continue to next level </a>";


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
