export interface UserResponse {

    id: string;

    email: string;

    firstName: string;

    lastName: string;

    phone: string | null;

    avatarUrl: string | null;

    premium: boolean;

}