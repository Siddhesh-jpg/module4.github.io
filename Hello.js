// code for printing Hello

(function(window){
      var speaker="Hello";
      var hello=function(name){
        console.log(speaker+" "+name);
      }
    window.hello=hello;  
})(window);