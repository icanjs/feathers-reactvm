import DefineMap from 'can-define/map/';
import DefineList from 'can-define/list/list';
import feathersClient from './feathers-client';
import superModel from './super-model';
import algebra from './algebra';

var User = DefineMap.extend('User', {
  _id: 'string',
  email: {
    type: 'string'
  },
  password: {
    type: 'string'
  }
});

User.List = DefineList.extend({
  '#': User
});

User.connection = superModel({
  Map: User,
  List: User.List,
  feathersService: feathersClient.service('/users'),
  name: 'users',
  algebra
});

User.algebra = algebra;

export default User;
