
let words = [{
  text: 'Б..чёвка',
  variants: ['и', 'е'],
  correct: 'и'
}, {
  text: 'Б..чёвка2',
  variants: ['и', 'е', 'у', 'd'],
  correct: 'и'
}, {
  text: 'Б..чёвка3',
  variants: ['и', 'е', 'г'],
  correct: 'и'
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


