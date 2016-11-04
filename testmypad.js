//var msg = require('./Message.js');
//console.log(msg);

var me = require('./mypad.js');

console.log(me('camel',5));
//myPad();
/*
console.log(frog("hello", 5, function(err, result){
  if(err) return console.error(err);
  return result;
}) + "!");
*/

/*
module.exports = function(str, padcount, callback) {
  var padded_string = str;
  for(var i=0; i<padcount; i++){
    padded_string += "0";
  }
  callback(null, padded_string);
};
*/
