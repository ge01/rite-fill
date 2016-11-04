//module.exports = 'Hello world';

module.exports = me;

function me(string, padint) {
  var holdWord = [];
  holdWord = string.split('');
  //console.log(holdWord);
  for(var i=0; i < padint; i++){
    holdWord.push("0");
  }

  stringWord = holdWord.join('');
  return stringWord;

  //stringWord = holdWord.join('');
}
/*
function leftpad (str, len, ch) {
  //str = String(str);

  var padded_string = str;
  for(var i=0; i<len; i++){
    padded_string += "0";
  }
  //callback(null, padded_string);

  return str;
}
*/
