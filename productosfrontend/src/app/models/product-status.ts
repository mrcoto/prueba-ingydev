/* tslint:disable:variable-name */
export interface IProductStatus {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export class ProductStatus implements IProductStatus {

  id: number;
  name: string;
  created_at: string;
  updated_at: string;

}

export const STATUS = {
  COMMERCIAL : 1,
  NORMAL: 2,
  DISCONTINUED: 3,
};
