export interface Point {
    x: number;
    y: number;
}
export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}
export interface Size {
    width: number;
    height: number;
}
export declare type Placement = 'top' | 'end' | 'bottom' | 'start';
export interface Geometry {
    origin: Point;
    anchor: Point;
    placement: Placement;
}
export declare const computeGeometry: (contentSize: Size, placement: Placement | 'auto', fromRect: Rect, displayArea: Rect, arrowSize: Size) => Geometry;
