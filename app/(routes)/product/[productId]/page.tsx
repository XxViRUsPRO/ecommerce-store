import React from "react";
import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Container from "@/components/ui/container";
import Gallery from "@/components/gallery";
import ProductList from "@/components/product-list";
import Info from "@/components/info";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggested = await getProducts({
    categoryId: product.category.id,
  });

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 lg:mt-0 sm:px-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10 border-gray-200" />
          <ProductList title="Suggested products" items={suggested} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
