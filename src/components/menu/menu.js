import {connect} from 'react-view-models';
import DefineMap from 'can-define/map/map';
import Session from '~/models/session';
import View from './menu.jsx';
import './menu.less';

export const ViewModel = DefineMap.extend({
  page: 'string',
  session: Session,
  logout () {
    return this.session.destroy();
  },
  changePage: 'any'
});

export default connect(ViewModel, View);
