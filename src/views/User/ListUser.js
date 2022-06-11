import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

import './ListUser.scss';

function ListUser() {
  const [listUser, setListUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page/1`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setListUser(data.data);
      })
      .catch((error) => {
        setListUser([]);
      });

    // axios
    //   .get(`https://reqres.in/api/users?page=1`)

    //   .then((res) => {
    //     setListUser(res && res.data && res.data.data ? res.data.data : []);
    //     // Kiểm tra điều kiện nếu có res và có res.data từ API và trong res.data có data thì trả về res.data.data không thì trả về mảng rỗng
    //   });
  }, []);

  const handleViewDetailUser = (user) => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div className='list-user-container'>
      <div className='title'>Fetch all List User</div>
      <div className='list-user-content'>
        {listUser &&
          listUser.length > 0 &&
          listUser.map((item, index) => (
            <div
              className='child'
              key={item.id}
              onClick={() => handleViewDetailUser(item)}
            >
              {index + 1} - {item.first_name} {item.last_name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default ListUser;
