// code for printing Good bye 

(function(window){
  var Speaker="GoodBye";
  var good=function(name){
    console.log(Speaker+" " +name)
  }
  window.good=good;
})(window);