/**
 * Navlink
 */
export type NavLinkProps = {
  target: string;
  label: string;
};

/**
 * ButtonIcon
 */
export type ButtonIconProps = {
  label: string;
};

/**
 * Category
 */
export type Category = {
  id: number;
  name: string;
};

/**
 * Product
 */
export type ProductPriceProps = {
  price: string;
};

export type ProductItemProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  date: string;
  categories: Category[];
};

export type ProductsResponse = {
  products: ProductItemProps[];
};

export type ProductProps = {
  productDetails: ProductItemProps;
};
