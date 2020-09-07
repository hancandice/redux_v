import React from "react";
// import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Detail({ toDo }) {
  //   const id = useParams();

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>
        Created at: <Link to={"/"}>{toDo?.id} </Link>
      </h5>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  //   console.log(ownProps);
  const {
    match: {
      params: { id },
    },
  } = ownProps;

  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
}

export default connect(mapStateToProps)(Detail);
