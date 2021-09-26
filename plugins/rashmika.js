/* Copyright (C) 2021 marvankp1.

Licensed under the  GPL-3.0 License;

you may not use this file except in compliance with the License.

mwol/marvankp1

*/

const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'rashmika', fromMe: true, desc: 'random rashmika images'}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://i.ibb.co/3hGBtbB/images.png";

r_text[1] = "https://i.ibb.co/tP2bZ7x/images.png";

r_text[2] = "https://i.ibb.co/3C6M92m/images.png";

r_text[3] = "https://i.ibb.co/tXwrqr5/images.png";

r_text[4] = "https://i.ibb.co/HBsKYr0/images.png";

r_text[5] = "https://i.ibb.co/3fWx7sV/images.png";

r_text[6] = "https://i.ibb.co/m62wzpk/images.png";

r_text[7] = "https://i.ibb.co/t8rqBqk/images.png";

r_text[8] = "https://i.ibb.co/HVkP5Wt/images.png";

r_text[9] = "https://i.ibb.co/DKDnWL9/images.png";

r_text[10] = "https://i.ibb.co/C8bGHDg/images.png";

r_text[11] = "https://i.ibb.co/fr2D8Yj/images.png";

r_text[12] = "https://i.ibb.co/b297rKC/images.png";

r_text[13] = "https://i.ibb.co/Tk8xm7W/images.png";

r_text[14] = "https://i.ibb.co/w0Wvd6n/images.png";

r_text[15] = "https://i.ibb.co/SfTxnKL/images.png";

r_text[16] = "https://i.ibb.co/qFzDHHx/images.png";

r_text[17] = "https://i.ibb.co/1bZsxGC/images.png";

r_text[18] = "https://i.ibb.co/nmcy38z/images.png";

r_text[19] = "https://i.ibb.co/J2xRVmz/images.png";

r_text[20] = "https://i.ibb.co/WDr2NRn/images.png";

r_text[21] = "https://i.ibb.co/PtNh8n4/images.png";

r_text[22] = "https://i.ibb.co/VpkW5cX/images.png";

r_text[23] = "https://i.ibb.co/nzdYXpQ/images.png";

r_text[24] = "https://i.ibb.co/Gc76rcn/images.png";

r_text[25] = "https://i.ibb.co/hLM2R6s/images.png";

r_text[26] = "https://i.ibb.co/xHCKcTt/images.png";

r_text[27] = "https://i.ibb.co/hdYt4xR/images.png";

r_text[28] = "https://i.ibb.co/ZxxLY0d/images.png";

r_text[29] = "https://i.ibb.co/hmyM7Yn/images.png";

r_text[30] = "https://i.ibb.co/qnh6hmM/images.png";

r_text[31] = "https://i.ibb.co/19SPVSb/images.png";

r_text[32] = "https://i.ibb.co/jy9j6Fw/images.png";

r_text[33] = "https://i.ibb.co/s9x4rYY/images.png";

r_text[34] = "https://i.ibb.co/HLv6bDd/images.png";

r_text[35] = "https://i.ibb.co/BNLc7dq/images.png";

r_text[36] = "https://i.ibb.co/3k7WTcN/images.png";

r_text[37] = "https://i.ibb.co/R9GddRf/images.png";

r_text[38] = "https://i.ibb.co/qFLXscM/images.png";

r_text[39] = "https://i.ibb.co/B6r2zyp/images.png";

r_text[40] = "https://i.ibb.co/WKCwF4G/images.png";

r_text[41] = "https://i.ibb.co/Pz3XNTx/images.png";

r_text[42] = "https://i.ibb.co/wK32NsP/images.png";

r_text[43] = "https://i.ibb.co/Xtv08Cm/images.png";

r_text[44] = "https://i.ibb.co/1KtFmn8/images.png";

r_text[45] = "https://i.ibb.co/nn8frNq/images.png";

r_text[46] = "https://i.ibb.co/60yHtB6/images.png";

