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
  type: "button" | "submit";
  disabled?: boolean;
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

/**
 * Auth
 */
export type AuthData = {
  username: string;
  password: string;
};

export type AccessToken = {
  exp: number;
  user_name: string;
  authorities: Role[];
};

export type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userFirstName: string;
}

/**
 * Role
 */
export type Role = "ROLE_OPERATOR" | "ROLE_ADMIN";
