type TRouteName =
  | 'login'
  | 'register'
  | 'home'
  | 'profile'
  | 'product_detail'
  | 'cart'
  | 'checkout'
  | 'payment';

export const ROUTERS: Record<
  TRouteName,
  { title: string; path: string; protect?: boolean }
> = {
  login: {
    title: 'page.login.title',
    path: '/login',
  },
  register: {
    title: 'page.register.title',
    path: '/register',
  },
  home: {
    title: 'page.home.title',
    path: '/',
    protect: true,
  },
  profile: {
    title: 'page.profile.title',
    path: '/profile/[id]',
    protect: true,
  },
  product_detail: {
    title: 'page.product_detail.title',
    path: '/product/[id]',
    protect: true,
  },
  cart: {
    title: 'page.cart.title',
    path: '/cart',
    protect: true,
  },
  checkout: {
    title: 'page.checkout.title',
    path: '/checkout',
    protect: true,
  },
  payment: {
    title: 'page.payment.title',
    path: '/payment',
    protect: true,
  },
};
