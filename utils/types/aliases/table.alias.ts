export type TableContentTbody = {
  body: { value: string }[];
}

export type TableContent = {
  thead: { value: string }[];
  tbody: TableContentTbody[];
}

export type TableProps = {
  content: TableContent|null;
}
