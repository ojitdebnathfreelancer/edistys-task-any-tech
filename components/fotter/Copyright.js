import Link from "next/link";
import React from "react";

const Copyright = () => {
  return (
    <div className="bg-copy-bg border-t border-white/20 ">
      <div className="root-container flex lg:flex-row flex-col lg:gap-0 gap-5 justify-between text-blue-text py-5 lg:text-start text-center">
        <p>©2023 All rights reserved. Any Technology Pte Ltd.</p>
        <Link href="/" className="inline-block">
          Privacy Policy
        </Link>
      </div>
    </div>
  );
};

export default Copyright;
