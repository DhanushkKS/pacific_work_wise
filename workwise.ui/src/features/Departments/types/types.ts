export type column = {
  id: "id" | "name" | "code" | "actions";
  label: string;
  minWidth?: number;
  align?: "right";
};

export type rowData = {
  id: string;
  name: string;
  code: string;
};
