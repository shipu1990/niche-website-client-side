import React, { useState, useEffect } from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {

    const {user} = useAuth();

    const [watches, setWatches] = useState([])

    useEffect(()=>{
        const url = `https://enigmatic-atoll-76450.herokuapp.com/orders/${user.email}`;
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setWatches(data))
    } ,[watches])

    const handleDelete = (id) => {
        fetch(`https://enigmatic-atoll-76450.herokuapp.com/ordersDelete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                alert("Order Has been canceled");
            }
          });
      };

    return (
        <div className="mt-5">
            <h2>My Order</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Product Price</th>
                                <th scope="col">Status</th>
                                <th scope="col">Cancel Product</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    watches.map(watch =><tr><th scope="row"> {watch._id}</th>
                                         <td>{watch.name}</td>
                                        <td>{watch.price} </td>
                                        <td>{watch.status}</td>
                                        <td><Link><Button onClick={() => handleDelete(watch._id)}>Cancel Order</Button></Link></td>
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

export default MyOrder;