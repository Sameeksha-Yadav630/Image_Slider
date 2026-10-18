let a = document.getElementById('img')
let images = ['./images/1.jpg', './images/2.jpg'];
let i = 0;

function nxt(){
    i = i+1;
    if(i==images.length){
        i=0
    }
    a.src=images[i]
    
}

function pre(){
    i = i-1;
    if(i<0){
        i=images.length-1
    }
    a.src=images[i]
    //console.log(a)
}
    