import React from "react";

// Import all SVG and PNG assets from src/assets
import AmbitLogo from "@/assets/Ambit-energy.svg";
import CTCLogo from "@/assets/CTC-logo.svg";
import ComputerAssociatesLogo from "@/assets/Computer_Associates_logo.svg";
import EvansSutherlandLogo from "@/assets/Evans_&_Sutherland_logo.svg";
import FujitsuLogo from "@/assets/Fujitsu-Logo.svg";
import GakkenLogo from "@/assets/Gakken_company_logo.svg";
import HPLogo from "@/assets/HP_logo_2012.svg";
import HitachiLogo from "@/assets/Hitachi_2025_logo.svg";
import HitachiZosenLogo from "@/assets/Hitachi_Zosen_logo.svg";
import IBMLogo from "@/assets/IBM-logo.svg";
import KeioUniversityLogo from "@/assets/Keio_University_logo.svg";
import MannatechLogo from "@/assets/Mannatech-logo.png";
import NTTDataLogo from "@/assets/NTT_Data_2025.svg";
import NipponSteelLogo from "@/assets/Nippon_Steel_-_Logo.svg";
import NovellLogo from "@/assets/Novell_teeth_logo_print.svg";
import OracleLogo from "@/assets/Oracle_logo.svg";
import PanasonicLogo from "@/assets/Panasonic_logo.svg";
import SunLogo from "@/assets/Sun-Logo.svg";
import ToshibaLogo from "@/assets/Toshiba_logo.svg";
import UniversityOfTokyoLogo from "@/assets/University_of_Tokyo_logo.svg";

interface ClientLogoProps {
  name: string;
  className?: string;
}

// Map each client key/variation of names to their imported assets with custom height offsets for perfect visual scaling/balancing
const logoMap: Record<string, { src: string; alt: string; heightClass: string }> = {
  Ambit: { src: AmbitLogo, alt: "Ambit Energy", heightClass: "h-6 md:h-7" },
  "Ambit Energy": { src: AmbitLogo, alt: "Ambit Energy", heightClass: "h-6 md:h-7" },
  CA: { src: ComputerAssociatesLogo, alt: "Computer Associates", heightClass: "h-7 md:h-8" },
  "Computer Associates": {
    src: ComputerAssociatesLogo,
    alt: "Computer Associates",
    heightClass: "h-7 md:h-8",
  },
  CTC: { src: CTCLogo, alt: "CTC", heightClass: "h-6 md:h-7" },
  "Evans & Sutherland": {
    src: EvansSutherlandLogo,
    alt: "Evans & Sutherland",
    heightClass: "h-7 md:h-8",
  },
  Fujitsu: { src: FujitsuLogo, alt: "Fujitsu", heightClass: "h-5 md:h-6" },
  Gakken: { src: GakkenLogo, alt: "Gakken", heightClass: "h-5 md:h-6" },
  Hitachi: { src: HitachiLogo, alt: "Hitachi", heightClass: "h-[18px] md:h-[22px]" },
  "Hitachi Zosen": { src: HitachiZosenLogo, alt: "Hitachi Zosen", heightClass: "h-[22px] md:h-6" },
  HP: { src: HPLogo, alt: "HP", heightClass: "h-8 md:h-9" },
  IBM: { src: IBMLogo, alt: "IBM", heightClass: "h-5 md:h-6" },
  "Keio University": { src: KeioUniversityLogo, alt: "Keio University", heightClass: "h-8 md:h-9" },
  Mannatech: { src: MannatechLogo, alt: "Mannatech", heightClass: "h-[28px] md:h-8" },
  "Nippon Steel": { src: NipponSteelLogo, alt: "Nippon Steel", heightClass: "h-[26px] md:h-7" },
  Novell: { src: NovellLogo, alt: "Novell", heightClass: "h-[22px] md:h-6" },
  "NTT Data": { src: NTTDataLogo, alt: "NTT DATA", heightClass: "h-[18px] md:h-[22px]" },
  "NTT DATA": { src: NTTDataLogo, alt: "NTT DATA", heightClass: "h-[18px] md:h-[22px]" },
  Oracle: { src: OracleLogo, alt: "Oracle", heightClass: "h-[16px] md:h-[18px]" },
  Panasonic: { src: PanasonicLogo, alt: "Panasonic", heightClass: "h-[18px] md:h-[21px]" },
  "Matsushita / Panasonic": {
    src: PanasonicLogo,
    alt: "Panasonic",
    heightClass: "h-[18px] md:h-[21px]",
  },
  "Sun Microsystems": { src: SunLogo, alt: "Sun Microsystems", heightClass: "h-8 md:h-9" },
  Toshiba: { src: ToshibaLogo, alt: "Toshiba", heightClass: "h-[18px] md:h-[21px]" },
  "Tokyo University": {
    src: UniversityOfTokyoLogo,
    alt: "University of Tokyo",
    heightClass: "h-8 md:h-9",
  },
  "University of Tokyo": {
    src: UniversityOfTokyoLogo,
    alt: "University of Tokyo",
    heightClass: "h-8 md:h-9",
  },
};

export function ClientLogo({ name, className = "" }: ClientLogoProps) {
  const logo = logoMap[name];

  if (!logo) {
    return (
      <span
        className={`text-[15px] font-medium tracking-wider text-ink/85 border-b border-ink/10 pb-0.5 select-none ${className}`}
      >
        {name}
      </span>
    );
  }

  return (
    <div className={`flex items-center justify-center shrink-0 ${className}`}>
      <img
        src={logo.src}
        alt={logo.alt}
        referrerPolicy="no-referrer"
        className={`${logo.heightClass} w-auto max-w-[150px] md:max-w-[180px] object-contain select-none`}
      />
    </div>
  );
}
