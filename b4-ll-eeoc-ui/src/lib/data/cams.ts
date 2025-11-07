//Each remote will require different controls, so this interface will allow us to provide the
//data needed for each remote type

export interface camController {
    /**
     * This is the name of the Q-SYS component that will be used to control the remote.
     * It is assumed that this will be a GlobalCache IP2IR plugin and all required controls will be in the same plugin
     */
    componentName: string;

}

export interface camPresets {
    componentName: string;
}

export interface camSelector {
    componentName: string;
    ctl: string; //This is the control that will be used to select the camera
}

export const cam: camController = {
    componentName: "Camctls" //Component that controls the camera
};

export const camPresets = {
    componentName: "CamPsets", //component that controls the camera presets
    saved: "PresetSaved", //This is the control that will be used to indicate that a preset has been saved
    wait: "Wait", //This is the control that will be used to indicate that a preset is being save
};

export const camSelector = {
    componentName: "CamSelect", //component that selects the camera
    ctl: "integer.1" //This is the control that will be used to select the camera
};

export const camTrack = {
    componentName: "CamTrack", //Ccomponent that controls the camera tracking using FlipFlop in qsys
    on: "set", 
    off: "reset", 
    active: "out",
    inactive: "not", 
    id: "cam-track"
};


export interface CamCtls {
    up: string;
    down: string;
    left: string;
    right: string;
    select: string;
    zoomIn: string;
    zoomOut: string;
}

export const name: CamCtls = {
    select: "momentary.1",
    left: "momentary.2",
    right: "momentary.3",
    down: "momentary.4",
    up: "momentary.5",
    zoomIn: "momentary.6",
    zoomOut: "momentary.7",
};

export const pset = {
    1: "btnPreset 1",
    2: "btnPreset 2",
    3: "btnPreset 3",
    4: "btnPreset 4",
    5: "btnPreset 5",
    6: "btnPreset 6",
    7: "btnPreset 7",
    8: "btnPreset 8",
} as const;

export const camnum = {
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
} as const;

  // Add more objects here for additional cameras if needed


