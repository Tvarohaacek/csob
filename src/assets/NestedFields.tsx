import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";
//import Witness from "../ Witness.ts";

interface Inputs {

    Allocation: number;
    Category: string;
    Witnesses: string[];
}

export const NestedFields: React.FC = () => {
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Allocation</label>
            <input {...register("Allocation")} />

            <label>Category</label>
            <input {...register("Category")} />

            <label>Witnesses</label>
            <input {...register("Witnesses", {min: 1, max: 5})} />


            <input type="submit"/>
        </form>
    );
};  