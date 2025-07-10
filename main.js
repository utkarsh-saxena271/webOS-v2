// Wait for DOM to load
window.addEventListener("DOMContentLoaded", () => {
    // Step 1: Bootscreen is visible by default
    setTimeout(() => {
      document.getElementById("bootScreen").classList.add("hidden");
      document.getElementById("osSelector").classList.remove("hidden");
    }, 5500); // boot animation time
  
    // Step 2: On Windows button click
    document.querySelector(".selectwindows button").addEventListener("click", () => {
      document.getElementById("osSelector").classList.add("hidden");
      document.getElementById("windowsLoader").classList.remove("hidden");
  
      setTimeout(() => {
        document.getElementById("windowsLoader").classList.add("hidden");
        document.getElementById("windowsUI").classList.remove("hidden");
      }, 5000); // windows loading time
    });
  
    // Step 3: On Mac button click
    document.querySelector(".selectmac button").addEventListener("click", () => {
      document.getElementById("osSelector").classList.add("hidden");
      document.getElementById("macLoader").classList.remove("hidden");
  
      setTimeout(() => {
        document.getElementById("macLoader").classList.add("hidden");
        document.getElementById("macUI").classList.remove("hidden");
      }, 5000); // mac loading time
    });
  });