export interface Billboard {
  id: string;
  label: string;
  imgUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: string;
  images: ProductImage[];
  isFeatured: boolean;
  size: Size;
  color: Color;
}

export interface ProductImage {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}
