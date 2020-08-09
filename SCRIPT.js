
// Module 4 Assignment.

/*
Output :

Good bye jay
Hello harsh
Hello Mahesh
Hello varun
Good bye jaystri
Hello metha
Hello Siddhesh
Good bye Jason
Hello Parveen
Good Bye John


*/




(function(){
  var name=["jay","harsh","Mahesh","varun","jaystri","metha","Siddhesh","Jason","Parveen","John "];
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

