export interface NewNote {
  id: string;
  title: string;
  body: string;
  type: string;
}

export interface Action {
  type: string;
  payload: any;
}
