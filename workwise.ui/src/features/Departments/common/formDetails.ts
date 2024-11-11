import { generateUniqueKey } from "../../../helpers/generateUniqueKey.ts";
import { INPUT_TYPES } from "../../../constants.ts";

export const formDetails = [
  {
    key: generateUniqueKey("code"),
    name: "code",
    label: "Department Code",
    type: INPUT_TYPES.TEXT,
    required: true,
    xs: 12,
    sm: 12,
    md: 12,
  },
  {
    key: generateUniqueKey("name"),
    name: "name",
    label: "Department Name",
    type: INPUT_TYPES.TEXT,
    required: true,
    xs: 12,
    sm: 12,
    md: 12,
  },
];
