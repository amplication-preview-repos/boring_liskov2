import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AddressCreateInput = {
  city?: string | null;
  country?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  postalCode?: string | null;
  state?: string | null;
  street?: string | null;
};
