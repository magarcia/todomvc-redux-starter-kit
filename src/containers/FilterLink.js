import { connect } from "react-redux";
import { visibilityFilter } from "../ducks";
import Link from "../components/Link";

const { setVisibilityFilter } = visibilityFilter.actions;
const { getVisibilityFilter } = visibilityFilter.selectors;

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === getVisibilityFilter(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
