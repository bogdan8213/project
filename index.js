
let words = [{
  text: 'Б..чёвка',
  variants: ['и', 'е'],
  correct: 'и'
}, {
  text: 'крыж..вник',
  variants: ['о', 'е', 'ё'],
  correct: 'ё'
}, {
  text: 'ш..пот',
  variants: ['о', 'ё'],
  correct: 'ё'
},
  {
    text: 'реш..тка',
    variants: ['о', 'ё'],
    correct: 'ё'
},
  {
    text: 'кап..шон',
    variants: ['е', 'ю'],
    correct: 'ю'
  }];

const $wordText = document.getElementById('word-text');
const $wordsCount = document.getElementById('words-count');
const $wordVariants = document.getElementById('word-variants');

const App = {
  startIndex: 0,
  setNextWord() {
    const nextWord = words[this.startIndex];
    $wordText.innerHTML = nextWord.text;
    $wordsCount.innerHTML = this.startIndex;
    $wordVariants.innerHTML = '';
    nextWord.variants.forEach((item, index) => {
      const $variantEl = document.createElement('button');
      $variantEl.innerHTML = item;
      $variantEl.onclick = () => {
        if (item === nextWord.correct) {
          this.isCorrect();
        } else {
          this.isWrong();
        }
      }
      $wordVariants.appendChild($variantEl);
    });
  },

  isCorrect() {
    alert('Правильно');
    this.startIndex++;
    if (words[this.startIndex]) {
      this.setNextWord();
    } else {
      alert('Конец');
    }
  },

  isWrong() {
    alert('Неверно');
  }
}

App.setNextWord();


