"use client";

import { isLoggedIn, removeUserInfo } from "@/services/auth.service";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";
import "react-toastify/dist/ReactToastify.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { authKey } from "@/constants/storageKey";

import Modal from "react-modal";



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const logOut = () => {
    removeUserInfo(authKey);
    router.push("/login");
  };

  const userLoggedIn = isLoggedIn();
  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    } else {
      setIsLoading(true);
    }
  }, [router, isLoading]);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <div className=" w-full mx-auto mt-5" style={{ backgroundColor: "#FFF8E3" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default DashboardLayout;
