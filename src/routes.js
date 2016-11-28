import route from 'can-route';
// import 'can-route-pushstate';
import DefineMap from 'can-define/map/';

const RouteMap = DefineMap.extend({
  page: 'string',
  subpage: 'string'
});

const routeMap = new RouteMap({});

route.data = routeMap;

route('login', {page: 'auth', subpage: 'login'});
route('signup', {page: 'auth', subpage: 'signup'});
route('{page}', {page: 'home'});

window.route = route;