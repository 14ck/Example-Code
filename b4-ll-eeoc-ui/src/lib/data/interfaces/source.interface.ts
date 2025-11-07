import type { RemoteControl } from "./remote.interface";

export interface Source {
    name: string;
    icon: string;
    type: "computer" | "cable_tv" | "video_conferencing" | "system" | "pc";
    id: string;
    remote?: RemoteControl;
}