document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'Just don´t forget to hang up your stockings.'
    },
    {
      name: '1',
      img: 'Bare ikke glem å henge opp strømpene.'
    },
    {
      name: '2',
      img: 'We will leave a carrot out for your reindeer.'
    },
    {
      name: '2',
      img: 'Vi legger igjen en gulrot til reinen din.'
    },
    {
      name: '3',
      img: 'Mummy peeped in to see how they were getting on.'
    },
    {
      name: '3',
      img: 'Mamma kikket inn for å se hvordan det gikk med dem.'
    },
    {
      name: '4',
      img: 'Have they been good?'
    },
    {
      name: '4',
      img: 'Har de vært gode?'
    },
    {
      name: '5',
      img: 'Ella le preguntó a Papá Noel.'
    },
    {
      name: '5',
      img: 'Hun spurte julenissen.'
    },
    {
      name: '6',
      img: 'So good they deserve a little present to open when they get home.'
    },
    {
      name: '6',
      img: 'Så bra at de fortjener en liten gave å åpne når de kommer hjem.'
    },
    {
      name: '7',
      img: 'He pulled out a present for Tom from a sack.'
    },
    {
      name: '7',
      img: 'Han tok frem en gave til Tom fra en sekk.'
    },
    {
      name: '8',
      img: 'Thank you very much.'
    },
    {
      name: '8',
      img: 'Tusen takk.'
    },
    {
      name: '9',
      img: 'As soon as he was back in the car he opened his present.'
    },
    {
      name: '9',
      img: 'Så snart han var tilbake i bilen åpnet han gaven sin.'
    },
    {
      name: '10',
      img: 'I have got sunglasses!'
    },
    {
      name: '10',
      img: 'Jeg har solbriller!'
    },
    {
      name: '11',
      img: 'He was very pleased.'
    },
    {
      name: '11',
      img: 'Han var veldig fornøyd.'
    },
    {
      name: '12',
      img: 'It snowed a lot while he was sleeping.'
    },
    {
      name: '12',
      img: 'Det snødde mye mens han sov.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/no/level45.html'> Continue to next level </a>";


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
