document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: '1',
      img: 'His stockings were hanging at the end of his bed.'
    },
    {
      name: '1',
      img: 'Zijn kousen hingen aan het voeteneinde van zijn bed.'
    },
    {
      name: '2',
      img: 'Mummy had put a carrot for Rudolph on his chest of drawers.'
    },
    {
      name: '2',
      img: 'Mama had een wortel voor Rudolph op zijn ladekast gelegd.'
    },
    {
      name: '3',
      img: 'I´m going to stay awake to say hello to Father Christmas.'
    },
    {
      name: '3',
      img: 'Ik blijf wakker om de kerstman gedag te zeggen.'
    },
    {
      name: '4',
      img: 'One hour later he was already asleep.'
    },
    {
      name: '4',
      img: 'Een uur later sliep hij al.'
    },
    {
      name: '5',
      img: 'He woke up early in the morning.'
    },
    {
      name: '5',
      img: 'Hij werd vroeg in de ochtend wakker.'
    },
    {
      name: '6',
      img: 'It was quite dark, but he could see that his stocking was full of presents.'
    },
    {
      name: '6',
      img: 'Het was behoorlijk donker, maar hij kon zien dat zijn kous vol cadeautjes zat.'
    },
    {
      name: '7',
      img: 'We are going camping with our family.'
    },
    {
      name: '7',
      img: 'We gaan kamperen met ons gezin.'
    },
    {
      name: '8',
      img: 'It is a long drive.'
    },
    {
      name: '8',
      img: 'Het is een lange rit.'
    },
    {
      name: '9',
      img: 'At last we arrived at the campsite.'
    },
    {
      name: '9',
      img: 'Eindelijk zijn we op de camping aangekomen.'
    },
    {
      name: '10',
      img: 'It was in a field, beside a little wood.'
    },
    {
      name: '10',
      img: 'Het was in een veld naast een klein bos.'
    },
    {
      name: '11',
      img: 'Tom helped to unload the car."'
    },
    {
      name: '11',
      img: 'Tom hielp met het uitladen van de auto.'
    },
    {
      name: '12',
      img: 'Putting the tents up was a puzzle at first.'
    },
    {
      name: '12',
      img: 'Het opzetten van de tenten was in het begin een puzzel.'
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
      resultDisplay.innerHTML = " <h1>Congratulations! You found them all!</h1><h2>Level completed!</h2><a href='https://elaidina.github.io/no/level47.html'> Continue to next level </a>";


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
