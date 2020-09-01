import UIfx from "uifx";
import clickSound from "./sounds/click_03.wav";
import breakStart from "./sounds/chord_soft_mid_up.wav";
import breakEnd from "./sounds/chord_soft_mid_down.wav";
import tomatoAdd from "./sounds/chord_chime_jazz.wav";
import slideRight from "./sounds/slide_right.wav";
import slideLeft from "./sounds/slide_left.wav";

export const click = new UIfx(clickSound, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

export const breakChimeUp = new UIfx(breakStart, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

export const breakChimeDown = new UIfx(breakEnd, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

export const tomatoChime = new UIfx(tomatoAdd, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

export const slideOpen = new UIfx(slideRight, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});

export const slideClose = new UIfx(slideLeft, {
  volume: 0.4, // number between 0.0 ~ 1.0
  throttleMs: 100,
});
