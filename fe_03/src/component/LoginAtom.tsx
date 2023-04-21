import { atom, RecoilState } from "recoil";
import { recoilPersist} from "recoil-persist";

const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined

const { persistAtom } = recoilPersist({
    key: "my-session-storage",
    storage: sessionStorage,
});

export const isNormal: RecoilState<boolean> = atom<boolean>({
    key: "isNormal",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const isManager: RecoilState<boolean> = atom<boolean>({
    key: "isManager",
    default: false,
    effects_UNSTABLE: [persistAtom],
});

export const isAdmin: RecoilState<boolean> = atom<boolean>({
    key: "isAdmin",
    default: false,
    effects_UNSTABLE: [persistAtom],
});