
const navItems = document.querySelector('.nav_items');
const openNavBtn = document.querySelector('#open_nav-btn');/*jabnaha b id #*/
const closeNavBtn = document.querySelector('#close_nav-btn');
const openNav = () =>{
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display = 'inline-block';
}


const closeNav = () => {
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display = 'none';
}
openNavBtn.addEventListener('click', openNav);
closeNavBtn.addEventListener('click', closeNav);
/*******************show side bare on small********************************* */
const sidebar = document.querySelector('aside');
const showsidebarBtn = document.querySelector('#show_sidebar-btn');

const hidesidebarBtn = document.querySelector('#hide_sidebar-btn');

const showSideBar = () => {
    sidebar.style.left= '0';
    showsidebarBtn.style.display = 'none';
    hidesidebarBtn.style.display = 'inline-block';
    
}
const hideSideBar = () => {
    sidebar.style.left= '-100%';
    showsidebarBtn.style.display = 'inline-block';
    hidesidebarBtn.style.display = 'none';
    
}
showsidebarBtn.addEventListener('click', showSideBar);
hidesidebarBtn.addEventListener('click', hideSideBar);