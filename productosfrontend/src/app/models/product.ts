/* tslint:disable:variable-name */
import {Brand} from './brand';
import {Category} from './category';
import {ProductLine} from './product-line';
import {ManufacturerType} from './manufacturer-type';
import {ProductStatus} from './product-status';
import {Uen} from './uen';
import {Uom} from './uom';

export interface IProduct {
  id: number;
  code: string;
  name: string;
  uom_id: number;
  sale_price: number;
  cost_price: number;
  line_id: number;
  category_id: number;
  provider_code_id: string;
  status_id: number;
  manufacturer_type_id: number;
  part_number: string;
  uen_id: number;
  brand_id: number;
  min_sale_price: number;
  description: string;
  image_150: string;
  image_450: string;
  created_at: string;
  updated_at: string;
  brand: Brand;
  category: Category;
  line: ProductLine;
  manufacturer_type: ManufacturerType;
  status: ProductStatus;
  uen: Uen;
  uom: Uom;
}

export class Product implements IProduct {
  id: number;
  code: string;
  name: string;
  uom_id: number;
  sale_price: number;
  cost_price: number;
  line_id: number;
  category_id: number;
  provider_code_id: string;
  status_id: number;
  manufacturer_type_id: number;
  part_number: string;
  uen_id: number;
  brand_id: number;
  min_sale_price: number;
  description: string;
  image_150: string;
  image_450: string;
  created_at: string;
  updated_at: string;
  brand: Brand;
  category: Category;
  line: ProductLine;
  manufacturer_type: ManufacturerType;
  status: ProductStatus;
  uen: Uen;
  uom: Uom;

}

