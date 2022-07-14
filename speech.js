 if (mode = 1){

if (!annyang) {
  console.log("Speech Recognition is not supported");
  alert("browser Speech Recognition is not supported")
}

// var as = 0;
var audio2 = 0;
 audio2.loop = false
console.log('hello world')
alert('hello world')
if (annyang) {
  // Let's define a command.
  const commands = {
    'hey baymax': function(){ 
      voice.recog.start();
    // voice.btn.onclick = voice.stop;
    voice.btn.value = "Speak Now Or Click Again To Cancel";
  
    // setTimeout(() => {   as=1; ; }, 5000);

    
    },

    "volume down" : () =>{
     
      if(document.getElementById('player').volume <= 0.1){
       document.getElementById('player').volume += 1;
      }
      console.log("volumedwn")
    },
    "hello" : () =>{
      alert('hello')
      console.log("hello")
    },
    "hi" : () =>{
      alert('hello')
      console.log("hello")
    },
    
  'play summer nights' :  function(){
 audio2 = new Audio('songs/sn.mp3');
    audio2.loop = false;
    audio2.play(); 

  },
  'play megalovania' :  function(){
    audio2 = new Audio('songs/MEGALOVANIA.ogg');
       audio2.loop = false;
       audio2.play(); 
   
     }, 
     'play nattu kuthu' :  function(){
      audio2 = new Audio('songs/nk.mp3');
         audio2.loop = false;
         audio2.play(); 
     
       }, 'play dippam dappam' :  function(){
        audio2 = new Audio('songs/dd.mp3');
           audio2.loop = false;
           audio2.play(); 
       
         }, 'play dance monkey' :  function(){
          audio2 = new Audio('songs/dm.mp3');
             audio2.loop = false;
             audio2.play(); 
         
           }, 'play shape of you' :  function(){
            audio2 = new Audio('songs/sou.mp3');
               audio2.loop = false;
               audio2.play(); 
           
             }, 'play pathala pathala' :  function(){
              audio2 = new Audio('songs/vpp.mp3');
                 audio2.loop = false;
                 audio2.play(); 
             
               }, 'play that' :  function(){
                audio2 = new Audio('songs/ak.mp3');
                   audio2.loop = false;
                   audio2.play(); 
               
                 }, 'play rowdy baby' :  function(){
                  audio2 = new Audio('songs/rb.mp3');
                     audio2.loop = false;
                     audio2.play(); 
                 
                   },
  
  "loop" : () => {
    console.log('loop')

    alert("loop enabled")
    audio2.loop = true;
  },
  
  "pause" : () => {
  console.log('pause')
    audio2.pause(); 
  },
   "play" : () => {
    console.log('play')
      audio2.play(); 
    }
  };

  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.start();
}

// if(as=1){
//   pause();
// }


 }

