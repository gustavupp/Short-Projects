const menu = [
{
    id: 1,
    title: "FRANGO CATUPIRY",
    category: "brazuca",
    price: 31,
    img: "./images/img1.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam accusantium omnis minima distinctio vel et laudantium reiciendis aliquid?`
},
{
    id: 2,
    title: "PORTUGA",
    category: "brazuca",
    price: 30,
    img: "./images/img2.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam accusantium omnis minima distinctio vel et laudantium reiciendis aliquid?`
},
{
    id: 3,
    title: "5 CHEESE",
    category: "brazuca",
    price: 30,
    img: "./images/img3.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam accusantium omnis minima distinctio vel et laudantium reiciendis aliquid?`
},
{
    id: 4,
    title: "CARNE SECA",
    category: "brazuca",
    price: 31,
    img: "./images/img4.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam accusantium omnis minima distinctio vel et laudantium reiciendis aliquid?`
},
{
    id: 5,
    title: "DON VITO",
    category: "chef",
    price: 34,
    img: "./images/img5.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam accusantium omnis minima distinctio vel et laudantium reiciendis aliquid?`
},
{
    id: 6,
    title: "DON ZZETO",
    category: "chef",
    price: 34,
    img: "./images/img6.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam accusantium omnis minima distinctio vel et laudantium reiciendis aliquid?`
},
{
    id: 7,
    title: "ULURU",
    category: "classic",
    price: 31,
    img: "./images/img7.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam accusantium omnis minima distinctio vel et laudantium reiciendis aliquid?`
},
{
    id: 8,
    title: "MEAT MATE",
    category: "classic",
    price: 30,
    img: "./images/img8.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam accusantium omnis minima distinctio vel et laudantium reiciendis aliquid?`
},
{
    id: 9,
    title: "NUTELA & MORANGO",
    category: "sweet",
    price: 23,
    img: "./images/img9.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam accusantium omnis minima distinctio vel et laudantium reiciendis aliquid?`
},
{
    id: 10,
    title: "DOCE DE LEITE",
    category: "sweet",
    price: 23,
    img: "./images/img10.png",
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam accusantium omnis minima distinctio vel et laudantium reiciendis aliquid?`
},
];

const gridContainer = document.querySelector('.grid-container');
const filterButtons = document.querySelectorAll('.filter-button');


//load full menu
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
});

//filter menu items
filterButtons.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const category = e.currentTarget.dataset.category;
        const menuCategory = menu.filter(function(menuItem) {
            if (menuItem.category === category) {
                return menuItem;
            }
        });

        if (category === 'all') {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory)
        }
    });
});


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<div class="menu-item-container">
                    <img class="thumbnails" src=${item.img} />
                    <div class="item-info">
                        <header class="menu-item-header">
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <hr>
                        <p class="item-text">
                            ${item.desc}
                        </p>
                    </div>
                </div>`;
    });
    displayMenu = displayMenu.join("");
    gridContainer.innerHTML = displayMenu;
}