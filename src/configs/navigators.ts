type TRouteName = 'login' | 'register' | 'home' | 'profile';

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
};
