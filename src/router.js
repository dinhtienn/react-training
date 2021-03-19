import {ROUTE} from './common/constant';
import SignIn from './pages/sign_in/index';
import SignUp from './pages/sign_up/index';
import Home from './pages/home/index';
import Profile from './pages/profile/index';

const router = [
  {
    path: ROUTE.LOGIN,
    component: SignIn
  },
  {
    path: ROUTE.REGISTRATION,
    component: SignUp
  },
  {
    path: ROUTE.HOME,
    component: Home,
    layout: ROUTE.LAYOUT
  },
  {
    path: ROUTE.PROFILE,
    component: Profile,
    layout: ROUTE.LAYOUT
  }
];

export default router;