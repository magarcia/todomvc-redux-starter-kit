import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { todos } from "../ducks";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  filteredTodos: todos.selectors.getVisibleTodos(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(todos.actions, dispatch)
});

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
