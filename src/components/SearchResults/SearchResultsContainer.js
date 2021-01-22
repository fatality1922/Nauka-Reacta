import { connect } from 'react-redux';
import { getCardsForSearchResults } from '../../redux/cardsRedux';
import { createAction_changeSearchString } from '../../redux/searchStringRedux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => {

  return {
    searchString:props.match.params.searchString,  
    cards: getCardsForSearchResults(state, props.match.params.searchString),
  };
};
const mapDispatchToProps = (dispatch) => ({
  changeSearchString: (newSearchString) =>
    dispatch(createAction_changeSearchString(newSearchString)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);