r_text[47] = "https://i.ibb.co/gmzx919/images.png";

r_text[48] = "https://i.ibb.co/bQJD3Sc/images.png";

r_text[49] = "https://i.ibb.co/C12DqW5/images.png";

r_text[50] = "https://i.ibb.co/6sHBwDR/images.png";

r_text[51] = "https://i.ibb.co/xHBsSnf/images.png";

r_text[52] = "https://i.ibb.co/qkZYLkL/images.png";

r_text[53] = "https://i.ibb.co/xLZXd0t/images.png";

r_text[54] = "https://i.ibb.co/0n8wqZx/images.png";

r_text[55] = "https://i.ibb.co/CzrWhxq/images.png";

r_text[56] = "https://i.ibb.co/Jmh11Lm/images.png";

r_text[57] = "https://i.ibb.co/hXtjyKT/images.png";

r_text[58] = "https://i.ibb.co/826Z58q/images.png";

r_text[59] = "https://i.ibb.co/ZXmvb5S/images.png";

r_text[60] = "https://i.ibb.co/60YmLxJ/images.png";

r_text[61] = "https://i.ibb.co/PxRPXrW/images.png";

r_text[62] = "https://i.ibb.co/3fx81WJ/images.png";

r_text[63] = "https://i.ibb.co/JdqjZmm/images.png";

r_text[64] = "https://i.ibb.co/t3yXb6x/images.png";

r_text[65] = "https://i.ibb.co/rbszbcK/images.png";

r_text[66] = "https://i.ibb.co/qDZJLSH/images.png";

r_text[67] = "https://i.ibb.co/cY7JpCy/images.png";

r_text[68] = "https://i.ibb.co/ZWszDtc/images.png";

r_text[69] = "https://i.ibb.co/cQHDLHV/images.png";

r_text[70] = "https://i.ibb.co/7z1xw02/images.png";

r_text[71] = "https://i.ibb.co/zNBDQ4g/images.png";

r_text[72] = "https://i.ibb.co/5M9dcGX/images.png";

r_text[73] = "https://i.ibb.co/TPRFR94/images.png";

r_text[74] = "https://i.ibb.co/PDLnmj1/images.png";

r_text[75] = "https://i.ibb.co/kMSNBFk/images.png";

r_text[76] = "https://i.ibb.co/bmMhWFs/images.png";

r_text[77] = "https://i.ibb.co/BLVsNKQ/images.png";

r_text[78] = "https://i.ibb.co/pjskJdy/images.png";

r_text[79] = "https://i.ibb.co/hFNZ4Fv/images.png";

r_text[80] = "https://i.ibb.co/7z21hxW/images.png";

r_text[81] = "https://i.ibb.co/wRgg5jd/images.png";

r_text[82] = "https://i.ibb.co/60JN3Vw/images.png";

r_text[83] = "https://i.ibb.co/VYNFPSf/images.png";

r_text[84] = "https://i.ibb.co/Bt092QH/images.png";

r_text[85] = "https://i.ibb.co/T0Drw87/images.png";

r_text[86] = "https://i.ibb.co/gFmGwJ4/images.png";

r_text[87] = "https://i.ibb.co/Sy2wd9q/images.png";

r_text[88] = "https://i.ibb.co/3dpjmwG/images.png";

r_text[89] = "https://i.ibb.co/QFKkKCR/images.png";

r_text[90] = "https://i.ibb.co/LhDTCFf/images.png";

r_text[91] = "https://i.ibb.co/WfkQ6Bh/images.png";

r_text[92] = "https://i.ibb.co/v4SM52G/images.png";

r_text[93] = "https://i.ibb.co/q5mrrqc/images.png";

r_text[94] = "https://i.ibb.co/ZgnbKkg/images.png";

r_text[95] = "https://i.ibb.co/r3xV3w6/images.png";

r_text[96] = "https://i.ibb.co/y0jnD89/images.png";

r_text[97] = "https://i.ibb.co/mhQTprB/images.png";

