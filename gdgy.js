/**
 * 高德地图APP    我的 -- 小德果园
 * 抓url   https://sns.amap.com/   下的cookie 复制全部放变量里(仅支持青龙)
 * cron   自己定 每天一次就够了
 * 脚本地址 https://raw.githubusercontent.com/kristallsi/JavaScript/main/gdgy.js
 * ========= 青龙--配置文件 =========
 * 变量格式: export gdgy_Cookie='cookie@cookie'  多个账号用 换行 或 @分割
 * tg群 https://t.me/+JHc9YrZT1Iw0NDFl
 * 频道 https://t.me/+l-JQvXtZeZU3MTk1
 */
///////////////////////////////////////////////////////////////////
let VersionCheck = "1.0.1"
let Change = "增加打卡及一键收取任务水滴"
let thank = `\n 感谢 群友投稿 \n`
const $ = new Env("高德果园");
///////////////////////////////////////////////////////////////////
const notify = $.isNode() ? require("./sendNotify") : "";
const Notify = 1 		//0为关闭通知,1为打开通知,默认为1
const debug = 0			//0为关闭调试,1为打开调试,默认为0
///////////////////////////////////////////////////////////////////
var _0xodM='jsjiami.com.v6',_0xodM_=['‮_0xodM'],_0x5b83=[_0xodM,'TyEpdw==','w7bDn8OgwrQvXw==','MMKWM8KB','UE/DmWhz','f+a1seaxkOWkh+WJtO++vumjo+WNneaKn+WIuQ==','w6Jdw79Ewq8=','w4nls4forpLphZvlp5Xmta3msas=','wpPCksO1TcOi','RR7Dj8OUwpg=','w4Qxw6A2','wrjDhcO8w64gSMKHw6wIFT9/JcKow68MIDhNI8OEw78xw6HDlmTCpMOlEMOyw5PDjH4aFHVVw4bDk2PCoMOAwoDDmFLDvz7DhUhWw7nDg0fDkU3Dq8OTwprDgzHDkcKWwrTDugoLw5vCplrCrMKVw7wew6HCkDw6w5jCusKkY8OKwoXDncOIPXXCmcKTw6zCvjppwqzDgMKiI0TDvhMPw4opUgwswqs1woUBWcKLJcOKwpg9I8OOw6bCvW3CqsKWw4ELw4vCllrDq1bCtH3CtzPDkcOXworDvUTDlQHDn3LCkcKPRMKwehTClcKVwoBCw4LCpMKXw5bCkcOyKzRAwpvDvcOhwpVcE0spVBIjVwtgZB/CuRrCshszUMOowpQIwo0BGDxEwrDCqlYYDsKhwr3CicKkAcKvwqTChEbCqmIcw6dxPMKOwpliwqJ1wp7CphnCrz4dFivCusKDw6vClcO2A8O1LsOVwrjCmcKIwoVbw6vCq8KVwqvDhjPCvhopU8KuwpjCmcK9w44EGxXDnsK5JMKlwpNHHcKswq7DsTsZw5bDusO8FhnCjDXDoMKKFMKFMcKnaSXCisKOQnIvWGDDtDoFw4lnT8Knw75wdHjDoxnDhkHCn8Ocw4V8wrdfJ0ojARnDgsKoLR4XPB7DlkLDpMK/w6dlw4lVVyXDtMODwobDkBfCojvDq8O7YHVowr1zw6jDssKrURbCkX4WwqNPw41WXMKEUsOEwqgRdzXDo8OPTMKdwrfCtErCm8K/w4TCisKgw5nDnzFdwrBFJmQgA3Fbwr5Kw513w7Fwwr9SWETDssK8fMOYBcKfUMK9C0p/w5YGMDjCnD1rDR7CtlvCrz9jw7E+DTDDq8K5wr3CgsOIWcO5R8OHw6nCtcKqw7vCoMOeNDLDnF9kflFgw4fDnRoDFTDDvsK/wpEow5dgUxvDiDtnJMOjw4jDsjMFw705ecOnDl5xwobDpsKUwoc2VMKhAsOFIDHDs8K0wp0YwpzCiMO7eWzCsVAfw5vDu3/Cm37CmMK2wrQnN8OlKsKgw6XCnlFWwqDCi8OMDcOxwpprw4Mzw6tLwrg1wrQawqnCtwPCrsOUw7YRwohNIcO0LsOIAX/DgDNmwp7CiMKDeSEofMK0w4PDvMKfw77CqcOMwo/DqsOvScK8SwcaNhfChMOqwrjCscKgYA7Di3Z2IcOywrHDpcOwwrDCrF3DssKHZzZBLsOzw7HCg37CuMKMwojDqWp0wrpCSMOpw7Ryw5N5ew/DqErDnjVVUgfCtMOowrE1w49nwqbClsK5w4PCsUlwwqDDsVrDl0sZBcOmGTPDtMKhEMKNDsOzZiNXwpXDoR7DjsK5wrfCpirCmhTCvD3Csi1nwrQ/OXQxw7AROMOIF8Olw5HDiR5LTjHCg3/CrcOcbEgyw5VRCcOaFEjCq3zClcK5woM3PMOvJX3CksKRO8O1w5LDp0vCosKGMMOLEcK5w5/Csxkww5zDtRthwpXCs1hyTsO6w5M9wp9vwqJLw5jDqS5Hwq4tXxctCsK3UcOEwq0uw6RlfgfCo1rCgXFTwrAewo15wofChcOtw4/DncKDPUzDmcOHdcKmwrwRI8KvOsO5R0TCiMKdw5fChcKZY8OBU1zDpcOSXm4lAsKxw7XCrcKdw4HDvkXCjsKGw7bDt8KIwrszw6hrw5HCtEsCwrJXHlUmwpIcVl1Wf8ONFcKdwrJww6rCnMKqST1rwrkcW8KJwrdow7nDu8O5w5fCnsOewqvCmDjDn8O5wrzCgMKBw7vCiTh8MSPCkRvDvxDCqiPClMK5PQQHwqvCtWpyZzrDicK7DsOKw752w7Y4axobG8OqwoU4w5DDsgZnw4XCsg5kwq5fw5fClzUhMBHDlMO2XkbDq010wqDDgHgOXMOEw7LDiQc3w4TCqcOvwoLCsDhqwpXDmcObbF9BwpJ+HnxTMXTCnEsHDsKTw7ZVwqLClzbCsXIgf8Orwph7woUlw6dIWcKww7lKwpHDsUJewpvCrAjDolzClMONS2Z+wq/CtsOrDMKSw6UTwoZcP8Ogwp0Bwqggw7/ClhpZw6YUAApiX2IvwpDCgEUIwrzDkEzCusKQesKTw4TDtAYzwpkgIsOlEsOsUnhIME/DtMKowplewpNkHMKCw6UXw5vDniR/w61ZwoPCqMKXw7FUXMOzw7wpwo4jHcKsw7zDtMKSOW3Do2UFccKrw7dIEsOQw5bDssKRwqPCiTdyw6TDgRY2FsKpwqfCvcKaHcOPwo9Pw4xGcMKmw43Cq8ODw7rDiMKIw6/Dq1ldwp43TlnDi8KLPHoNw4rDhsKJw5HCkho/ZSTCmsOwPVFsDcKmTx7CrQM8EiTDlcKvw6g/VcKVwoMlwoXDv8OKw57DoCzCqcOaw7fCjsOOHRpCwpx7KzfDssKdwonDscOVw4zDlSFXwqw=','USccwpvDjw==','Pi06bw==','CMKaRMO+w78=','aeevleWIhu+9p+iMruW+iA==','w53DiSfCuQ==','w4Zvw7XCl8KNZQ==','wpXDqFsv','KOeuoeWLg++9rOW3oee4qemjneWMiOi/guS6jVbkubznlrbphKflpLjlr5fmibI=','wqTCvCnDnsKh','wrbDtMKAbsOj','w73Ct8ODD00=','I8KBWsObw5Q=','w57DkjrCqA==','enPDkHVj','56yj5Ymy6aOY5rC+','wqDCtSPDsw==','bMKnW8OcVw==','w6w/w4wlwos=','fy3Ds8Okw4g=','asO5wqg4woEO','w4TovYPnuJTnrZzliqLvvqHoj6Plv50=','GTdeJcKbSw==','bQnCnsK9','aeevleWIhumju+ayre+8heW3qee6iumhlOWOkui9vuS6kcK85Lm555Si6YSY5aSB5a6M5omj','GzVVNQ==','HsKjQsOnw6I=','LF4JOMKc','w4Tnr6Pli4npoqTmsqbvvqHmnb7nmLHlvag=','AgBoPcK6','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','aRzCk8Ko','bi0/Qlg=','wo8zQ8KZZA==','BXR0WMO7','wofDnMKCw6fCvA==','EX8tGMK/','TOi8see4neevueWIne+/n+iMquW8iA==','HDtFMQ==','ZwYawo/Dqwc=','O8Orwp/Drw==','Bei/gue4u+eun+WKuO+9iuWmrei0qsOZ5Yy16IKS5YyT6YaX5aen5pS2','Q057B1g=','IGvCpcOOw6kzw6hmwo/CsxvCsnfCrhfCjHoJw5PDpCnCpsObwrBaw4LDuGTDusKMLsKoXgzDk8Onw5xqw5nDnRPDmDPCiMKww47DtVbDnMO9wqhmAsO2cQxEHTHCoMOewovDg8OaTxzCmcKicEPDm8Oxc8KwbgbCk8OYwqrDicOOVUvChV7Dr8KnfTlWw4LDu8Ocw7PCvF1UwqnDiBLCqkRRw7M/w5XDtR/CrxZEw4zDkcOIwrrCon3Cl2pqw59fw70+XsKmwoDCin0Xw43DiMKvwr7DviNfw4hjwpbCqXU4aRkPw4TDvMOjw7MhwprDt8KkwqF7wpQbWsOiFVDCrcOIecKTBiAIw6TDtRTDvCnCtsKLw53DqiE8Nnwcw6nDu3PDiSE3w7PDusOnwqTCrMOpwrlTdMOLUxXCisKnZsOTw6pLa8Kkw6sOwqbCnsKfaMKzX3TCjixJR8OxZ8O7w6/DmcOMw5UkwrvDtMKZKjfDulfDncKRw6Z8FsKIK0PDqcOUGsKkwrx+WMKJwrnCjQTCq8Kgwo8bw7vCjcKQTMO1w7PCvjnDq8K6GcKqwpFawo7ClU3Dln0IdgfDuyNRScKjwpTCgXAdw4MKw5bDksOmwrfColzDjCXDnMOYASHDt8Oxw5gMwqcMVynCnAnDqsO8wqg3BnjCpktpwqfCq3PDt00Ow4TCpmdywqwIwoTClEhfdMOOw6/Dn01/QRTCmRgswpJWXBXCq2VdZcODwrrDgMKkwoUUw53DlMKMK8O7w7fCtHNmUsOVOsOsw7p/AcO7wrwda8O4wqstecO2QcKuPk7CjcK7UMOIAjdwCxZGwrTCgMKmwqxMTsOvX8K9acK/wrRmwpLCvSpww5krTMKbWmvCkMOra8OLwozDoglJw4dcw7Y4AXsrw4XCmXzDmsO+wp4vw7oWD8KQwrRLGcONw7rDqhPDqzrCm3swwp7ClihOwqvClCYMwpVgUsO/w7NnFgrDgsOvw47CoMOrwok5OSLDuMKyZcKSw7rCun3Dg0I9UX3DtcKNGcOmQMOTwqRuw7zDkRHDisK9wo7Dn8O3w5TDhCBdZWQiw7hKcF3CsQLCnRoEYEbDtsKowrrDhFA4wpI4S8OswpnDl8K3OMO7wrNvWjPCu8ObwrVxwrDCmSkJwp/DnMOQw6TClEvDv8KZJMOdwrlddFs7YFbDqsODGsK3w659wpxAwr/CnMOEDMKcw7gUwqvCucKCFRMNdgdpMcOtwqtcw6XCg0NAN8KXw4BQwrDDrsOnwpvCp8O0HsK5MsK+UXJoMyE2woXDpcKlbMO4YMKHwpbDhsOfwotUIycJwrgaw78wwpg2w5zChHhMX2fCmsKAE8O9X8OWwrdcwq08SzxsTEXCgRvDjsKhKHsqW8Okw5XChmnClMO1woHCkcK5DsORw7gNwpXCklg/wrN2w6geGsK8L8O8w7gbwqJ+XMOyaMOuDkgzwq/DgcKFwqZZw7DCrCrCmsO1w4VLMcK/w6FDBMOFMsO8bmPCj8KWwrAKKsKCwp7CjQXCo8OGXgEaw4TDrlxsSTfCmQZRaMKcW1B1WjQFTsOQwqHChMOmwp3DqMObJMK8LsKpwpbCmCDDrx4Uwox4w4nCgjLCjsOUwrzDqX/DqMKsLgTDoi5ow5nDoMOcFcOGwoQtwr1GJTE7TizClXnCkl7Ds3nCq8KeSBQIUsONHH3DgcKDUiR1wqrDgcKPPh/DrRwvwrx+NsOIwqnCjVjDqFXDoD0dKDQxSmIcUMKOw6M/bMKFZiDClCrDmwPDlDxgEwHDlcO8wpvCncK/wpPCqDXCtMOFKFRuw6E0w4BKw59wwrnClzAAJGoSw744wqZpwqlrA3LDoCrClMOjSU3CucKUwr8kwrtVY8Kgw4/DkWNTUmYfwrFzXsK1w4BrEShgw77CgBrDgUDDp8KBIsKEacOswrTDnsOaw5vDsGBMwrALZSvCqMOkwqE+V2o6w5EnTlLDmMK3w7VFBQ/ClcOYE8KhZMKCw7heJgDCvMK9wpHCqnnCkShCw6bDvcO1IMK5wqXDhsOgw5lJZcK1w7jDjsOSUR/CnAJMVCjCusKwf8OpZ8OkWHp/wp3DqE/CmBHDjsOHeWkeMMOLwrPDjMK/w7rCqsKxwqbCucOSw6U5egtGbnfDmcKlN1NBFsOMPnVUwpxMB8OMLhsWMsOrw6EKKgl6wppCw4Zaw6fCksKSwpnCjMKIw4/Dvhx+MsKmU04owp1vV8KOwrTCjcOgUMKQwqN9cMKHLS7Cqm/CnsKDw50DLsKHw6nCoMKNTls9w5vDvMOYw6fDkQ==','AsKowr0Gwq0=','dUrClVMA','OsK1w7E+w4Q=','w7tASRDCig==','wqvCuxTDpcKW','V+mjhOaxqu+8kOiOuOW+tw==','RX5CLg==','w4Akw60j','QnXDrUla','wrnpobDmsLfvvbjlt7TnuobpoZrljpTovqHkuo0I5LmB55WU6YSy5aeR5ayA5om4','Uumgguazj+++kOaeleebo+W+vA==','w7TCgMOUNlA=','W2HDmkVR','e0jCl8KOw4U=','Z2jCosKRw7tqwrMgwp7CsxvDpTTCvxbCmHxDw5vDl2HCr8OdwqBPw5/DrTnCsMKdKsK2Bg7DpcOkw5Vrw57Dml/DlC/DlsKYw4rDiWrDuMOQw6dxBsOye1VwNjfCgMKMwo3CmcOHcVTDtsOxRE3DmcOeOcKdKwXDsMOTwqzDlMO3Fw==','LEnCkw==','wpHDoks=','N8KFwrnDkl4=','w40ow58Owr4=','WwnDr8O0wqw=','F8K7wqgowpE=','FsKNwqnDlUA=','w5/Ct8ORPnU=','w4ttw73Cp8KRYw==','f+aJpeWMhei0s+azsea5kO+9v+W1uee5gOaLteWOoei+jeS7kMOh5LiP55a/6YWf5aaZ5ayT5oi+','wpzCjsOi','cMKjAA==','w5vDhzfCoQ==','w5/CmWQndDs=','E8K0SMOM','w6TDpcOjwqwA','w4Nsw4xnwoUkVVBDfQY=','ZMKoBwjCtMOwwp3CmcONTDvCvA==','bQPDnsO5w7Q9W10=','N35Gdg==','TwHDscOcwr4=','fSjCkMKcw6I=','wrbCq8OIb8OW','w6fCtMOyMFI=','BfCYkJrDgeaZvOaXoOWEmeWutsODw7o=','cmcMbcOIAndEOcKJwpbDu+WHheaJluWKpSA=','VHLDm3piwqg=','UOS4h+i3n+WMtsKTKEBNw5VgwqnDqsOCHlI=','cz/DrsOcwpg=','44ORw4UIFkPCoeOCsTPov6Pmm53kvLDnmb/ota3ljoLmlLnnuJ/ChcOIVQ==','OFogNMK2','FsKewpkzwog=','HEjCl8Kmw4d9','C8KzwpzDimHChMK8wqRTw5DlvILlp5rjgKnnra/DnQ==','w51LwpHDq8Kn','OcK0acO7w5I=','44CfeMKzwoPDvTfjgo0v6Lyg5pu15LyP56+neA==','woPota3ljb7kvqfmgqjCrcKYwog=','bQfCjsK7w7k=','UCDDvMOdwr/CtQ==','BsOVwo91W8KRNA==','w4ckw6cj','wrTCnSPDjMKt','KsKAwpc=','MirCiCArw70fwpNQW8KqEsOe5b+t5aWT56+P5Yurw7/DlcKBPRPCgMK9AVleYcOBw5E=','THwZdTE=','JklKacOr','w48kw64=','wqQGw4DCv8OuHV8cwrdWwqMyIuW8oeWnp+aKl+WPpgNNwpXDqMOTRmbDj0Rcw69kKg==','wrTDrFEHKg==','S8OvGn/CpQ==','V2/DrEd/','w5PCh8KBw5UI','RTk6ZVY=','wp7mlLPplYDkuZDlr6PDvOi2o+i/ow==','w5Muw78fwpA=','E8OOQCTDjg==','w6fCoMOEOk0=','w7fmlbzplL7kuoDlrKtf6LW16Ly9','VVvDrUx6','w7fovZTnuKfnr7Pli6LvvaXltbTnuLXpobHljI/ovZfku6h25Lmh55aG6Yan5aWt5a2X5oi4','WMKMVw==','D0rCl8K0wro6SU8ywpUYw6zCueW/v+Wlmea3v+azscKnFsOEw4AZw57DtAYmWsKQPio=','w5DCh8OTGl0=','eDXCkcK+w6c=','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','w4AJw6oUwoA=','5omY5Y+t6La05rK35rqa','w43CrMKdw5cX','EsO4cyXDrw==','wp7DpcKuw6g=','w4PCt8OoK0s=','w4Rtw77Chw==','LBEnf2E=','w4hXQSLChw==','w4sfw5wMwqY=','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','HcO9wqHDhMOR','5Lmd6ZWs5pWo5Y+c','w67DuyTCl10=','GcK1wrgu','ZsOYwrUlwoM=','TwjClMK0w4s=','w4wyw7gMwqk=','MuetqeWKhemim+awou+/muiOleW8uQ==','HsK7wqgq','wqDDjAIBWMKy','H8K1wrQgwq4=','C+S6numWn+aXkeWOmu++s+aKgeWIlg==','HTlXPcKH','e+S7m+mUguaWg+WNgO+9l+W2j+e4hemgtuWMhui9kOS4ucKa5Lmg55aa6Yab5aeU5a275ou3','XcKzUcOZQw==','w47Cp8Kqw5wX','YwQdwpHDkg==','w4vpoKfmsZnvva7mnJznmr3lv7U=','EkwNIQ==','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','w7dBw6pawos=','wpHDn24aHA==','w5LDhhTCi28=','egvCg8Kew78=','DQNBKsK4','QTbDucOgw74=','w4nmtp3msbPvvozms6zph6XkuZLotZw=','w60kw7gBwog=','fm3CtMKiw5A=','XFs6djI=','Wea2vuaxo++/vuKaoivmrL7kupvliJvovr7lmKDmloTmsIXop7/noIHDuuishuaJmuWIreaIlea0rOaxtemFiOislue8ouS7gOadgeWkhsOf6Ieq5p+16L6o6KGf5Lu25q6r5Y2F5YyP5a+M5oq+5rWW5rCwTg==','w5DCtMOZG3E=','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','w4pVZyLCtA==','fCPCqMKQw54=','5rSX5rCu5aW35Yq+','WcKRA1zCow==','W8KOwqc6Rg==','Pua2pOawhOWnnuWKi+++juW0tOe7rumjl+WOr+i+tuS5iMKo5LuD55WA6Yai5aSk5ayG5omG','w7zCs8OmJFM=','w5fCpcKow7sH','W3PDsE1V','w6pKwpDDhMK4','e3LCtH4+','cua0neawheWkhuWJhO+8peWlu+i1nCTljZvogZbljIPphbvlt5rovZLmnJ8=','w7vpoKTmspXvv7/ojqnlvbU=','jZsjhiwRyIMCyrfyamhi.yHcom.v6=='];if(function(_0x38e6aa,_0x2cb27c,_0x48b9c2){function _0x2c8a04(_0x51dec0,_0x58431c,_0x4fbbcb,_0x57f56f,_0x153255,_0x1dc028){_0x58431c=_0x58431c>>0x8,_0x153255='po';var _0x32b538='shift',_0xa37d84='push',_0x1dc028='‮';if(_0x58431c<_0x51dec0){while(--_0x51dec0){_0x57f56f=_0x38e6aa[_0x32b538]();if(_0x58431c===_0x51dec0&&_0x1dc028==='‮'&&_0x1dc028['length']===0x1){_0x58431c=_0x57f56f,_0x4fbbcb=_0x38e6aa[_0x153255+'p']();}else if(_0x58431c&&_0x4fbbcb['replace'](/[ZhwRyIMCyrfyhyH=]/g,'')===_0x58431c){_0x38e6aa[_0xa37d84](_0x57f56f);}}_0x38e6aa[_0xa37d84](_0x38e6aa[_0x32b538]());}return 0xf5f36;};return _0x2c8a04(++_0x2cb27c,_0x48b9c2)>>_0x2cb27c^_0x48b9c2;}(_0x5b83,0x115,0x11500),_0x5b83){_0xodM_=_0x5b83['length']^0x115;};function _0x53c4(_0x24621b,_0x16db23){_0x24621b=~~'0x'['concat'](_0x24621b['slice'](0x1));var _0x520153=_0x5b83[_0x24621b];if(_0x53c4['VxPSrc']===undefined){(function(){var _0x3499ec=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x33da8a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3499ec['atob']||(_0x3499ec['atob']=function(_0x183dfb){var _0x52136b=String(_0x183dfb)['replace'](/=+$/,'');for(var _0x208753=0x0,_0x52e5be,_0x125093,_0x266190=0x0,_0x1524e1='';_0x125093=_0x52136b['charAt'](_0x266190++);~_0x125093&&(_0x52e5be=_0x208753%0x4?_0x52e5be*0x40+_0x125093:_0x125093,_0x208753++%0x4)?_0x1524e1+=String['fromCharCode'](0xff&_0x52e5be>>(-0x2*_0x208753&0x6)):0x0){_0x125093=_0x33da8a['indexOf'](_0x125093);}return _0x1524e1;});}());function _0x27df1f(_0x3db06e,_0x16db23){var _0x4907f8=[],_0xea1c3d=0x0,_0x585863,_0x132336='',_0x1597b5='';_0x3db06e=atob(_0x3db06e);for(var _0x3d62f4=0x0,_0x196c12=_0x3db06e['length'];_0x3d62f4<_0x196c12;_0x3d62f4++){_0x1597b5+='%'+('00'+_0x3db06e['charCodeAt'](_0x3d62f4)['toString'](0x10))['slice'](-0x2);}_0x3db06e=decodeURIComponent(_0x1597b5);for(var _0x4d2e45=0x0;_0x4d2e45<0x100;_0x4d2e45++){_0x4907f8[_0x4d2e45]=_0x4d2e45;}for(_0x4d2e45=0x0;_0x4d2e45<0x100;_0x4d2e45++){_0xea1c3d=(_0xea1c3d+_0x4907f8[_0x4d2e45]+_0x16db23['charCodeAt'](_0x4d2e45%_0x16db23['length']))%0x100;_0x585863=_0x4907f8[_0x4d2e45];_0x4907f8[_0x4d2e45]=_0x4907f8[_0xea1c3d];_0x4907f8[_0xea1c3d]=_0x585863;}_0x4d2e45=0x0;_0xea1c3d=0x0;for(var _0xa017ec=0x0;_0xa017ec<_0x3db06e['length'];_0xa017ec++){_0x4d2e45=(_0x4d2e45+0x1)%0x100;_0xea1c3d=(_0xea1c3d+_0x4907f8[_0x4d2e45])%0x100;_0x585863=_0x4907f8[_0x4d2e45];_0x4907f8[_0x4d2e45]=_0x4907f8[_0xea1c3d];_0x4907f8[_0xea1c3d]=_0x585863;_0x132336+=String['fromCharCode'](_0x3db06e['charCodeAt'](_0xa017ec)^_0x4907f8[(_0x4907f8[_0x4d2e45]+_0x4907f8[_0xea1c3d])%0x100]);}return _0x132336;}_0x53c4['bBTgQY']=_0x27df1f;_0x53c4['BtlSIi']={};_0x53c4['VxPSrc']=!![];}var _0x30a1a8=_0x53c4['BtlSIi'][_0x24621b];if(_0x30a1a8===undefined){if(_0x53c4['SYcMcW']===undefined){_0x53c4['SYcMcW']=!![];}_0x520153=_0x53c4['bBTgQY'](_0x520153,_0x16db23);_0x53c4['BtlSIi'][_0x24621b]=_0x520153;}else{_0x520153=_0x30a1a8;}return _0x520153;};let ckStr=process['env'][_0x53c4('‮0','*L*U')];let msg='';let ck='';let host=_0x53c4('‮1','DAuA');let hostname=_0x53c4('‮2','Sq85')+host;let ck_status='';async function tips(_0x46bb03){var _0x2daf62={'sNjDs':function(_0x65b082,_0x3844d5){return _0x65b082(_0x3844d5);},'wLjsv':_0x53c4('‮3','qjk7'),'sqFmH':function(_0x4d0a45,_0x36b0f5){return _0x4d0a45(_0x36b0f5);},'OpuDU':function(_0x199600,_0x37bc04){return _0x199600(_0x37bc04);}};let _0x5c8f00=await _0x2daf62[_0x53c4('‮4','!0n$')](Version_Check,_0x2daf62['wLjsv']);let _0x57662a=await _0x2daf62[_0x53c4('‮5','h0*g')](Version_Check1,_0x2daf62[_0x53c4('‫6','M!07')]);let _0x17043f='\x0a📌\x20本地脚本:\x20V\x201.0.1\x20\x20远程仓库脚本:\x20V\x20'+_0x5c8f00;_0x2daf62[_0x53c4('‫7','RaIz')](DoubleLog,_0x17043f+_0x53c4('‫8','eovY')+_0x57662a);DoubleLog(_0x53c4('‮9','!3bl')+_0x46bb03[_0x53c4('‫a','9ckE')]+_0x53c4('‫b','l3VO'));_0x2daf62[_0x53c4('‮c','!0n$')](debugLog,_0x53c4('‮d','FKZ8')+_0x46bb03);}!(async()=>{var _0x1cc5c9={'GHocI':'gdgy_Cookie','MlDes':function(_0x2d13cd,_0x4a5c35){return _0x2d13cd(_0x4a5c35);},'lDExq':function(_0x51bc36,_0x1be12c){return _0x51bc36<_0x1be12c;},'JhMgM':function(_0x482ed2,_0x395607){return _0x482ed2+_0x395607;},'HoEND':function(_0x533100,_0x3fbd19){return _0x533100(_0x3fbd19);},'raKtU':function(_0x57229a){return _0x57229a();}};let _0x16b385=await getCks(ckStr,_0x1cc5c9['GHocI']);await _0x1cc5c9[_0x53c4('‫e','3oP2')](tips,_0x16b385);for(let _0x2dccc5=0x0;_0x1cc5c9[_0x53c4('‫f','QAWZ')](_0x2dccc5,_0x16b385[_0x53c4('‫10','l3VO')]);_0x2dccc5++){let _0xe7be82=_0x1cc5c9['JhMgM'](_0x2dccc5,0x1);DoubleLog(_0x53c4('‮11','21EK')+_0xe7be82+'\x20个账号】--------');ck=_0x16b385[_0x2dccc5][_0x53c4('‮12','&ms(')]('&');_0x1cc5c9[_0x53c4('‮13','&%14')](debugLog,_0x53c4('‫14','eovY')+_0xe7be82+_0x53c4('‮15','f(WO')+ck);await _0x1cc5c9['raKtU'](start);}await _0x1cc5c9['HoEND'](SendMsg,msg);})()[_0x53c4('‮16','h0*g')](_0x5b1be9=>$[_0x53c4('‮17','!0n$')](_0x5b1be9))[_0x53c4('‮18','n0FA')](()=>$[_0x53c4('‮19','f(WO')]());async function start(){var _0x1e2f30={'nygsb':function(_0x21e2e6,_0x22a5f2){return _0x21e2e6(_0x22a5f2);},'mLXQl':function(_0x4e5139,_0x397d8a){return _0x4e5139(_0x397d8a);},'vSkfv':function(_0x5cec5a){return _0x5cec5a();},'BknML':function(_0x4f77d7,_0x396daa){return _0x4f77d7>=_0x396daa;},'DLXZf':function(_0x2a0ce8,_0x5f2d37){return _0x2a0ce8<=_0x5f2d37;},'pevYW':_0x53c4('‮1a','S!rF'),'UDUdh':function(_0x44d23b,_0x1fa549){return _0x44d23b(_0x1fa549);},'bcBDx':function(_0x463579,_0x586d01){return _0x463579(_0x586d01);},'nqXwO':function(_0x4f5e47){return _0x4f5e47();}};console[_0x53c4('‫1b','YgEb')](_0x53c4('‫1c','9ckE'));await qd();await wait(0xa);await ls();await wait(0xa);await sign();await _0x1e2f30['mLXQl'](wait,0xa);await _0x1e2f30[_0x53c4('‫1d','bJ4L')](sign1);await wait(0xa);await _0x1e2f30[_0x53c4('‮1e','qjk7')](sq);console[_0x53c4('‫1f','f(WO')](_0x53c4('‫20','&ms('));n=_0x1e2f30[_0x53c4('‫1d','bJ4L')](local_hours);if(_0x1e2f30[_0x53c4('‮21','ay1d')](n,0xa)&&_0x1e2f30[_0x53c4('‮22','Gi]K')](n,0xe)){if(_0x53c4('‮23','9ckE')===_0x53c4('‫24','WAz1')){await wait(0x5);await dk();}else{_0x1e2f30[_0x53c4('‮25','M)wn')](DoubleLog,_0x53c4('‫26','RaIz'));}}else{if(_0x1e2f30[_0x53c4('‫27','f(WO')]===_0x1e2f30[_0x53c4('‮28','^%B6')]){_0x1e2f30[_0x53c4('‫29','S(5%')](DoubleLog,_0x53c4('‮2a','GfBF'));}else{_0x1e2f30[_0x53c4('‫2b','9ckE')](DoubleLog,_0x53c4('‫2c','GfBF'));}}console[_0x53c4('‫2d','*%1o')](_0x53c4('‮2e','Sq85'));await _0x1e2f30[_0x53c4('‮2f','S(5%')](wait,0xa);await _0x1e2f30[_0x53c4('‮30','h0*g')](js);await wait(0xa);await _0x1e2f30['nqXwO'](sign1);await _0x1e2f30['bcBDx'](wait,0xa);await _0x1e2f30['nqXwO'](ls1);}async function dk(){var _0x16a9b2={'cBcRG':function(_0x42d7c5,_0x3d27a6,_0x349013){return _0x42d7c5(_0x3d27a6,_0x349013);},'qSEXv':function(_0x1a41ca,_0x14ba35){return _0x1a41ca==_0x14ba35;},'qSyun':function(_0x1d2d55,_0x3adbd0){return _0x1d2d55(_0x3adbd0);}};let _0x26c7bf={'url':hostname+_0x53c4('‮31','iL2g'),'headers':{'Accept-Encoding':'gzip','Cookie':''+ck[0x0]}};let _0x1bfee4=await _0x16a9b2[_0x53c4('‮32','f(WO')](httpGet,_0x26c7bf,_0x53c4('‮33','xh!('));if(_0x16a9b2[_0x53c4('‫34','WAz1')](_0x1bfee4['code'],0x1)){DoubleLog('\x0a打卡赢水滴：打卡成功');}else if(_0x16a9b2[_0x53c4('‫35','^%B6')](_0x1bfee4[_0x53c4('‫36','GfBF')],0x3f4)){_0x16a9b2[_0x53c4('‫37','S(5%')](DoubleLog,'\x0a打卡赢水滴：已经打卡过了\x20不用重复完成');}else if(_0x1bfee4[_0x53c4('‫38','5Q0K')]==0xe){_0x16a9b2[_0x53c4('‫39','8a3$')](DoubleLog,'\x0a领水：未登录');}}async function sq(){var _0x1701c8={'oyqJn':function(_0x29d5ef,_0x4ae566){return _0x29d5ef(_0x4ae566);},'eohkW':function(_0x16d3bc,_0x52bdc7){return _0x16d3bc(_0x52bdc7);},'EyZNn':'gzip','WSwOg':function(_0x161045,_0x3def6b){return _0x161045==_0x3def6b;},'wusYl':function(_0x35be98,_0x5020cc){return _0x35be98===_0x5020cc;},'mLrhl':_0x53c4('‫3a','[q#z'),'AnnlZ':'lqkVJ','ecfmr':function(_0x1011ec,_0x432c69){return _0x1011ec==_0x432c69;},'Doihr':function(_0x1e5cf6,_0x29025a){return _0x1e5cf6===_0x29025a;},'MjukF':'KTIdT','iPaQy':function(_0x16c52d,_0x5b3dca){return _0x16c52d===_0x5b3dca;},'rXrSv':_0x53c4('‫3b','f(WO')};let _0x2bffa3={'url':hostname+_0x53c4('‫3c','iL2g'),'headers':{'Accept-Encoding':_0x1701c8[_0x53c4('‮3d','QnEN')],'Cookie':''+ck[0x0]}};let _0x10284e=await httpGet(_0x2bffa3,_0x53c4('‫3e','8a3$'));if(_0x1701c8[_0x53c4('‮3f','!#!R')](_0x10284e[_0x53c4('‮40','QAWZ')],0x1)){if(_0x1701c8['wusYl'](_0x1701c8[_0x53c4('‮41','B6&#')],_0x1701c8[_0x53c4('‮42','h0*g')])){_0x1701c8[_0x53c4('‮43','f(WO')](DoubleLog,_0x53c4('‫44','9ckE')+_0x10284e[_0x53c4('‮45','QAWZ')][_0x53c4('‫46','FKZ8')]);}else{_0x1701c8[_0x53c4('‫47','QAWZ')](DoubleLog,_0x53c4('‮48','21EK'));}}else if(_0x1701c8[_0x53c4('‮49','!3bl')](_0x10284e['code'],0x70)){if(_0x1701c8['Doihr'](_0x1701c8['MjukF'],_0x1701c8['MjukF'])){DoubleLog(_0x53c4('‮4a','&%14'));}else{DoubleLog('\x0a签到领水：已经领取过了\x20不用重复完成');}}else if(_0x10284e['code']==0xe){if(_0x1701c8[_0x53c4('‮4b','*%1o')](_0x1701c8['rXrSv'],_0x1701c8[_0x53c4('‮4c','WAz1')])){_0x1701c8[_0x53c4('‫4d','iL2g')](DoubleLog,_0x53c4('‮4e','FKZ8'));}else{_0x1701c8['eohkW'](DoubleLog,'\x0a浇水：水量不足');}}}async function js(){var _0x414fb3={'DASiy':function(_0x5d34d5,_0x36a4e8){return _0x5d34d5(_0x36a4e8);},'SIADQ':_0x53c4('‮4f','3oP2'),'gXQPz':function(_0x599069,_0x145e47,_0x15d27d){return _0x599069(_0x145e47,_0x15d27d);},'aShub':function(_0x720111,_0xee926a){return _0x720111==_0xee926a;},'knGSU':function(_0x1ffbdc,_0x13c874){return _0x1ffbdc!==_0x13c874;},'tmyFn':'uYpzM','NoqGO':function(_0x145934,_0x18453f){return _0x145934==_0x18453f;},'qqbCX':function(_0x42214,_0x36bee8){return _0x42214(_0x36bee8);},'ftHeu':function(_0x420e2c,_0x5e3e65){return _0x420e2c(_0x5e3e65);}};let _0x27bfcd={'url':hostname+_0x53c4('‮50','[q#z'),'headers':{'Accept-Encoding':_0x414fb3[_0x53c4('‫51','*L*U')],'Cookie':''+ck[0x0]}};let _0x535a69=await _0x414fb3[_0x53c4('‫52','ay1d')](httpGet,_0x27bfcd,'浇水');if(_0x414fb3['aShub'](_0x535a69['code'],0x6b)){if(_0x414fb3[_0x53c4('‫53','!#!R')](_0x414fb3[_0x53c4('‮54','h0*g')],_0x53c4('‮55','!3bl'))){_0x414fb3['DASiy'](resolve,VersionCheck);}else{_0x414fb3[_0x53c4('‫56','Sq85')](DoubleLog,_0x53c4('‫57','S!rF'));}}else if(_0x414fb3[_0x53c4('‮58','f(WO')](_0x535a69['code'],0x7)){_0x414fb3[_0x53c4('‫59','eovY')](DoubleLog,'\x0a浇水：失败\x20可能变量已过期');}{_0x414fb3[_0x53c4('‫5a','bJ4L')](DoubleLog,_0x53c4('‫5b','trKk'));}}async function ls1(){var _0x2cf929={'yQTLU':function(_0x2bfdf5,_0x13dd0b){return _0x2bfdf5(_0x13dd0b);},'GmcVZ':'gzip','rERHO':function(_0xb4dc8e,_0x2c0945,_0x5b3044){return _0xb4dc8e(_0x2c0945,_0x5b3044);},'NWwzv':function(_0x3e6f6e,_0x216241){return _0x3e6f6e==_0x216241;},'kZptf':function(_0x49d75e,_0x314220){return _0x49d75e===_0x314220;},'cdEPC':_0x53c4('‫5c','RaIz'),'zATdC':function(_0x222b2a,_0x1cd0a8){return _0x222b2a(_0x1cd0a8);},'FUTZu':function(_0x20e48c,_0x84ea5f){return _0x20e48c(_0x84ea5f);},'ZATEs':function(_0x39d975,_0x4199c4){return _0x39d975(_0x4199c4);},'RuWQB':function(_0x299e17){return _0x299e17();}};let _0x40d47c={'url':hostname+_0x53c4('‮5d','GfBF'),'headers':{'Accept-Encoding':_0x2cf929[_0x53c4('‮5e','[q#z')],'Cookie':''+ck[0x0]}};let _0x18ccb7=await _0x2cf929[_0x53c4('‮5f','h0*g')](httpGet,_0x40d47c,_0x53c4('‫60','qjk7'));if(_0x2cf929[_0x53c4('‮61','DAuA')](_0x18ccb7['code'],0x70)){_0x2cf929[_0x53c4('‮62','sh*q')](DoubleLog,_0x53c4('‮63','*%1o'));}else if(_0x2cf929[_0x53c4('‮64','S(5%')](_0x18ccb7['code'],0x2)){if(_0x2cf929[_0x53c4('‫65','WAz1')](_0x2cf929[_0x53c4('‮66','9ckE')],_0x53c4('‮67','&ms('))){_0x2cf929[_0x53c4('‫68','qt*t')](DoubleLog,_0x53c4('‫69','!3bl'));}else{DoubleLog(_0x53c4('‮6a','anVW')+_0x18ccb7[_0x53c4('‫6b','M)wn')][_0x53c4('‫6c','Ku7z')]);}}else if(_0x18ccb7[_0x53c4('‫6d','trKk')]==0x1){if('hXlue'===_0x53c4('‮6e','9ckE')){_0x2cf929['zATdC'](DoubleLog,_0x53c4('‫6f','3oP2'));_0x2cf929[_0x53c4('‫70','*L*U')](DoubleLog,_0x53c4('‫71','S!rF'));await _0x2cf929['ZATEs'](wait,0xa);await _0x2cf929[_0x53c4('‮72','M!07')](js);}else{_0x2cf929[_0x53c4('‮73','!0n$')](DoubleLog,'\x0a一键收取：已经领取过了\x20不用重复完成');}}}async function sign1(){var _0x34bb5a={'WLiaJ':_0x53c4('‮74','f(WO'),'aodVN':function(_0x9dc1ad,_0x503b19,_0x431eb5){return _0x9dc1ad(_0x503b19,_0x431eb5);},'yAhKi':function(_0x18fdd8,_0x1dc982){return _0x18fdd8(_0x1dc982);},'gfnHy':function(_0x34d150,_0x60b38a){return _0x34d150(_0x60b38a);}};let _0x4a5d38={'url':hostname+_0x53c4('‫75','Ku7z'),'headers':{'Accept-Encoding':_0x34bb5a[_0x53c4('‮76','iL2g')],'Cookie':''+ck[0x0]}};let _0x2cea13=await _0x34bb5a['aodVN'](httpGet,_0x4a5d38,'签到');if(_0x2cea13[_0x53c4('‫77','8a3$')]==0x1){_0x34bb5a[_0x53c4('‫78','&%14')](DoubleLog,_0x53c4('‮79','^%B6')+_0x2cea13[_0x53c4('‮7a','!#!R')][_0x53c4('‫7b','5Q0K')]);}else if(_0x2cea13[_0x53c4('‮7c','ay1d')]==0x70){_0x34bb5a['yAhKi'](DoubleLog,_0x53c4('‮7d','sh*q'));}else if(_0x2cea13[_0x53c4('‫6d','trKk')]==0xe){_0x34bb5a[_0x53c4('‫7e','S!rF')](DoubleLog,'\x0a签到：未登录');}}async function sign(){var _0x3f6c71={'ongab':function(_0x23a9f4,_0x3fe8a1){return _0x23a9f4(_0x3fe8a1);},'zZYmO':function(_0x54072b,_0x15e92c){return _0x54072b(_0x15e92c);},'Bdehu':function(_0x5b27df,_0x3c6941,_0x573280){return _0x5b27df(_0x3c6941,_0x573280);},'WLeTl':function(_0x4b0111,_0x4163de){return _0x4b0111==_0x4163de;},'XDkTm':function(_0x323278,_0x3d1294){return _0x323278===_0x3d1294;},'OtEcL':_0x53c4('‫7f','nUWg'),'fwyme':function(_0x10c755,_0xa11230){return _0x10c755==_0xa11230;},'oxnRt':_0x53c4('‫80','S(5%'),'YhmiY':_0x53c4('‫81','&%14')};let _0x2729e7={'url':hostname+'/ws/activity/xiaode_garden/task_rewards?ent=2&in=baJqniF2Txs2f%2Fyna5J3nVZKSmea%2B2TfISdsT24brk2cfEcI7W5QxdLs2TdLkiQaIp4ix3QPs26jSpjOexNMJhoOeOoo6uIPKh4u1n4Xb4lbBaMK%2FQQgfXaseIVk8yVZzang5gR%2FHTqHneguBFhOkVurXzklDH0Wge36NMRgv%2B1JSPURJwm%2BOWDYXu6F5Uz1bizn4nXMGDKrXK0OlUis53zbJ4fEE3MP0j3AiMhh4XRCXoM6Z3SHZztQ%2Bo5oy9ZAoYeXkh5f8xj4%2F3S5527tGstSNZPGGVxHraZV%2F2qfLyz7hnZBmhJdIkoEwF52fHauge1X27PMJRXHemcR4%2FUyJlZyfCvYPM5qichLhH%2FSZAomLvqfky%2B74706jB8P9pRn%2B1vBUO19zuK4xFg3PbAKFJLmR84rxXiNbzSzKVeR0QQgSWQ0Ww8ujCOTQeTy3FmDVYTvSeoz6K5B45k3GBjfCqQRoZNdnQg6saHQOO579ah49zjc8F35dYKIYv%2BFFn%2BR2jdqPCZmNKZ%2Bu16UYbnoDtwyR%2BZ1lClaUEm4jHAH8wflHd%2BVBqgygOxm9gr%2FaSPzKsp4%2FyYl8r%2FfP8S74R2vsyahAla3CceLrE6PPBeup7IAhxe2vAe0E0kxKcUYhgp3z8Y7UCaVu22jWTgaViynauDv5w20%2FZjMDiPZhMwiQXyayXfxOoJoLTzhIAL6KpWXh8k%2BM%2FYbifoWhm2UKjQKHOUycFP%2FmoNYhoPlEPEnLpmEYl86fa2ycN4scXwQ6DhfGa1KNDV3j9PmgHc%2F6A6a%2BdyXOPassdoWR5owvc7a8SrW8d4hRMSHq%2FKttx2Nc6jJtX3HfMuNLlst7gFeMEwZMZQwQVfvOhsO1WWp9nOWoqCwqhvVUByFe7BHzMMqnQInb1IDGOmcgVAaJXhLt9lAJaM2qiyKWzPD1h9wghm1ycdZc8FJyU0fRx4MqKPsyn5sNrkeeLlSt5mTySU5lZeVrp%2BvSKNhslDO1RH4emgKuRew8UGbjF7Atgnjrcnp6Si%2BYFbRcHb1EG9a6OGYORW%2BYalZSNr6pYSoqrbhXQ%3D%3D&csid=f06c1f41-f6df-4688-8a89-58a8757f86c1','headers':{'Accept-Encoding':_0x53c4('‮82','!#!R'),'Cookie':''+ck[0x0]}};let _0x4ac204=await _0x3f6c71[_0x53c4('‮83','9ckE')](httpGet,_0x2729e7,_0x53c4('‫84','8a3$'));if(_0x3f6c71['WLeTl'](_0x4ac204[_0x53c4('‮85','S!rF')],0x1)){if(_0x3f6c71[_0x53c4('‮86','*%1o')](_0x3f6c71[_0x53c4('‫87','f(WO')],'xiyLq')){_0x3f6c71[_0x53c4('‮88','Sq85')](DoubleLog,_0x53c4('‫44','9ckE')+_0x4ac204[_0x53c4('‫6b','M)wn')][_0x53c4('‮89','B6&#')]);}else{_0x3f6c71['ongab'](DoubleLog,_0x53c4('‫8a','nUWg')+_0x4ac204['data'][_0x53c4('‫8b','!3bl')]);}}else if(_0x4ac204[_0x53c4('‫8c','h0*g')]==0x70){_0x3f6c71[_0x53c4('‮88','Sq85')](DoubleLog,_0x53c4('‮8d','^%B6'));}else if(_0x3f6c71['fwyme'](_0x4ac204[_0x53c4('‮8e','!3bl')],0xe)){if(_0x3f6c71[_0x53c4('‮8f','&%14')]!==_0x3f6c71[_0x53c4('‫90','3oP2')]){_0x3f6c71['zZYmO'](DoubleLog,_0x53c4('‮91','nUWg'));}else{_0x3f6c71[_0x53c4('‫92','!3bl')](DoubleLog,'\x0a浇水：⚠\x20此任务返回无法解码\x0a请手动把浇水量设置为最大\x0a脚本运行一次即可完成浇水\x0a');}}}async function qd(){var _0x68f3b3={'dIIIz':function(_0x13588b,_0x3d9e01){return _0x13588b(_0x3d9e01);},'cmCxz':function(_0x34edda,_0x587907,_0x57717d){return _0x34edda(_0x587907,_0x57717d);},'EmbTl':function(_0x389443,_0x436c46){return _0x389443==_0x436c46;},'auuHN':function(_0x232e80,_0x110cb7){return _0x232e80!==_0x110cb7;},'zVHjn':'UnUWf','XjlCP':function(_0x254023,_0x49bd95){return _0x254023(_0x49bd95);}};let _0x11af12={'url':hostname+_0x53c4('‫93','eovY'),'headers':{'Accept-Encoding':_0x53c4('‮94','h0*g'),'Cookie':''+ck[0x0]}};let _0x2fb597=await _0x68f3b3['cmCxz'](httpGet,_0x11af12,'连续签到');if(_0x68f3b3[_0x53c4('‫95','M)wn')](_0x2fb597['code'],0x1)){if(_0x68f3b3[_0x53c4('‮96','7yUe')](_0x53c4('‮97','qjk7'),_0x68f3b3[_0x53c4('‫98','GfBF')])){_0x68f3b3[_0x53c4('‫99','3oP2')](resolve,Change);}else{DoubleLog(_0x53c4('‫9a','YgEb')+_0x2fb597[_0x53c4('‮9b','!3bl')][_0x53c4('‮9c','iL2g')]);}}else if(_0x2fb597['code']==0x70){_0x68f3b3['XjlCP'](DoubleLog,'\x0a连续签到：已经领取过了\x20不用重复完成');}else if(_0x2fb597[_0x53c4('‮9d','QnEN')]==0xe){DoubleLog(_0x53c4('‮9e','eovY'));}}async function ls(){var _0x22ba98={'xraMT':function(_0x48b5cc,_0x4f5a86,_0x4901b6){return _0x48b5cc(_0x4f5a86,_0x4901b6);},'escoq':function(_0x185684,_0x146a57){return _0x185684==_0x146a57;},'wiuak':function(_0x3ddea1,_0xd48df8){return _0x3ddea1!==_0xd48df8;},'vxMdd':_0x53c4('‫9f','PXh%'),'haSsN':function(_0x1fbbd7,_0x299ef8){return _0x1fbbd7(_0x299ef8);},'zbXTL':function(_0x5182a9,_0x48b848){return _0x5182a9(_0x48b848);},'vvsiU':function(_0x1e5050,_0x105643){return _0x1e5050==_0x105643;},'uipbB':function(_0x20a279,_0x3e22eb){return _0x20a279(_0x3e22eb);}};let _0x27f8cb={'url':hostname+_0x53c4('‮a0','eovY'),'headers':{'Accept-Encoding':'gzip','Cookie':''+ck[0x0]}};let _0x21b880=await _0x22ba98[_0x53c4('‫a1','QAWZ')](httpGet,_0x27f8cb,'领水');if(_0x22ba98['escoq'](_0x21b880['code'],0x1)){if(_0x22ba98[_0x53c4('‮a2','qt*t')](_0x53c4('‮a3','dDUT'),_0x22ba98[_0x53c4('‫a4','[q#z')])){$['logErr'](e,resp);}else{_0x22ba98[_0x53c4('‫a5','S!rF')](DoubleLog,_0x53c4('‮a6','8a3$')+_0x21b880[_0x53c4('‮a7','PXh%')]['amount']);}}else if(_0x22ba98['escoq'](_0x21b880[_0x53c4('‮a8','f(WO')],0x8c)){_0x22ba98[_0x53c4('‮a9','9ckE')](DoubleLog,_0x53c4('‮aa','5VwI'));}else if(_0x22ba98['vvsiU'](_0x21b880['code'],0xe)){_0x22ba98['uipbB'](DoubleLog,_0x53c4('‫ab','QnEN'));}}function Version_Check(_0x1be796){var _0x296fe5={'NfBpo':function(_0x56735a,_0x1995d4){return _0x56735a(_0x1995d4);},'oLzHK':function(_0x4a55e7,_0x3dd2d5){return _0x4a55e7!==_0x3dd2d5;},'cvoXG':_0x53c4('‮ac','S(5%'),'xxWqQ':'fLkjb','tTAoM':'zDzTR'};return new Promise(_0x415db7=>{var _0x31b129={'qjIUs':function(_0x5a5f22,_0x300715){return _0x296fe5['NfBpo'](_0x5a5f22,_0x300715);},'ncVHy':function(_0x2216b5,_0x19da29){return _0x296fe5['oLzHK'](_0x2216b5,_0x19da29);},'zixrQ':_0x296fe5[_0x53c4('‫ad','9ckE')],'gFtla':_0x296fe5['xxWqQ'],'nDQwO':_0x296fe5[_0x53c4('‫ae','eovY')]};let _0x208b62={'url':_0x53c4('‫af','eovY')+_0x1be796+_0x53c4('‮b0','qt*t')};$[_0x53c4('‫b1','ay1d')](_0x208b62,async(_0x128ddb,_0x5240fe,_0xcf953b)=>{var _0x259749={'Kreco':function(_0xa71a78,_0x3b1aa9){return _0x31b129[_0x53c4('‫b2','YgEb')](_0xa71a78,_0x3b1aa9);}};if(_0x31b129[_0x53c4('‫b3','f(WO')](_0x31b129['zixrQ'],_0x31b129[_0x53c4('‮b4','!0n$')])){try{VersionCheck=_0x5240fe['body'][_0x53c4('‮b5','QAWZ')](/VersionCheck = "([\d\.]+)"/)[0x1];}catch(_0x58b875){if(_0x31b129['nDQwO']===_0x53c4('‫b6','YgEb')){_0x259749[_0x53c4('‫b7','RaIz')](DoubleLog,'\x0a领水：未登录');}else{$[_0x53c4('‫b8','5Q0K')](_0x58b875,_0x5240fe);}}finally{_0x31b129['qjIUs'](_0x415db7,VersionCheck);}}else{DoubleLog(_0x53c4('‮b9','3oP2'));}},timeout=0x3);});}function Version_Check1(_0x5f12c7){var _0x1a9c7b={'DLnwP':'tbkTo','sWlmA':function(_0x515554,_0x13b4a1){return _0x515554(_0x13b4a1);}};return new Promise(_0x1ab195=>{let _0x47f15a={'url':'https://git.lihui.ml/https://raw.githubusercontent.com/kristallsi/JavaScript/main/'+_0x5f12c7+_0x53c4('‫ba','S(5%')};$[_0x53c4('‮bb','DAuA')](_0x47f15a,async(_0x559c6a,_0x367df9,_0x35643e)=>{try{Change=_0x367df9[_0x53c4('‫bc','!#!R')]['match'](/Change = "([\u4e00-\u9fa5]+)"/)[0x1];}catch(_0x50a61f){if('tbkTo'===_0x1a9c7b['DLnwP']){$[_0x53c4('‫bd','5VwI')](_0x50a61f,_0x367df9);}else{Change=_0x367df9[_0x53c4('‮be','&%14')]['match'](/Change = "([\u4e00-\u9fa5]+)"/)[0x1];}}finally{_0x1a9c7b[_0x53c4('‫bf','Ku7z')](_0x1ab195,Change);}},timeout=0x3);});};_0xodM='jsjiami.com.v6';




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

