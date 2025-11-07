import type { Source } from "$lib/data/interfaces/source.interface";
import { CableBox1Remote } from "./cable-box-1-remote";
import { CableBox2Remote } from "./cable-box-2-remote";
import { CableBox3Remote } from "./cable-box-3-remote";
import { CableBox4Remote } from "./cable-box-4-remote";

export const sources: Source[] = [
    {name: "blank", icon: "blank", type: "system", id: "0"},
    {name: "Laptop 1", icon: "tablet", type: "computer", id: "1"},
    {name: "Laptop 2", icon: "tablet", type: "computer", id: "2"},
    {name: "Laptop 3", icon: "tablet", type: "computer", id: "3"},
    {name: "Laptop 4", icon: "tablet", type: "computer", id: "4"},
    {name: "PC 1", icon: "computer", type: "pc", id: "5"},
    {name: "PC 2", icon: "computer", type: "pc", id: "6"},
    {name: "PSOC", icon: "presentation", type: "computer", id: "7"},
    {name: "PC 3", icon: "computer", type: "pc", id: "8"},
    {name: "PC 4", icon: "computer", type: "pc", id: "9"},
    {name: "PC 5", icon: "computer", type: "pc", id: "10"},
    {name: "PC 6", icon: "computer", type: "pc", id: "11"},
    {name: "PC 7", icon: "computer", type: "pc", id: "12"},
    {name: "PC 8", icon: "computer", type: "pc", id: "13"},
   /*  {name: "Cable TV 1", icon: "cable_tv", type: "cable_tv", id: "8", remote: CableBox1Remote},
    {name: "Cable TV 2", icon: "cable_tv", type: "cable_tv", id: "9", remote: CableBox2Remote},
    {name: "Cable TV 3", icon: "cable_tv", type: "cable_tv", id: "10", remote: CableBox3Remote},
    {name: "Cable TV 4", icon: "cable_tv", type: "cable_tv", id: "11", remote: CableBox4Remote}, */
    {name: "Webex FarEnd", icon: "video_conferencing", type: "video_conferencing", id: "14"},
    {name: "Webex Pres", icon: "video_conferencing", type: "video_conferencing", id: "15"},
]


 /* Component name for whatever component is monitoring sync status */
export const SourceSyncName = "BufferSync";