let themeButton = document.getElementById("theme-button");

// mode = false means we are in light mode
const toggleDarkMode = () => {
  if (document.body.classList.toggle("dark-mode")){
    themeButton.innerText = '☀️';
  }else{
    themeButton.innerText = '🌙';
    
  }
  
}

themeButton.addEventListener("click",toggleDarkMode);

let images = document.querySelector('img');
//not working
const lrgView = () => {
  images.magnificPopup({type:'image'});
}

images.addEventListener("dblclick",lrgView);