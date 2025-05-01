import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HamburgerMenuIcon from "./ui/HamburgerMenuIcon";
import { NavLink } from "react-router";
import { ModeToggle } from "./mode-toggle";

function DropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 lg:hidden fill-stone-800 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
          <HamburgerMenuIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col p-6 items-center gap-4">
        <DropdownMenuItem>
          <NavLink className={"font-extrabold  "} to={"/"}>
            Home
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink className={"font-extrabold "} to={"/analyze"}>
            Analyse
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <NavLink className={"font-extrabold "} to={"/results"}>
            Resultate
          </NavLink>
        </DropdownMenuItem>
        <DropdownMenuSeparator className=" w-full" />
        <div className="flex items-center flex-col justify-centergap-2.5">
          <p className="font-extralight">Switch</p>
          <ModeToggle />
          <p className="font-extralight">Mode</p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownMenu;
