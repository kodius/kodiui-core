// import { ThemeContract } from "./styles/kodiContract.css";

import { kodiContract } from "./styles/kodiContract.css";

// type ThemeContractExtension<T extends ThemeContract> = {
//   colors?: {
//     example3: T['colors']['example1'];
//     example4: T['colors']['example2'];
//   };
// };
//
// export function extendKodiContract<T extends ThemeContract>(
//   contract: any,
//   extension: any,
// ): T {
//   // Create a new object with the properties from the original contract
//   const extendedContract = { ...contract };
//
//   // Iterate over the keys of the extension object
//   for (const key in extension) {
//     if (Object.prototype.hasOwnProperty.call(extension, key)) {
//       const value: any = extension[key];
//
//       // If the key already exists in the contract, merge the values
//       if (key in contract) {
//         extendedContract[key] = { ...contract[key], ...value };
//       }
//       // Otherwise, add the key-value pair to the contract
//       else {
//         extendedContract[key] = value;
//       }
//     }
//   }
//
//   return extendedContract as T;
// }
//


export {};
