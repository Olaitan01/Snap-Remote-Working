const iconDown= document.querySelector(".icon-down")
const iconUp= document.querySelector(".icon-up")
const buttonOne = document.querySelector(".button")
const buttonTwo= document.querySelector(".button2")
const featureList= document.querySelector(".feature-list")
const companyList = document.querySelector(".company-list")
const hamburger = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".mobile-nav")
const menuicon= document.querySelector(".menuIcon")
const closeicon= document.querySelector(".closeIcon")
const iconDownTwo = document.querySelector(".icon-down2")
const iconUpTwo = document.querySelector(".icon-up2")
const desktopCompanyList= document.querySelector(".desktop-company-list")
const desktopFeatureList = document.querySelector(".desktop-feature-list")
const desktopButton= document.querySelector(".desktop-button")
const desktopButtonTwo= document.querySelector(".desktop-button2")

//For Destop feature drop-down
desktopButton.addEventListener("click",()=>{
  if(desktopButton.classList.contains("active")){
    desktopButton.classList.toggle("active");
    desktopFeatureList.style.display="block"
    
  }else{
    desktopButton.classList.toggle("active")
    desktopFeatureList.style.display="none"
    
  }
})

//for desktop company drop-down
desktopButtonTwo.addEventListener("click",()=>{
  if(desktopButtonTwo.classList.contains("active")){
    desktopButtonTwo.classList.toggle("active");
    desktopCompanyList.style.display="block"
    
  }else{
    desktopButtonTwo.classList.toggle("active")
    desktopCompanyList.style.display="none"
   
  }
})


//for mobile hamburger menu
hamburger.addEventListener("click",()=>{
  if(hamburger.classList.contains("active")){
     hamburger.classList.toggle("active")
    mobileNav.style.display="block"
    menuicon.style.display="none";
    closeicon.style.display="block";

  }else{
    hamburger.classList.toggle("active");
    mobileNav.style.display="none";
    menuicon.style.display="block";
    closeicon.style.display="none";
    
  }
})
//for feature drop-down
buttonOne.addEventListener("click",()=>{
  if(buttonOne.classList.contains("active")){
    buttonOne.classList.toggle("active");
    featureList.style.display="block"
    iconDown.style.display="none";
    iconUp.style.display="block";
  
  }else{
    buttonOne.classList.toggle("active")
    featureList.style.display="none"
    iconDown.style.display="block";
    iconUp.style.display="none";
    
  }
})


//for company dropdown
buttonTwo.addEventListener("click",()=>{
 if(buttonTwo.classList.contains("active")){
  buttonTwo.classList.toggle("active");
  companyList.style.display="block";
  iconDownTwo.style.display="none";
  iconUpTwo.style.display="block";
  
 }else{
  buttonTwo.classList.toggle("active");
  companyList.style.display="none";
  iconDownTwo.style.display="block";
  iconUpTwo.style.display="none";
  
 }
})























 