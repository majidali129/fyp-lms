import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-sidebar py-2.5">
      <p className="text-muted-foreground">
        &copy 2025 - Eduguard. Developed by <strong>Majid</strong>. All rights reserved{" "}
      </p>
      <div className="*:text-muted-foreground">
        <Link href={""}>FAQs</Link>
        <Link href={""}>Privacy Policy</Link>
        <Link href={""}>Terms & Conditions</Link>
      </div>
    </footer>
  );
};
