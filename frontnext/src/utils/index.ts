import { useRouter } from "next/router";

export function returnSelected(route: string) {
    const router = useRouter();
    const { pathname } = router;

    let result;

    if(pathname === route)  result = "active";

    return result;
}


export function returnActiveItem(route: string) {
    const router = useRouter();
    const { asPath } = router;

    let result;

    if(asPath === route)  result = "active-sidebar-item";

    return result;
}