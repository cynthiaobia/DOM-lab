// https://perscholas.instructure.com/courses/1513/assignments/297980?module_item_id=965364

// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

// TASK 1
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
const h1 = document.createElement('h1');
mainEl.appendChild(h1);
h1.textContent = 'SEI Rocks!'
mainEl.setAttribute('class', 'flex-ctr');

// TASK 2
const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.setAttribute('class', 'flex-around');

// TASK 3
for (const link of menuLinks){
    const a = document.createElement('a');
    a.setAttribute('href', link['href']);
    a.textContent = link['text'];
    topMenuEl.appendChild(a);
    // console.log(a.tagName)
}

// TASK 4
const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.setAttribute('class', 'flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// TASK 5
const topMenuLinks = document.querySelectorAll('a');
const showingSubMenu = false;
topMenuEl.addEventListener('click', function(event){
    const ele = event.target;
    event.preventDefault();
    if (ele.tagName === 'A' ){
        console.log(ele.textContent);
        //ele.removeClass('active')
    }
});