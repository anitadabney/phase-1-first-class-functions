function receivesAFunction(callback) {
    callback()
 }

function returnsANamedFunction(){
  return function namedFunction(){
    return ''  
   }
 
}
function returnsAnAnonymousFunction(){
    return () => console.log("this is an anonymous function")
 }
