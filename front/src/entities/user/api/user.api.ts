import { api } from "@/shared/api/client/http";

import type { User } from "../model/user.types";

export const userApi = {

    me() {
        return api<User>("/users/me");
    },

};