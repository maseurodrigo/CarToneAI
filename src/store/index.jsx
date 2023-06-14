import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#1976D2',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './react.png',
    fullDecal: './react.png',
    scale: 1125,
    relBase: 1,
    relCustom: 1.45
});

export default state;