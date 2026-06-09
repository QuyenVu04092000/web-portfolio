"use client";

import { useState } from "react";

const EMAIL = "vuquyen.04092000@gmail.com";

export const CopyEmailButton = ({
  label,
  className,
  children,
}: {
  label?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={handleCopy} className={className}>
      {copied ? "Copied!" : (children ?? label)}
    </button>
  );
};
