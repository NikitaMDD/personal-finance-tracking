import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/header";
import { Sidebar } from "@/widgets/sidebar";

export default function DashboardLayout() {
    return (
        <div className="flex py-5 h-screen bg-[var(--color-background)]">

            <Sidebar />

            <div
                className="
                    flex
                    min-w-0
                    flex-1
                    flex-col
                    overflow-hidden
                "
            >

                <Header />

                <main className="flex-1 overflow-y-auto pt-8 pl-[6px]">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}