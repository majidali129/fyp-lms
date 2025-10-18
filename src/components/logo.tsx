import { GraduationCap } from "lucide-react";

type LogoProps = {
  logoSize?: string;
  textClass?: string;
};
export const Logo = ({ logoSize, textClass }: LogoProps) => {
  return (
    <div className="flex items-center gap-1.5">
      <GraduationCap className={`text-orange-500 ${logoSize}`} />
      <span className={`font-medium text-gray-900 text-lg ${textClass}`}>E-tutor</span>
    </div>
  );
};
