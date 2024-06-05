const imgs = document.querySelectorAll('.header-slider ul img');
// would select all the images from the class
const prev_btn = document.querySelector('.control_previous');
const next_btn = document.querySelector('.control_next');
//querySelector to chose only that button

let n = 0; // we are at first image
function changeSlide(){
    for (let i = 0 ; i < imgs.length ; i++){
        //this function if first selecting all the images and adding display none means no img is visible
        imgs[i].style.display= 'none';

    }
    imgs[n].style.display= 'block';
    
    // image visible due to block property
    //when n=0 select first image ; n=1 select second img ;
    // so al the n changes the image changes

}
changeSlide();

// click is adobe function, event (e)
prev_btn.addEventListener('click',(e)=>{
    if(n > 0){
        n--;
    }
    else{
        n = imgs.length - 1;
        //if n not greater than 0 then directly display the last image
    }
    changeSlide();
})

next_btn.addEventListener('click',(e)=>{
    if(n < imgs.length - 1){
        n++;
        //n<6 then should increase the value by 1 
    }
    else{
        n = 0;
        //if n==6 then to make cycle change n=0
       
    }
    changeSlide();
})

const scrollContainer = document.querySelectorAll('.products');
//to make array of imgs
for (const item of scrollContainer) {
    item.addEventListener('Wheel',(evt)=>{
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;

    })
}
