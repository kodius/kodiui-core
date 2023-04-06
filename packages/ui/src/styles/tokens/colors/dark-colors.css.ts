import { blackALight } from "./black";
import * as colors from "./dark";
import { whiteADark } from "./white";

export const DarkColors = {
  body: colors.grayDark.gray2,

  brand: colors.indigoDark.indigo9,
  brandActive: colors.indigoDark.indigo10,
  brandHover: colors.indigoDark.indigo8,
  brandSoft: colors.indigoDark.indigo3,
  brandSoftActive: colors.indigoDark.indigo4,
  brandSoftHover: colors.indigoDark.indigo4,

  brandAccent: colors.crimsonDark.crimson9,
  brandAccentActive: colors.crimsonDark.crimson10,
  brandAccentHover: colors.crimsonDark.crimson8,
  brandAccentSoft: colors.crimsonDark.crimson3,
  brandAccentSoftActive: colors.crimsonDark.crimson4,
  brandAccentSoftHover: colors.crimsonDark.crimson4,

  caution: colors.yellowDark.yellow8,
  cautionLight: colors.yellowDark.yellow2,
  critical: colors.redDark.red10,
  criticalActive: colors.redDark.red11,
  criticalHover: colors.redDark.red11,
  criticalLight: colors.redDark.red3,
  criticalSoft: colors.redDark.red2,
  criticalSoftActive: colors.redDark.red5,
  criticalSoftHover: colors.redDark.red3,

  info: colors.indigoDark.indigo9,
  infoLight: colors.indigoDark.indigo3,

  neutral: colors.grayDark.gray11,
  neutralActive: colors.grayDark.gray12,
  neutralHover: colors.grayDark.gray12,
  neutralLight: colors.grayDark.gray3,
  neutralSoft: colors.grayDark.gray2,
  neutralSoftActive: colors.slateDark.slate7,
  neutralSoftHover: colors.slateDark.slate5,
  positive: colors.greenDark.green11,
  positiveLight: colors.greenDark.green4,
  white: "#000",
  black: "#fff",
  ...whiteADark,
  ...blackALight,
  ...colors.amberDark,
  ...colors.blueDark,
  ...colors.bronzeDark,
  ...colors.brownDark,
  ...colors.crimsonDark,
  ...colors.cyanDark,
  ...colors.goldDark,
  ...colors.grassDark,
  ...colors.grayDark,
  ...colors.greenDark,
  ...colors.indigoDark,
  ...colors.limeDark,
  ...colors.mauveDark,
  ...colors.mintDark,
  ...colors.oliveDark,
  ...colors.orangeDark,
  ...colors.pinkDark,
  ...colors.plumDark,
  ...colors.purpleDark,
  ...colors.redDark,
  ...colors.sageDark,
  ...colors.sandDark,
  ...colors.skyDark,
  ...colors.slateDark,
  ...colors.tealDark,
  ...colors.tomatoDark,
  ...colors.violetDark,
  ...colors.yellowDark,
} as const;
