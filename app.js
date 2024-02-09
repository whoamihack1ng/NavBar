const Menu = document.querySelector('#menu')
const MenuList = document.querySelector('#menu_list')

MenuList.addEventListener('click',function(){
    Menu.classList.toggle("block")
    console.log(Menu.classList);
})