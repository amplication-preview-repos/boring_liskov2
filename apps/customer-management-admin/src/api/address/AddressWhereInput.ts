import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  postalCode?: StringNullableFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
};
