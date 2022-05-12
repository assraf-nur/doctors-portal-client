import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="px-12 flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title mx-auto text-2xl">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text text-xl">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                class="input input-bordered w-full max-w-xs"
              />
              {errors.email?.type === "required" &&
                "Email is required"}

              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text text-xl">Password</span>
                </label>
                <input {...register("password", { required: true })}
                  type="password"
                  placeholder="Type here"
                  class="input input-bordered w-full max-w-xs"
                />
                {errors.password && "Password is required"}
              </div>
            </div>

            <input className="btn w-full mt-5 text-white" type="submit" />
          </form>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline"
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
