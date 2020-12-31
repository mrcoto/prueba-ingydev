export interface IProductFilters {
  page?: number;
  size?: number;
  status?: number[];
  brand?: number[];
  uom?: number[];
  line?: number[];
  category?: number[];
  manufacturer_type?: number[];
  sale_price?: number[]; // Two length array
  uen?: number[];
}
