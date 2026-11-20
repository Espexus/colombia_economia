(function() {
    const submenus = document.querySelectorAll(".site-navigation-dropdown");
    console.log(submenus.length)
    submenus.forEach(submenu => {
        submenu.addEventListener("mouseover", ()=> {
            console.log("abiertos");
            submenu.open = true;
        })
        submenu.addEventListener("mouseout", () => {
            submenu.open = false;
        })
    })

    
})()