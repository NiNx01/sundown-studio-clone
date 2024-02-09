// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main-wrapper'),
//     smooth: true
// });

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
