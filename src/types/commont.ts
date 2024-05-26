import { Book } from 'store/book/types';

export type FooterSocialItemProps = {
  show: JSX.Element;
  hover: JSX.Element;
  link: string;
};

export type CatalogItemType = {
  item: Book;
};

export type ButtonHoverType = {
  hover: JSX.Element;
  isAdded: boolean;
};

export type DropdownItemType = {
  title: string;
  description?: string;
  characteristics?: DropdownCharacteristicsType;
  order?: string[];
};

export type DropdownCharacteristicsType = {
  publishing: string;
  language: string;
  cover: string;
  pages: number;
  format: string;
  isbn: string;
  paper: string;
  illustrations: string;
  type: string;
};
