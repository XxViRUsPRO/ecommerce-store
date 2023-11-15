"use client";

import React, { useEffect, useState } from "react";

interface CurrencyProps {
  value: number | string;
}

const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return <div className="font-semibold">{formatCurrency(+value)}</div>;
};

export default Currency;
