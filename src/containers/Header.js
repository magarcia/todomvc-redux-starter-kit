import { connect } from "react-redux";
import Header from "../components/Header";
import { todos } from "../ducks";

export default connect(
  null,
  { add: todos.actions.add }
)(Header);
