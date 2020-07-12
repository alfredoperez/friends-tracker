export interface ScaleType {
  range;
  domain;
  ticks;

  (d: object): any;
}

export interface DimensionsType {
  marginTop: number;
  marginRight: number;
  marginBottom: number;
  marginLeft: number;
  height: number;
  width: number;
  boundedHeight?: number;
  boundedWidth?: number;
}

export type AccessorType = (value: any) => any;

