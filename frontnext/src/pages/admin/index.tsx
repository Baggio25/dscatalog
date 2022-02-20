import { useState } from "react";
import DashboardPage from "./dashboard";
import AuthPage from "./auth";

export default function AdminPage() {
  const [logged, setLogged] = useState(false);

  if (logged) {
    return <DashboardPage />;
  } else {
    return <AuthPage />;
  }
}
