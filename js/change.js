/**
 * Author Chinatsu Kawakami
 * Created DATE: 2018-Feb-18
 * Modified date: 2018-Feb-23
 * Description: This is website to translate alphabet into Morse Code with sound.
 */

let oscillator;
let gain;
let dot;

let code;
let sound;
let i;
let audio = new Audio();
audio.src ="sound/Test Tone-1kHz-1.mp3";
function loadOut(){
  let result;
  let upp =[];
  let arrayletter = [];
  let inputId=document.getElementById('input');
  let outputId= document.getElementById('output');


    arrayletter += inputId.value;

     for(i=0;i<arrayletter.length;i++)
     {
       upp += arrayletter[i];
       result += decode(upp[i].toUpperCase());
     }

    outputId.value=result.slice(9);


}

function reset(){
  let inputClear=document.getElementById('in');
  let outputClear= document.getElementById('output');
  let textAreaClear = document.getElementById('mes');




    inputClear.value='';
    outputClear.value='';

    textAreaClear.value='';



}//end of clear function

function morse(){

 let morse_str = conv(document.getElementById('in').value);
 play_sound(morse_str);
}

function conv(word_str){

  let strs = word_str.toUpperCase();
  let item;
  let rtn = '';
  let j;
   for(j=0;j<strs.length;j++)
     {
     if(typeof strs[j] === 'undefined'){
       delete strs[j];
     }
       rtn += strs[j];
       item += soundCheck(rtn[j].toUpperCase());
     }

   return item.slice(9);
  }

function play_sound(morse){
  var mstrs=morse.split('');
var mesEle=document.getElementById("bin_code_output");

  var timer=setInterval(function(){
      audio.currentTime = 0;
      if(mstrs.length<=0){
        audio.pause();
        clearInterval(timer);
        console.log(onoff);
        return;
      }
      var onoff=mstrs.shift();
      if(onoff=="0"){
        audio.pause();
      }else{
        audio.play();

      }
      mesEle.value=mesEle.value+onoff;
  },100)
         //

}
function decode(item){



  switch(item){
  case "A":
    code= ".-";

    break;
  case "B":
    code="-...";

    break;
  case "C":
    code="-.-.";

    break;
  case "D":
    code= "-..";

    break;
  case "E":
    code=".";

    break;
  case "F":
    code= "..-.";

    break;
  case "G":
    code="--.";

    break;
  case "H":
    code="....";

    break;
  case "I":
    code="..";

    break;
  case "J":
    code=".---";

    break;
  case "K":
    code="-.-";

    break;
  case "L":
    code=".-..";

    break;
   case "M":
    code="--";

    break;
   case "N":
    code="-.";

    break;
   case "O":
    code="---";

    break;
   case "P":
    code=".--.";

    break;
   case "Q":
    code="--.-";

    break;
   case "R":
    code=".-.";

    break;
   case "S":
    code="...";

    break;
   case "T":
    code="-";

    break;
    case "U":
    code="..-";

    break;
    case "V":
    code="...-";

    break;
    case "W":
    code=".--";

    break;
    case "X":
    code="-..-";

    break;
    case "Y":
    code="-.--";

    break;
    case "Z":
    code="--..";

    break;
    case "0":
    code="-----";

    break;
    case "1":
    code=".----";

    break;
    case "2":
    code="..---";

    break;
    case "3":
    code="...--";

    break;
    case "4":
    code = "....-";

    break;
    case "5":
    code = ".....";

    break;
    case "6":
    code= "-....";

    break;
    case "7":
    code="--...";

    break;
    case "8":
    code="---..";

    break;
    case "9":
    code="----.";

    break;

    case "undefined":
    code="";

    break;

    default:
    code="";


    break;
  }
  if(code.includes([code],'undefined')){
    let re = /undefined/g;
    code = code.replace(re, "");
  }
  return code;
  }
function soundCheck(item){



    switch(item){
    case "A":

      sound="10111";
      break;
    case "B":

      sound="111010101";
      break;
    case "C":

      sound="11101011101";
      break;
    case "D":

      sound="1110101";
      break;
    case "E":

      sound="1";
      break;
    case "F":

      sound="101011101";
      break;
    case "G":

      sound="111011101";
      break;
    case "H":

      sound="1010101";
      break;
    case "I":

      sound="101";
      break;
    case "J":

      sound="1011101110111";
      break;
    case "K":

      sound="111010111";
      break;
    case "L":

      sound="101110101";
      break;
     case "M":

      sound="1110111";
      break;
     case "N":

      sound="11101";
      break;
     case "O":

      sound="11101110111";
      break;
     case "P":

      sound="10111011101";
      break;
     case "Q":
      sound="1110111010111";
      break;
     case "R":

      sound="1011101";
      break;
     case "S":

      sound="10101";
      break;
     case "T":

      sound="111";
      break;
      case "U":

      sound="1010111";
      break;
      case "V":

      sound="101010111";
      break;
      case "W":

      sound="101110111";
      break;
      case "X":

      sound="11101010111";
      break;
      case "Y":

      sound="1110101110111";
      break;
      case "Z":

      sound="11101110101";
      break;
      case "0":

      sound="1110111011101110111";
      break;
      case "1":

      sound="10111011101110111";
      break;
      case "2":

      sound="101011101110111";
      break;
      case "3":

      sound="1110111011101110111";
      break;
      case "4":

      sound="10101010111";
      break;
      case "5":

      sound="101010101";
      break;
      case "6":

      sound="11101010101";
      break;
      case "7":

      sound="1110111010101";
      break;
      case "8":

      sound="111011101110101";
      break;
      case "9":

      sound="11101110111011101";
      break;

      default:
      sound="";
      break;
    }

    return sound;
    }

var dict = {
      "a":"10111",
      "b":"111010101",
      "c":"11101011101",
      "d":"1110101",
      "e":"1",
      "f":"101011101",
      "g":"111011101",
      "h":"1010101",
      "i":"101",
      "j":"1011101110111",
      "k":"111010111",
      "l":"101110101",
      "m":"1110111",
      "n":"11101",
      "o":"11101110111",
      "p":"10111011101",
      "q":"1110111010111",
      "r":"1011101",
      "s":"10101",
      "t":"111",
      "u":"1010111",
      "v":"101010111",
      "w":"101110111",
      "x":"11101010111",
      "y":"1110101110111",
      "z":"11101110101",
      "1":"10111011101110111",
      "2":"101011101110111",
      "3":"1010101110111",
      "4":"10101010111",
      "5":"101010101",
      "6":"11101010101",
      "7":"1110111010101",
      "8":"111011101110101",
      "9":"11101110111011101",
      "0":"1110111011101110111",
      ".":"10111010111010111",
      ",":"1110111010101110111",
      "?":"101011101110101",
      "!":"1110101110101110111",
      "-":"111010101010111",
      "/":"1110101011101",
      "@":"10111011101011101",
      "(":"111010111011101",
      ")":"1110101110111010111",
      " ":"0"
  }



