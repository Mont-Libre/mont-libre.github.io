console.log('script loaded');

isplaying = false;

function chanson () {

  if (isplaying ==false){
document.getElementById('gerard').play();
isplaying = true;
  }
    else
        {
          document.getElementById('gerard').pause();
          document.getElementById('gerard').currentTime=15;
          
isplaying = false;  
        }
    console.log('gerard joue')

}
