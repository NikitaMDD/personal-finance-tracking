import { create } from "zustand";

export interface HeaderConfig {
    search: {
        visible: boolean;
        placeholder: string;
    };
}

interface UIStore {
    // Sidebar
    sidebarCollapsed: boolean;
    toggleSidebar(): void;

    // Header
    header: HeaderConfig;

    searchValue: string;

    setSearchValue(value: string): void;

    configureHeader(
        config: Partial<HeaderConfig>,
    ): void;

    resetHeader(): void;
}

const defaultHeader: HeaderConfig = {
    search: {
        visible: true,
        placeholder: "Поиск...",
    },
};

export const useUIStore = create<UIStore>((set) => ({

    sidebarCollapsed: false,

    toggleSidebar: () =>
        set((state) => ({
            sidebarCollapsed: !state.sidebarCollapsed,
        })),


    header: defaultHeader,

    searchValue: "",

    setSearchValue: (value) =>
        set({
            searchValue: value,
        }),

    configureHeader: (config) =>
        set((state) => ({
            header: {
                ...state.header,

                ...config,

                search: {
                    ...state.header.search,
                    ...config.search,
                },
            },
        })),

    resetHeader: () =>
        set({
            header: defaultHeader,
            searchValue: "",
        }),
}));