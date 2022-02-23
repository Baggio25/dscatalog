import { useState, useEffect } from "react";

import DashboardPage from "./dashboard";
import AuthPage from "./auth";
import { STORAGE_VAR } from "../../utils/auth";

export default function AdminPage() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_VAR)) {
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
