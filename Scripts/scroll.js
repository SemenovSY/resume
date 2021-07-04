let isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);
 
function throttleScroll(e) {
    if (isScrolling == false ) {
        window.requestAnimationFrame(function() {
          dealWithScrolling(e);
          isScrolling = false;
        });
    }
    isScrolling = true;
}   

let dotsBlock = document.getElementById("dots");
let aboutMeBlock = document.getElementById("aboutme-content");
let aboutMeImageBlock = document.getElementById("aboutme-image");
let myNameBlock = document.getElementById("myname");
let redBlock = document.getElementById("redblock");

let skillsSection = document.getElementById("skills");

let projectsSection = document.getElementById("projects");

let buttonsBlock = document.getElementById("select-buttons");

let moveButtonsFlag = window.innerHeight < 1000;

function dealWithScrolling(e) {
    let newPos = Math.round(window.pageYOffset);
    aboutMeBlock.style.zIndex = '3';
    if (isFullyVisible(myNameBlock)) {
        animationFlag = newPos;
        myNameBlock.style.transform = `translate(0, ${newPos*(-0.8)+newPos*0.8}px)`;
        aboutMeBlock.style.transform = `translate(${newPos-newPos}px, ${newPos*(-1.3)+newPos*1.3}px)`;
        dotsBlock.style.transform = `translate(${newPos*1.4-newPos*1.4}px, ${newPos*(-1)+newPos}px)`;
        aboutMeImageBlock.style.transform = `translate(${newPos*(-1)+newPos}px, ${newPos*(-1)+newPos}px)`;
        redBlock.style.transform = `translate(${newPos*(-1.5)+newPos*1.5}px, ${newPos*(-1.3)+newPos*1.3}px)`;

    } else {
        myNameBlock.style.transform = `translate(0, ${newPos*(-0.8)+animationFlag*0.8}px)`;
        aboutMeBlock.style.transform = `translate(${newPos-animationFlag}px, ${newPos*(-1.3)+animationFlag*1.3}px)`;
        dotsBlock.style.transform = `translate(${newPos*1.4-animationFlag*1.4}px, ${newPos*(-1)+animationFlag}px)`;
        aboutMeImageBlock.style.transform = `translate(${newPos*(-1)+animationFlag}px, ${newPos*(-1)+animationFlag}px)`;
        redBlock.style.transform = `translate(${newPos*(-1.5)+animationFlag*1.5}px, ${newPos*(-1.3)+animationFlag*1.3}px)`;
    }

    known.style.transform = `translate(0, ${-newPos*0.1}px)`;
    operate.style.transform = `translate(0, ${-newPos*0.07}px)`;
    learn.style.transform = `translate(0, ${-newPos*0.04}px)`;

    if (Math.round(window.pageYOffset) > 400) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }

    if (moveButtonsFlag) {
        if ((window.pageYOffset) > 1700) {
            selectButtons.classList.add('active');
        } else {
            selectButtons.classList.remove('active');
        }
    } else {
        if ((window.innerHeight - window.pageYOffset) < 100) {
            selectButtons.classList.add('active');
        } else {
            selectButtons.classList.remove('active');
        }
    }

}

function isFullyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();
   
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
   
    return ((top >= 0) && (bottom <= window.innerHeight));
  }

function isPartiallyVisible(el) {
    let elementBoundary = el.getBoundingClientRect();
 
    let top = elementBoundary.top;
    let bottom = elementBoundary.bottom;
    let height = elementBoundary.height;
 
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}