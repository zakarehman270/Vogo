"use client";
import { OverlayLoading } from "@components";
import { AppLayout } from "@layouts";
import { useRouter } from "next/navigation";
import React from "react";

export const AuthGuardWrapper = ({ children }) => {
  const [loading, setLoading] = React.useState(true);
  const router = useRouter();

  React.useEffect(() => {
    const checkAuth = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    checkAuth();
  }, []);

  if (loading) return <OverlayLoading />;
  return <AppLayout>{children}</AppLayout>;
};
