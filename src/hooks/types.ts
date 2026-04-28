export const SCREEN_SIZE = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
} as const;

export type SCREEN_SIZE = (typeof SCREEN_SIZE)[keyof typeof SCREEN_SIZE];
