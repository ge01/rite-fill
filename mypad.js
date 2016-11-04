//module.exports = 'Hello world';

module.exports = leftpad;

function leftpad (str, len, ch) {
  //str = String(str);

  var padded_string = str;
  for(var i=0; i<len; i++){
    padded_string += "0";
  }
  //callback(null, padded_string);

  return str;
}




/*
module.exports = function(str, padcount, callback) {
  var padded_string = str;
  for(var i=0; i<padcount; i++){
    padded_string += "0";
  }
  callback(null, padded_string);
};
*/

/*
module.export = leftpad;

  var padstring = str;
  for(var i = 0; i < count; i++){
    padstring += " ";
  }
    callback(null, padstring);
*/
