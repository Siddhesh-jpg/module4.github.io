
// Module 4 Assignment.

/*
Output :
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim



*/







(function() {
    var name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim" ];
  for(var i=0;i<name.length;i++){
  var first=name[i].charAt(0).toLowerCase();  
    if(first=='j'){
      good(name[i]);
    }
    
    else {
    hello(name[i]);
    }
  }
})();

