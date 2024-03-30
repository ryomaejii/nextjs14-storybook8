import { usePathname, useRouter } from "next/navigation";
import { ComponentPropsWithoutRef, useEffect } from "react";

export function AppButton({
  children,
  ...props
}: ComponentPropsWithoutRef<"button">) {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    console.log("Router", router);
    console.log("Pathname", pathname);
  }, [pathname, router]);

  return <button {...props}>{children}</button>;
}
