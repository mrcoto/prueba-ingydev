/* tslint:disable:variable-name */
export interface IProductLine {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export class ProductLine implements IProductLine {

  id: number;
  name: string;
  created_at: string;
  updated_at: string;

}

