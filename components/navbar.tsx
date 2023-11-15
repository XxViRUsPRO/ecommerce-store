import React from "react";
import Link from "next/link";
import Container from "@/components/ui/container";
import NavbarRoutes from "@/components/navbar-routes";
import NavbarActions from "./navbar-actions";
import getCategories from "@/actions/get-categories";

export const revalidate = 0;

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex items-center px-4 sm:px-6 lg:px-8 h-16">
          <Link href="/" className="ml-4 lg:ml-0 flex space-x-2">
            <p className="font-bold text-xl uppercase">THE Store</p>
          </Link>
          <NavbarRoutes data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
