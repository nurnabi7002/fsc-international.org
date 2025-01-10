console.log("FSC INTERNATIONAL");

// Blinking Animation 


  let dot = document.getElementById("dot");
  let visible = 1; 

  setInterval(function() {
    if (visible === 1) {
      dot.style.opacity = 0; 
     visible = 0;
    } else {
      dot.style.opacity = 1; 
      visible = 1; 
    }
  }, 1000); 
