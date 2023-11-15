"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const router = useRouter();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const cart = useCart();

  if (!mount) return null;

  return (
    <div className="ml-auto flex items-center space-x-4">
      <Button
        className="flex items-center space-x-2"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag />
        <span className="text-sm font-medium">{cart.items.length}</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
