import { connect } from "react-redux";
import { visibilityFilter } from "../ducks";
import Link from "../components/Link";

const { setVisibilityFilter } = visibilityFilter.actions;

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
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
