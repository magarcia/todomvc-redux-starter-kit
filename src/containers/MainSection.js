import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MainSection from "../components/MainSection";
import { todos } from "../ducks";

const mapStateToProps = state => ({
  todosCount: state.todos.length,
  completedCount: todos.selectors.getCompletedTodoCount(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todos.actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);
