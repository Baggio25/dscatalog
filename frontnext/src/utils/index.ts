import { useRouter } from "next/router";

export function ReturnSelected(route: string) {
    const router = useRouter();
    const { pathname } = router;

    let result;

    if(pathname === route)  result = "active";

    return result;
}