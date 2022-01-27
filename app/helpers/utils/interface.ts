import { Combinable } from './combinables';

export interface SVGPROPS{
  style?: any;
  svgName: any,
  al?: string;
  ml?: Combinable;
  mr?: Combinable;
  mt?: Combinable;
  mb?: Combinable;
  width?: Combinable;
  height?: Combinable
}

export interface TEXTPROPS {
    title: string;
    color?: string;
    fontSize?: number;
    textAlign?: string;
    width?: Combinable;
    m?: Combinable;
    mv?: Combinable;
    mh?: Combinable;
    ml?: Combinable;
    mr?: Combinable;
    mt?: Combinable;
    mb?: Combinable;
    style?: any;
    fontFamily?: string;
    lineHeight?: number;
    alignItems?: string;
    textStyle?: any;
    otherProps? : any
}
  
export interface BUTTONPROPS {
  title?: string,
  onPress? : () => void,
  color? : string,
  textColor? : string,
  borderColor? : string,
  borderWidth? : Combinable,
  width? : Combinable,
  height?: Combinable,
  fontSize?: number,
  mr? : Combinable, 
  ml? : Combinable,
  mt?: Combinable,
  mb? : Combinable,
  mv? : Combinable,
  pv?: Combinable,
  ph?:Combinable,
  size? : Combinable,
  style? : any,
  styleV? : any,
  iconName? : any,
  innerIcon? : string,
  iconHeight? : Combinable,
  iconWidth? : Combinable,
  indicator?: any,
  borderRadius?: number,
  alignSelf?: string,
  fontFamily? : string,
}

export interface CARDPROPS{
    disabled?:boolean,
    onPress?: () => void,
    underlay? : string,
    width?:  Combinable,
    children?: any,
    borderRadius?: number,
    pv? :Combinable,
    ph?:Combinable,
    mv?:Combinable,
    al?:string,
    alS?:Combinable,
    style?:any,
  styleV?: any,
  childStyle?:any,
    background?: string,
    otherprops?:any
}

export interface TEXTINPUTPROPS{
    iconName?:string,
  smallBtn?:any,
  onPressSmallBtn?:()=>void,
  rightIcon?:any,
  placeholderTextColor?:string,
    textAlign?: string
    alignSelf?:string,
  textWidth?:Combinable,
  width?:Combinable,
  height?:Combinable,
  style?:any,
  mv?:Combinable,
  ml?:Combinable,
  mr?:Combinable,
  mb?:Combinable,
  mt?:Combinable,
  m?:Combinable,
  pv?:Combinable,
  ML?:Combinable,
  rIconWidth?:number,
  rIconHeight?:number,
  marginHorizontal?:Combinable,
  onPressRightIcon?:any,
  textSize?:number,
  fontFamily?:string,
  styley?:any,
    placeholder?: string,
    value?:any
    onChangeText?:(text: string) => void,
    onFocus?:() => void,
  otherProps?:any
}

export interface HEADERPROPS {
    title?:string,
  headerImage? : string,
  leftButton?:any,
  rightButton?:any,
  onPressLeft?:() => void,
  onPressRight?:() => void,
  username? : string,
  leftButtonPng? : string,
  textSize?:number,
  fontFamily?:string,
  textColor?:string,
  mv?:Combinable,
  mh?:Combinable,
  ml?:Combinable,
  mr?:Combinable,
  mt?:Combinable,
  mb?:Combinable,
  pt?:Combinable,
  child?:any,
  imageHeight?:Combinable,
  imageWidth?:Combinable,
  iconLeft?:any,
  styleV?:any,
}

export interface OBJREPRESENTATION{
    [key: string] : any
}
