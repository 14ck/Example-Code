//Each remote will require different controls, so this interface will allow us to provide the
//data needed for each remote type

export interface RemoteControl {
    type: string;

    /**
     * This is the name of the Q-SYS component that will be used to control the remote.
     * It is assumed that this will be a GlobalCache IP2IR plugin and all required controls will be in the same plugin
     */
    componentName: string;

}


export interface CableTvRemoteControl extends RemoteControl {
    type: "cable_tv";
    channelPresets: CableTvChannelPreset[];
    up:string;
    down:string;
    left:string;
    right:string;
    ok:string;
    exit:string;
    menu:string;
    power:string;
    guide:string;
    info:string;
    chUp:string;
    chDown:string;
    lastCh:string;
    num0:string;
    num1:string;
    num2:string;
    num3:string;
    num4:string;
    num5:string;
    num6:string;
    num7:string;
    num8:string;
    num9:string;
}

export interface CableTvChannelPreset {
    recallComponentName: string;
    triggerButtonName: string;
    icon: any;
}