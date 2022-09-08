const hamburger = document.getElementById( 'hamburger' );
const hamburgerMenu = document.getElementById( 'hamburger-menu' );
const overlay = document.getElementById( 'overlay-menu-hamburger' );

hamburger.addEventListener( 'click', () => {
    overlay.classList.toggle( "dnone" );
    if (overlay.classList.contains( "dnone" )) {
        document.body.style.overflow = "auto"
    } else {

        document.body.style.overflow = "hidden"
    }
} );
window.onresize = () => {
    if (window.innerWidth >= 600) {
        overlay.classList.add( "dnone" );
        hamburgerMenu.classList.remove( "active" );
    }

}