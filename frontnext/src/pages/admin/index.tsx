import { useState } from "react";

import AuthPage from "./auth";
import DashboardPage from "./dashboard";

export default function AdminPage() {
  const [logged, setLogged] = useState(false);

  if (logged) {
    return <DashboardPage />;
  } else {
    return <AuthPage />;
  }
}
