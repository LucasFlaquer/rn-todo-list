declare module "*.svg" {
  import React from 'react';
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>;
  export default content;
}
// declare module '*.svg' {
//   const value: any;
//   export default value;
// }