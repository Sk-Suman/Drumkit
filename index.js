var total=document.querySelectorAll(".drum").length;
for(var i=0;i<total;i++){
    document.querySelectorAll("button")[i].addEventListener("click",fun);
    function fun(){
      var word =this.innerHTML;
      fun2(word);
    }
}
    document.addEventListener("keypress",function(Event){

    fun2(Event.key);
    });
    function fun2(key){
        switch (key) {
            case 'W':
               var audio1=new Audio("p/crash.mp3");
               audio1.play();
                break;
                case 'S':
                    var audio1=new Audio("p/kick-bass.mp3");
                    audio1.play();
                     break;
                     case 'A':
                    var audio1=new Audio("p/snare.mp3");
                    audio1.play();
                     break;
                     case 'D':
                        var audio1=new Audio("p/tom-1.mp3");
                        audio1.play();
                         break;
                         case 'J':
                            var audio1=new Audio("p/tom-2.mp3");
                            audio1.play();
                             break;
                             case 'K':
                                var audio1=new Audio("p/tom-3.mp3");
                                audio1.play();
                                 break;
                                 case 'L':
                                var audio1=new Audio("p/tom-4.mp3");
                                audio1.play();
                                 break;

            default:
                break;
    }
}