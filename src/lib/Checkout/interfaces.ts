import { IProduct } from "../Products/Interfaces";

export interface ICheckout {
  personalDetails: IPersonalDetails | undefined;
  address: IAddress | undefined;
  bankDetails: IBankDetails | undefined;
  product: IProduct | undefined;
  excess: Excess;
}

export interface IPersonalDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface IAddress {
  address1: string;
  address2: string;
  city: string;
  postCode: string;
}

export interface IBankDetails {
  accountName: string;
  accountNumber: string;
  sortCode: string;
}

export enum Excess {
  Zero,
  Sixty,
}
