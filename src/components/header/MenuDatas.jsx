const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/rt-test/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/rt-test/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 3.1,
        title: "Web Development",
        path: "/rt-test/web-development",
        newTab: false,
      },
      {
        id: 3.2,
        title: "Graphic Designs",
        path: "/rt-test/graphic-designs",
        newTab: false,
      },
      {
        id: 3.3,
        title: "Printing Services",
        path: "/rt-test/printing-services",
        newTab: false,
      },
    ]
  },
  {
    id: 4,
    title: "Contact",
    path: "/rt-test/contact",
    newTab: false,
  },
];
export default MenuData;
