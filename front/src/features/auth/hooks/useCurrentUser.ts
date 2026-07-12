import { useQuery } from "@tanstack/react-query";
import { userApi } from "@/entities/user/api/user.api";
import { tokenStorage } from "@/shared/auth/token-storage";

export function useCurrentUser() {
    return useQuery({
        queryKey: ["current-user"],
        queryFn: userApi.me,
        enabled: !!tokenStorage.getAccessToken(),
    });
}