import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

function UserView() {
  const userData = useSelector((state) => state.user);
  const { loading, users, errors } = userData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2>List of Users</h2>
      {loading && <Loading />}
      {errors && <Errors error={errors} />}
      <DisplayUsers users={users} />
    </div>
  );
}

function Loading() {
  return <div>Loading....</div>;
}

function Errors({ error }) {
  return <div>{error}</div>;
}

function DisplayUsers({ users }) {
  return (
    <div>
      {users?.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default UserView;
