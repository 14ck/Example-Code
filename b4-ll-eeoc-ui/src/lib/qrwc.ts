import { QrwcSvelte} from "qrwc-svelte"


const coreIP = "0.0.0.0"
const redundantCoreIP = "0.0.0.0"  

export const qrwc = new QrwcSvelte({
    coreIp: coreIP,
    redundantCoreIp: redundantCoreIP,
});