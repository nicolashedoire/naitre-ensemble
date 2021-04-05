import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  email: string,
  message: string,
};

export default function Contact() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit = data => console.log(data);

    return (
      <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="" {...register("email", { required: true })} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("message", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.message && <span>Le champ message est requis</span>}
      <input type="submit" />
    </form>
      </div>
    );
  }
  