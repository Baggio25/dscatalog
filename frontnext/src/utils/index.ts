/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

export function returnSelected(route: string): string | undefined {
  const router = useRouter();
  const { pathname } = router;

  let result;
  if (pathname === route) result = "active";

  return result;
}
