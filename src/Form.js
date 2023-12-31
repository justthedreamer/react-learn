import React from "react";
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup'

export const Form = () => {
    
    const schema = yup.object().shape({
        fullName : yup.string().required("Full name is required"),
        email : yup.string().email().required("Email is required"),
        age : yup.number().positive().integer().min(18).required("Age is required."),
        password: yup.string().min(4).max(20).required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null],"Password is not the same.")
    })
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver : yupResolver(schema)
    });

    const onSubmit = (data) =>{
        console.log(data)
    }

    return (
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")}/>
            <p className="error">{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("email")}/>
            <p className="error">{errors.email?.message}</p>
            <input type="number" placeholder="Age..." {...register("age")}/>
            <p className="error">{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")}/>
            <p className="error">{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/>
            <p className="error">{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    );
}