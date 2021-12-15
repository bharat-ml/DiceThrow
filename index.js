var p1_sc=Math.floor(Math.random()*6+1);
var p2_sc=Math.floor(Math.random()*6+1);

document.querySelector('img.img1').setAttribute('src', 'images/dice'+String(p1_sc)+'.png');
document.querySelector('img.img2').setAttribute('src', 'images/dice'+String(p2_sc)+'.png')

if(p1_sc==p2_sc){
    document.querySelector('h1').innerHTML='Draw';
}

if(p1_sc>p2_sc){
    document.querySelector('h1').innerHTML='Player 1 Wins';
}

if(p1_sc<p2_sc){
    document.querySelector('h1').innerHTML='Player 2 Wins';
}
