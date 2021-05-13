//Modal
var modal = document.getElementById("info");

// button
var btn = document.getElementById("Btn");

//Appear
btn.onclick = function() {
  modal.style.display = "block";
}

//Click outside the modal = close
window.onclick = function(event) {
 if (event.target == modal) {
   modal.style.display = "none";
 }
   }


// Tabs

      let currentTab;

      handleButtonClick = (evt) => {
        let tabName = evt.target.innerText;
        showTabContent(tabName);
      };

    showTabContent = (tabName) => {
      if (currentTab) {
      let previousTab = document.getElementById(currentTab + "Tab");
      previousTab.classList.remove("active");
      document.getElementById(currentTab).style.display = "none";
      }

      // active class
      let clickedButton = document.getElementById(tabName + "Tab");
      clickedButton.classList.add("active");
      // remove active class


      // Show content tab
      currentTab = clickedButton.innerText;
      document.getElementById(currentTab).style.display = "block";
    };


    // Respond to a button click
    let buttons = document.querySelectorAll(".tab button");
    console.log(buttons);
    for( let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", handleButtonClick);
    }

    showTabContent("ECLIPSE");
    //Audio
