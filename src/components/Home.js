import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';




function Home() {
    const [users,setUser]=useState([]);

    useEffect(()=> {

        loadUser();

    },[]);

    const loadUser = async() =>{
        const result=await axios.get("https://fake-server-apps.herokuapp.com/users/");
        setUser(result.data)
    };

    const deleteUser = async id => {
        await axios.delete(`https://fake-server-apps.herokuapp.com/users/${id}`);
        loadUser();
      };

    return (
        <div className="container">
            <div className="py-4">
                <Link className="btn btn-warning" to="/users/add">Add User</Link>
                <br/><br/>
                    <table className={`table border shadow`}>
                        
                        <thead className="table-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Website</th>
                            <th >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user,index)=> (
                                <tr>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <Link to={`/users/view/${user.id}`}><VisibilityIcon/></Link>
                                        <Link class="btn mb-2" to={`/users/edit/${user.id}`}><EditIcon color="warning"/></Link>
                                        <Link  onClick={() => deleteUser(user.id)}><DeleteIcon color="secondary"/></Link>
                                        
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default Home
