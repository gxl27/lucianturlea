let body = document.querySelector('body');
let main = document.querySelector('#main');
let content = document.querySelector('#content');
let initialize = document.querySelector('#initialize');
let sectionFirstLeft = document.querySelector('#section-first-left');
let sectionFirstRight = document.querySelector('#section-first-right');
let compositeAnime = document.querySelectorAll('.composite-anime');
let descend = document.querySelector('.descend');
let messageMe = document.querySelector('.message-me');


let menuItems = document.querySelectorAll('.menu-item');
let menuItemsImgs = document.querySelectorAll('.menu-item-imgs');


let mainabsolute = document.querySelector('#main-absolute');
// let mainMatrix = document.querySelector('#main-matrix');
// let matrixSpans = document.querySelectorAll('.terminal');
// let overlay = document.querySelector('#overlay');
let checkboxes = document.querySelectorAll('input[type=checkbox]');
// var svgimages = document.querySelectorAll('.svg-image');

markCheckboxes();
firstImgOpacity();
scrollUpScreen();



if (matchMedia) {
    const mq = window.matchMedia("(max-width: 1189px)");
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

    defaultanimation();
    menuitemsanimation()
    // showall();
}

function initialphone(){

}

function defaultanimation(){
    let init1 = document.querySelector('.init1');
    let init2 = document.querySelector('.init2');
    let init3 = document.querySelector('.init3');
    let init4 = document.querySelector('.init4');
    let init5 = document.querySelector('.init5');
    let init6 = document.querySelector('.init6');
    let init7 = document.querySelector('.init7');
    let init8 = document.querySelector('.init8');
    

        initialAnimation = gsap.timeline({ defaults:{duration: .1}})
        initialAnimation.to(init1, { ease: "expo", opacity: 1, delay:0});
        initialAnimation.to(init2, { ease: "expo", opacity: 1, delay:0, duration:.7});
        initialAnimation.to(init2, { ease: "expo", opacity: 0, delay:0});
        initialAnimation.to(init3, { ease: "expo", opacity: 1, delay:0});
        initialAnimation.to(init4, { ease: "expo", opacity: 1, delay:0});
        initialAnimation.to(init5, { ease: "expo", opacity: 1, delay:0, duration:.7});
        initialAnimation.to(init5, { ease: "expo", opacity: 0, delay:0});
        initialAnimation.to(init6, { ease: "expo", opacity: 1, delay:0});
        initialAnimation.to(init7, { ease: "expo", opacity: 1, delay:0});
        initialAnimation.to(init8, { ease: "expo", opacity: 1, delay:0, duration:.7});
     
        initialAnimation.to(initialize, { ease: "expo", opacity: 0, delay:0, duration:.1});
        initialAnimation.to(mainabsolute, { ease: "power3", opacity: 1, duration:1.2, delay:-.1});
        initialAnimation.to(initialize, { ease: "expo", zIndex: -1, duration:.01});
        
        initialAnimation.to(content, { ease: "power3", opacity: 1, duration:1.6, delay:-1.4});
        initialAnimation.from(sectionFirstRight, { ease: "power3", y: "-10%", duration:.8, delay:-.4});
        initialAnimation.to(sectionFirstRight, { ease: "power3", opacity: 1, duration:1.2, delay:-.8});
        
        initialAnimation.to(mainabsolute, { ease: "power3", opacity:.4, duration:1.2, delay:-1.2});

        

        initialAnimation.from(sectionFirstLeft, { ease: "power3", x: "-10%", duration:.8, delay:-.4});
        initialAnimation.to(sectionFirstLeft, { ease: "power3", opacity: 1, duration:1.2, delay:-.8});
        
        initialAnimation.to(menuItems, { ease: "power3", opacity: 1,  stagger:.1, delay:-.2});
        initialAnimation.to(compositeAnime, { ease: "power3", opacity: 1, duration:.6});
        initialAnimation.to(descend, { ease: "power3", opacity: 1, duration:.6});
        initialAnimation.from(messageMe, { ease: "power3", y: "+10%", duration:.8, delay:-.4});
        initialAnimation.to(messageMe, { ease: "power3", opacity: 1, duration:1.2, delay:-.8});
        
        // initialAnimation.to(mainabsolute, { ease: "power3", filter: "brightness(80%)", duration:.2, delay:-.1});
        // initialanimation();
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
        tl = gsap.timeline({ defaults:{duration: .1}})
        e.addEventListener('mouseenter', function(event){
            elem = event.target.querySelector('.menu-item-imgs')
            imgs = elem.querySelectorAll('img');
            
            tl.to(imgs[0], { ease: "power3", opacity: 0, duration:.2});
            tl.to(imgs[1], { ease: "power3", opacity: 1, duration:.3, delay:-.2});
        })

        e.addEventListener('mouseleave', function(event){
            elem = event.target.querySelector('.menu-item-imgs')
            imgs = elem.querySelectorAll('img');
    
            tl.to(imgs[1], { ease: "power3", opacity: 0, duration:.2});
            tl.to(imgs[0], { ease: "power3", opacity: 1, duration:.3, delay:-.2});
        })

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
    

      tl = gsap.timeline({ defaults:{duration: 3}})
      tl.to(main, { ease: "expo", opacity: 1});
     

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

function firstImgOpacity(){
    menuItemsImgs.forEach(function(e){
        let firstImg = e.querySelector('img');
        firstImg.style.opacity = 1;
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

