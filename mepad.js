module.exports = me;

function me(string, padint) {
  var holdWord = [];

  holdWord = string.split('');

  for(var i=0; i < padint; i++){
    holdWord.push(" ");
  }

  stringWord = holdWord.join('');

  return stringWord;
}
