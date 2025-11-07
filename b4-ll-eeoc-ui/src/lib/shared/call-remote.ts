//this is a shared function that can be called from any component to call a remote control

import type { Source } from "$lib/data/interfaces/source.interface";

export function callRemote(remote: Source) {
    if (remote.remote && remoteCallback) {
        remoteCallback(remote);
    }
}

let remoteCallback: (remote: Source) => void;

export function setRemoteCallback(callback: (remote: Source) => void) {
    remoteCallback = callback;
}