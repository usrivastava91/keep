export interface NewNote {
  id: number;
  title: string;
  body: string;
}

export interface Action {
  type: string;
  payload: any;
}
