var i =0;
var slidesImage = ["./assets/img/1.jpg","./assets/img/2.jpg","./assets/img/3.jpeg"];

var slideShow = function() {
    document.slideShow.src = slidesImage[i];
    if ( i < slidesImage.length -1 ){
    i++;
    }else {
        i =0 ;
    }
    setTimeout("slideShow()", 2000);

}
slideShow();