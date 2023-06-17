export interface IProduct {
  name: string;
  price: number;
  priceWithoutExcess: number;
  index: number;
  display: boolean;
  covered: CoverSection[];
}

export interface ICoverSectionParent {
  name: CoverSection;
  sections: string[];
}

export enum CoverSection {
  AnnualBoilerService,
  CentralHeating,
  Plumbing,
  Electrics,
  GasSupplyPipe,
  WaterSupplyPipe,
  InternalDrains,
  ExternalDrains,
  BoilerReplacement,
  TapsAndToilets,
  PriorityEmergencyLine,
}
