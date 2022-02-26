export type AuthData = {
  username: string;
  password: string;
};

export type NavLinkProps = {
  target: string;
  label: string;
};

export type ButtonIconProps = {
  label: string;
  type: "button" | "submit";
  disabled?: boolean;
};

export type ProductPriceProps = {
  price: string;
};

export type Category = {
  id: number;
  name: string;
};

export type ProductItemsProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  date: string;
  categories: Category[];
};

export type ProductsResponse = {
  products: ProductItemsProps[];
};

export type ProductProps = {
  productDetails: ProductItemsProps;
};
