
const photos = [
    "images/img1-600x400.jpg",//0
    "images/img2-600x400.jpg",//1
    "images/img3-600x400.jpg",//2
    "images/img4-600x400.jpg",//3
    "images/img5-600x400.jpg",//4
    "images/img6-600x400.jpg",//5
    "images/img7-600x400.jpg",//6
    "images/img8-600x400.jpg",//7
    "images/img9-600x400.jpg",//8
    "images/img10-600x400.jpg"//9
];
let idx = 0;

function showImage() {
    console.log('show image');
 document.querySelector('#numberone').src=photo[idx];
 document.querySelector('.caption').innerHTML= '${idx+1} out of ${photos.length}';
}

function forward() {
    console.log('forward');
    showImage();

    if (idx==photos.length-1){
        idx=0;
    }
    else{
        ++idx;
    }
}

function back() {
    console.log('back');
   showImage();

   if(idx===photos.length+1){
    idx=0;
   }
   else{
    --idx;
   }
}
