/* tslint:disable:variable-name */
export interface IBrand {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export class Brand implements IBrand {

  id: number;
  name: string;
  created_at: string;
  updated_at: string;

}

