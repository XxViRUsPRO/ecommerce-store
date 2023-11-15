"use client";

import React, { useEffect, useState } from "react";
import useCart from "@/hooks/use-cart";
import Container from "@/components/ui/container";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

type Props = {};

const CartPage = (props: Props) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  const cart = useCart();

  if (!mount) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length > 0 ? (
                <ul>
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </ul>
              ) : (
                <p className="text-neutral-500">No items in your cart.</p>
              )}
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
