import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const ProfileDropdown = () => {
  return (
    <Avatar className="rounded-full size-[34px]">
      <AvatarImage alt="@evilrabbit" src="https://github.com/evilrabbit.png" />
      <AvatarFallback>ER</AvatarFallback>
    </Avatar>
  );
};
