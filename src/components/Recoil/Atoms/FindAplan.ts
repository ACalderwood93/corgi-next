import { CoverSection, ICoverSectionParent } from "@/lib/Products/Interfaces";
import { atom } from "recoil";

export const modalStateAtom = atom<ImodalState>({
  key: "FindAPlanModalSelection", // unique ID (with respect to other atoms/selectors)
  default: {
    modalOpen: false,
    selectedCoverSection: null,
  },
});

export interface ImodalState {
  modalOpen: boolean;
  selectedCoverSection: CoverSection | null;
}
