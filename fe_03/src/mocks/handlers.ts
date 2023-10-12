import { rest } from "msw";
import user from "./user.json";

export const handlers = [
    rest.get("/data", (req, res, ctx) => {
        return res(
            ctx.json(user)
        );
    })
]