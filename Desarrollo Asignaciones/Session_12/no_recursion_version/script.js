const menu = [
  {
    name: 'Home',
    link: '/',
    items: [],
  },
  {
    name: 'About',
    link: '/about',
    items: [],
  },
  {
    name: 'Products',
    link: '/products',
    items: [
      {
        name: 'Product 1',
        link: '/products/1',
        items: [],
      },
      {
        name: 'Product 2',
        link: '/products/2',
        items: [
          {
            name: 'Product 2.1',
            link: '/products/2/1',
            items: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Services',
    link: '/services',
    items: [
      {
        name: 'Service 1',
        link: '/services/1',
        items: [
          {
            name: 'Service 1.1',
            link: '/services/1/1',
            items: [],
          },
        ],
      },
      {
        name: 'Service 2',
        link: '/services/2',
        items: [
          {
            name: 'Service 2.1',
            link: '/services/2/1',
            items: [],
          },
          {
            name: 'Service 2.2',
            link: '/services/2/2',
            items: [],
          },
        ],
      },
    ],
  },
];

const menuContainer = document.querySelector('#menu');

for (let i = 0; i < menu.length; i++) {
  const menuItem = document.createElement('li');
  const menuItemLink = document.createElement('a');
  menuItemLink.href = menu[i].link;
  menuItemLink.textContent = menu[i].name;
  menuItemLink.setAttribute('target', '_blank');
  menuItem.appendChild(menuItemLink);

  if (menu[i].items.length) {
    const submenu = document.createElement('ul');
    for (let j = 0; j < menu[i].items.length; j++) {
      const submenuItem = document.createElement('li');
      const submenuItemLink = document.createElement('a');
      submenuItemLink.href = menu[i].items[j].link;
      submenuItemLink.setAttribute('target', '_blank');
      submenuItemLink.textContent = menu[i].items[j].name;
      submenuItem.appendChild(submenuItemLink);
      submenu.appendChild(submenuItem);

      if (menu[i].items[j].items.length) {
        const subsubmenu = document.createElement('ul');
        for (let k = 0; k < menu[i].items[j].items.length; k++) {
          const subsubmenuItem = document.createElement('li');
          const subsubmenuItemLink = document.createElement('a');
          subsubmenuItemLink.href = menu[i].items[j].items[k].link;
          subsubmenuItemLink.setAttribute('target', '_blank');
          subsubmenuItemLink.textContent = menu[i].items[j].items[k].name;
          subsubmenuItem.appendChild(subsubmenuItemLink);
          subsubmenu.appendChild(subsubmenuItem);

          if (menu[i].items[j].items[k].items.length) {
            const subsubsubmenu = document.createElement('ul');
            for (let l = 0; l < menu[i].items[j].items[k].items.length; l++) {
              const subsubsubmenuItem = document.createElement('li');
              const subsubsubmenuItemLink = document.createElement('a');
              subsubsubmenuItemLink.href =
                menu[i].items[j].items[k].items[l].link;
              subsubsubmenuItemLink.setAttribute('target', '_blank');
              subsubsubmenuItemLink.textContent =
                menu[i].items[j].items[k].items[l].name;
              subsubsubmenuItem.appendChild(subsubsubmenuItemLink);
              subsubsubmenu.appendChild(subsubsubmenuItem);
            }
            subsubmenuItem.appendChild(subsubsubmenu);
          }
        }
        submenuItem.appendChild(subsubmenu);
      }
    }
    menuItem.appendChild(submenu);
  }

  menuContainer.appendChild(menuItem);
}
