import Link from "next/link";

import { NavLinkProps } from "../../@types";
import { ReturnSelected } from "../../utils";

export default function NavbarLink({ target, label }: NavLinkProps) {
  return (
    <Link href={target}>
      <a className={ReturnSelected(target)}>{label}</a>
    </Link>
  );
}
