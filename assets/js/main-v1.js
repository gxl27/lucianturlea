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
// var svgimages = document.querySelectorAll('.svg-image');

markCheckboxes();

scrollUpScreen();



if (matchMedia) {
    const mq = window.matchMedia("(max-width: 1124px)");
    defaultanimation();
    menuitemsanimation()
    mq.addListener(WidthChange);
    WidthChange(mq);
  }
 
  // media query change
  function WidthChange(mq) {
    if (mq.matches) {
        //phone
        initialphone();

    } else {
        initialpc();
      // pc
    // 
    }

}

function initialpc(){

    
    
    // showall();
}

function initialphone(){

}

function defaultanimation(){
    let nav = document.querySelector('nav');
    let mainIm = mainImg;
    let spanElements = document.querySelectorAll('.span-elements');
    let descendRotate = document.querySelector('#descend-rotate');

    initialAnimation = gsap.timeline({ defaults:{duration: 1.2}})
    initialAnimation.to(nav, { ease: "power2", opacity: 1, delay:0});
    initialAnimation.from(nav, { ease: "power2", y: "-10%", delay:-1.2});
    initialAnimation.to(mainIm, { ease: "power3", opacity: 1, duration:2, delay:-.3});
    initialAnimation.from(mainIm, { ease: "power3", y: "+10%", duration:2, delay:-2.2});
    initialAnimation.to(spanElements, { ease: "power2", opacity: 1, delay:-.2, stagger: 0.3});
    initialAnimation.to(descendRotate, { ease: "power3", opacity: 1, duration:2, delay:-.3});
    initialAnimation.from(descendRotate, { ease: "power3", y: "+10%", duration:2, delay:-2.2});
        
    // setTimeout(startTimer, 10000)
    setTimeout(function(){
        startTimer();
    }, 4500); 

    
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
            console.log(svg);
            darkSvg.forEach(function(f){
                f.style.opacity = 0;
            
            })
            setTimeout(function(){
                svg.style.opacity = 1;
            }, 500); 
  
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
// document.addEventListener("DOMContentLoaded", initialanimation);



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

