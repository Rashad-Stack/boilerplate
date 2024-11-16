import { Button, Checkbox, Input, InputIcon, Label } from "keep-react";
import { Envelope, Eye, EyeClosed, Lock } from "phosphor-react";
import { useState } from "react";
import { Link, useFetcher, useLocation } from "react-router-dom";
import FormAlert from "./FormAlert";
import Loading from "./Loading";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const fetcher = useFetcher();
  const { state } = useLocation();

  return (
    <fetcher.Form
      className="space-y-4"
      method="post"
      action={`/auth/login?from=${state?.from || "/"}`}>
      {fetcher.state === "submitting" && <Loading />}
      <div className="mb-4">
        <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
        <p className="text-gray-500 text-sm mt-4 leading-relaxed">
          Sign in to your account and explore a world of possibilities. Your
          journey begins here.
        </p>
      </div>
      <div className="space-y-1">
        <fieldset className="space-y-1">
          <Label htmlFor="name">Email</Label>
          <div className="relative">
            <Input placeholder="Enter email" className="ps-11" name="email" />
            <InputIcon>
              <Envelope size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>

        <fieldset className="space-y-1">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              placeholder="Enter password"
              type={showPassword ? "text" : "password"}
              name="password"
              className="ps-11"
            />

            <InputIcon>
              <Lock size={19} color="#AFBACA" />
            </InputIcon>

            <InputIcon
              className="start-auto end-2 pointer-events-auto cursor-pointer px-2"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <EyeClosed size={19} color="#AFBACA" />
              ) : (
                <Eye size={19} color="#AFBACA" />
              )}
            </InputIcon>
          </div>
        </fieldset>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center">
          <fieldset className="flex items-center gap-2">
            <Checkbox id="remember" name="remember" />
            <Label htmlFor="remember"> Remember me</Label>
          </fieldset>
        </div>

        <div className="text-sm">
          <Link className="text-blue-600 hover:underline font-semibold">
            Forgot your password?
          </Link>
        </div>
      </div>
      {fetcher?.data?.error && <FormAlert message={fetcher?.data?.error} />}
      <div className="!mt-8">
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      <p className="text-sm !mt-8 text-center text-gray-800">
        Don&apos;t have an account?{" "}
        <Link
          to="/auth/register"
          href="javascript:void(0);"
          className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
          Register here
        </Link>
      </p>
    </fetcher.Form>
  );
}
