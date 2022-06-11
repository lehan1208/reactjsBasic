import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DetailUser({ props }) {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
        // console.log('Success:', user);
      })
      .catch((error) => {
        setUser({});
        // console.error('Error:', error);
      });

    // axios
    //   .get(`https://reqres.in/api/users?page=1`)

    //   .then((res) => {
    //     setListUser(res && res.data && res.data.data ? res.data.data : []);
    //     // Kiểm tra điều kiện nếu có res và có res.data từ API và trong res.data có data thì trả về res.data.data không thì trả về mảng rỗng
    //   });
  }, [id]);

  const handleBackBtn = () => {
    navigate(-1);
  };

  const isEmptyObj = Object.keys(user).length === 0;
  return (
    <>
      {isEmptyObj === false && (
        <>
          <div>
            Name: {user.first_name} - {user.last_name}
          </div>
          <div>Email: {user.email}</div>
          <div>
            <img src={user.avatar} alt='avatar' />
          </div>
          <div>
            <button onClick={() => handleBackBtn()}>Back</button>
          </div>
        </>
      )}
      <div>Hello world from DetailUser - User's ID: {id}</div>
    </>
  );
}

export default DetailUser;
