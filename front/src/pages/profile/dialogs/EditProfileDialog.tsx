import { Dialog } from "@/shared/ui/dialog";

import type {
    UserProfile,
} from "@/entities/profile/model";

import { ProfileForm } from "../forms/ProfileForm";

import type {
    ProfileFormValues,
} from "../forms/profile.schema";

interface Props {

    open: boolean;

    profile: UserProfile | null;

    loading?: boolean;

    onSubmit(
        values: ProfileFormValues,
    ): void;

    onOpenChange(
        open: boolean,
    ): void;

}

export function EditProfileDialog({

    open,

    profile,

    loading,

    onSubmit,

    onOpenChange,

}: Props) {

    if (!profile) {
        return null;
    }

    return (

        <Dialog
            open={open}
            onOpenChange={onOpenChange}
            title="Редактировать профиль"
            description="Измените личную информацию."
        >

            <ProfileForm
                defaultValues={{
                    firstName: profile.firstName,
                    lastName: profile.lastName,
                    email: profile.email,
                    phone: profile.phone,
                }}
                submitLabel="Сохранить"
                loading={loading}
                onSubmit={onSubmit}
                onCancel={() =>
                    onOpenChange(false)
                }
            />

        </Dialog>

    );

}