console.log('nepal');
let menu_btn = document.querySelector('.menu_btn');
let nav_bar = document.querySelector('.navbar');
let mbl_categories = document.querySelector('.mbl-categories');
let categories = document.querySelector('.categories');
menu_btn.addEventListener('click', function() {
    if (nav_bar.style.display == 'none') {
        nav_bar.style.display = 'block';

        mbl_categories.style.display = 'none';

    } else {
        nav_bar.style.display = 'none';
        mbl_categories.style.display = 'block';

    }
});
mbl_categories.addEventListener('click', function() {
    if (categories.style.display == 'none') {
        categories.style.display = 'block';
    } else {
        categories.style.display = 'none';
    }
});