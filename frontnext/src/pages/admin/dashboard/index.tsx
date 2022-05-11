import { useRouter } from "next/router";

import { Categories, Products, Users } from "./pages";

export default function DashboardPage() {
  const route = useRouter();
  const { index } = route.query; //Ex.: localhost:3000/admin/dashboard/products

  const returnRoute = () => {
    switch (index) {
      case "products":
        return <Products />;

      case "users":
        return <Users />;

      case "categories":
        return <Categories />;

      default:
        return <Products />;
    }
  };

  return <div className="d-flex flex-column flex-lg-row">
    {returnRoute()}
  </div>;
}
