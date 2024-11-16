import {
  Button,
  Drawer,
  DrawerAction,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  Navbar,
  NavbarBrand,
  NavbarContainer,
  NavbarItem,
  NavbarList,
} from "keep-react";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { NavLink, useLocation } from "react-router-dom";
import { auth } from "../firebase/config";
import Profile from "./Profile";

export default function Header() {
  const { state } = useLocation();
  const user = auth?.currentUser;

  return (
    <Navbar>
      <NavbarContainer className="max-w-7xl mx-auto px-5">
        <NavbarBrand>
          <img
            src="https://react.keepdesign.io/_next/static/media/keep.c8054ea8.svg"
            alt="keep"
            width="88"
            height="40"
          />
        </NavbarBrand>
        <NavbarList>
          {navLinks.map((link) => (
            <li
              key={link.title}
              className="md:px-4 md:py-2 hover:text-indigo-400">
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-indigo-500 underline font-semibold"
                      : "text-gray-500"
                  }`
                }>
                {link.title}
              </NavLink>
            </li>
          ))}
        </NavbarList>
        <NavbarList>
          {user ? (
            <Profile />
          ) : (
            <>
              <NavbarItem>
                <NavLink to="/auth/login">Login</NavLink>
              </NavbarItem>
              <NavbarItem active={true}>
                <NavLink to="/auth/register">Sign Up</NavLink>
              </NavbarItem>
            </>
          )}
        </NavbarList>

        <Drawer>
          <DrawerAction asChild className="lg:hidden">
            <Button variant="link">
              <HiBars3CenterLeft size={25} />
            </Button>
          </DrawerAction>
          <DrawerContent position="left" className="rounded-none">
            <DrawerTitle>
              <NavbarBrand>
                <img
                  src="https://react.keepdesign.io/_next/static/media/keep.c8054ea8.svg"
                  alt="keep"
                  width="88"
                  height="40"
                />
              </NavbarBrand>
            </DrawerTitle>

            <div className="flex flex-col gap-3 justify-between h-full mt-5">
              <DrawerDescription className="flex flex-col gap-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.title}
                    to={link.link}
                    className={({ isActive }) => {
                      return isActive ? "text-indigo-500" : "text-gray-500";
                    }}>
                    <DrawerAction>{link.title}</DrawerAction>
                  </NavLink>
                ))}
              </DrawerDescription>

              <div className="mb-10 space-y-3">
                {user ? (
                  <NavbarItem active={true} className="text-center">
                    <NavLink to={`/auth/logout?from=${state?.from || "/"}`}>
                      Logout
                    </NavLink>
                  </NavbarItem>
                ) : (
                  <>
                    <NavbarItem className="text-center">
                      <NavLink to="/auth/login">Login</NavLink>
                    </NavbarItem>
                    <NavbarItem active={true} className="text-center">
                      <NavLink to="/auth/register">Sign Up</NavLink>
                    </NavbarItem>
                  </>
                )}
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </NavbarContainer>
    </Navbar>
  );
}

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];
