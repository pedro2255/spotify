function AbrirFechar() {
    var menu = document.getElementById("MenuHamburguer")
    var menu2 = document.getElementById("MenuHamburguer2")
    
    if(menu.style.width==="0px"){
        menu.style.width="150px"
    }else {
        menu.style.width="0px"
    }

    if(menu2.style.height==="0%"){
        menu2.style.height="100%"
    }else {
        menu2.style.height="0%"
    }




}