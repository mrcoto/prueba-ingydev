export class Selected<T> {
  data: T;
  completed: boolean;
}

export function mapToSelected<T>(data: T[]): Selected<T>[] {
  return data.map(row => {
    const selected = new Selected<T>();
    selected.data = row;
    selected.completed = false;
    return selected;
  });
}

