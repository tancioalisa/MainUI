document.addEventListener("DOMContentLoaded", () => {
    const gameButtons = document.querySelectorAll(".game-button");
  
    gameButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const gameName = e.target.textContent.trim();
        console.log(`Selected game: ${gameName}`);
        // Game selection logic can be added here
      });
  
      // Add keyboard interaction
      button.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          button.click();
        }
      });
    });
  });