function lowerCaseDrivers(array) {
  return array.map(function(name) {return name.toLowerCase()})
}

function nameToAttributes(array){
  return array.map(function(name) {
    split = name.split(" ")
    return {firstName: split[0], lastName: split[1]}
    
  })
}

function attributesToPhrase(){
  
}