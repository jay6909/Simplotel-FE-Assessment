function toggleNav() {
    let x = document.getElementById("navBar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }