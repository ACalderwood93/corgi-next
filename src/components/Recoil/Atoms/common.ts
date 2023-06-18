import { recoilPersist } from "recoil-persist";

export const { persistAtom } = recoilPersist({
  key: "recoil-persist", // this key is using to store data in local storage
  storage: typeof window !== "undefined" ? localStorage : undefined, // configurate which stroage will be used to store the data
});
