(() => {
    const state = {};
    let nodesToDestroy = [];
    let pendingUpdate = false;
  
    function destroyAnyNodes() {
      nodesToDestroy.forEach((el) => el.remove());
      nodesToDestroy = [];
    }
  
    function update() {
      if (pendingUpdate) return;
      pendingUpdate = true;
  
      document.querySelectorAll(".bottom-gallery").forEach((el) => {
        el.setAttribute("space", 153);
      });
  
      destroyAnyNodes();
      pendingUpdate = false;
    }
  
    // Initialize on load
    update();
  })();