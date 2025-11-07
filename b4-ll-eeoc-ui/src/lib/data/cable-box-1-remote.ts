import type { CableTvRemoteControl } from "$lib/data/interfaces/remote.interface";

import * as twcLogo from "$assets/tv-icons-united-states/weather-channel-us.png"
import * as foxlogo from "$assets/tv-icons-united-states/fox-us.png"
import * as bloombergLogo from "$assets/tv-icons-united-states/bloomberg-television-us.png"
import * as cnbcLogo from "$assets/tv-icons-united-states/cnbc-us.png"
import * as foxbusinessLogo from "$assets/tv-icons-united-states/fox-business-us.png"
import * as hlnLogo from "$assets/tv-icons-united-states/hln-us.png"
import * as abcLogo from "$assets/tv-icons-united-states/abc-logo-2008-us.png"
import * as cbsLogo from "$assets/tv-icons-united-states/cbs-logo-white-us.png"
import * as cnnLogo from "$assets/tv-icons-united-states/cnn-us.png"
import * as foxLogo from "$assets/tv-icons-united-states/fox-news-us.png"
import * as nbcLogo from "$assets/tv-icons-united-states/nbc-logo-2013-us.png"
import * as espn2Logo from "$assets/tv-icons-united-states/espn-2-us.png"
import * as espnLogo from "$assets/tv-icons-united-states/espn-us.png"
import * as espnulogo from "$assets/tv-icons-united-states/espn-u-us.png"
import * as nptLogo from "$assets/tv-icons-united-states/npt_logo.png"
import * as golfChannelLogo from "$assets/tv-icons-united-states/nbc-golf-us.png"
import * as foxsportsLogo from "$assets/tv-icons-united-states/fox-sports-us.png"
import * as secNetworkLogo from "$assets/tv-icons-united-states/sec-network-us.png"
import * as nptvLogo from "$assets/tv-icons-united-states/logo-us.png"
import * as cspnLogo from "$assets/tv-icons-united-states/c-span-1-us.png"
import * as bbcLogo from "$assets/tv-icons-united-states/bbc-america-us.png";
import * as audlogo from "$assets/tv-icons-united-states/aud.png";
import * as cst1logo from "$assets/tv-icons-united-states/cst1.png";
import * as cst2logo from "$assets/tv-icons-united-states/cst2.png";
import * as cst3logo from "$assets/tv-icons-united-states/cst3.png";

export const CableBox1Remote: CableTvRemoteControl = {
    type: "cable_tv",
    up:"trigger.1",
    down:"trigger.2",
    left:"trigger.3",
    right:"trigger.4",
    ok:"trigger.5",
    exit:"trigger.6",
    menu:"trigger.7",
    power:"trigger.8",
    guide:"trigger.9",
    info:"trigger.10",
    num0:"trigger.11",
    num1:"trigger.12",
    num2:"trigger.13",
    num3:"trigger.14",
    num4:"trigger.15",
    num5:"trigger.16",
    num6:"trigger.17",
    num7:"trigger.18",
    num8:"trigger.19",
    num9:"trigger.20",
    chUp:"trigger.21",
    chDown:"trigger.22",
    lastCh:"trigger.23",
    componentName: "CableRemote_1",
    channelPresets: [
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.1",
            icon: cnnLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.2",
            icon: hlnLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.3",
            icon: foxLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.4",
            icon: foxbusinessLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.5",
            icon: cnbcLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.6",
            icon: bloombergLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.7",
            icon: abcLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.8",
            icon: nbcLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.9",
            icon: cbsLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.10",
            icon: foxlogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.11",
            icon: twcLogo.default  
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.12",
            icon: espnLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.13",
            icon: espn2Logo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.14",
            icon: espnulogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.15",
            icon: golfChannelLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.16",
            icon: foxsportsLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.17",
            icon: secNetworkLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.18",
            icon: nptLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.19",
            icon: cspnLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.20",
            icon: bbcLogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.21",
            icon: audlogo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.22",
            icon: cst1logo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.23",
            icon: cst2logo.default
        },
        {
            recallComponentName: "CablePresets_1",
            triggerButtonName: "trigger.24",
            icon: cst3logo.default
        },
        
    ]
}