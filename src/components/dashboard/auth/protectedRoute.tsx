import api from "@/utils/api";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/utils/constants";
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
      const res = await api.post("/api/token/refresh/", {
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
    return (
      <div className="grid place-items-center h-[100vh] w-full">
        <div className="relative w-24 h-24">
          <svg className="absolute inset-0" viewBox="0 0 220 220">
            <circle
              cx="110"
              cy="110"
              r="100"
              className="loader-ring"
              style={{
                stroke: "#9708F4",
                strokeWidth: 20,
                fill: "none",
                animation: "ringA 2s linear infinite",
              }}
            />
            <circle
              cx="110"
              cy="110"
              r="80"
              className="loader-ring"
              style={{
                stroke: "#5E14E4",
                strokeWidth: 20,
                fill: "none",
                animation: "ringB 2s linear infinite",
              }}
            />
            <circle
              cx="110"
              cy="110"
              r="60"
              className="loader-ring"
              style={{
                stroke: "#9708F4",
                strokeWidth: 20,
                fill: "none",
                animation: "ringC 2s linear infinite",
              }}
            />
            <circle
              cx="110"
              cy="110"
              r="40"
              className="loader-ring"
              style={{
                stroke: "#5E14E4",
                strokeWidth: 20,
                fill: "none",
                animation: "ringD 2s linear infinite",
              }}
            />
          </svg>
          <style jsx>{`
            @keyframes ringA {
              from,
              4% {
                stroke-dasharray: 0 660;
                stroke-width: 20;
                stroke-dashoffset: -330;
              }
              12% {
                stroke-dasharray: 60 600;
                stroke-width: 30;
                stroke-dashoffset: -335;
              }
              32% {
                stroke-dasharray: 60 600;
                stroke-width: 30;
                stroke-dashoffset: -595;
              }
              40%,
              54% {
                stroke-dasharray: 0 660;
                stroke-width: 20;
                stroke-dashoffset: -660;
              }
              62% {
                stroke-dasharray: 60 600;
                stroke-width: 30;
                stroke-dashoffset: -665;
              }
              82% {
                stroke-dasharray: 60 600;
                stroke-width: 30;
                stroke-dashoffset: -925;
              }
              90%,
              to {
                stroke-dasharray: 0 660;
                stroke-width: 20;
                stroke-dashoffset: -990;
              }
            }
            @keyframes ringB {
              from,
              12% {
                stroke-dasharray: 0 220;
                stroke-width: 20;
                stroke-dashoffset: -110;
              }
              20% {
                stroke-dasharray: 20 200;
                stroke-width: 30;
                stroke-dashoffset: -115;
              }
              40% {
                stroke-dasharray: 20 200;
                stroke-width: 30;
                stroke-dashoffset: -195;
              }
              48%,
              62% {
                stroke-dasharray: 0 220;
                stroke-width: 20;
                stroke-dashoffset: -220;
              }
              70% {
                stroke-dasharray: 20 200;
                stroke-width: 30;
                stroke-dashoffset: -225;
              }
              90% {
                stroke-dasharray: 20 200;
                stroke-width: 30;
                stroke-dashoffset: -305;
              }
              98%,
              to {
                stroke-dasharray: 0 220;
                stroke-width: 20;
                stroke-dashoffset: -330;
              }
            }
            @keyframes ringC {
              from {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: 0;
              }
              8% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -5;
              }
              28% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -175;
              }
              36%,
              58% {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: -220;
              }
              66% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -225;
              }
              86% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -395;
              }
              94%,
              to {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: -440;
              }
            }
            @keyframes ringD {
              from,
              8% {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: 0;
              }
              16% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -5;
              }
              36% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -175;
              }
              44%,
              50% {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: -220;
              }
              58% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -225;
              }
              78% {
                stroke-dasharray: 40 400;
                stroke-width: 30;
                stroke-dashoffset: -395;
              }
              86%,
              to {
                stroke-dasharray: 0 440;
                stroke-width: 20;
                stroke-dashoffset: -440;
              }
            }
          `}</style>
        </div>
      </div>
    );
  }

  return isAuthorised ? children : router.push("/login");
}

export default ProtectedRoute;
