const menuEmail = document.querySelector('.navbar-email')
const desktopoMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu') 
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu() {
    desktopoMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive')
    
    aside.classList.toggle('inactive');/*Toggle permite alternar entre 2 acciones */ 

    if ("!isAsideClosed") {
        mobileMenu.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!ismobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}