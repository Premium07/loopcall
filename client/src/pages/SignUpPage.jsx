import React, { useState } from "react";
import { Link } from "react-router";
import { Eye, EyeOff, Video } from "lucide-react";
import { useSignup } from "../hooks/useSignup";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { isPending, mutate, error } = useSignup();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <section
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      data-theme="forest"
    >
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        {/* signup-form left-side */}
        <div className="w-full lg:w-1/2 flex flex-col sm:p-8">
          <div className="mb-4 flex items-center justify-start gap-2">
            <Video className="size-9 text-primary" />
            <span className="text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider">
              LoopCall
            </span>
          </div>

          {error && (
            <div className="alert alert-error">
              <span>{error.response.data.message}</span>
            </div>
          )}

          <div className="w-full">
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">Create an Account</h2>
                  <p className="text-sm opacity-70">
                    Join loopcall and start your language learning journey
                    today!
                  </p>
                </div>

                <div className="space-y-3 mt-10">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input input-bordered w-full mt-2"
                      value={formData.fullName}
                      name="fullName"
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="user@example.com"
                      className="input input-bordered w-full mt-2"
                      value={formData.email}
                      name="email"
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                  </div>
                  <div className="form-control w-full relative">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="********"
                      className="input input-bordered w-full mt-2 "
                      value={formData.password}
                      name="password"
                      onChange={(e) => handleInputChange(e)}
                      required
                    />
                    <button
                      className="absolute right-3 top-11 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <Eye className="size-5 text-primary" />
                      ) : (
                        <EyeOff className="size-5 text-primary" />
                      )}
                    </button>

                    <p className="text-xs opacity-70 mt-2">
                      Password must be at least 6 characters long
                    </p>
                    {/* <div className="mt-2 text-sm flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                      />{" "}
                      <span className="label-text">Show Password</span>
                    </div> */}
                  </div>
                </div>
              </div>
              <button className="btn btn-primary w-full mt-8" type="submit">
                {isPending ? (
                  <>
                    <span className="loading loading-spinner loading-xs"></span>
                    Loading...
                  </>
                ) : (
                  "Create Account"
                )}
              </button>

              <div className="text-center mt-4">
                <p className="text-sm opacity-70">
                  Already have an account?{" "}
                  <Link to="/login" className="text-primary hover:underline">
                    login in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        {/* signup-form right-side */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/i.png"
                alt="Language connection illustration"
                className="w-full h-full"
              />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">
                Connect with language partners worldwide
              </h2>
              <p className="opacity-70">
                Practice conversations, make friends, and improve your language
                skills together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
