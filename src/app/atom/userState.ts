import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const userState = atom({
  key: "userState",
  default: { username: "", auth: "", isLoggedIn: false },
  effects_UNSTABLE: [persistAtom],
});

export default userState;
