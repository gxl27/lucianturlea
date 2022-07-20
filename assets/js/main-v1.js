let body = document.querySelector('body');
let main = document.querySelector('#main');

let sectionFirstLeft = document.querySelector('#section-first-left');
let sectionFirstRight = document.querySelector('#section-first-right');
let mainImg = document.querySelector('#main-img');

let compositeAnime = document.querySelectorAll('.composite-anime');
let descend = document.querySelector('.descend');

let menuItems = document.querySelectorAll('.menu-item');


// let mainMatrix = document.querySelector('#main-matrix');
// let matrixSpans = document.querySelectorAll('.terminal');
// let overlay = document.querySelector('#overlay');
let checkboxes = document.querySelectorAll('input[type=checkbox]');
let divFlash = document.querySelectorAll('.div-flash');
// var svgimages = document.querySelectorAll('.svg-image');

let btnScreenshot = document.querySelectorAll('.btn-screenshot');
let contentScreenshot = document.querySelectorAll('.content-screenshot');
let contentScreenshotItemImg = document.querySelectorAll('.content-screenshot-item-img');



markCheckboxes();
hideFlashMsg();
scrollUpScreen();

document.addEventListener("DOMContentLoaded", function(){
    body.style.visibility = 'visible';
});

if (matchMedia) {
    const mq = window.matchMedia("(min-width: 768px)");

    window.device; 
    if(mq.matches){
        // pc
        window.device = true
    }else {
        // mobile
        window.device = false
    }
    initialAnimation(window.device);
    menuitemsanimation()
    mq.addListener(WidthChange);
    WidthChange(mq);
  }
 
  // media query change
  function WidthChange(mq) {
    if(mq.matches){
        //pc
        window.device = true;
        initialpc();

    }else{
          // phone
        window.device = false;
        initialphone();
    
    // 
    }

}

function initialpc(){
    // showall();
}

function initialphone(){

}

function initialAnimation($device){
    let header = document.querySelector('header');
    let mainIm = mainImg;
    let spanElements = document.querySelectorAll('.span-elements');
    let versionElement = document.querySelector('#version');

    initialAnimation = gsap.timeline({ defaults:{duration: 1.2}})
    initialAnimation.to(header, { ease: "expo", opacity: 1, delay:0});
    initialAnimation.from(header, { ease: "expo", y: "-10%", delay:-1.2});
    if($device){
        initialAnimation.to(mainIm, { ease: "power2", opacity: 1, duration:1.8, delay:-.7});
        initialAnimation.from(mainIm, { ease: "power2", y: "+10%", duration:1.8, delay:-2.8});
    }
    initialAnimation.to(spanElements, { ease: "expo", opacity: 1, delay:-.4, stagger: 0.3});
    initialAnimation.to(versionElement, { ease: "expo", opacity: 1, delay:-.4});
        
    // setTimeout(startTimer, 10000)
    if($device){
        setTimeout(function(){
            startTimer();
        }, 200); 
    }

    
    function startTimer() {
        let darkSvg = document.querySelectorAll('.dark-svg');
        let counter = 0;
        timer = setInterval(function() {
            if(counter == darkSvg.length){
                counter = 0;
            }
            changeSvg(darkSvg[counter])
            counter ++;
        }, 4000);

        function changeSvg(svg){
          
            darkSvg.forEach(function(f){
                f.style.opacity = 0;
            })
            setTimeout(function(){
                svg.style.opacity = 1;
            }, 200); 
        }
    }
}

function showall(){
    content.style.opacity = 1;
    sectionFirstLeft.style.opacity = 1;
    sectionFirstRight.style.opacity = 1;
    menuItems.forEach(function(f){
        f.style.opacity = 1;
    })
    compositeAnime.forEach(function(f){
        f.style.opacity = 1;
    })
    initialize.style.opacity = 0;
}

