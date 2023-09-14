"use client";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { userStoreModal } from "@/hooks/use-store-model";

import { UserButton } from "@clerk/nextjs";

import React, { useEffect } from "react";

const SetupPage = () => {
  const onOpen = userStoreModal((state) => state.onOpen);
  const isOpen = userStoreModal((state) => state.isOpen);

  useEffect(() => {
    // check if model is not open
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div className="p-5">Root Page</div>;
};

export default SetupPage;
