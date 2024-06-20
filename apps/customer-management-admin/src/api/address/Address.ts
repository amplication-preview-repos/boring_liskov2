import { Customer } from "../customer/Customer";

export type Address = {
  city: string | null;
  country: string | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  postalCode: string | null;
  state: string | null;
  street: string | null;
  updatedAt: Date;
};
