exports.action = function(data, callback, config, SARAH) {
  var config = config.modules.Action;
  
  console.log(data.phrase);
  if(data.phrase) {
	SARAH.speak(data.phrase);
  } else {
	SARAH.speak('je n\'ai rien à dire.');
  }  
  callback({});
}