r_text[98] = "https://i.ibb.co/1915N1K/images.png";

r_text[99] = "https://i.ibb.co/yfthQVx/images.png";

r_text[100] = "https://i.ibb.co/0mYrPr0/images.png";

r_text[101] = "https://i.ibb.co/S7Lv4kL/images.png";

r_text[102] = "https://i.ibb.co/KL9MshH/images.png";

r_text[103] = "https://i.ibb.co/LNvkyxR/images.png";

r_text[104] = "https://i.ibb.co/4J6hXPf/images.png";

r_text[105] = "https://i.ibb.co/q04xVsr/images.png";

r_text[106] = "https://i.ibb.co/xYw8dbW/images.png";

r_text[107] = "https://i.ibb.co/W5sDSJR/images.png";

r_text[108] = "https://i.ibb.co/dBd8c63/images.png";

r_text[109] = "https://i.ibb.co/PcXfWPY/images.png";

r_text[110] = "https://i.ibb.co/3N623hx/images.png";

r_text[111] = "https://i.ibb.co/RvmM1NQ/images.png";

r_text[112] = "https://i.ibb.co/bQwngkq/images.png";

r_text[113] = "https://i.ibb.co/T8srMdv/images.png";

r_text[114] = "https://i.ibb.co/sb0KFs9/images.png";

r_text[115] = "https://i.ibb.co/5TRvwCD/images.png";

r_text[116] = "https://i.ibb.co/pv3fPCb/images.png";

r_text[117] = "https://i.ibb.co/FsjS2VC/images.png";

r_text[118] = "https://i.ibb.co/SVx9KpG/images.png";

r_text[119] = "https://i.ibb.co/q9ZwdLV/images.png";

r_text[120] = "https://i.ibb.co/wB2k5q2/images.png";

r_text[121] = "https://i.ibb.co/BGmSGdW/images.png";

r_text[122] = "https://i.ibb.co/c235FJG/images.png";

r_text[123] = "https://i.ibb.co/C2fw1Xx/images.png";

r_text[124] = "https://i.ibb.co/m8Tsmzp/images.png";

r_text[125] = "https://i.ibb.co/C5g477Y/images.png";

r_text[126] = "https://i.ibb.co/FYFDyBD/images.png";

r_text[127] = "https://i.ibb.co/vPmLzMM/images.png";

r_text[128] = "https://i.ibb.co/TbmD1m1/images.png";

r_text[129] = "https://i.ibb.co/F3c38JK/images.png";

r_text[130] = "https://i.ibb.co/7YHZSX4/images.png";

r_text[131] = "https://i.ibb.co/6w1HTDp/images.png";

r_text[132] = "https://i.ibb.co/hKcFGzt/images.png";

r_text[133] = "https://i.ibb.co/dg4ZMYD/images.png";

r_text[134] = "https://i.ibb.co/B62Dcb1/images.png";

r_text[135] = "https://i.ibb.co/T0TZmPc/images.png";

r_text[136] = "https://i.ibb.co/tmJVK2R/images.png";

r_text[137] = "https://i.ibb.co/s3wsjHb/images.png";

r_text[138] = "https://i.ibb.co/C92gyrd/images.png";

r_text[139] = "https://i.ibb.co/fxMrVcr/images.png";

r_text[140] = "https://i.ibb.co/yy4j8ZN/images.png";

r_text[141] = "https://i.ibb.co/10t0qbG/images.png";

r_text[142] = "https://i.ibb.co/G2xMzGK/images.png";

r_text[143] = "https://i.ibb.co/51JL6LB/images.png";

r_text[144] = "https://i.ibb.co/PDpqR6x/images.png";

r_text[145] = "https://i.ibb.co/N9B4r5K/images.png";

r_text[146] = "https://i.ibb.co/02qv4sh/images.png";

r_text[147] = "https://i.ibb.co/d0P8vnp/images.png";

r_text[148] = "https://i.ibb.co/60QsRtn/images.png";

r_text[149] = "https://i.ibb.co/zF3wjtd/images.png";

