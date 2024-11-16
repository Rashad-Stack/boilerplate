import { Button } from "keep-react";
import { GithubLogo } from "phosphor-react";
import { Link } from "react-router-dom";

export default function LoginWithGithub() {
  return (
    <Button
      variant="outline"
      type="button"
      className="flex items-center gap-2 w-full">
      <GithubLogo size={24} />{" "}
      <Link to="/auth/login-with-github">Continue with Github</Link>
    </Button>
  );
}
