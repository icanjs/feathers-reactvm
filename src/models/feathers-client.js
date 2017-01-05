import feathers from 'feathers/client';
import socketio from 'feathers-socketio/client';
import hooks from 'feathers-hooks';
import io from 'steal-socket.io';
import rxjs from 'rxjs';
import rx from 'feathers-reactive';
import auth from 'feathers-authentication-client';
import environment from '~/environments';

const socket = io(environment.apiEndpoint, {
  transports: ['websocket'],
  forceReconnect: true
});
const app = feathers()
  .configure(rx(rxjs, {
    idField: '_id'
  }))
  .configure(hooks())
  .configure(socketio(socket))
  .configure(auth({
    header: 'authorization', // the default authorization header
    path: '/authentication', // the server side authentication service path
    jwtStrategy: 'jwt', // the name of the JWT authentication strategy
    entity: 'user', // the entity you are authenticating (ie. a users)
    service: 'users', // the service to look up the entity
    cookie: 'feathers-jwt', // the name of the cookie to parse the JWT from when cookies are enabled server side
    storageKey: 'feathers-jwt' // the key to store the accessToken in localstorage or AsyncStorage on React Native
  }));

export default app;
