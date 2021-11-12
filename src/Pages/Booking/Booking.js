import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import shopBanner from '../../Images/slider-3.jpg';
import {Image} from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Booking = () => {
    const commonBanner = {
        width: "100%",
        height: "300px",
        color: "#000",
        paddingTop: "100px",
        backgroundImage: `url(${shopBanner})`
    }
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    
    const {user} = useAuth();
   
    const { watchId } = useParams();
    
    const [watch, setWatches] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:5000/watches/${watchId}`)
        .then(res => res.json())
        .then(data => setWatches(data))
    } ,[])

    const initialInfo = { email: user.email}
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(value)
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }
    const onSubmit = (data) => {
        const booking = {
            ...bookingInfo,
            status: "pending",
        }
        fetch("http://localhost:5000/addBooking", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(booking),
        })
          .then((res) => res.json())
          .then((result) => {
            if(result.insertedId){
                alert('booking has been Added')
                reset();
            }
        })
      };
    
   
    return (
        <div>
            <div  style={commonBanner}>
                <div className="container">
                    <div className="row">
                        <h1 className="text-light">{watch.name}</h1>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                    <div className="product-box">
                        <Image src={watch.img} fluid />
                        <h4 className="product-head">{watch.name}</h4>
                        <p className="product-price">${watch.price}</p>
                        <p>{watch.des}</p>
                    </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                    <h2>BOOK YOUR PRODUCT</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input {...register("name")} onBlur={handleOnBlur} defaultValue={watch.name} placeholder="Your Name" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input {...register("des")}  onBlur={handleOnBlur} defaultValue={watch.des} placeholder="Description" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input {...register("price")} onBlur={handleOnBlur} defaultValue={watch.price} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input {...register("img")} onBlur={handleOnBlur} defaultValue={watch.img} className="form-control" />
                            </div>
                            <div className="form-group">
                            {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                            <button type="submit" className="btn common-btn">Add Booking</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;