
const banner = document.getElementById('banner');
const photo = document.getElementById('photo');
const leftarrow = document.getElementById('left-arrow');
const rightarrow = document.getElementById('right-arrow');
const bannerlist = ['./images/baner_1 (1).jpg', './images/baner_2.jpg', './images/baner_4 (1).jpg', './images/baner_5 (1).jpg'];
const photoList =['./images/header-bg-img.jpg','./images/welcome-collg-img-2.jpg','./images/welcome-collg-img-3.jpg','./images/welcome-collg-img-4.jpg','./images/welcome-collg-img-5.jpg'];
let bannerNo = 0,photoNo = 0;

function changeBanner() {
    banner.src = bannerlist[bannerNo];
    bannerNo = (bannerNo + 1) % bannerlist.length;
}

setInterval(changeBanner, 3000);

leftarrow.addEventListener('click',(e)=>{
   photoNo--;
   if(photoNo<0){
    photoNo= (photoList.length)-1;
   }
   console.log(photoNo);
   photo.src = photoList[photoNo];
})

rightarrow.addEventListener('click',(e)=>{
    photoNo++;
    if(photoNo>=photoList.length-1){
        photoNo=0;
    }
    console.log(photoNo);
    photo.src = photoList[photoNo];
})