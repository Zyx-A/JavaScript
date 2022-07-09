/**
 * 高德地图APP    我的 -- 小德果园
 * 抓url   https://sns.amap.com/   下的cookie 复制全部放变量里(仅支持青龙)
 * cron   自己定 每天一次就够了
 * 脚本地址 https://raw.githubusercontent.com/kristallsi/JavaScript/main/gdgy.js
 * ========= 青龙--配置文件 =========
 * 变量格式: export gdgy_Cookie='cookie@cookie'  多个账号用 换行 或 @分割
 * 
 */
var _0xod6='jsjiami.com.v6',_0xod6_=['‮_0xod6'],_0x40d5=[_0xod6,'wqjDqCw=','C24YFcOs','IMKVEwvCqA==','wpYTwq9Gew==','wr7nr5bliZXpoZrmspzvvJXphITlpYLpo6Llja0=','RSpFMBXDmg==','BcKxa8Oywok=','wr7mt6/msZHvv4bmsInmnIbms73murvku6I=','6amy5b2p5pyw5Zqs','w7klw50zw47ClQ==','YxPDusKZJsOxFThjw5rCkFE=','GcKxfw==','GMOHXHkFAm0gwpPCrnRH','woTCnzXDvENow7R/','5Yq35q675ayg5omR566f5YuM44G25rS/6KW444GX5rWV5rO95Lub5YqV','d8OS5oSV6LKvX+e8vOWNj+aKk+epiSnCvw==','wrLCl1XCtQ==','EMK2ZcOgDQ==','d2YGwrzCoQ==','wqMRVMOaw5M=','ViXCssKN','I/Cug65V5p2L5Z6Y6IaA5pylwoUjBMKkw7gbwrA5wpPCgxzov7Tnqo7kuJflu4vohZTmnKQCQ8OdJA==','QjjCusKiHA==','CcK1T8Okwos=','wq4Lw4fDvcOe','w59lw6nCkMOsMDl4YMKcNsKw5YeM5oqA5YqLdA==','wq0pw7rCkcK4w6c=','TuS4gei3oOWNs3jCo2rCnMKyw48of8OqwoIH','44CAMR/Dk8OPTOOBqcKN6Ly35pip5L+655mo6LW75Y+b5pS357uWwo5BVw==','wrXDlEI8AsK5wrrDo8K+acKN','EWwYBMOl','w5kxBT7DhQ==','w6oMw5sgYA==','EAjClj3Crw==','wr3CvV3ChAY=','w5/Dnh/DoXHDusObw6DDisOe5byH5aSi44C6562IUw==','TuS6hui0meWPouOApUgVDRXCnMOQw6DClA==','w5nCrsOAKMKV','44OwAmjDlcOewqrjg6jDo+i+juaaieS9o+euj0E=','wqLDhMO7X8ONPw==','w47CscOCJA==','w6Akw6DDkcOmcTVxIcKZd8KhwozCgsKKZsKsB8KNwp8cT0kHwrXDoMO6w6jDh8KoDFxMLw==','wqQ8wrHDqcKy','wonDsxTCkmI=','w6Eyw7YYw4k=','DMKWb8OJHA==','wqY6w73Cm8Kj','w59lw6nCkMOsMDl4YMKcNsKtwoDDg8KGacOwFeW/seWlpemiqeawh+a6jBfDqcOkwrvDpMKGwqZNVw0iw6IHasOkKVE=','wqPDsSLCkxc=','aW47','wqDCi0rCvBM=','woUKw4TDrsOR','XD1aBSg=','w7MMMyPDrg==','wqY2w73Chg==','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','dTlAwpnDsA==','Ui7CscKR','ZOa3q+awi++8j+ayleadrOawjOa7lOS6vg==','wo1teWvDow==','w47imKdr5q+f5LqD5YmV5pa+5rGk6Kyr5Y2OwpLorr3miJ7liqPmiIPmtobmsqLphbDor6bnvpLkupfmnr7lpqAB6IW95p2l6L2J6KKm5Luw5qyX5Y6B5Y+G5a625ou45rS15rKfXg==','WsKFwoo=','cknDnMKsw7o=','wprCkWvCiAo=','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','VjvCvMKE','5rew5rKC5aax5Ymc','w4Jqw4Bq','w4TDqwvCrsOi','HsOvUWd+','D+WwnOiuieWFtuavjea2jeazgAE=','HMOlUFxA','CsO4Vhsp','bUzDv8Kww4U=','CsKDPz0=','MBPChB7CsCY=','RMKjwoIiRA==','wq3DsRpa','fhNRw7VQ','Zm44wp4=','VHNBwplZ','Ex7Cuh/ClA==','OHnCjMOvOw==','bOa1iOaxmOWkoOWIte+8iua2ouayhOS5nuWIkuaeueWvrOaInQ==','K2knM8OL','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','FQrClcKW','wrhRZWbDpg==','6L6i57iy56235Yqw','Z3pTwoJ6','w5NtRsOM','wqEBwqbDgsKQ','w4A1w6MFw6M=','wqMcwqLDkMKN','bua3ruinruWyiuerke+8r+mhsuWOueaIoOWLug==','eSQtw7vDmQ==','O+a0juikneWzu+ermO+9uuaeq+eYleW/lg==','MBPChA==','w5fDhwHCuQ==','AMOjTcOxOw==','w5vDm8KewqZc','FMKDXcOHHA==','wpbCkgPDuXo=','w5nmtavop5vlsY3nqKHvv7Xph4zlp7jpoJflj6w=','OcOxRAAK','Zi0Qw5rDqw==','wohRVEY=','A0rCssOnMA==','Rilaw55VwoI=','w5U4PC3Dgg==','T1t6wqBe','w5jmt7/op63lsYrnq4Dvv6Dmn7/nm7flvoA=','w6IRw40xTA==','BSTCt8K0w64=','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','wpU5w5DCr8K7','wqIjw7DCkw==','Zk1tw6ln','w6zDkCLCusOe','OsOnXhQc','w4TpoK3msqjvvIDojIjlv5o=','wrNyFMKp','wrTCnl3CuTLCow==','w4UTw68tXw==','Yea3puinp+WxmOerue+9temHgeWlnemgu+WMmw==','wo0OwqHDv8KM','w7M9w5I3w7g=','BMKDPA==','Yumhquaxr++9numEn+WmtemhvOWNqQ==','B8OOQsOg','XCVcwqvDhQ==','w6bpoa3msbXvvpbmnJrnmKnlvo4=','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','wrBpCcK4','CMOGSzI=','P+i/vOe7leeuq+WIpO+8u+iMjeW/gg==','TidJw7o=','HMKfZcO4EcOs','WCtYHR8=','wrY3wrDDiA==','w4PDig3Ci8OF','ZjB7w5lj','wp7DhmMHGQ==','w5nnrZrliKPpo4Tmsojvv7XmnKvnmo7lv4Q=','B8OcwpY=','JB3Ct8K1w6M=','DkgoAsOj','w5/ovobnuLnnr5Pli6HvvJfmnK7nmL7lvIg=','UlhRwqU=','w4Azw5vClMOowo1Mw7wzZTUnNcKpw644wqXCkhM7wqvDjsOHwrIff8KqwrBQFTEfcMO0fcKfP8OjUsKRw4Jnw7JKwpzDughdXzbDnxrDusOqw7Z7c8OOwoQowrEHwp8Xw6fCmkTDnzsjR8Kow4TDuAXDkHTCgMO3ACFVWMO8FsKvwpI3HMOkM8K+MDfClTsvRTMERcKHLR/DtlbDiC3Cj8KALANEVsOxMxRUVwYbw6fDtEEGw7MvKh9vwrx/w47CjT9WPcK7worDsmbCn8KCw59cEcOJGBB9wrAIEyTDu8OiwrpHPT/CrCjCsiPCoQQYwoHCisOSw7Fuwo7DlsOzw5ZKwrXDoMKtwqLCt0ZvwpkQwqcdwrMQQcK/E8KxwrzDs3/DlUnCucKOw7HDhyIfTsKtwqANMSthw5tOcWcifsOuJEYJA8O6wqrCjcOKwp9GB8Kqw4RvWWV2G8KxA8KYw6wsH2cFPicCw6LCgz3DoRNCwqV2wpHDmCHCl0TCn8K3MMOyw6tZwoTDvhPDpsKMw4rDqilFL8KvD1Q4wp3CtUXCjXPCh33DucK5OnPCm8OgwqHCl0DDn0XDsizClUgQw5/CtcKrwozDogFNcgMSd8KaHsKPw5AUwosFO1PCmmLDqsOXN8OfMULCoMOpc8KjM8O0wqfDmEvCgsKIWsOkLGLDiMO2wrPCpMKZV8K9w7PDrxJDwrhSw5I2P8OgwoVcalVrw4N1woTCnMK7GcOXw7TCviNrbRJKwrhcXcOZwpvDs8Oyf8KgLMOywopiw4/CjVM+woYyN8O7Yn7CqMOSKcOef8K0woXCvkrCgMKiY8KVw45GLMKrecK8YBgMwoZ+w43DicKUw7wew6XDsMKqdcKxwpphZsKBNMORecKPw7bCscOBFCRSwpDDrTJsLQTCmw/ChUkLwqJZAMKLw7/DpQxUEXbCmcO8YMODVRTChkVoN8OhQMO1wpjDk2RCw4fCmWfChy3CjFLDq0HCry1rWQDCtjnCuMKxO8OMw4cHwqoNFsKRKsOzwqRaX8OEd2o/WcK+woHCvMOvU24xwpvDmMK5wpsnNQVHw6/ClHkpWsKfIMOJwqs/w6Nbb0wuSHzDkMOew7fDr8OgTVPCgktTIMK+K0vDhlY+wo3Di8KVw51jw4YgwrrDncK6wrMsQ8OgY1TDgMK4amvCtC7Cv8OUw5bDgTHDr8O/ITnCksKDRMOTwpYeTcOrw5LCscOQCcO0wpEjLSfDhwR0w6fDqGoiX8OKcknDmcKnw4BSdgU2wrvDlTl/w7LDgzXDngFsdsOgwrJDw6J2wqnDh2LCuFlUa8KxwpPClcKZfMK2w73DncOvw7/DhsKgNMOvwphXw4Acwqw8XMOVfsKgAMONPlxHNQDCnnrCv8OSw4YnQ8ODw5HDgTTCpsOmwqo+SjZAw6jCp8OrEsOjAcKMLMK2HcO3L8Ogw4wBFXJMLcO3wrLCvT7DksOLw54+w6gzFVLClmhSwpQNwqnCucOAw5R9w73DkwoKw7RUw4Jzw7XDgEIjwqLCqcONVMKrwonCosOmZEIRA0fCuhLClivCuGbDmMOPcsKKKCBHb0HCsCTDlcOgw6ARZ8O/w78gw5HCiMKywpdxCMKZwqR5w79Sw5Yddyd2w4rCrcODEi7CiMOUZzDDrMOHSsOTw7XDiMOLw5bDgMOaw64Hw4fCujNheHLDtBHChMOgX8OoJyV1C8KmwrV+Q8K+WMODRMKPbTZZwooTw7dVw4fCjMOIwoNBeiHCu2ZowrwUDgjCtSR0wrEhN8KKwrTDhlXDoCxlw5vCpcKzOFRUKcOhwoLCvwtMDcOCw7XCq1zCoMKKwq/CusOQIsOWw7NJcMKvRMKBK8KCwro9NGcgJ8OvworDmyPCicKIdcKrwppIZcKiPnzCtgHCjkgTwpEWw5HCjgPCkcKnOE5Xw4/Dj2kOw4DCpcO1wpdiw6B7w7rChcK7wo3DmknCkcKZb1x0wr3Dk0DCh8KGwqEMH8Oow48awo5uw7XCmsOFF8KCwqh8w5hqG8Ond8OnwoLDl1DCkhgyw7FJYR7Cn3k2NsK+wr7CtSNKG3fDiVfDrsKMw7wHw5zCqMKPwrF7woDDvsOxwp/CqMKxwq3CvcO9w7I5woNXYcOcfMOvDioLUQfCgcOGwpjCsMKiw4bDjHzDuG7CuMKJGMKqAMKJwrUMHjQKw6TDh21nPk7DlMOta8Kxw6bCpsKqwqfCosORGsOaRVY7OMKYwpEcw7fCrBtVBHbDiAvClsKCw4wzwrdTIsOSw5cNWELCo8OOEsOoGxFeUnVxwpnCq0cHAcO9dGHCsg3CljRteUFJwp95wrp/BgfDv8O/wo8SV04gBX1uw6LDusOkJMOEIcKFw5jDhsOgw6XCgChFwrdTw7APw4cOIMO1wpY4fcOwZ8KWKDbCgihdEsOIw5IWwq7DhMKjwqXCuA==','cy5lwpfDvA==','566U5YiO6aK25rCL','wrwiw43DvMO4','wqznrIblip7po4DmsLnvvaDpobbljJTmirHli6Y=','wpk4wqdR','HsO7Z3hN','w5TDssKKwoxd','w6o9w5c6w4E=','Vua0u+azl+WkjeWJs++9juadgueZt+W8uw==','w4oXw4k=','YeevjeWLgemgmeawgO+/temEqOWniemisuWOvg==','w5TDmcKDwog=','DOetmuWKoOmhg+ayue+/leadiueahuW9pg==','wrk3wrM=','wqIiwqlxaw==','CwHCqsKtw6Y=','wpDDrMOBNS4=','VcOSB8KPRQ==','wrvDnsO5YsOl','A+i/pOe7muevleWIhe+8seadiOeZmOW/vQ==','AkTCoQ==','HyvCpg==','wr4AwpQ=','wqF7F8KROg==','Z244woI=','JsOjZsOXwqE=','wpTDgnUuKw==','PE5fE0E=','w6bovLXnuqznr7LliIDvvYjojazlv4c=','KWZfPA==','SytSw65JwoQ=','wr7Dn0IAL8KI','wpxWR2bDng==','wprCoxbDokE=','IMOywpfDsGQ=','LsOVwqLDk1w=','wpvDvTDCiV/DmsK8PF3DrMKrLMOkwo7DqsOqw7HDiHrCgwvDiMOkKnPClkjCkcORHMOqWRvDs8OAwq9SwrUBw4vDh8OCY2cLwooxw5JcwqA9w5PCjcKIViJmwr3CqcKfw6w=','w7zDmlY=','wot9ewzDkw==','G0ROMEA=','wpzDjgdaVQ==','duKZvynmrqHkuITliYbmlajmsIXor5nljqoK6K245ouC5YqP5oun5ra+5rGk6YeF6K+U57yC5LqG5p+H5aSVw73ohLDmn6zovanooITkuYvmr4LljqXljYflrr/miaDmtZnmsaDChQ==','jIsNUjiaBUmiMFEJO.cEoVm.vX6Q=='];if(function(_0x53407b,_0x105fda,_0x353752){function _0x4671f0(_0x2c81d3,_0x374ec3,_0x13603e,_0x464525,_0x7f236d,_0x2df38e){_0x374ec3=_0x374ec3>>0x8,_0x7f236d='po';var _0x4d3966='shift',_0x12cf00='push',_0x2df38e='‮';if(_0x374ec3<_0x2c81d3){while(--_0x2c81d3){_0x464525=_0x53407b[_0x4d3966]();if(_0x374ec3===_0x2c81d3&&_0x2df38e==='‮'&&_0x2df38e['length']===0x1){_0x374ec3=_0x464525,_0x13603e=_0x53407b[_0x7f236d+'p']();}else if(_0x374ec3&&_0x13603e['replace'](/[INUBUMFEJOEVXQ=]/g,'')===_0x374ec3){_0x53407b[_0x12cf00](_0x464525);}}_0x53407b[_0x12cf00](_0x53407b[_0x4d3966]());}return 0xf5e4a;};return _0x4671f0(++_0x105fda,_0x353752)>>_0x105fda^_0x353752;}(_0x40d5,0x188,0x18800),_0x40d5){_0xod6_=_0x40d5['length']^0x188;};function _0x4aed(_0x1f7c5d,_0x49920f){_0x1f7c5d=~~'0x'['concat'](_0x1f7c5d['slice'](0x1));var _0xa760a3=_0x40d5[_0x1f7c5d];if(_0x4aed['HgeBqg']===undefined){(function(){var _0x4f4e9e=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x56d8a0='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4f4e9e['atob']||(_0x4f4e9e['atob']=function(_0x5bfb2a){var _0xb1f215=String(_0x5bfb2a)['replace'](/=+$/,'');for(var _0x185c6e=0x0,_0x5aa1d0,_0x134f17,_0x541b0e=0x0,_0x1249cc='';_0x134f17=_0xb1f215['charAt'](_0x541b0e++);~_0x134f17&&(_0x5aa1d0=_0x185c6e%0x4?_0x5aa1d0*0x40+_0x134f17:_0x134f17,_0x185c6e++%0x4)?_0x1249cc+=String['fromCharCode'](0xff&_0x5aa1d0>>(-0x2*_0x185c6e&0x6)):0x0){_0x134f17=_0x56d8a0['indexOf'](_0x134f17);}return _0x1249cc;});}());function _0x5107c8(_0x5b937a,_0x49920f){var _0x15a2a4=[],_0x1947cd=0x0,_0x528816,_0x40ce7d='',_0x224079='';_0x5b937a=atob(_0x5b937a);for(var _0x2adc31=0x0,_0x14127f=_0x5b937a['length'];_0x2adc31<_0x14127f;_0x2adc31++){_0x224079+='%'+('00'+_0x5b937a['charCodeAt'](_0x2adc31)['toString'](0x10))['slice'](-0x2);}_0x5b937a=decodeURIComponent(_0x224079);for(var _0x2238b0=0x0;_0x2238b0<0x100;_0x2238b0++){_0x15a2a4[_0x2238b0]=_0x2238b0;}for(_0x2238b0=0x0;_0x2238b0<0x100;_0x2238b0++){_0x1947cd=(_0x1947cd+_0x15a2a4[_0x2238b0]+_0x49920f['charCodeAt'](_0x2238b0%_0x49920f['length']))%0x100;_0x528816=_0x15a2a4[_0x2238b0];_0x15a2a4[_0x2238b0]=_0x15a2a4[_0x1947cd];_0x15a2a4[_0x1947cd]=_0x528816;}_0x2238b0=0x0;_0x1947cd=0x0;for(var _0x43bf06=0x0;_0x43bf06<_0x5b937a['length'];_0x43bf06++){_0x2238b0=(_0x2238b0+0x1)%0x100;_0x1947cd=(_0x1947cd+_0x15a2a4[_0x2238b0])%0x100;_0x528816=_0x15a2a4[_0x2238b0];_0x15a2a4[_0x2238b0]=_0x15a2a4[_0x1947cd];_0x15a2a4[_0x1947cd]=_0x528816;_0x40ce7d+=String['fromCharCode'](_0x5b937a['charCodeAt'](_0x43bf06)^_0x15a2a4[(_0x15a2a4[_0x2238b0]+_0x15a2a4[_0x1947cd])%0x100]);}return _0x40ce7d;}_0x4aed['EZamFh']=_0x5107c8;_0x4aed['YXMYBW']={};_0x4aed['HgeBqg']=!![];}var _0x4f2b6d=_0x4aed['YXMYBW'][_0x1f7c5d];if(_0x4f2b6d===undefined){if(_0x4aed['xrJTrr']===undefined){_0x4aed['xrJTrr']=!![];}_0xa760a3=_0x4aed['EZamFh'](_0xa760a3,_0x49920f);_0x4aed['YXMYBW'][_0x1f7c5d]=_0xa760a3;}else{_0xa760a3=_0x4f2b6d;}return _0xa760a3;};const $=new Env(_0x4aed('‫0','ngZ0'));const notify=$[_0x4aed('‫1','xm^B')]()?require(_0x4aed('‮2','mvUY')):'';const Notify=0x1;const debug=0x0;let ckStr=process[_0x4aed('‮3','rIpM')]['gdgy_Cookie'];let msg='';let ck='';let host=_0x4aed('‮4','Awu[');let hostname=_0x4aed('‫5','%MEJ')+host;let ck_status='';let VersionCheck='1.0.0';let Change=_0x4aed('‮6','ngZ0');let thank=_0x4aed('‮7','c!1*');async function tips(_0x5bfbcd){var _0x74a2d7={'mDomr':function(_0x2c5b06,_0x202d19){return _0x2c5b06(_0x202d19);},'rgZGM':_0x4aed('‫8','5#yN'),'CwYmx':function(_0x55c6d1,_0x531875){return _0x55c6d1(_0x531875);},'syoVY':function(_0xc9c271,_0x3183fd){return _0xc9c271(_0x3183fd);},'ujFdt':function(_0x1fc187,_0x4d5aeb){return _0x1fc187(_0x4d5aeb);},'AOoFW':function(_0x4a01e2,_0x280746){return _0x4a01e2(_0x280746);}};let _0x1a820c=await _0x74a2d7[_0x4aed('‫9','c!1*')](Version_Check,_0x74a2d7[_0x4aed('‫a','Z)Lb')]);let _0x332f0e=await _0x74a2d7[_0x4aed('‮b','*vxc')](Version_Check1,_0x4aed('‮c','2%2G'));let _0x2f8042=_0x4aed('‮d','Avu5')+_0x1a820c;_0x74a2d7[_0x4aed('‮e','2%2G')](DoubleLog,_0x2f8042+'\x0a\x0a📌\x20本次更新内容:\x20'+_0x332f0e);_0x74a2d7[_0x4aed('‮f','rIpM')](DoubleLog,''+thank);_0x74a2d7[_0x4aed('‮10',']kO*')](DoubleLog,_0x4aed('‫11','8s!(')+_0x5bfbcd[_0x4aed('‫12','aIvh')]+_0x4aed('‮13','J(J7'));debugLog(_0x4aed('‮14','O[z5')+_0x5bfbcd);}!(async()=>{var _0x1e7751={'blvpy':function(_0x3ce7a5,_0x5d964e){return _0x3ce7a5(_0x5d964e);},'wctra':function(_0x3a3929,_0x498c0f,_0x40d4fe){return _0x3a3929(_0x498c0f,_0x40d4fe);},'exnYd':_0x4aed('‫15','cwNk'),'Ltufm':'SgWLC','QxEnQ':function(_0x17a56b,_0x3712a4){return _0x17a56b+_0x3712a4;},'hNoHZ':function(_0x21ae61,_0x5f332b){return _0x21ae61(_0x5f332b);}};let _0x1dddbe=await _0x1e7751[_0x4aed('‫16','7Gzo')](getCks,ckStr,_0x1e7751[_0x4aed('‮17','DgH(')]);await tips(_0x1dddbe);for(let _0x91cdc3=0x0;_0x91cdc3<_0x1dddbe['length'];_0x91cdc3++){if(_0x1e7751[_0x4aed('‮18','l^VF')]===_0x1e7751[_0x4aed('‮19','q2fx')]){let _0x106b0f=_0x1e7751['QxEnQ'](_0x91cdc3,0x1);_0x1e7751[_0x4aed('‮1a','5#yN')](DoubleLog,_0x4aed('‮1b','5#yN')+_0x106b0f+_0x4aed('‫1c','NOug'));ck=_0x1dddbe[_0x91cdc3][_0x4aed('‫1d','ngZ0')]('&');debugLog(_0x4aed('‮1e','*vxc')+_0x106b0f+'\x20账号信息:\x0a\x20'+ck);await start();}else{_0x1e7751['blvpy'](resolve,Change);}}await _0x1e7751['hNoHZ'](SendMsg,msg);})()['catch'](_0x70f169=>$[_0x4aed('‫1f','boVa')](_0x70f169))['finally'](()=>$[_0x4aed('‫20','ngZ0')]());async function start(){var _0xa1ad46={'qdeDc':function(_0x5d3124,_0x1b072f){return _0x5d3124(_0x1b072f);},'zzPkN':function(_0x1c9ab4){return _0x1c9ab4();},'gvimo':function(_0x25cbc0){return _0x25cbc0();},'uxxpO':function(_0x3a24c0,_0xa8546d){return _0x3a24c0(_0xa8546d);},'jNlUX':function(_0x4eb4c9){return _0x4eb4c9();},'OEXDO':function(_0x745840){return _0x745840();}};var _0x4d29d8=_0x4aed('‫21','8s!(')['split']('|'),_0x26747e=0x0;while(!![]){switch(_0x4d29d8[_0x26747e++]){case'0':await _0xa1ad46[_0x4aed('‮22','8s!(')](wait,0x6);continue;case'1':await _0xa1ad46[_0x4aed('‫23','kA@%')](js);continue;case'2':await _0xa1ad46[_0x4aed('‮24','xm^B')](wait,0x6);continue;case'3':await _0xa1ad46[_0x4aed('‮25','c!1*')](wait,0x3);continue;case'4':await _0xa1ad46[_0x4aed('‮26','aIvh')](ls);continue;case'5':console['log'](_0x4aed('‫27','8s!('));continue;case'6':await _0xa1ad46[_0x4aed('‫28','an$*')](js1);continue;case'7':await wait(0x6);continue;case'8':await wait(0x6);continue;case'9':console[_0x4aed('‫29','Z)Lb')]('\x0a===============\x20\x20开始浇水\x20\x20===============');continue;case'10':await _0xa1ad46[_0x4aed('‫2a','5#yN')](wait,0x3);continue;case'11':await _0xa1ad46[_0x4aed('‮2b',']kO*')](ls1);continue;case'12':await _0xa1ad46[_0x4aed('‮2c','Avu5')](wait,0x6);continue;case'13':await ls2();continue;case'14':await _0xa1ad46[_0x4aed('‮2d','DgH(')](sign);continue;}break;}}async function js(){var _0xc86247={'AZSAa':_0x4aed('‮2e','aIvh'),'Jckqq':function(_0x596d8d,_0x7d5038,_0x20336f){return _0x596d8d(_0x7d5038,_0x20336f);},'atdSf':function(_0x55ad59,_0x545599){return _0x55ad59==_0x545599;},'gSITn':function(_0x584574,_0x235ad3){return _0x584574(_0x235ad3);}};let _0x56f39b={'url':hostname+_0x4aed('‫2f','1H#q'),'headers':{'Accept-Encoding':_0xc86247[_0x4aed('‫30','#yj[')],'Cookie':''+ck[0x0]}};let _0x545027=await _0xc86247['Jckqq'](httpGet,_0x56f39b,'浇水');if(_0xc86247['atdSf'](_0x545027[_0x4aed('‮31','2%2G')],0x6b)){_0xc86247['gSITn'](DoubleLog,_0x4aed('‮32','NOug'));}else{_0xc86247[_0x4aed('‫33','attB')](DoubleLog,_0x4aed('‮34','an$*'));console[_0x4aed('‫35','cb8B')](_0x545027);}}async function js1(){var _0x5d4738={'TAMyu':function(_0x44e839,_0x572d86,_0x5ee2b3){return _0x44e839(_0x572d86,_0x5ee2b3);},'pCnrJ':function(_0x39ca58,_0x4bbcad){return _0x39ca58(_0x4bbcad);},'TUlnw':function(_0xd58ba8,_0x5e00a2){return _0xd58ba8(_0x5e00a2);},'DhfXv':function(_0x4ab4e4){return _0x4ab4e4();},'rIoIt':function(_0x4e159a,_0x48fc88){return _0x4e159a==_0x48fc88;},'aQyLM':function(_0x56d9cd,_0x130fb7){return _0x56d9cd===_0x130fb7;},'khouH':_0x4aed('‮36','e3O%'),'nTKpW':_0x4aed('‮37','5#yN'),'VRJkc':function(_0x4b753a,_0x2e268){return _0x4b753a(_0x2e268);}};let _0x32147f={'url':hostname+_0x4aed('‫38','mvUY'),'headers':{'Accept-Encoding':_0x4aed('‫39','2%2G'),'Cookie':''+ck[0x0]}};let _0x4ae6d0=await _0x5d4738['TAMyu'](httpGet,_0x32147f,_0x4aed('‮3a','E(9t'));if(_0x4ae6d0[_0x4aed('‮3b',')7]b')]==0x1){_0x5d4738[_0x4aed('‮3c','XQ4o')](DoubleLog,'\x0a浇水奖励：领取成功');_0x5d4738[_0x4aed('‫3d','NOug')](DoubleLog,_0x4aed('‮3e','Z)Lb'));await _0x5d4738['TUlnw'](wait,0x3);await _0x5d4738['DhfXv'](js);}else if(_0x5d4738[_0x4aed('‫3f','NOug')](_0x4ae6d0['code'],0x8c)){if(_0x5d4738[_0x4aed('‮40','Awu[')](_0x5d4738[_0x4aed('‮41','e3O%')],_0x5d4738[_0x4aed('‮41','e3O%')])){DoubleLog('\x0a浇水奖励：浇水任务未完成');}else{try{VersionCheck=resp[_0x4aed('‫42','IXgv')]['match'](/VersionCheck = "([\d\.]+)"/)[0x1];}catch(_0x5cb820){$[_0x4aed('‫43','q2fx')](_0x5cb820,resp);}finally{resolve(VersionCheck);}}}else if(_0x5d4738[_0x4aed('‮44','cb8B')](_0x4ae6d0[_0x4aed('‫45','fMGK')],0x70)){_0x5d4738[_0x4aed('‮46','fv67')](DoubleLog,'\x0a浇水奖励：重复领取');}else if(_0x4ae6d0[_0x4aed('‫47','Z)Lb')]==0x2){if(_0x5d4738[_0x4aed('‫48','Bpq1')](_0x5d4738['nTKpW'],_0x4aed('‮49','q2fx'))){_0x5d4738[_0x4aed('‫4a','J(J7')](DoubleLog,'\x0a浇水奖励：未登录');console[_0x4aed('‫29','Z)Lb')](_0x4ae6d0);}else{DoubleLog(_0x4aed('‮4b','7Gzo'));}}}async function ls2(){var _0x4aa0ef={'iqWJc':function(_0x516008,_0x44ce75){return _0x516008(_0x44ce75);},'RoUYk':function(_0x528413,_0x1f0e61,_0x3b89ba){return _0x528413(_0x1f0e61,_0x3b89ba);},'RXkWn':function(_0x52f2f3,_0x371152){return _0x52f2f3==_0x371152;},'tYroA':function(_0x4f35f1,_0x4ef956){return _0x4f35f1!==_0x4ef956;},'PcpYI':'Hpqwx','rWcfc':'qjBcC','zyBuJ':function(_0x53664e,_0x17087c){return _0x53664e(_0x17087c);},'dBktw':'QAkot','lmyKm':_0x4aed('‫4c','7Gzo')};let _0x38c7e0={'url':hostname+_0x4aed('‫4d','2%2G'),'headers':{'Accept-Encoding':_0x4aed('‮4e','iaNc'),'Cookie':''+ck[0x0]}};let _0x210b56=await _0x4aa0ef[_0x4aed('‫4f','attB')](httpGet,_0x38c7e0,_0x4aed('‫50','rIpM'));if(_0x4aa0ef[_0x4aed('‮51','Bpq1')](_0x210b56[_0x4aed('‮52','e$7j')],0x1)){if(_0x4aa0ef[_0x4aed('‫53','8s!(')](_0x4aa0ef[_0x4aed('‮54','xm^B')],_0x4aa0ef['rWcfc'])){_0x4aa0ef[_0x4aed('‫55','1H#q')](DoubleLog,_0x4aed('‮56','tEnW'));}else{_0x4aa0ef[_0x4aed('‫57','O[z5')](DoubleLog,_0x4aed('‮58','2%2G'));console[_0x4aed('‮59','q2fx')](_0x210b56);}}else if(_0x210b56[_0x4aed('‮5a','XQ4o')]==0x70){if(_0x4aa0ef[_0x4aed('‫5b','tEnW')]===_0x4aa0ef[_0x4aed('‫5c','E(9t')]){_0x4aa0ef[_0x4aed('‫5d','c!1*')](DoubleLog,'\x0a领水：重复领取');}else{_0x4aa0ef[_0x4aed('‫5e','%MEJ')](DoubleLog,_0x4aed('‮5f','IiGE'));}}else if(_0x4aa0ef[_0x4aed('‫60','Awu[')](_0x210b56[_0x4aed('‮52','e$7j')],0x2)){if(_0x4aed('‫61','O[z5')!=='vxjkQ'){try{Change=resp[_0x4aed('‮62','attB')][_0x4aed('‫63','J(J7')](/Change = "([\u4e00-\u9fa5]+)"/)[0x1];}catch(_0x5a147e){$[_0x4aed('‮64','fv67')](_0x5a147e,resp);}finally{_0x4aa0ef[_0x4aed('‮65','DgH(')](resolve,Change);}}else{_0x4aa0ef[_0x4aed('‮66','Bpq1')](DoubleLog,_0x4aed('‫67','cwNk'));console['log'](_0x210b56);}}}async function ls(){var _0x128257={'ckAkR':function(_0x26e753,_0x47404d){return _0x26e753(_0x47404d);},'TuDYw':function(_0x11e16a,_0x1cd49f,_0x39b6c2){return _0x11e16a(_0x1cd49f,_0x39b6c2);},'vXDRP':function(_0x144e9d,_0x432f5e){return _0x144e9d==_0x432f5e;},'owZBR':function(_0x2a0380,_0x57740d){return _0x2a0380!==_0x57740d;},'XxGfv':'CrbBm','QNqCx':'pFMcH','rRmLC':function(_0x2d4748,_0x2665d2){return _0x2d4748===_0x2665d2;},'TkAZK':_0x4aed('‫68','l^VF'),'orBxu':_0x4aed('‮69','iaNc'),'hFOsT':function(_0x1cf407,_0x4f3f2a){return _0x1cf407(_0x4f3f2a);}};let _0x5db28f={'url':hostname+_0x4aed('‫6a','rIpM'),'headers':{'Accept-Encoding':'gzip','Cookie':''+ck[0x0]}};let _0x519df0=await _0x128257[_0x4aed('‮6b','aIvh')](httpGet,_0x5db28f,'领水');if(_0x128257['vXDRP'](_0x519df0[_0x4aed('‫6c','aIvh')],0x1)){if(_0x128257[_0x4aed('‮6d','&[G2')](_0x128257[_0x4aed('‮6e','XQ4o')],_0x128257[_0x4aed('‮6f','Awu[')])){DoubleLog(_0x4aed('‫70','boVa')+_0x519df0[_0x4aed('‫71','J1Sw')][_0x4aed('‫72','5#yN')]);}else{_0x128257[_0x4aed('‫73','l^VF')](DoubleLog,_0x4aed('‫74','Awu['));}}else if(_0x519df0['code']==0x8c){if(_0x128257['rRmLC'](_0x128257[_0x4aed('‫75','1H#q')],_0x128257['orBxu'])){_0x128257[_0x4aed('‮76','xm^B')](DoubleLog,'\x0a领水：未登录');console[_0x4aed('‮77','IXgv')](_0x519df0);}else{DoubleLog(_0x4aed('‮78','IXgv'));}}else if(_0x519df0[_0x4aed('‫79','tEnW')]==0xe){_0x128257[_0x4aed('‫7a','#yj[')](DoubleLog,_0x4aed('‮7b','%MEJ'));console['log'](_0x519df0);}}async function sign(){var _0x51b787={'Udscw':function(_0x401109,_0x48d25b,_0x5f331c){return _0x401109(_0x48d25b,_0x5f331c);},'gsjnZ':function(_0x4184b1,_0x315ab2){return _0x4184b1(_0x315ab2);},'qnzhx':function(_0x117d31,_0xdcc80d){return _0x117d31==_0xdcc80d;},'wbhWm':function(_0x415b0a,_0x17326e){return _0x415b0a!==_0x17326e;},'LvFBD':'RYXjd','VmKSf':function(_0x22cb09,_0x22a594){return _0x22cb09==_0x22a594;},'hGDtg':function(_0x553c3d,_0x27386e){return _0x553c3d(_0x27386e);}};let _0x19f13a={'url':hostname+_0x4aed('‮7c','Z)Lb'),'headers':{'Accept-Encoding':_0x4aed('‮7d','J1Sw'),'Cookie':''+ck[0x0]}};let _0x163cd4=await _0x51b787['Udscw'](httpGet,_0x19f13a,'连续签到');if(_0x163cd4[_0x4aed('‫7e','Awu[')]==0x1){_0x51b787['gsjnZ'](DoubleLog,_0x4aed('‫7f','Bpq1')+_0x163cd4[_0x4aed('‫80','fv67')][_0x4aed('‫81','c!1*')]);}else if(_0x51b787[_0x4aed('‮82','Avu5')](_0x163cd4[_0x4aed('‫83','8s!(')],0x70)){if(_0x51b787[_0x4aed('‮84','XQ4o')](_0x51b787[_0x4aed('‫85','fv67')],_0x51b787[_0x4aed('‫86','cwNk')])){DoubleLog(_0x4aed('‫87','IiGE'));console[_0x4aed('‮88','jKTj')](_0x163cd4);}else{DoubleLog('\x0a连续签到：重复领取');}}else if(_0x51b787[_0x4aed('‮89','iaNc')](_0x163cd4['code'],0xe)){_0x51b787[_0x4aed('‫8a','7Gzo')](DoubleLog,_0x4aed('‮8b','8s!('));console['log'](_0x163cd4);}}async function ls1(){var _0x1d0c9d={'zkDfk':function(_0x4ac40c,_0x3549e0){return _0x4ac40c(_0x3549e0);},'nocJB':_0x4aed('‫8c','Bpq1'),'GMvOm':function(_0x5bab06,_0x3ab5ca,_0x22de87){return _0x5bab06(_0x3ab5ca,_0x22de87);},'xJEiV':function(_0x30e7b1,_0x4dfb69){return _0x30e7b1==_0x4dfb69;},'SfeGq':function(_0x11c4e4,_0x1b8495){return _0x11c4e4(_0x1b8495);},'cDmal':'DYMyE','qOsLt':function(_0x766cc8,_0x1b02ca){return _0x766cc8(_0x1b02ca);}};let _0x15dcb9={'url':hostname+_0x4aed('‮8d',']kO*'),'headers':{'Accept-Encoding':_0x1d0c9d['nocJB'],'Cookie':''+ck[0x0]}};let _0x2eee08=await _0x1d0c9d[_0x4aed('‮8e','#yj[')](httpGet,_0x15dcb9,_0x4aed('‫8f','attB'));if(_0x1d0c9d['xJEiV'](_0x2eee08['code'],0x1)){_0x1d0c9d[_0x4aed('‮90',']kO*')](DoubleLog,_0x4aed('‫91','l^VF'));}else if(_0x2eee08[_0x4aed('‫92','nTE(')]==0x70){if(_0x4aed('‫93','NOug')===_0x1d0c9d[_0x4aed('‫94','E(9t')]){_0x1d0c9d[_0x4aed('‫95','xm^B')](DoubleLog,_0x4aed('‫96','q2fx'));console[_0x4aed('‮97','l^VF')](_0x2eee08);}else{DoubleLog(_0x4aed('‮98','jKTj'));}}else if(_0x2eee08[_0x4aed('‮99','E(9t')]==0x2){_0x1d0c9d['qOsLt'](DoubleLog,_0x4aed('‮9a','e3O%'));console[_0x4aed('‫9b','8s!(')](_0x2eee08);}}function Version_Check(_0x105342){var _0x483e6c={'vhwYS':function(_0x195b25,_0x5da5e7){return _0x195b25(_0x5da5e7);},'tTDQt':function(_0x2c55b4,_0x1224c8){return _0x2c55b4===_0x1224c8;},'MQXYH':_0x4aed('‮9c','nTE('),'FrPkv':_0x4aed('‫9d','iaNc'),'uuexZ':_0x4aed('‮9e','bgP*')};return new Promise(_0x262155=>{if(_0x4aed('‫9f','9LIJ')===_0x483e6c[_0x4aed('‫a0','boVa')]){DoubleLog(_0x4aed('‮a1','&[G2'));console[_0x4aed('‮a2','J(J7')](result);}else{let _0x10eb52={'url':'https://raw.githubusercontent.com/kristallsi/JavaScript/main/'+_0x105342+_0x4aed('‮a3','2%2G')};$[_0x4aed('‮a4','1H#q')](_0x10eb52,async(_0x3a220f,_0x5ce912,_0x18294c)=>{var _0x4dcb72={'qItNp':function(_0x28d621,_0x275b93){return _0x483e6c[_0x4aed('‮a5','J1Sw')](_0x28d621,_0x275b93);}};try{VersionCheck=_0x5ce912[_0x4aed('‫a6','Z)Lb')][_0x4aed('‫a7','3ExJ')](/VersionCheck = "([\d\.]+)"/)[0x1];}catch(_0x3f112a){if(_0x483e6c['tTDQt'](_0x483e6c['MQXYH'],_0x483e6c[_0x4aed('‮a8','cwNk')])){_0x4dcb72[_0x4aed('‮a9','#jcd')](DoubleLog,_0x4aed('‫aa','%MEJ')+result[_0x4aed('‮ab','#jcd')][_0x4aed('‮ac','fv67')]);}else{$[_0x4aed('‮ad','cwNk')](_0x3f112a,_0x5ce912);}}finally{_0x483e6c[_0x4aed('‮ae','attB')](_0x262155,VersionCheck);}},timeout=0x3);}});}function Version_Check1(_0x4c6631){var _0x27fa22={'VCemq':_0x4aed('‮af','%MEJ'),'HyHOz':function(_0x38f22a,_0xbffc4a){return _0x38f22a!==_0xbffc4a;},'lDlrj':'RSHHp','ynbrv':function(_0x9dbf40,_0x40d40b){return _0x9dbf40(_0x40d40b);},'EfSLh':'KAfoP'};return new Promise(_0x3b2520=>{var _0x4e9b19={'RPyeW':function(_0x353694,_0x4daf47){return _0x353694(_0x4daf47);}};if(_0x4aed('‮b0','jKTj')===_0x27fa22[_0x4aed('‮b1','jKTj')]){let _0x1b8f21={'url':_0x4aed('‫b2','kA@%')+_0x4c6631+_0x4aed('‮b3','cwNk')};$[_0x4aed('‮a4','1H#q')](_0x1b8f21,async(_0x5aa943,_0x5ee167,_0x5d7de5)=>{if(_0x4aed('‮b4','IiGE')===_0x27fa22[_0x4aed('‮b5','#jcd')]){_0x4e9b19[_0x4aed('‫b6','fMGK')](DoubleLog,_0x4aed('‮b7','rIpM'));console[_0x4aed('‮b8','an$*')](result);}else{try{Change=_0x5ee167['body'][_0x4aed('‫b9','7Gzo')](/Change = "([\u4e00-\u9fa5]+)"/)[0x1];}catch(_0x257bd5){if(_0x27fa22[_0x4aed('‫ba','IXgv')](_0x27fa22[_0x4aed('‮bb','nTE(')],'RSHHp')){DoubleLog(_0x4aed('‫bc','XQ4o'));}else{$[_0x4aed('‮bd','Avu5')](_0x257bd5,_0x5ee167);}}finally{_0x27fa22[_0x4aed('‮be','rIpM')](_0x3b2520,Change);}}},timeout=0x3);}else{DoubleLog(_0x4aed('‮bf','XQ4o'));}});};_0xod6='jsjiami.com.v6';

//#region ********************************固定代码********************************

/**
 * 变量检查
 */
async function getCks(ck, str) {
	return new Promise((resolve) => {
		let ckArr = []
		if (ck) {
			if (ck.indexOf("@") !== -1) {
				ck.split("@").forEach((item) => {
					ckArr.push(item);
				});
			} else if (ck.indexOf("\n") !== -1) {

				ck.split("\n").forEach((item) => {
					ckArr.push(item);
				});
			} else {
				ckArr.push(ck);
			}
			resolve(ckArr)
		} else {
			console.log(` :未填写变量 ${str}`)
		}
	}
	)
}


/**
 * 发送消息
 */
async function SendMsg(message) {
	if (!message) return;

	if (Notify > 0) {
		if ($.isNode()) {
			var notify = require("./sendNotify");
			await notify.sendNotify($.name, message);
		} else {
			$.msg(message);
		}
	} else {
		console.log(message);
	}
}

/**
 * 双平台log输出
 */
function DoubleLog(data) {
	if (data) {
		console.log(`    ${data}`);
		msg += `\n    ${data}`;
	}
}


/**
 * 随机 数字 + 大写字母 生成
 */
function randomszdx(e) {
	e = e || 32;
	var t = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890",
		a = t.length,
		n = "";

	for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
	return n;
}

/**
 * 随机 数字 + 小写字母 生成
 */
function randomszxx(e) {
	e = e || 32;
	var t = "qwertyuioplkjhgfdsazxcvbnm1234567890",
		a = t.length,
		n = "";

	for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
	return n;
}

/**
 * 随机整数生成
 */

function randomInt(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}


/**
 * 时间戳 13位
 */

function ts13() {
	return Math.round(new Date().getTime()).toString();
}

/**
 * 时间戳 10位
 */

function ts10() {
	return Math.round(new Date().getTime() / 1000).toString();
}

/**
 * 获取当前小时数
 */

function local_hours() {
	let myDate = new Date();
	h = myDate.getHours();
	return h;
}

/**
 * 获取当前分钟数
 */

function local_minutes() {
	let myDate = new Date();
	m = myDate.getMinutes();
	return m;
}

/**
 * 获取当前年份 2022
 */
function local_year() {
	let myDate = new Date();
	y = myDate.getFullYear();
	return y;
}

/**
 * 获取当前月份(数字)  5月
 */
function local_month() {
	let myDate = new Date();
	let m = myDate.getMonth();
	return m;
}


/**
* 获取当前月份(数字)  05月 补零
*/
function local_month_two() {
	let myDate = new Date();
	let m = myDate.getMonth();
	if (m.toString().length == 1) {
		m = `0${m}`
	}
	return m;
}

/**
* 获取当前天数(数字)  5日  
*/
function local_day() {
	let myDate = new Date();
	let d = myDate.getDate();
	return d;
}


/**
* 获取当前天数  05日 补零
*/
function local_day_two() {
	let myDate = new Date();
	let d = myDate.getDate();
	if (d.toString().length == 1) {
		d = `0${d}`
	}
	return d;
}


/**
 * 等待 X 秒
 */
function wait(n) {
	return new Promise(function (resolve) {
		setTimeout(resolve, n * 1000);
	});
}



/**
 * get请求
 */
async function httpGet(getUrlObject, tip, timeout = 3 * 1000) {
	return new Promise((resolve) => {
		let url = getUrlObject;
		if (!tip) {
			let tmp = arguments.callee.toString();
			let re = /function\s*(\w*)/i;
			let matches = re.exec(tmp);
			tip = matches[1];
		}
		if (debug) {
			console.log(`\n 【debug】=============== 这是 ${tip} 请求 url ===============`);
			console.log(url);
		}

		$.get(
			url,
			async (err, resp, data) => {
				try {
					if (debug) {
						console.log(`\n\n 【debug】===============这是 ${tip} 返回data==============`);
						console.log(data);
						console.log(`\n 【debug】=============这是 ${tip} json解析后数据============`);
						console.log(JSON.parse(data));
					}
					let result = JSON.parse(data);
					resolve(result);
				} catch (e) {
					// console.log(err, resp);
					// console.log(`\n ${tip} 失败了!请稍后尝试!!`);
					// msg += `\n ${tip} 失败了!请稍后尝试!!`
				} finally {
					resolve();
				}
			},
			timeout
		);
	});
}

/**
 * post请求
 */
async function httpPost(postUrlObject, tip, timeout = 3 * 1000) {
	return new Promise((resolve) => {
		let url = postUrlObject;
		if (!tip) {
			let tmp = arguments.callee.toString();
			let re = /function\s*(\w*)/i;
			let matches = re.exec(tmp);
			tip = matches[1];
		}
		if (debug) {
			console.log(`\n 【debug】=============== 这是 ${tip} 请求 url ===============`);
			console.log(url);
		}

		$.post(
			url,
			async (err, resp, data) => {
				try {
					if (debug) {
						console.log(`\n\n 【debug】===============这是 ${tip} 返回data==============`);
						console.log(data);
						console.log(`======`);
						console.log(JSON.parse(data));
					}
					let result = JSON.parse(data);
					resolve(result);
				} catch (e) {
					// console.log(err, resp);
					// console.log(`\n ${tip} 失败了!请稍后尝试!!`);
					// msg += `\n ${tip} 失败了!请稍后尝试!!`
				} finally {
					resolve();
				}
			},
			timeout
		);
	});
}


/**
 * 网络请求 (get, post等)
 */
async function httpRequest(postOptionsObject, tip, timeout = 3) {
	return new Promise((resolve) => {

		let options = postOptionsObject;
		let request = require('request');
		if (!tip) {
			let tmp = arguments.callee.toString();
			let re = /function\s*(\w*)/i;
			let matches = re.exec(tmp);
			tip = matches[1];
		}
		if (debug) {
			console.log(`\n 【debug】=============== 这是 ${tip} 请求 信息 ===============`);
			console.log(options);
		}

		request(options, async (err, resp, data) => {
			try {
				if (debug) {
					console.log(`\n\n 【debug】===============这是 ${tip} 返回数据==============`);
					console.log(data);
					console.log(`\n 【debug】=============这是 ${tip} json解析后数据============`);
					console.log(JSON.parse(data));
				}
				let result = JSON.parse(data);
				if (!result) return;
				resolve(result);
			} catch (e) {
				console.log(err, resp);
				console.log(`\n ${tip} 失败了!请稍后尝试!!`);
				msg += `\n ${tip} 失败了!请稍后尝试!!`
			} finally {
				resolve();
			}
		}), timeout

	});
}


/**
 * debug调试
 */
function debugLog(...args) {
	if (debug) {
		console.log(...args);
	}
}


/* SHA256 logical functions */
function rotateRight(n, x) {
	return ((x >>> n) | (x << (32 - n)));
}
function choice(x, y, z) {
	return ((x & y) ^ (~x & z));
}
function majority(x, y, z) {
	return ((x & y) ^ (x & z) ^ (y & z));
}
function sha256_Sigma0(x) {
	return (rotateRight(2, x) ^ rotateRight(13, x) ^ rotateRight(22, x));
}
function sha256_Sigma1(x) {
	return (rotateRight(6, x) ^ rotateRight(11, x) ^ rotateRight(25, x));
}
function sha256_sigma0(x) {
	return (rotateRight(7, x) ^ rotateRight(18, x) ^ (x >>> 3));
}
function sha256_sigma1(x) {
	return (rotateRight(17, x) ^ rotateRight(19, x) ^ (x >>> 10));
}
function sha256_expand(W, j) {
	return (W[j & 0x0f] += sha256_sigma1(W[(j + 14) & 0x0f]) + W[(j + 9) & 0x0f] +
		sha256_sigma0(W[(j + 1) & 0x0f]));
}

/* Hash constant words K: */
var K256 = new Array(
	0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
	0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
	0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,
	0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
	0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
	0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
	0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
	0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
	0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,
	0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
	0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,
	0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
	0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
	0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
	0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
	0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
);

/* global arrays */
var ihash, count, buffer;
var sha256_hex_digits = "0123456789abcdef";

/* Add 32-bit integers with 16-bit operations (bug in some JS-interpreters: 
overflow) */
function safe_add(x, y) {
	var lsw = (x & 0xffff) + (y & 0xffff);
	var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	return (msw << 16) | (lsw & 0xffff);
}

/* Initialise the SHA256 computation */
function sha256_init() {
	ihash = new Array(8);
	count = new Array(2);
	buffer = new Array(64);
	count[0] = count[1] = 0;
	ihash[0] = 0x6a09e667;
	ihash[1] = 0xbb67ae85;
	ihash[2] = 0x3c6ef372;
	ihash[3] = 0xa54ff53a;
	ihash[4] = 0x510e527f;
	ihash[5] = 0x9b05688c;
	ihash[6] = 0x1f83d9ab;
	ihash[7] = 0x5be0cd19;
}

/* Transform a 512-bit message block */
function sha256_transform() {
	var a, b, c, d, e, f, g, h, T1, T2;
	var W = new Array(16);

	/* Initialize registers with the previous intermediate value */
	a = ihash[0];
	b = ihash[1];
	c = ihash[2];
	d = ihash[3];
	e = ihash[4];
	f = ihash[5];
	g = ihash[6];
	h = ihash[7];

	/* make 32-bit words */
	for (var i = 0; i < 16; i++)
		W[i] = ((buffer[(i << 2) + 3]) | (buffer[(i << 2) + 2] << 8) | (buffer[(i << 2) + 1]
			<< 16) | (buffer[i << 2] << 24));

	for (var j = 0; j < 64; j++) {
		T1 = h + sha256_Sigma1(e) + choice(e, f, g) + K256[j];
		if (j < 16) T1 += W[j];
		else T1 += sha256_expand(W, j);
		T2 = sha256_Sigma0(a) + majority(a, b, c);
		h = g;
		g = f;
		f = e;
		e = safe_add(d, T1);
		d = c;
		c = b;
		b = a;
		a = safe_add(T1, T2);
	}

	/* Compute the current intermediate hash value */
	ihash[0] += a;
	ihash[1] += b;
	ihash[2] += c;
	ihash[3] += d;
	ihash[4] += e;
	ihash[5] += f;
	ihash[6] += g;
	ihash[7] += h;
}

/* Read the next chunk of data and update the SHA256 computation */
function sha256_update(data, inputLen) {
	var i, index, curpos = 0;
	/* Compute number of bytes mod 64 */
	index = ((count[0] >> 3) & 0x3f);
	var remainder = (inputLen & 0x3f);

	/* Update number of bits */
	if ((count[0] += (inputLen << 3)) < (inputLen << 3)) count[1]++;
	count[1] += (inputLen >> 29);

	/* Transform as many times as possible */
	for (i = 0; i + 63 < inputLen; i += 64) {
		for (var j = index; j < 64; j++)
			buffer[j] = data.charCodeAt(curpos++);
		sha256_transform();
		index = 0;
	}

	/* Buffer remaining input */
	for (var j = 0; j < remainder; j++)
		buffer[j] = data.charCodeAt(curpos++);
}

/* Finish the computation by operations such as padding */
function sha256_final() {
	var index = ((count[0] >> 3) & 0x3f);
	buffer[index++] = 0x80;
	if (index <= 56) {
		for (var i = index; i < 56; i++)
			buffer[i] = 0;
	} else {
		for (var i = index; i < 64; i++)
			buffer[i] = 0;
		sha256_transform();
		for (var i = 0; i < 56; i++)
			buffer[i] = 0;
	}
	buffer[56] = (count[1] >>> 24) & 0xff;
	buffer[57] = (count[1] >>> 16) & 0xff;
	buffer[58] = (count[1] >>> 8) & 0xff;
	buffer[59] = count[1] & 0xff;
	buffer[60] = (count[0] >>> 24) & 0xff;
	buffer[61] = (count[0] >>> 16) & 0xff;
	buffer[62] = (count[0] >>> 8) & 0xff;
	buffer[63] = count[0] & 0xff;
	sha256_transform();
}

/* Split the internal hash values into an array of bytes */
function sha256_encode_bytes() {
	var j = 0;
	var output = new Array(32);
	for (var i = 0; i < 8; i++) {
		output[j++] = ((ihash[i] >>> 24) & 0xff);
		output[j++] = ((ihash[i] >>> 16) & 0xff);
		output[j++] = ((ihash[i] >>> 8) & 0xff);
		output[j++] = (ihash[i] & 0xff);
	}
	return output;
}

/* Get the internal hash as a hex string */
function sha256_encode_hex() {
	var output = new String();
	for (var i = 0; i < 8; i++) {
		for (var j = 28; j >= 0; j -= 4)
			output += sha256_hex_digits.charAt((ihash[i] >>> j) & 0x0f);
	}
	return output;
}

/* Main function: returns a hex string representing the SHA256 value of the 
given data */
function sha256_Encrypt(data) {
	sha256_init();
	sha256_update(data, data.length);
	sha256_final();
	return sha256_encode_hex();
}

// md5
function MD5Encrypt(a) { function b(a, b) { return a << b | a >>> 32 - b } function c(a, b) { var c, d, e, f, g; return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f } function d(a, b, c) { return a & b | ~a & c } function e(a, b, c) { return a & c | b & ~c } function f(a, b, c) { return a ^ b ^ c } function g(a, b, c) { return b ^ (a | ~c) } function h(a, e, f, g, h, i, j) { return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e) } function i(a, d, f, g, h, i, j) { return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d) } function j(a, d, e, g, h, i, j) { return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d) } function k(a, d, e, f, h, i, j) { return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d) } function l(a) { for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;)b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++; return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g } function m(a) { var b, c, d = "", e = ""; for (c = 0; 3 >= c; c++)b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2); return d } function n(a) { a = a.replace(/\r\n/g, "\n"); for (var b = "", c = 0; c < a.length; c++) { var d = a.charCodeAt(c); 128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128)) } return b } var o, p, q, r, s, t, u, v, w, x = [], y = 7, z = 12, A = 17, B = 22, C = 5, D = 9, E = 14, F = 20, G = 4, H = 11, I = 16, J = 23, K = 6, L = 10, M = 15, N = 21; for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16)p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s); var O = m(t) + m(u) + m(v) + m(w); return O.toLowerCase() }


// 完整 Env
function Env(t, e) {
	"undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

	class s {
		constructor(t) {
			this.env = t
		}

		send(t, e = "GET") {
			t = "string" == typeof t ? { url: t } : t;
			let s = this.get;
			return "POST" === e && (s = this.post), new Promise((e, i) => {
				s.call(this, t, (t, s, r) => {
					t ? i(t) : e(s)
				})
			})
		}

		get(t) {
			return this.send.call(this.env, t)
		}

		post(t) {
			return this.send.call(this.env, t, "POST")
		}
	}

	return new class {
		constructor(t, e) {
			this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}  开始!`)
		}

		isNode() {
			return "undefined" != typeof module && !!module.exports
		}

		isQuanX() {
			return "undefined" != typeof $task
		}

		isSurge() {
			return "undefined" != typeof $httpClient && "undefined" == typeof $loon
		}

		isLoon() {
			return "undefined" != typeof $loon
		}

		toObj(t, e = null) {
			try {
				return JSON.parse(t)
			} catch {
				return e
			}
		}

		toStr(t, e = null) {
			try {
				return JSON.stringify(t)
			} catch {
				return e
			}
		}

		getjson(t, e) {
			let s = e;
			const i = this.getdata(t);
			if (i) try {
				s = JSON.parse(this.getdata(t))
			} catch {
			}
			return s
		}

		setjson(t, e) {
			try {
				return this.setdata(JSON.stringify(t), e)
			} catch {
				return !1
			}
		}

		getScript(t) {
			return new Promise(e => {
				this.get({ url: t }, (t, s, i) => e(i))
			})
		}

		runScript(t, e) {
			return new Promise(s => {
				let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
				i = i ? i.replace(/\n/g, "").trim() : i;
				let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
				r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
				const [o, h] = i.split("@"), n = {
					url: `http://${h}/v1/scripting/evaluate`,
					body: { script_text: t, mock_type: "cron", timeout: r },
					headers: { "X-Key": o, Accept: "*/*" }
				};
				this.post(n, (t, e, i) => s(i))
			}).catch(t => this.logErr(t))
		}

		loaddata() {
			if (!this.isNode()) return {};
			{
				this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
				const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
					s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
				if (!s && !i) return {};
				{
					const i = s ? t : e;
					try {
						return JSON.parse(this.fs.readFileSync(i))
					} catch (t) {
						return {}
					}
				}
			}
		}

		writedata() {
			if (this.isNode()) {
				this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
				const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
					s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
				s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
			}
		}

		lodash_get(t, e, s) {
			const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
			let r = t;
			for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
			return r
		}

		lodash_set(t, e, s) {
			return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
		}

		getdata(t) {
			let e = this.getval(t);
			if (/^@/.test(t)) {
				const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
				if (r) try {
					const t = JSON.parse(r);
					e = t ? this.lodash_get(t, i, "") : e
				} catch (t) {
					e = ""
				}
			}
			return e
		}

		setdata(t, e) {
			let s = !1;
			if (/^@/.test(e)) {
				const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
					h = i ? "null" === o ? null : o || "{}" : "{}";
				try {
					const e = JSON.parse(h);
					this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
				} catch (e) {
					const o = {};
					this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
				}
			} else s = this.setval(t, e);
			return s
		}

		getval(t) {
			return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
		}

		setval(t, e) {
			return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
		}

		initGotEnv(t) {
			this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
		}

		get(t, e = (() => {
		})) {
			t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => {
				!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
			})) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => {
				const { statusCode: s, statusCode: i, headers: r, body: o } = t;
				e(null, { status: s, statusCode: i, headers: r, body: o }, o)
			}, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
				try {
					if (t.headers["set-cookie"]) {
						const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
						s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
					}
				} catch (t) {
					this.logErr(t)
				}
			}).then(t => {
				const { statusCode: s, statusCode: i, headers: r, body: o } = t;
				e(null, { status: s, statusCode: i, headers: r, body: o }, o)
			}, t => {
				const { message: s, response: i } = t;
				e(s, i, i && i.body)
			}))
		}

		post(t, e = (() => {
		})) {
			if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => {
				!t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
			}); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => {
				const { statusCode: s, statusCode: i, headers: r, body: o } = t;
				e(null, { status: s, statusCode: i, headers: r, body: o }, o)
			}, t => e(t)); else if (this.isNode()) {
				this.initGotEnv(t);
				const { url: s, ...i } = t;
				this.got.post(s, i).then(t => {
					const { statusCode: s, statusCode: i, headers: r, body: o } = t;
					e(null, { status: s, statusCode: i, headers: r, body: o }, o)
				}, t => {
					const { message: s, response: i } = t;
					e(s, i, i && i.body)
				})
			}
		}

		time(t, e = null) {
			const s = e ? new Date(e) : new Date;
			let i = {
				"M+": s.getMonth() + 1,
				"d+": s.getDate(),
				"H+": s.getHours(),
				"m+": s.getMinutes(),
				"s+": s.getSeconds(),
				"q+": Math.floor((s.getMonth() + 3) / 3),
				S: s.getMilliseconds()
			};
			/(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
			for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
			return t
		}

		msg(e = t, s = "", i = "", r) {
			const o = t => {
				if (!t) return t;
				if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0;
				if ("object" == typeof t) {
					if (this.isLoon()) {
						let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
						return { openUrl: e, mediaUrl: s }
					}
					if (this.isQuanX()) {
						let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
						return { "open-url": e, "media-url": s }
					}
					if (this.isSurge()) {
						let e = t.url || t.openUrl || t["open-url"];
						return { url: e }
					}
				}
			};
			if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
				let t = ["", "==============📣系统通知📣=============="];
				t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
			}
		}

		log(...t) {
			t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
		}

		logErr(t, e) {
			const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
			s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
		}

		wait(t) {
			return new Promise(e => setTimeout(e, t))
		}

		done(t = {}) {
			const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
			this.log("", `🔔${this.name}  结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
		}
	}(t, e)
}

     //#endregion

