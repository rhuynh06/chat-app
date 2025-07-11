"use client";

import { Plus } from "lucide-react";
import { ActionToolTip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export const NavigationAction = () => {
    const { onOpen } = useModal();

    return (
        <div>
            <ActionToolTip
                side="right"
                align="center"
                label="Add a server"
            >
                <button className="group flex items-center" onClick={() => onOpen("createServer")}>
                    <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all duration-200 overflow-hidden items-center justify-center dark:bg-neutral-700 bg-neutral-100 group-hover:bg-emerald-500">
                        <Plus
                            className="group-hover:text-white transition text-emerald-500"
                            size={25}
                        />
                    </div>
                </button>
            </ActionToolTip>
        </div>
    );
}
