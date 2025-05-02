export type HeaderSubMenu = {
  id: number;
  menu: string;
  url: string;
};

export type HeaderMenuItem = {
  id: number;
  name: string;
  url?: string;
  subMenus?: HeaderSubMenu[];
};

export const headerMenuData: HeaderMenuItem[] = [
  {
    id: 1,
    name: "Home",
    url: "/",
  },
  {
    id: 2,
    name: "Shop",
    subMenus: [
      {
        id: 1,
        menu: "Shop",
        url: "/shop",
      },
      {
        id: 2,
        menu: "Shop Details",
        url: "/shop-details",
      },
      {
        id: 3,
        menu: "Cart",
        url: "/cart",
      },
      {
        id: 4,
        menu: "Checkout",
        url: "/checkout",
      },
    ],
  },

  {
    id: 3,
    name: "Pages",
    subMenus: [
      {
        id: 1,
        menu: "Shop",
        url: "/shop",
      },
      {
        id: 2,
        menu: "Shop Details",
        url: "/shop-details",
      },
      {
        id: 3,
        menu: "Cart",
        url: "/cart",
      },
      {
        id: 4,
        menu: "Checkout",
        url: "/checkout",
      },
    ],
  },
  {
    id: 4,
    name: "Shops",
    subMenus: [
      {
        id: 1,
        menu: "Shop",
        url: "/shop",
      },
      {
        id: 2,
        menu: "Shop Details",
        url: "/shop-details",
      },
      {
        id: 3,
        menu: "Cart",
        url: "/cart",
      },
      {
        id: 4,
        menu: "Checkout",
        url: "/checkout",
      },
    ],
  },
  {
    id: 5,
    name: "Blog",
    subMenus: [
      {
        id: 1,
        menu: "Blog",
        url: "/blog",
      },
      {
        id: 2,
        menu: "Blog Details",
        url: "/blog-details",
      },
    ],
  },
  {
    id: 6,
    name: "Contact Us",
    url: "/contact",
  },
];
