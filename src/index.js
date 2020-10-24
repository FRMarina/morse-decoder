const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = expr.match(/(.{1,10})/gim),
    newArr = [];
arr.forEach(function(e){
  let regArr = e.match(/(.{1,2})/gim);
  newArr.push(regArr);
  return newArr;
});

for(let item of newArr){
  for(let i = 0; i < item.length; i++){
    if(item[i] == "10"){
      item.splice(i,1,".");
    }else if(item[i] == "11"){
      item.splice(i,1,"-");
    }else if(item[i] == "**"){
      item.join('');
   }else{
     item.splice(i,1," ")
   }
  }
}

let newArrChange = newArr.map(e=>e.join('').trim());
let newArrObj = Object.assign({}, newArrChange);
let frase = '';

  for(let elem of newArrChange){
    if(elem=="**********"){
      frase+=" ";
    }
    for(let key in MORSE_TABLE){
     if(key == elem){
          
        frase+=MORSE_TABLE[elem];
        
    }
  }
  }
  return frase;

}

module.exports = {
    decode
}