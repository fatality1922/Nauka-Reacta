import { connect } from 'react-redux';
import List from './List';
import {getColumnsForList} from '../../redux/columnsRedux.js';
import {createActionAddColumn} from '../../redux/columnsRedux.js';


const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title, //po co tak robic? tak samo, po co robic title:title?
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);