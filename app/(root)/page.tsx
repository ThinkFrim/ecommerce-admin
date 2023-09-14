import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

import React from "react";

const SetupPage = () => {
  return (
    <div className="p-5">
      <UserButton afterSignOutUrl="/"/>
    </div>
  );
};

export default SetupPage;
