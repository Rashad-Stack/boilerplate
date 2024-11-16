import { Button } from "keep-react";
import { GoogleLogo } from "phosphor-react";
import { Link, useLocation } from "react-router-dom";

export default function LoginWithGoogle() {
  const { state } = useLocation();

  return (
    <Button
      variant="outline"
      type="button"
      className="flex items-center gap-2 w-full">
      <GoogleLogo size={24} />{" "}
      <Link to={`/auth/login-with-google?from=${state?.from || "/"}`}>
        Continue with Google
      </Link>
    </Button>
  );
}
