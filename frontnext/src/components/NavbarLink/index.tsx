import Link from "next/link";

import { NavLinkProps } from "../../@types";
import { returnSelected } from "../../utils";

export default function NavbarLink({ target, label }: NavLinkProps) {
  return (
    <Link href={target}>
      <a className={returnSelected(target)}>{label}</a>
    </Link>
  );
}
