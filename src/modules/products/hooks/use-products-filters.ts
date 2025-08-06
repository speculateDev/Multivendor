import { parseAsString, useQueryStates } from "nuqs";

function useProductsFilters() {
  return useQueryStates({
    minPrice: parseAsString.withOptions({
      clearOnDefault: true,
    }),

    maxPrice: parseAsString.withOptions({
      clearOnDefault: true,
    }),
  });
}

export default useProductsFilters;
