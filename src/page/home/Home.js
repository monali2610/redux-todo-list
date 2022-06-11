import React from "react";
import Header from "../../components/header";
import Login from "../../components/login";
import ToDoList from "../../components/todoList";
import { connect } from "react-redux";
import "./Home.scss";

const Home = ({ user }) => (
  <div className="main-container">
    <Header title={!user ? "Sign up" : "To Do List"} />
    <div className="row">
      {!user && <Login />}
      {user && <ToDoList />}
    </div>
  </div>
);
const mapStateToProps = (state) => ({
  user: state.user.user.user,
});
export default connect(mapStateToProps)(Home);
