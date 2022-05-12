import { useEffect, useState } from "react";

import AuthPage from "./auth";
import DashboardPage from "./dashboard/[index]";

export default function AdminPage() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("@dscatalog/token")) {
      setLogged(true);
    } else {
      setLogged(false);
    }
  }, []);

  if (logged) {
    return <DashboardPage />;
  } else {
    return <AuthPage />;
  }
}
