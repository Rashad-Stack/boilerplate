import { Divider } from "keep-react";
import { Outlet } from "react-router-dom";
import LoginWithGithub from "../components/LoginWithGithub";
import LoginWithGoogle from "../components/LoginWithGoogle";

export default function Auth() {
  return (
    <div className="min-h-screen flex fle-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
        <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] max-md:mx-auto">
          <Outlet />

          <div className="space-y-3">
            <Divider className="my-3">Or</Divider>

            <LoginWithGoogle />
            <LoginWithGithub />
          </div>
        </div>
        <div className="lg:h-[400px] md:h-[300px] max-md:mt-8">
          <img
            src="https://readymadeui.com/login-image.webp"
            className="w-full h-full max-md:w-4/5 mx-auto block object-cover"
            alt="Dining Experience"
          />
        </div>
      </div>
    </div>
  );
}
