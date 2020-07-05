(function (window) {


var names = ["Hiten", "John", "Jen", "Jason", "Pewdiepie", "Frank", "Larry Page", "Paula", "Laura", "Jim", "James", "Ambani", "Jimmy", "Jeff Bezos"];


for (var i in names) {

 
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

 
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);