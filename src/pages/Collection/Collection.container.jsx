import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionsLoaded } from "../../redux/shop/shop.selectors";

import WithSpinner from "../../components/WithSpinner/WithSpinner";

import CollectionPage from "./Collection";

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionsLoaded(state)
});
///////  or without createStructuredSelector
// const mapStateToProps = state => ({
//   isLoading: !selectCollectionsLoaded(state)
// });

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
