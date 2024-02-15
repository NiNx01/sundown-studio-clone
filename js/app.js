// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main-wrapper'),
//     smooth: true
// });

// This is to avoid refreshing
const aTags = document.querySelectorAll("a") ;
aTags.forEach(aTag => {
  aTag.addEventListener("click" , e=>{
    e.preventDefault() ;
  })
})

function checkScreenSize(screenSize){
  if(screenSize.matches) {
    const featuredLinks = document.querySelectorAll(".featured-link");
    featuredLinks.forEach(link =>{
      link.classList.remove("featured-link") ;
    })
    return ;
  }else {

    const featuredLinksCol = document.querySelectorAll(".featured-link-column");
    featuredLinksCol.forEach(col =>{
      col.classList.add("featured-link") ;
    })

    const fixedHoverContainer = document.querySelector(".fixed-hover-container");
    const featuredListWrapper = document.querySelector(".featured-list-wrapper");
    const featuredLinks = document.querySelectorAll(".featured-link");
    
    const getSrcLink = (e) => {
      let fileSrc = e.target.dataset.srcLink;
      let fileType = fileSrc.slice(0, 6);
      let fileElementImg = document.querySelector("#file-element-img");
      let fileElementVid = document.querySelector("#file-element-vid");
    
      if (fileType === "images") {
        // fileElement = document.createElement("img");
        fileElementVid.style.display = "none";
        fileElementImg.style.display = "block";
        fileElementImg.src = fileSrc;
      } else if (fileType === "videos") {
        fileElementImg.style.display = "none";
        fileElementVid.style.display = "block";
        fileElementVid.src = fileSrc;
        // fileElement = document.createElement("video");
        // fileElement.setAttribute("src", fileSrc);
        // fileElement.setAttribute("autoplay", "");
        // fileElement.setAttribute("loop", "");
        // fileElement.setAttribute("muted", "");
        // fileElement.play() ;
      }
      // }
      // fileElement.setAttribute("id" , "fixed-hover-item")
      // fixedHoverContainer.appendChild(fileElement) ;
    };
    
    featuredLinks.forEach((link) => {
      link.addEventListener("mouseenter", getSrcLink);
    });
    
    featuredListWrapper.addEventListener("mouseenter", () => {
      fixedHoverContainer.style.display = "block";
    });
    
    featuredListWrapper.addEventListener("mouseleave", () => {
      fixedHoverContainer.style.display = "none";
    });
    
  }
}


let screenSize = window.matchMedia("(max-width : 992px)") ;


checkScreenSize(screenSize) ;

screenSize.addEventListener("change" , ()=>{
  checkScreenSize(screenSize) ;
})


const servicesLinks = document.querySelectorAll(".services-link") ;
const servicesContentText = document.querySelector(".services-content-text") ;
const servicesImg = document.querySelector(".services-img") ;

servicesLinks.forEach(serviceLink => {
  serviceLink.addEventListener("click" , e=>{
    e.preventDefault() ;
    let serviceText = e.target.dataset.serviceText ;
    let serviceImg = e.target.dataset.serviceImg ;
    let currentActive = document.querySelector(".services-link-active") ;

    currentActive.classList.remove("services-link-active") ;
    e.target.classList.add("services-link-active")

    servicesContentText.textContent = serviceText ;
    servicesImg.src = serviceImg ;

  })
});


const pageCover = document.querySelector("#page-cover") ;
const pageCoverText = document.querySelector(".page-cover-text") ;

const pageBody = document.querySelector("body" ) ;

const changeTextTimeout = (text)=>{
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      pageCoverText.textContent = text ;
      resolve() ;
    } , 1000) ;
  }) ;
}

const pageAnimation = ()=>{
  return new Promise((resolve,reject) => {
    pageCover.classList.add("page-cover-animation") ;
    resolve() ;
  }) ;
}

async function changeText() {
  await changeTextTimeout("Environments") ;
  await changeTextTimeout("Experiences") ;
  await changeTextTimeout("Content") ;
  await changeTextTimeout("") ;
 
  await pageAnimation() ;
  
  pageBody.classList.remove("hide-body") ;

}


document.addEventListener("DOMContentLoaded" , e=>{
    changeText() ;
})