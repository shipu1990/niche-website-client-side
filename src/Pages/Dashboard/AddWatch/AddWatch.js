import React from 'react';
import { useForm } from "react-hook-form";


const AddWatch = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addWatch", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if(result.insertedId){
                alert('Watch has been Added')
                reset();
            }
        })
      };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-xs-12 from-box">
                         <h2>Add Watches</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input {...register("name", {required: true})} placeholder="Name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input {...register("description",{required: true})} placeholder="Description" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input {...register("img", {required: true})} placeholder="Image Link" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input {...register("price", {required: true})} placeholder="Price" className="form-control" />
                            </div>
                            <div className="form-group">
                            {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <button type="submit" className="btn common-btn">Add Watch</button>
                        </form>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default AddWatch;