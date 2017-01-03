import {connect} from 'react-view-models';
import DefineMap from 'can-define/map/map';
import Template from './auth.jsx';

const ViewModel = DefineMap.extend({
  '*': {
    serialize: true
  },
  tab: 'any'
});

export default connect(ViewModel, Template);
