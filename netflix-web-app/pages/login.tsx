import Head from "next/head";
import Image from "next/legacy/image";
import { useState } from "react";
import { backgroundImageUrl, logoUrl } from "../utils/constants/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";
import useAuth from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

interface Inputs {
  email: string;
  password: string;
}

function Login() {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, message, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    setLoading(true);

    if (login) {
      await signIn(email, password)
        .then(() => {
          toast.success(message);
        })
        .catch(() => {
          toast.error(error + " 🤦‍♂️");
        })
        .finally(() => {
          setLoading(false);
        })
    } else {
      await signUp(email, password)
        .then(() => {
          toast.success(message);
        })
        .catch(() => {
          toast.error(error + " 🤦‍♂️");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster position="top-center" reverseOrder={false} />
      <body>
        <Image
          src={backgroundImageUrl}
          layout="fill"
          className="-z-10 !hidden opacity-60 sm:!inline"
          objectFit="cover"
        />
        <img
          src={logoUrl}
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
          width={150}
          height={150}
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
        >
          <h1 className="text-4xl font-semibold text-[#e50914]">Sign In</h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input
                type="email"
                placeholder="Email"
                className="input"
                value="huuhau.hh47@gmail.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Please enter a valid email.
                </p>
              )}
            </label>
            <label className="inline-block w-full">
              <input
                type="password"
                placeholder="Password"
                className="input"
                value="huuhau@@123"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="p-1 text-[13px] font-light  text-orange-500">
                  Your password must contain between 4 and 60 characters.
                </p>
              )}
            </label>
          </div>
          {loading ? (
            <BiLoaderAlt className="w-full h-10 items-center animate-spin fill-[#e50914]" />
          ) : (
            <button
              className="md:h-12 w-full rounded bg-[#e50914] py-3 font-semibold"
              onClick={() => setLogin(true)}
            >
              Sign In
            </button>
          )}
          <div className="text-[gray]">
            New to Netflix?{" "}
            <button
              type="submit"
              className="hover:underline text-[#e50914]"
              onClick={() => setLogin(false)}
            >
              Sign up now
            </button>
          </div>
        </form>
      </body>
    </div>
  );
}

export default Login;
