function my()
{
var array=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var move=0;
shuffle(array);

var colors=["#FF0000","#00FFFF","#00FF7F","#FFA500","#FFFFFF","#FFFF00"];
var small=document.getElementsByClassName("small");

var big=document.getElementsByClassName("big");



for(var i=0;i<9;i++)
{var col=colors[Math.floor(Math.random()*6)];
small[i].style.backgroundColor=col;

big[array[i]].style.backgroundColor=col;
}

for(var i=9;i<24;i++)
{var col=colors[Math.floor(Math.random()*6)];
    big[array[i]].style.backgroundColor=col;
}


var blank=array[24];
big[blank].style.backgroundColor="black";


var up=document.getElementById("Up");
up.onclick=function up(){
  if(blank>=5)
  {var temp=big[blank-5].style.backgroundColor;
    big[blank].style.backgroundColor=temp;
    big[blank-5].style.backgroundColor="black";
    blank=blank-5;
    ++move;
    check();

  }
}
var down=document.getElementById("Down");
down.onclick=function down(){
  if(blank<=19)
  {var temp=big[blank+5].style.backgroundColor;
    big[blank].style.backgroundColor=temp;
    big[blank+5].style.backgroundColor="black";
    blank=blank+5;
   ++move;
    check();

  }
}
var left=document.getElementById("Left");
left.onclick=function left(){
  if(blank!=0 && blank!=5 && blank!=10 &&blank!=15 && blank!=20)
  {var temp=big[blank-1].style.backgroundColor;
    big[blank].style.backgroundColor=temp;
    big[blank-1].style.backgroundColor="black";
    blank=blank-1;
    ++move;
    check();
  }
}
var right=document.getElementById("Right");
right.onclick=function right(){
  if(blank!=4 &&blank!=9 && blank!=14 && blank!=19 &&blank!=24)
  {var temp=big[blank+1].style.backgroundColor;
    big[blank].style.backgroundColor=temp;
    big[blank+1].style.backgroundColor="black";
    blank=blank+1;
    ++move;
   check();
  }
}
function check(){
    if((small[0].style.backgroundColor==big[6].style.backgroundColor)&&(small[1].style.backgroundColor==big[7].style.backgroundColor)&&(small[2].style.backgroundColor==big[8].style.backgroundColor)&&(small[3].style.backgroundColor==big[11].style.backgroundColor)&&(small[4].style.backgroundColor==big[12].style.backgroundColor)&&(small[5].style.backgroundColor==big[13].style.backgroundColor)&&(small[6].style.backgroundColor==big[16].style.backgroundColor)&&(small[7].style.backgroundColor==big[17].style.backgroundColor)&&(small[8].style.backgroundColor==big[18].style.backgroundColor))
    {alert("Congratulations you took "+move+" moves");
     my();}
     
}

 }




function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }