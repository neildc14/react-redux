import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/index";

function UserContainer({ userData, dispatchFetch }) {
  const { loading, users, error } = userData;

  useEffect(() => {
    dispatchFetch();
  }, []);

  console.log(users);

  return (
    <div>
      <h1>Users</h1>
      {loading ? <IsLoading /> : <MapUsers users={users} />}
      {error && <HasError error={error} />}
    </div>
  );
}

const IsLoading = () => {
  return <div>Loading....</div>;
};

const HasError = ({ error }) => {
  return <div>{error}</div>;
};

const MapUsers = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  );
};

//state from the redux reducer
const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};

//dispatch function fro the redux
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetch: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
