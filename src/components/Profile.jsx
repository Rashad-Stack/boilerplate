import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Dropdown,
  DropdownAction,
  DropdownContent,
  DropdownItem,
  SidebarDropdownList,
} from "keep-react";
import { SignOut } from "phosphor-react";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";

export default function Profile() {
  const user = auth?.currentUser;

  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button variant="link">
          <Avatar>
            <AvatarImage src={user?.photoURL} />
            <AvatarFallback>
              {user?.displayName?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownAction>
      <DropdownContent>
        <SidebarDropdownList>
          <DropdownItem>
            <SignOut size={20} />
            <Link to="/auth/logout">Logout</Link>
          </DropdownItem>
        </SidebarDropdownList>
      </DropdownContent>
    </Dropdown>
  );
}
