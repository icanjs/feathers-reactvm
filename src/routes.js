import route from 'can-route';
// import 'can-route-pushstate';
import DefineMap from 'can-define/map/';

const RouteMap = DefineMap.extend({
  page: 'string'
});
route.data = new RouteMap({});

route('{page}', {page: 'home'});

export default route;
window.route = route;
