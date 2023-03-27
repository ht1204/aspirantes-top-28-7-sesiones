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

function createMenuItems(items) {
    let html = '';
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        html += `<li><a href="${item.link}" target="_blank">${item.name}</a>`;
        if (item.items && item.items.length) {
            html += '<ul>';
            html += createMenuItems(item.items);
            html += '</ul>';
        }
        html += '</li>';
    }
    return html;
}

const menuContainer = document.querySelector('#menu');
menuContainer.innerHTML = createMenuItems(menu);
document.body.appendChild(menuContainer);
