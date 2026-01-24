// alert("I am form JS")

// array
let image1 = "https://static.vecteezy.com/system/resources/thumbnails/001/849/553/small/modern-gold-background-free-vector.jpg";
let image2 = "https://img.freepik.com/free-vector/bokeh-theme-wallpaper_23-2148467962.jpg?semt=ais_user_personalization&w=740&q=80";
let image3 = "https://t3.ftcdn.net/jpg/08/27/09/20/360_F_827092074_tUV40nTZFcjGT69jkS2EJErmYQ9HaDK6.jpg";

let images = [image1, image2, image3]

let i = 0;
function next(){
    i++;
    if(i >= images.length){
        i = 0;
    }
    document.getElementById("image").src = images [i ];
    
}
// function priv(){
//     i--;00
//     if(i < 0 ){
//         i = image1.length -1;
//     }
//     document.getElementById("image").src = images [ i];
// }
// function
setInterval(function(){
    next()
},2000)