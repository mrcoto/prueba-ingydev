/* tslint:disable:variable-name */
export interface ICategory {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export class Category implements ICategory {

  id: number;
  name: string;
  created_at: string;
  updated_at: string;

}

