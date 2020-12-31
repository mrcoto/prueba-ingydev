/* tslint:disable:variable-name */
export interface IPagination<T> {
  total: number;
  found: number;
  total_pages: number;
  current_page: number;
  data: T[];
}

export class Pagination<T> implements IPagination<T> {
  total: number;
  found: number;
  total_pages: number;
  current_page: number;
  data: T[];
}
