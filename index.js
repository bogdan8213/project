
const App = {
  words: [],
  $wordText: document.getElementById('word-text'),
  $wordsCount: document.getElementById('words-count'),
  $wordVariants: document.getElementById('word-variants'),
  startIndex: 0,

  start() {
    this.fetchData();
  },

  fetchData() {
    // загружаем слова
    fetch('./data.json')
      .then(res => res.json())
      .then(out => {
        this.words = out;
        console.log('Data: ', out)
        this.loadProgress();
        this.setNextWord();
      });
  },

  setNextWord() {
    const nextWord = this.words[this.startIndex];
    this.$wordText.innerHTML = nextWord.text;
    this.$wordsCount.innerHTML = this.startIndex;
    this.$wordVariants.innerHTML = '';
    nextWord.variants.forEach((item, index) => {
      const $variantEl = document.createElement('button');
      $variantEl.innerHTML = item;
      $variantEl.classList.add('btn', 'btn-outline-primary');
      $variantEl.onclick = () => {
        if (item === nextWord.correct) {
          this.isCorrect();
        } else {
          this.isWrong();
        }
        this.saveProgress();
      }
      this.$wordVariants.appendChild($variantEl);
    });
  },

  isCorrect() {
    this.startIndex++;
    if (this.words[this.startIndex]) {
      this.setNextWord();
    } else {
      // TODO: выводить сообщение текстом рядом с кнопкой вместо alert
      alert('Конец');
    }
  },

  isWrong() {
    // TODO: выводить сообщение текстом рядом с кнопкой вместо alert
    alert('Неверно');
  },

  // сохраняем в хранилище
  // TODO: сохранять количество ошибок
  saveProgress() {
    localStorage.startIndex = this.startIndex;
  },

  // загружаем из хранилища
  // TODO: загружать количество ошибок
  loadProgress() {
    if (localStorage.startIndex) {
      this.startIndex = +localStorage.startIndex;
    }
    console.log('this.startIndex', this.startIndex);
  },

  // TODO: сбросить прогресс и начать заново
  resetProgress() {

  }
}

App.start();




