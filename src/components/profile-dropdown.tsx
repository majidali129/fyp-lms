import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"


export const ProfileDropdown = () => {
    return (
        <Avatar className="rounded-full size-[34px]">
        <AvatarImage
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback>ER</AvatarFallback>
      </Avatar>
    )
}