function menuitemsanimation(){

    menuItems.forEach(function(e){
        
        // hover animation
        // tl = gsap.timeline({ defaults:{duration: .1}})
        // e.addEventListener('mouseenter', function(event){
        //     elem = event.target.querySelector('.menu-item-imgs')
        //     imgs = elem.querySelectorAll('img');
            
        //     tl.to(imgs[0], { ease: "power3", opacity: 0, duration:.2});
        //     tl.to(imgs[1], { ease: "power3", opacity: 1, duration:.3, delay:-.2});
        // })

        // e.addEventListener('mouseleave', function(event){
        //     elem = event.target.querySelector('.menu-item-imgs')
        //     imgs = elem.querySelectorAll('img');
    
        //     tl.to(imgs[1], { ease: "power3", opacity: 0, duration:.2});
        //     tl.to(imgs[0], { ease: "power3", opacity: 1, duration:.3, delay:-.2});
        // })

        // on click event (scroll)
        e.addEventListener('click', function(){

            if(e.dataset.scroll){
                link = e.dataset.scroll;
                element =  document.querySelector(link)
                // document.querySelector(link).scrollIntoView();
                scrollToTargetAdjusted(element);
                if(!window.device){
                    // hide the navbar for mobile after click on menu items
                    let navToggle = document.querySelector('#nav-toggle');

                    navToggle.checked = false;
                }
            }
        })
        // function for the click - scroll animation
        function scrollToTargetAdjusted(scrolledelement){
     
            let body = document.body.getBoundingClientRect().top

            let elementPosition = scrolledelement.getBoundingClientRect().top;
            let offsetPosition = elementPosition - body;

            window.scrollTo({
                 top: offsetPosition,
                 behavior: "smooth"
            });
        }
    })
}

 function initialanimation(){

  window.addEventListener('load', function(f){
    //display initial homepage
    //   tl = gsap.timeline({ defaults:{duration: 3}})
    //   tl.to(main, { ease: "expo", opacity: 1});
     

    //display monitor animation
    let imageindex = 0;
    // monitoranimation();

    function monitoranimation(){

        f = svgimages[imageindex];
     
        chimageinterval = setInterval(changeimage, 5000)

        function changeimage(f){
            
            let elem = svgimages[imageindex];
            if(f){
                if(imageindex == 0)
                {
                    let svgimageslength = svgimages.length;
                    // let svgimageslenghtminus = svgimageslength - 1
                  
                    next = svgimages[svgimageslength - 1]
              
                    imageindex = svgimageslength  -1;

                  
                }else{
                    next = svgimages[+imageindex-1]
                    imageindex = +imageindex -1  
                }
            

            }else{
                if(svgimages.length == +imageindex + 1)
                {
                    next = svgimages[0]
                    imageindex = 0;
                }else{
                    next = svgimages[+imageindex+1]
                    imageindex = +imageindex +1  
                }
            }
            carouselanimation()
          
            function carouselanimation(){
                tl = gsap.timeline({ defaults:{duration: 1}})
                tl.to(elem, { ease: "power2", opacity: 0})
                tl.to(next, { ease: "power2", opacity: 1, delay: -.9})
            }

        }
      }         
  });
}

function markCheckboxes(){

    checkboxes.forEach(function(e){
      e.addEventListener('click', function(){
          if(e.getAttribute('checked') ==  'checked'){
              e.setAttribute('checked', null) ;
             
          }else{
              e.setAttribute('checked', 'checked') ;
          }
      })
   })
}

function hideFlashMsg() {
    tlHide = gsap.timeline({ defaults:{duration: .5}})
    tlHide.to(divFlash, { ease: "power3", opacity: 0, duration:1, delay:4});
    tlHide.to(divFlash, { ease: "power3", zIndex: -1, delay:.1});

}

//upscreen
function scrollUpScreen(){
    const upScreen = document.querySelector('#up-screen')
    upScreen.addEventListener("click", function(){
        document.querySelector('html').scrollTo({
            top: 0,
            behavior: "smooth"
            })
    })

    window.addEventListener('scroll', function(e) {
        y = window.scrollY;
        if(y > 150){
            upScreen.style.display = 'initial';
    
        }else{
            upScreen.style.display = 'none'
        }
    })
}

if(btnScreenshot){
    btnScreenshot.forEach(function(f){
        f.addEventListener('click', function(e){
            contentScreenshot.forEach(function(c){
                if(f.dataset.id == c.dataset.id){
                    if(c.style.display == 'flex'){
                        c.style.display = 'none';
                    }else {
                        c.style.display = "flex";
                    }
                }
            })
        })
    })
}

if(contentScreenshotItemImg){
    contentScreenshotItemImg.forEach(function(f){
        f.addEventListener('click', function(e){
 
            window.open(f.querySelector('img').src, '_blank');
        })
    })
}


// leaflet map
function generateMap(){
    // document.getElementById('s-map').innerHTML = "<div id='map' style='width: 100%; height: 100%;z-index:1;'></div>";
    // const mymap = L.map('map').setView([46, 25], 6);
    // const attribution =
    //   '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

    // const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    // const tiles = L.tileLayer(tileUrl, { attribution });
    // tiles.addTo(mymap);
    // L.addTo(mymap);
    
    // document.getElementById('s-map').innerHTML = "<div id='map' style='width: 100%; height: 100%;z-index:1;'></div>";

    var map = L.map('map').setView([44.181231, 28.641438], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([44.181231, 28.641438]).addTo(map)
        .bindPopup('Romania: Constanta city')
        .openPopup();
    
}
generateMap();


