class Trie {
  constructor() {
    this.characters = {};
    this.isWord = false;
  }

  addWord(word, index = 0) {
    if (index === word.length) {
      this.isWord = true;
    } else if (index < word.length) {
      let char = word[index];
      let subTrie = this.characters[char] || new Trie();
      subTrie.addWord(word, index + 1);
      this.characters[char] = subTrie;
    }
    return this;
  }

  removeWord(word) {
    if (word[0] === undefined) {
      this.isWord = false;
      return this;
    } else if (Object.keys(this.characters[word[0]].characters).length === 1) {
      this.isWord = false;
      delete this.characters[word[0]];
    } else if (Object.keys(this.characters[word[0]].characters).length > 1) {
      let subTrie = this.characters[word[0]];
      subTrie.removeWord(word.substr(1));
    }
    return this;
  }

  findWord(word, index = 0) {
    var char = word[index];
    if (index < word.length - 1 && this.characters[char]) {
      index += 1;
      return this.characters[char].findWord(word, index);
    } else {
      return this.characters[char];
    }
  }

  getWords(words = [], currentWord = "") {
    // This function will return all the words which are
    // contained in this Trie.
    // it will use currentWord as a prefix,
    // since a Trie doesn't know about its parents.

    if (this.isWord) {
      words.push(currentWord);
    }
    for (var char in this.characters) {
      var nextWord = currentWord + char;
      this.characters[char].getWords(words, nextWord);
    }
    return words;
  }

  autoComplete(prefix, words = [], currentWord = "") {
    if (this.isWord) {
      if (currentWord.slice(0, prefix.length) === prefix) {
        words.push(currentWord);
      }
    }
    for (var char in this.characters) {
      var nextWord = currentWord + char;
      this.characters[char].autoComplete(prefix, words, nextWord);
    }
    return words;
  }
}
