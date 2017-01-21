import AuthManagement from 'feathers-authentication-management/lib/client';
import feathersClient from './feathers-client';

const authManagement = new AuthManagement(feathersClient);

export default authManagement;