r_text[150] = "https://i.ibb.co/KGYkKWB/images.png";

r_text[151] = "https://i.ibb.co/Dg20CdP/images.png";

r_text[152] = "https://i.ibb.co/Jzs3qVc/images.png";

r_text[153] = "https://i.ibb.co/5Yx3rH0/images.png";

r_text[154] = "https://i.ibb.co/RznNhd4/images.png";

r_text[155] = "https://i.ibb.co/WsGNN2P/images.png";

r_text[156] = "https://i.ibb.co/StfBMPT/images.png";

r_text[157] = "https://i.ibb.co/DVg5dpM/images.png";

r_text[158] = "https://i.ibb.co/VtR4J8p/images.png";

r_text[159] = "https://i.ibb.co/fQKbZnP/images.png";

r_text[160] = "https://i.ibb.co/TcBjV7N/images.png";

r_text[161] = "https://i.ibb.co/r5hm5nR/images.png";

r_text[162] = "https://i.ibb.co/KqcrKvq/images.png";

r_text[163] = "https://i.ibb.co/mC0HfsP/images.png";

r_text[164] = "https://i.ibb.co/nb6vqMQ/images.png";

r_text[165] = "https://i.ibb.co/rFFvsyM/images.png";

r_text[166] = "https://i.ibb.co/Htz5Fwm/images.png";

r_text[167] = "https://i.ibb.co/4NfKQvN/images.png";

r_text[168] = "https://i.ibb.co/YNr3sLy/images.png";

r_text[169] = "https://i.ibb.co/54GT2XB/images.png";

r_text[170] = "https://i.ibb.co/7NvJykY/images.png";

r_text[171] = "https://i.ibb.co/rxW0T4r/images.png";

r_text[172] = "https://i.ibb.co/0mqk2QM/images.png";

r_text[173] = "https://i.ibb.co/pfQyLLV/images.png";

r_text[174] = "https://i.ibb.co/jM6BYxW/images.png";

r_text[175] = "https://i.ibb.co/FqKm7pG/images.png";

r_text[176] = "https://i.ibb.co/tbLF90z/images.png";

r_text[177] = "https://i.ibb.co/yXfm348/images.png";

r_text[178] = "https://i.ibb.co/0CzxSvh/images.png";

r_text[179] = "https://i.ibb.co/x5dNKTj/images.png";

r_text[180] = "https://i.ibb.co/DCP7nMV/images.png";

r_text[181] = "https://i.ibb.co/ZMxSgQp/images.png";

r_text[182] = "https://i.ibb.co/rZz7fx7/images.png";

r_text[183] = "https://i.ibb.co/RcPcdgz/images.png";

r_text[184] = "https://i.ibb.co/gj8ksmy/images.png";

r_text[185] = "https://i.ibb.co/GVvsLN3/images.png";

r_text[186] = "https://i.ibb.co/jvhyLkr/images.png";

r_text[187] = "https://i.ibb.co/1sQW17h/images.png";

r_text[189] = "https://i.ibb.co/f4sDtbb/images.png";

r_text[190] = "https://i.ibb.co/Cmq20Vk/images.png";

r_text[191] = "https://i.ibb.co/Xt0RfSS/images.png";

r_text[192] = "https://i.ibb.co/F7XczrK/images.png";

r_text[193] = "https://i.ibb.co/MnG4dS7/images.png";

r_text[194] = "https://i.ibb.co/nkwzH5G/images.png";

r_text[195] = "https://i.ibb.co/GxxwpWf/images.png";

r_text[196] = "https://i.ibb.co/3FbKr7v/images.png";

r_text[197] = "https://i.ibb.co/YyXn3D0/images.png";

r_text[198] = "https://i.ibb.co/QcbPYgT/images.png";

r_text[199] = "https://i.ibb.co/YLBTZL9/images.png";

r_text[200] = "https://i.ibb.co/jf6N78M/images.png";

