import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, reset } = useForm();
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://enigmatic-atoll-76450.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
                reset();
            })

        e.preventDefault()
    }

    return (
        <div>
           <div className="container">
                <div className="row">
                    <div className="col-md-8 col-xs-12 from-box">
                         <h2>Add Your Review</h2>
                        <form onSubmit={handleSubmit(handleAdminSubmit)}>
                            <div class="form-group">
                                <input {...register("email", {required: true})}  placeholder="Email" className="form-control" onBlur={handleOnBlur} />
                            </div>
                            <button type="submit" class="btn common-btn">Add Admin</button>
                            {success && <div class="alert alert-danger" role="alert">Made Admin successfully!</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;