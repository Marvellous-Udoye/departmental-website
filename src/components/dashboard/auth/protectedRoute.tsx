import ProtectedRouteLoader from "@/components/loaders/protectedRoutes";
import api from "@/utils/api";
import { ACCESS_TOKEN, BASE_URL, REFRESH_TOKEN } from "@/utils/constants";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ProtectedRouteProp {
  children: React.ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProp) {
  const [isAuthorised, setIsAuthorised] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    auth().catch(() => setIsAuthorised(false));
  });

  const refreshToken = async () => {
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    try {
      const res = await api.post(`${BASE_URL}/api/token/refresh/`, {
        refresh: refreshToken,
      });
      if (res.status == 200) {
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        setIsAuthorised(true);
      } else {
        setIsAuthorised(false);
      }
    } catch (error) {
      console.log(error);
      setIsAuthorised(false);
    }
  };

  const auth = async () => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setIsAuthorised(false);
      return;
    }
    const decoded = jwtDecode(token);
    const tokenExpiration = decoded.exp;
    const now = Date.now() / 1000;

    if (tokenExpiration! < now) {
      await refreshToken();
    } else {
      setIsAuthorised(true);
    }
  };

  if (isAuthorised == null) {
    return <ProtectedRouteLoader />;
  }

  if (!isAuthorised) {
    router.push("/login");
    return null;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