var i = Math.floor(201*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.document, {mimetype: Mimetype.png, caption: 'Made by AVENGER'})

    }));

}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'rashmika', fromMe: false, desc:'random rashmika images '}, (async (message, match) => {

    var r_text = new Array ();

r_text[0] = "https://i.ibb.co/3hGBtbB/images.png";

r_text[1] = "https://i.ibb.co/tP2bZ7x/images.png";

r_text[2] = "https://i.ibb.co/3C6M92m/images.png";

r_text[3] = "https://i.ibb.co/tXwrqr5/images.png";

r_text[4] = "https://i.ibb.co/HBsKYr0/images.png";

r_text[5] = "https://i.ibb.co/3fWx7sV/images.png";

r_text[6] = "https://i.ibb.co/m62wzpk/images.png";

r_text[7] = "https://i.ibb.co/t8rqBqk/images.png";

r_text[8] = "https://i.ibb.co/HVkP5Wt/images.png";

r_text[9] = "https://i.ibb.co/DKDnWL9/images.png";

r_text[10] = "https://i.ibb.co/C8bGHDg/images.png";

r_text[11] = "https://i.ibb.co/fr2D8Yj/images.png";

r_text[12] = "https://i.ibb.co/b297rKC/images.png";

r_text[13] = "https://i.ibb.co/Tk8xm7W/images.png";

r_text[14] = "https://i.ibb.co/w0Wvd6n/images.png";

r_text[15] = "https://i.ibb.co/SfTxnKL/images.png";

r_text[16] = "https://i.ibb.co/qFzDHHx/images.png";

r_text[17] = "https://i.ibb.co/1bZsxGC/images.png";

r_text[18] = "https://i.ibb.co/nmcy38z/images.png";

r_text[19] = "https://i.ibb.co/J2xRVmz/images.png";

r_text[20] = "https://i.ibb.co/WDr2NRn/images.png";

r_text[21] = "https://i.ibb.co/PtNh8n4/images.png";

r_text[22] = "https://i.ibb.co/VpkW5cX/images.png";

r_text[23] = "https://i.ibb.co/nzdYXpQ/images.png";

r_text[24] = "https://i.ibb.co/Gc76rcn/images.png";

r_text[25] = "https://i.ibb.co/hLM2R6s/images.png";

r_text[26] = "https://i.ibb.co/xHCKcTt/images.png";

r_text[27] = "https://i.ibb.co/hdYt4xR/images.png";

r_text[28] = "https://i.ibb.co/ZxxLY0d/images.png";

r_text[29] = "https://i.ibb.co/hmyM7Yn/images.png";

r_text[30] = "https://i.ibb.co/qnh6hmM/images.png";

r_text[31] = "https://i.ibb.co/19SPVSb/images.png";

r_text[32] = "https://i.ibb.co/jy9j6Fw/images.png";

r_text[33] = "https://i.ibb.co/s9x4rYY/images.png";

r_text[34] = "https://i.ibb.co/HLv6bDd/images.png";

r_text[35] = "https://i.ibb.co/BNLc7dq/images.png";

r_text[36] = "https://i.ibb.co/3k7WTcN/images.png";

r_text[37] = "https://i.ibb.co/R9GddRf/images.png";

r_text[38] = "https://i.ibb.co/qFLXscM/images.png";

r_text[39] = "https://i.ibb.co/B6r2zyp/images.png";

r_text[40] = "https://i.ibb.co/WKCwF4G/images.png";

r_text[41] = "https://i.ibb.co/Pz3XNTx/images.png";

r_text[42] = "https://i.ibb.co/wK32NsP/images.png";

r_text[43] = "https://i.ibb.co/Xtv08Cm/images.png";

r_text[44] = "https://i.ibb.co/1KtFmn8/images.png";

r_text[45] = "https://i.ibb.co/nn8frNq/images.png";

r_text[46] = "https://i.ibb.co/60yHtB6/images.png";

r_text[47] = "https://i.ibb.co/gmzx919/images.png";

r_text[48] = "https://i.ibb.co/bQJD3Sc/images.png";

r_text[49] = "https://i.ibb.co/C12DqW5/images.png";

r_text[50] = "https://i.ibb.co/6sHBwDR/images.png";

r_text[51] = "https://i.ibb.co/xHBsSnf/images.png";

r_text[52] = "https://i.ibb.co/qkZYLkL/images.png";

r_text[53] = "https://i.ibb.co/xLZXd0t/images.png";

r_text[54] = "https://i.ibb.co/0n8wqZx/images.png";

r_text[55] = "https://i.ibb.co/CzrWhxq/images.png";

r_text[56] = "https://i.ibb.co/Jmh11Lm/images.png";

r_text[57] = "https://i.ibb.co/hXtjyKT/images.png";

r_text[58] = "https://i.ibb.co/826Z58q/images.png";

r_text[59] = "https://i.ibb.co/ZXmvb5S/images.png";

r_text[60] = "https://i.ibb.co/60YmLxJ/images.png";

r_text[61] = "https://i.ibb.co/PxRPXrW/images.png";

r_text[62] = "https://i.ibb.co/3fx81WJ/images.png";

r_text[63] = "https://i.ibb.co/JdqjZmm/images.png";

r_text[64] = "https://i.ibb.co/t3yXb6x/images.png";

r_text[65] = "https://i.ibb.co/rbszbcK/images.png";

r_text[66] = "https://i.ibb.co/qDZJLSH/images.png";

r_text[67] = "https://i.ibb.co/cY7JpCy/images.png";

r_text[68] = "https://i.ibb.co/ZWszDtc/images.png";

r_text[69] = "https://i.ibb.co/cQHDLHV/images.png";

r_text[70] = "https://i.ibb.co/7z1xw02/images.png";

r_text[71] = "https://i.ibb.co/zNBDQ4g/images.png";

r_text[72] = "https://i.ibb.co/5M9dcGX/images.png";

r_text[73] = "https://i.ibb.co/TPRFR94/images.png";

r_text[74] = "https://i.ibb.co/PDLnmj1/images.png";

r_text[75] = "https://i.ibb.co/kMSNBFk/images.png";

r_text[76] = "https://i.ibb.co/bmMhWFs/images.png";

r_text[77] = "https://i.ibb.co/BLVsNKQ/images.png";

r_text[78] = "https://i.ibb.co/pjskJdy/images.png";

r_text[79] = "https://i.ibb.co/hFNZ4Fv/images.png";

r_text[80] = "https://i.ibb.co/7z21hxW/images.png";

r_text[81] = "https://i.ibb.co/wRgg5jd/images.png";

r_text[82] = "https://i.ibb.co/60JN3Vw/images.png";

r_text[83] = "https://i.ibb.co/VYNFPSf/images.png";

r_text[84] = "https://i.ibb.co/Bt092QH/images.png";

r_text[85] = "https://i.ibb.co/T0Drw87/images.png";

r_text[86] = "https://i.ibb.co/gFmGwJ4/images.png";

r_text[87] = "https://i.ibb.co/Sy2wd9q/images.png";

r_text[88] = "https://i.ibb.co/3dpjmwG/images.png";

r_text[89] = "https://i.ibb.co/QFKkKCR/images.png";

r_text[90] = "https://i.ibb.co/LhDTCFf/images.png";

r_text[91] = "https://i.ibb.co/WfkQ6Bh/images.png";

r_text[92] = "https://i.ibb.co/v4SM52G/images.png";

r_text[93] = "https://i.ibb.co/q5mrrqc/images.png";

r_text[94] = "https://i.ibb.co/ZgnbKkg/images.png";

r_text[95] = "https://i.ibb.co/r3xV3w6/images.png";

r_text[96] = "https://i.ibb.co/y0jnD89/images.png";

r_text[97] = "https://i.ibb.co/mhQTprB/images.png";

r_text[98] = "https://i.ibb.co/1915N1K/images.png";

r_text[99] = "https://i.ibb.co/yfthQVx/images.png";

r_text[100] = "https://i.ibb.co/0mYrPr0/images.png";

r_text[101] = "https://i.ibb.co/S7Lv4kL/images.png";

r_text[102] = "https://i.ibb.co/KL9MshH/images.png";

r_text[103] = "https://i.ibb.co/LNvkyxR/images.png";

r_text[104] = "https://i.ibb.co/4J6hXPf/images.png";

r_text[105] = "https://i.ibb.co/q04xVsr/images.png";

r_text[106] = "https://i.ibb.co/xYw8dbW/images.png";

r_text[107] = "https://i.ibb.co/W5sDSJR/images.png";

r_text[108] = "https://i.ibb.co/dBd8c63/images.png";

r_text[109] = "https://i.ibb.co/PcXfWPY/images.png";

r_text[110] = "https://i.ibb.co/3N623hx/images.png";

r_text[111] = "https://i.ibb.co/RvmM1NQ/images.png";

r_text[112] = "https://i.ibb.co/bQwngkq/images.png";

r_text[113] = "https://i.ibb.co/T8srMdv/images.png";

r_text[114] = "https://i.ibb.co/sb0KFs9/images.png";

r_text[115] = "https://i.ibb.co/5TRvwCD/images.png";

r_text[116] = "https://i.ibb.co/pv3fPCb/images.png";

r_text[117] = "https://i.ibb.co/FsjS2VC/images.png";

r_text[118] = "https://i.ibb.co/SVx9KpG/images.png";

r_text[119] = "https://i.ibb.co/q9ZwdLV/images.png";

r_text[120] = "https://i.ibb.co/wB2k5q2/images.png";

r_text[121] = "https://i.ibb.co/BGmSGdW/images.png";

r_text[122] = "https://i.ibb.co/c235FJG/images.png";

r_text[123] = "https://i.ibb.co/C2fw1Xx/images.png";

r_text[124] = "https://i.ibb.co/m8Tsmzp/images.png";

r_text[125] = "https://i.ibb.co/C5g477Y/images.png";

r_text[126] = "https://i.ibb.co/FYFDyBD/images.png";

r_text[127] = "https://i.ibb.co/vPmLzMM/images.png";

r_text[128] = "https://i.ibb.co/TbmD1m1/images.png";

r_text[129] = "https://i.ibb.co/F3c38JK/images.png";

r_text[130] = "https://i.ibb.co/7YHZSX4/images.png";

r_text[131] = "https://i.ibb.co/6w1HTDp/images.png";

r_text[132] = "https://i.ibb.co/hKcFGzt/images.png";

r_text[133] = "https://i.ibb.co/dg4ZMYD/images.png";

r_text[134] = "https://i.ibb.co/B62Dcb1/images.png";

r_text[135] = "https://i.ibb.co/T0TZmPc/images.png";

r_text[136] = "https://i.ibb.co/tmJVK2R/images.png";

r_text[137] = "https://i.ibb.co/s3wsjHb/images.png";

r_text[138] = "https://i.ibb.co/C92gyrd/images.png";

r_text[139] = "https://i.ibb.co/fxMrVcr/images.png";

r_text[140] = "https://i.ibb.co/yy4j8ZN/images.png";

r_text[141] = "https://i.ibb.co/10t0qbG/images.png";

r_text[142] = "https://i.ibb.co/G2xMzGK/images.png";

r_text[143] = "https://i.ibb.co/51JL6LB/images.png";

r_text[144] = "https://i.ibb.co/PDpqR6x/images.png";

r_text[145] = "https://i.ibb.co/N9B4r5K/images.png";

r_text[146] = "https://i.ibb.co/02qv4sh/images.png";

r_text[147] = "https://i.ibb.co/d0P8vnp/images.png";

r_text[148] = "https://i.ibb.co/60QsRtn/images.png";

r_text[149] = "https://i.ibb.co/zF3wjtd/images.png";

r_text[150] = "https://i.ibb.co/KGYkKWB/images.png";

r_text[151] = "https://i.ibb.co/Dg20CdP/images.png";

r_text[152] = "https://i.ibb.co/Jzs3qVc/images.png";

r_text[153] = "https://i.ibb.co/5Yx3rH0/images.png";

r_text[154] = "https://i.ibb.co/RznNhd4/images.png";

r_text[155] = "https://i.ibb.co/WsGNN2P/images.png";

r_text[156] = "https://i.ibb.co/StfBMPT/images.png";

r_text[157] = "https://i.ibb.co/DVg5dpM/images.png";

r_text[158] = "https://i.ibb.co/VtR4J8p/images.png";

r_text[159] = "https://i.ibb.co/fQKbZnP/images.png";

r_text[160] = "https://i.ibb.co/TcBjV7N/images.png";

r_text[161] = "https://i.ibb.co/r5hm5nR/images.png";

r_text[162] = "https://i.ibb.co/KqcrKvq/images.png";

r_text[163] = "https://i.ibb.co/mC0HfsP/images.png";

r_text[164] = "https://i.ibb.co/nb6vqMQ/images.png";

r_text[165] = "https://i.ibb.co/rFFvsyM/images.png";

r_text[166] = "https://i.ibb.co/Htz5Fwm/images.png";

r_text[167] = "https://i.ibb.co/4NfKQvN/images.png";

r_text[168] = "https://i.ibb.co/YNr3sLy/images.png";

r_text[169] = "https://i.ibb.co/54GT2XB/images.png";

r_text[170] = "https://i.ibb.co/7NvJykY/images.png";

r_text[171] = "https://i.ibb.co/rxW0T4r/images.png";

r_text[172] = "https://i.ibb.co/0mqk2QM/images.png";

r_text[173] = "https://i.ibb.co/pfQyLLV/images.png";

r_text[174] = "https://i.ibb.co/jM6BYxW/images.png";

r_text[175] = "https://i.ibb.co/FqKm7pG/images.png";

r_text[176] = "https://i.ibb.co/tbLF90z/images.png";

r_text[177] = "https://i.ibb.co/yXfm348/images.png";

r_text[178] = "https://i.ibb.co/0CzxSvh/images.png";

r_text[179] = "https://i.ibb.co/x5dNKTj/images.png";

r_text[180] = "https://i.ibb.co/DCP7nMV/images.png";

r_text[181] = "https://i.ibb.co/ZMxSgQp/images.png";

r_text[182] = "https://i.ibb.co/rZz7fx7/images.png";

r_text[183] = "https://i.ibb.co/RcPcdgz/images.png";

r_text[184] = "https://i.ibb.co/gj8ksmy/images.png";

r_text[185] = "https://i.ibb.co/GVvsLN3/images.png";

r_text[186] = "https://i.ibb.co/jvhyLkr/images.png";

r_text[187] = "https://i.ibb.co/1sQW17h/images.png";

r_text[189] = "https://i.ibb.co/f4sDtbb/images.png";

r_text[190] = "https://i.ibb.co/Cmq20Vk/images.png";

r_text[191] = "https://i.ibb.co/Xt0RfSS/images.png";

r_text[192] = "https://i.ibb.co/F7XczrK/images.png";

r_text[193] = "https://i.ibb.co/MnG4dS7/images.png";

r_text[194] = "https://i.ibb.co/nkwzH5G/images.png";

r_text[195] = "https://i.ibb.co/GxxwpWf/images.png";

r_text[196] = "https://i.ibb.co/3FbKr7v/images.png";

r_text[197] = "https://i.ibb.co/YyXn3D0/images.png";

r_text[198] = "https://i.ibb.co/QcbPYgT/images.png";

r_text[199] = "https://i.ibb.co/YLBTZL9/images.png";

r_text[200] = "https://i.ibb.co/jf6N78M/images.png";

    var i = Math.floor(201*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.document, {mimetype: Mimetype.png, caption: 'Made by AVENGER'})

    }));

}
