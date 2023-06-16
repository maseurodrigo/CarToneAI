import { swatch, fileIcon, ai, paintPalette } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
  },
  {
    name: "filepicker",
    icon: fileIcon,
  },
  {
    name: "aipicker",
    icon: ai,
  }
];

export const FilterTabs = [
  {
    name: "paintPalette",
    icon: paintPalette,
  },
];

export const DecalTypes = {
  full: {
    stateProperty: "fullDecal",
    filterTab: "paintPalette",
  }
};
