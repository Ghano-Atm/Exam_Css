function menu() {

    if (document.getElementById("ul_menu").style.height=="0px" && document.getElementById("ul_menu").style.visibility=="hidden" ) {

        document.getElementById("ul_menu").style.height="400px"
        document.getElementById("ul_menu").style.visibility="visible"
        document.getElementById("ul_menu").style.opacity="1"
        
    } else {
        
        document.getElementById("ul_menu").style.height="0px"
        document.getElementById("ul_menu").style.visibility="hidden"
        document.getElementById("ul_menu").style.opacity="0.5"
        
    }

    
    
}

function exit(params) {

        document.getElementById("ul_menu").style.height="0px"
        document.getElementById("ul_menu").style.visibility="hidden"
        document.getElementById("ul_menu").style.opacity="0.5"

    
}