const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }]
  },
  // {
  //   path: "/account/login",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/account/Login.vue") }]
  // },
  // {
  //   path: "/account/findPassword",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("pages/account/FindPassword.vue") }
  //   ]
  // },
  // {
  //   path: "/account/register",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("pages/account/register.vue") }
  //   ]
  // },
  // {
  //   path: "/account/registerComplete",
  //   component: () => import("layouts/MainLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("pages/account/RegisterComplete.vue")
  //     }
  //   ]
  // },
  // {
  //   path: "/oauth/yahoo/sucess/mobile",
  //   component: () =>
  //     import("pages/account/GetYahooAccessTokenSuccessMobile.vue")
  // },
  // {
  //   path: "/oauth/yahoo/sucess",
  //   component: () => import("pages/account/GetYahooAccessTokenSuccess.vue")
  // },
  // {
  //   path: "/shop/shop",
  //   component: () => import("layouts/SubLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/shop/Shop.vue") }]
  // },
  {
    path: "/shop/cart",
    component: () => import("layouts/SubLayout.vue"),
    children: [{ path: "", component: () => import("pages/shop/Cart.vue") }]
  },
  {
    path: "/shop/itemInfo",
    component: () => import("layouts/SubLayout.vue"),
    children: [{ path: "", component: () => import("pages/shop/ItemInfo.vue") }]
  },
  {
    path: "/shop/checkOut",
    component: () => import("layouts/SubLayout.vue"),
    children: [{ path: "", component: () => import("pages/shop/CheckOut.vue") }]
  },
  // {
  //   path: "/shop/brands",
  //   component: () => import("layouts/SubLayout.vue"),
  //   children: [{ path: "", component: () => import("pages/shop/Brands.vue") }]
  // },
  // {
  //   path: "/information/aboutUs",
  //   component: () => import("layouts/SubLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("pages/information/AboutUs.vue") }
  //   ]
  // },
  // {
  //   path: "/information/deliveryinformation",
  //   component: () => import("layouts/SubLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("pages/information/DeliveryInformation.vue")
  //     }
  //   ]
  // },
  // {
  //   path: "/information/privacyPolicy",
  //   component: () => import("layouts/SubLayout.vue"),
  //   children: [
  //     {
  //       path: "",
  //       component: () => import("pages/information/privacyPolicy.vue")
  //     }
  //   ]
  // },
  // {
  //   path: "/information/faq",
  //   component: () => import("layouts/SubLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("pages/information/Faq.vue") }
  //   ]
  // },
  // {
  //   path: "/information/notice",
  //   component: () => import("layouts/SubLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("pages/information/Notice.vue") }
  //   ]
  // },
  // {
  //   path: "/information/siteMap",
  //   component: () => import("layouts/SubLayout.vue"),
  //   children: [
  //     { path: "", component: () => import("pages/information/SiteMap.vue") }
  //   ]
  // }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404.vue")
  });
}

export default routes;
