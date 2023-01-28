import Input from "./Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
    username: yup.string().required("Username is a required field"),
    phoneNumber: yup
    .string()
    .required("Phone number is a required field")
    .matches(/^[+]?(\d{1,2})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, "Phone number is not valid!"),
    email: yup
    .string()
    .required("Email is a required field")
    .email("Email is not valid!"),
    password: yup
    .string()
    .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Password must be match."),
});

export default function App() {
    const { handleSubmit, register, formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const formSubmit = data => {
        console.log(data);
    };

    return (
    <div className="sign-up">
        <h1> Registration Form</h1>
        <p> Pleas supply all the details being asked </p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <Input 
            id="username" 
            label="Username" 
            type="text" 
            placeholder="Enter Username" 
            register={{ ...register("username") }}
            errorMessage={errors.username?.message}
            />
          <Input 
            id="phoneNumber" 
            label="Phone Number" 
            type="text" 
            placeholder="Enter Phone Number" 
            register={{...register("phoneNumber") }}
            errorMessage={errors.phoneNumber?.message}
            />
          <Input 
            id="email" 
            label="Email" 
            type="email" 
            placeholder="Enter Email" 
            register={{ ...register("email") }}
            errorMessage={errors.email?.message}
            />
          <Input 
            id="password" 
            label="Password" 
            type="password" 
            placeholder="Enter Password" 
            register= {{ ...register("password") }}
            errorMessage={errors.password?.message}
            />
          <Input 
            id="confirmPassword" 
            label="Confirm Password" 
            type="password" 
            placeholder="Confirm Password" 
            register={{ ...register("confirmPassword") }}
            errorMessage={errors.confirmPassword?.message}
            />
            <button> Sign Up</button>
        </form>
    </div>
    );
}