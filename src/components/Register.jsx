import { Button, Input, InputIcon, Label } from "keep-react";
import { Envelope, Lock, User } from "phosphor-react";
import { Link, useFetcher } from "react-router-dom";
import FormAlert from "./FormAlert";
import Loading from "./Loading";

export default function Register() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form className="space-y-4" method="post" action="/auth/register">
      {fetcher.state === "submitting" && <Loading />}
      <div className="mb-4">
        <h3 className="text-gray-800 text-3xl font-extrabold">Register</h3>
        <p className="text-gray-500 text-sm mt-4 leading-relaxed">
          Register to new account and explore a world of possibilities. Your
          journey begins here.
        </p>
      </div>

      <div className="space-y-1">
        <fieldset className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <div className="relative">
            <Input
              placeholder="Enter name"
              className="ps-11"
              type="text"
              name="name"
            />
            <InputIcon>
              <User size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>

        <fieldset className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Input
              placeholder="Enter email"
              className="ps-11"
              type="email"
              name="email"
            />
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
              type="text"
              className="ps-11"
              name="password"
            />

            <InputIcon>
              <Lock size={19} color="#AFBACA" />
            </InputIcon>
          </div>
        </fieldset>
      </div>
      {fetcher?.data?.error && <FormAlert message={fetcher?.data?.error} />}
      <div className="!mt-8">
        <Button type="submit" className="w-full">
          Register
        </Button>
      </div>

      <p className="text-sm !mt-8 text-center text-gray-800">
        Already have an account?{" "}
        <Link
          to="/auth/login"
          href="javascript:void(0);"
          className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
          Login here
        </Link>
      </p>
    </fetcher.Form>
  );
}
