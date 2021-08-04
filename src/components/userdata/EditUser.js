

import React, { useState,useEffect } from "react";
import axios from 'axios'
import { useHistory,useParams } from "react-router-dom";

function EditUser() {
    
    let history = useHistory();
    const {id}=useParams();
        const [user, setUser] = useState({
          name: "",
          username: "",
          email: "",  
          phone: "",
          website: ""
        });

        const { name, username, email, phone, website } = user;
        const onInputChange = e => {
            setUser({ ...user, [e.target.name]: e.target.value });
        };

        useEffect(() => {
            loadUser();
          }, []);

        const loadUser = async () => {
            const result = await axios.get(`https://fake-server-apps.herokuapp.com/users/${id}`);
            setUser(result.data);
          };

        const onSubmit = async e => {
            e.preventDefault();
            await axios.put(`https://fake-server-apps.herokuapp.com/users/${id}`, user);
            history.push("/");
          };

    return (
    
    
        <div className="container">
      <div className="w-50 mx-auto shadow p-5 ">
        <h2 className="text-center mb-4">Edit User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-4">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div class="d-grid gap-2">
          <button className="btn btn-warning btn-block">Update</button>
          </div>
          
        </form>
      </div>
    </div>
  
    )

}

export default EditUser
