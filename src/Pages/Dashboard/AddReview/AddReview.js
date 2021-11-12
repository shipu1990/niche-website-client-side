import React from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch("https://enigmatic-atoll-76450.herokuapp.com/addReview", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((result) => {
            if(result.insertedId){
                alert('Review has been Added')
                reset();
            }
        })
      };
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-xs-12 from-box">
                         <h2>Add Your Review</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input {...register("name", {required: true})} placeholder="Your Name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input {...register("description",{required: true})} placeholder="Description" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input {...register("point", {required: true})} placeholder="Point" className="form-control" />
                            </div>
                            <div className="form-group">
                            {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <button type="submit" className="btn common-btn">Add Review</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;