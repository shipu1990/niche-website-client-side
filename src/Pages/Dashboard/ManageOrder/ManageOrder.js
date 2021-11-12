import React, { useState, useEffect } from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ManageOrder = () => {
    const [watchs, setWatches] = useState([])
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
      setStatus(e.target.value);
    };
    useEffect(()=>{
        const url = `http://localhost:5000/orders`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setWatches(data))
    } ,[])

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ status }),
        });
        console.log(id);
      };

    return (
        <div className="mt-5">
           <h2>ALL Order</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th scope="col">Ship Product</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    watchs.map(watch =><tr><th scope="row"> {watch._id}</th>
                                         <td>{watch.name}</td>
                                        <td>{watch.price} </td>
                                        <td>{watch.email} </td>
                                        <td>{watch.status}</td>
                                        <td><input
                                            onChange={handleStatus}
                                            name="status"
                                            type="text"
                                            />
                                            <Link><Button  onClick={() => handleUpdate(watch._id)}>Status Update</Button></Link>
                                        </td>
                                    </tr>) 
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageOrder;