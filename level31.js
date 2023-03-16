document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'It was nearly time for tea, so they all went indoors to wash their hands.'
    },
    {
      name: '1',
      img: 'Det var nesten tid for te, så de gikk alle innendørs for å vaske hendene.'
    },
    {
      name: '2',
      img: 'Tom undid the stair gate and Josie helped her sister to climb the stairs.'
    },
    {
      name: '2',
      img: 'Tom løsnet trappeporten og Josie hjalp søsteren hennes med å klatre opp trappene.'
    },
    {
      name: '3',
      img: 'I made sure that the water was not too hot.'
    },
    {
      name: '3',
      img: 'eg passet på at vannet ikke var for varmt.'
    },
    {
      name: '4',
      img: 'We all washed our hands.'
    },
    {
      name: '4',
      img: 'Vi vasket alle hendene våre.'
    },
    {
      name: '5',
      img: 'I wanted to look out of the bathroom window.'
    },
    {
      name: '5',
      img: 'Jeg ville se ut av baderomsvinduet.'
    },
    {
      name: '6',
      img: 'Be careful, please.'
    },
    {
      name: '6',
      img: 'Wees voorzichtig alsjeblieftVær forsiktig, vær så snill.'
    },
    {
      name: '7',
      img: 'It is not safe to lean out of windows.'
    },
    {
      name: '7',
      img: 'Det er ikke trygt å lene seg ut av vinduer.'
    },
    {
      name: '8',
      img: 'I wasn´t going to.'
    },
    {
      name: '8',
      img: 'Jeg hadde ikke tenkt.'
    },
    {
      name: '9',
      img: 'Tom ran out of the bathroom and held the door shut.'
    },
    {
      name: '9',
      img: 'Tom løp ut av badet og holdt døren lukket.'
    },
    {
      name: '10',
      img: 'Let me out, Tom.'
    },
    {
      name: '10',
      img: 'Slipp meg ut, Tom.'
    },
    {
      name: '11',
      img: 'It is dangerous to play with doors.'
    },
    {
      name: '11',
      img: 'Det er farlig å leke med dører.'
    },
    {
      name: '12',
      img: 'Someone´s fingers could get trapped.'
    },
    {
      name: '12',
      img: 'Noens fingre kan bli fanget.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level 31 completed!</h2><a href='https://elaidina.github.io/no/level32.html'> Continue to Level 32</a>";


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
