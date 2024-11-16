import { Button } from "keep-react";
import { GithubLogo } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";

export default function LoginWithGithub() {
  const { state } = useLocation();

  return (
    <Button
      variant="outline"
      type="button"
      className="flex items-center gap-2 w-full">
      <GithubLogo size={24} />{" "}
      <Link to={`/auth/login-with-github?from=${state?.from || "/"}`}>
        Continue with Github
      </Link>
    </Button>
  );
}
