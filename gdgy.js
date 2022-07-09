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
let Change = "增加打卡、一键收取任务水滴……"
let thank = `\n 感谢 群友投稿 \n`
const $ = new Env("高德果园");
///////////////////////////////////////////////////////////////////
var _0xod8='jsjiami.com.v6',_0xod8_=['‮_0xod8'],_0x5218=[_0xod8,'wo5Ew6/Cnm/CvcKgBg==','w6/CrcO0MMKo','wpEHTMOawoc=','wpHwl7KkQ+ablOaUjOWEjeWttMO9w7U=','w63CuSA2w50=','cMKuRXlrwqd2w5PDr8OIw77Cu+WGsuaIjuWJgcKv','wp0dwroAaWg=','DuS7nOi2uuWOi8Kqw47DvsKPBMK0Z8ORw4gIw6U=','wqNUw6/CgEY=','44C6VcKLwqZww7TjgIp+6L6a5pil5L+A55ic6LS15Y+n5pW557qdXGoY','w4InwqwbdsKxRMOhwoZgw6Q=','w7bCtMOtHcKN','w6rCicOjCMKR','UgxuwrXCmQ==','wqQowo7CrsOFGQ==','woIfwqQGWA==','wq7DpsK8wozCmA==','w4fDhg8gZsKew598wosu5byr5aeO44OA562+PQ==','w7bku5LotqHljrDjg6ANwpTDiirDkcKqRMOG','44KLRg0BVcOb44KZw63ovJ7mm7rkvIrnro4j','wq7otrzlj6jkvIPmgJtdYMKX','wop6N2cH','woDCrGlLAw==','FRPCvyPCiQ==','BMOhYMOjRsOk','U8Ovw5jDsQ==','wpcCd8OBwpVvSxoJw4jCsjjDt8OiUsORw7LDikrCvcKPw69UwrlEw7LDvMO4ccOgJcOTwq0cwpNeYBDDl0/CvxY/wrkow7HDm8KRQg==','CsOzw4NKw70=','w4MAwpgmcw==','EMOnV8OxXw==','dzdiMsOJ','wo8XwrTCucO7','wozCmsOBLcKZ','wocBU8OJwoI=','w4gpw5Y=','woHCpQTDl8Oo','wpTCjnhaPw==','KTJxwpkE','L+aIoeWOvOaUl+mUseS4mOWugMOD6LWT6L6/','c1TCtMKTcQ==','w70jw6vDp8Ky','U8OSZw==','wpvDhcOKcUTDmMOVY0fChcOcwrfCk+W/h+Wkpea0qOawocOdQCo7ZMKnWcKEw48bACcu','dMOoJ8OMwrc=','w5J9TMKcw6E=','w75VwovCuDg=','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','w7Jje8Knw6E=','Tn/DkmLCoA==','w47Cp8O/AsKy','w4rCqcOBCMKR','w4IMwr4OZQ==','worCoiZ0Hg==','wrAMf8ONwrk=','PuaIkeWNmOi2s+azi+a4ue+9t+W3jee5tuaLsOWOgui8g+S6tF7kupbnlK3phqzlpYnlrp7mi4k=','XBhgPg==','cSJoKls=','w5NkKQBw','w6znrY7liqvvv7TojqvlvJA=','wrnCs8K/Zg==','LxDCrzzDuA0=','FMO7DhcZ','cOmgleaxjO+9nuadvOeboeW8ng==','worClzpo','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','w7LCl8KTKQ==','D8Ofw7zCgnc=','YuS6jumUqeaWkOWPou++jOaJs+WKsA==','wq5MHE0=','wqBHesKy','RSNywpbCuQ==','aS1ADE0=','w5JLwrrCqy4=','w4Yswq8H','dsOHw5XDsD8=','woTmt53msKvvv7jmsYDphqjkuafotIQ=','wpHChsKOfiY=','VMK6w4Y9w7o=','w6hlDgp5','w6PCnQYWw60=','wpvmtr/ms4PvvZblpYjot4DDiOWOseiCh+WNoOmEruW1pei9tOafmA==','wr/CvcKvfg==','woDCjCd7Og==','cQttwpbCnQ==','w7p3wp3CoDk=','wpHmtaXmsZzvvbnimoDCnOavrOS4tuWJpui8geWatOaVguazluikj+ehsDnorY3miIHli6/mirzmtJHmsqbphKvorKHnvJ7kuIvmn7Tlp7N56ISn5p+l6LyB6KGy5LmO5qyH5Y+X5Y665a2Y5ou+5rep5rOfwr4=','PMKrfC3Cng==','w43nrYPliKPvv5jmnYrnmq3lv64=','w6NsMRl6','5rSB5rKa5aeO5Ymy','w4Euw4BaAg==','TcKyw452Ow==','w6HDtX7CtDs=','N8OpOSg/','w6pNwrbCgw==','w6DDq2xSwoE=','w4U3w71cAwc=','IMK8bxbCqQ==','w64Bw6PDu8KU','L+a0teazqeWmt+WJtO+8j+W2i+e4rOmgpuWOrui/rOS4u8K95LuW55WG6Yeu5aex5a205oir','CcKUWTg=','J8KJw6kPw4I=','w6MlwowbSw==','woPCvC7DnQ==','NAfCrgjCig==','asOlAsO/wq4=','Xg/CosKgw5U=','wqjls4forrDphr/lpqHmtJTmsr8=','S8K/dCk=','wqzChk14JcOH','wozClcOUKcKF','wrLCtcKkUz4=','UMO6w5/DpA==','wonDncK6wr7Ctg==','wpIMwr4kdQ==','e0bCjMK+Uw==','c8OiF8O2wrc=','w7wqwr84Yg==','Nemgu+awtO+8muW1g+e7iumip+WMtui9g+S7n0TkuZfnlqPphJvlpp/lr5jmiZQ=','w5znroblirfvvZ3ojYblvrc=','KhzCtCg=','PsKDwrvDp8OFCw==','woVEw7HCrXQ=','Ouesk+WIhu+9mOW1see4t+mgiuWPuOi/h+S7g8OZ5Lui55az6Yel5aaq5a2i5oma','w77CicOjPcKm','wo/CssOowps=','w5vCgzYDw7w=','w4fnrZ3liYjvvLLmnZ/nm4Hlv4Y=','BznCtyDDrw==','AcKBw69Tw6vCkMK3w5tPw6AuwpXDmk3CsWNNw4lrwrURw4xKZsOywqIGwromO8OOT8KYPcOdNsKXQB7CnsKAX8KEKsKUwpsnecO/KzASEcK6w5Mhw5p2d8OZwrsIwoVYIx9fwrbDosOfw7UywqQbw4RmCVLClcOLw4fCiG9ddcKBw4jCnMObwpMKwqoQw6bDssKaAC7CpsK5HMKCw7DDpcKdNSJYEcODw6EUw4nDjWMgwqJHWmJOwrs3wojDi01jw4s7BjfCpUnCqA5Dw5DDikEbbsOdwpDDq0sqbXA6w5jCtQVbwokcw6zDssOoKcKWXsOFKsKFXcKCw7bChMKHTcOgAkpewpsmYcKXw73CocOfLMKqA8OBw6TDqkrCpMOdw47DmQPCnUJUw6LDjnzCmcO4w77Di8KWT8Kqw6tjw7vDrEDDgcOHw5LCulJfwqLCjcOKwq7ChcOKVcKGCWcje3vCtcKMB35gw4guLX3CuAMOw4pXV8OJV0ZdJF3DiQRTwrQ/ax5gEDNUAcOmNGXCmsONSMKDZcKdw6LDp1YGw7bDscKHwr93wrXDjMKbMHJVwrxow5rDt8OWw4vDj8KedhlgVWNIMsKYJsOfbsO9w5RlwqLDixs0wonDvsOQwpZuQlPDq8KxwrHColgeUMOBwpXDnip5w4fCisKpasOBHVo4wqIGwowheQ8iPTxzwo0ww4x5aMKpw7jDnsOHw5fDr8K3w5hbwpjCoD7CgQ/Dg8OWBsKUw6UhScOWdsOcw6HDmXlLw4gsNkPDqlzDkkXDr8KZwoJsIsOGPsOULTxhA8O5wozDrGbDu8OWw5LDtMKzYXfCrsO7BDvCksKlMsKLaH9swoVXSBvDujfCrzrCr3hSw6YKYSI4TcOMw5c7bMKcwp3CrgR/w73ChltVCDnCt0XCt8KUwpNDO0xmw44WDnHDsw/DuRlowqzCs8Orwr9/w6LCvMOcw7DCnSZlwodXw6t1cB7CrsKSRMK2HsOcw7XDicOmw6wsw5bCrHDDq8OzUcOOwqnCrA1iwrfDr3JYwqrDjcKmw53CmcO3aWAtQnNzw51GwoUMwpAbJD4MJStVOnbCo8KFwoU1Hx/Ci8KVScKcwosEBMObCMOeRsK3wo5Ew4LDo0xaCsKew5M0w7DCvH8lw65AMRoDMRTDgcKhCQxxw6DCv8K0dcKcZ8KyGyrDgRPDvcKdSMKtwrAVJsKOwqnCkcKPwoYSQVHDjkNBwpl7wp1UYcKRTMKQZnxFEmDClgIww7tsw6dAXUvDiCNmw4bClSDCsjbDtMKWw5nCvsKJd3cfcgINw6nDs8KIw7fDgRTCscKjwpQSwqXDpVvDp8O9VcK6w47Dj8OuYcKMw7Iww54ow4/DgsKGQSDDswQZw4vDny46wrvCksONwq8HfsO3ccOAwp3DumvDiDnCmsODWnpIwqzDpH8CSMKKH1JUw4FVwpZ1wrfChlLCmi5rwqIQwp8Uc8Osw6fCscK9JQN7CmPCnWDCi3U8w7UQw6d1worDryTDiRXDvB/CqRQKBCBbwoVqC8KOecK4w7LDjU3CpiovPMKlwpHCuMOqw5jCqMKKw7pKccO6JXLCqFl9CRPCs8KFwo3Dj1Iww44FbsOWwr7DqBp5IsK8GQ7Dp8K1M8Otw5HDpX8lX8KUw7x4w5XDocKXAyNfwrrDmWNDZWgTbBvDnMO5BQJbwohpPXQSw616cGjDusKGAsO/w74zdTwpcHVJO8KPwqfDk2VgO8KUWEskw4zCgsOdwrxFHx/CmAMIw4tqw6tLw5VRwpvDiMKtBcKJwqxxEiwEw4DDvMOew7QvwrjDosKKP8OTdMKnw6XDhsOww79/woAgw6PDgcKOcsKcBsKuYcOrw4lFw4HDusOiCFgKKMK0w7oCwqM0w65teSxgwohkw57CnsO5w7kowrkTw7bCocOMwrDDscKdGMKJAU4sCCNZVCZiwrvCgcORw4tsAFPCrcKkwq/DjcKswq5Rw58YwqVkw7IYaMK+wo7CmljCjiRHwrJPTzjDj2QUwpTDosO9CMKDJcOJwq49JsKywpzCsi51wrR1Sk3CnA1cwr5leFtJGW7CuMOZw4suPcOfw4JNwqkSw4HCq8OWQF09w7RqTVjDucK2wovDoVbDjMKmJ8KJPB0tw5o5wpzCscKOWn0Dw4fCpsOBwr/DkiY4w4fCnVFnwpIewqguFB/DiMKgwqJFwo8pwoRGMCZ3JlgBwq3DrMOtIsOIZcOMQk56dcORw6fDpMOcw4dsw4PDm8Odwr/Cp8KJw7RTw7QOL8KkfMOzM8OyPBIzXcKkX8KKw7vCpsKpwoTDjzV3w45xwrrDtR7DsTvDhcKOwp0xDFTDtmXDiyHDucORREXClUQBLsOswodbN2rCrjtVwrDDvFXDjSbDuBBrFWvCpGUNE8OJwqPCp8Kuw6NEacOscw==','TcKew4t3','w5lPKyhx','56yW5Yq+6aKB5rKS','HRjCjSTDsA==','w7hNDAY=','UMOIw6/DgBg=','wrvCvMOiH8K9','w5/DjHTClyw=','wo8yYsOrwq4=','woLnrZzli6LpobzmsYvvv5jojr7lvY8=','wqkgwo/CvMOfBQ==','TcKZw7gZ','dCTCtsKUwp0=','P+est+WLg+mhkuayre++tuW0i+e6pOmhleWNkui9m+S6lw3kuZHnlIzphYDlpITlrpnmipM=','wr7CvcKvYg==','d8OxUFfDmg==','w4IJwrE7aA==','w4fnrpXliJLpoovmsb/vvqnmn5jnmKrlv7M=','wppMHU4B','wqTCjkNpBw==','e8K9egNr','FMKawqPDnsOs','Y8K4w4tUw680w7zCnRNaEcKYf8Kvw4/CoEbDqhrDv8KyccKDNAXDu8OYw7HDmcKFwpMAScKbOMOcATk2CSA5wrnDoMOdw4HDgFfDg0jDuldMfwEvASfDqxPDoMO2Y8KyF8KrPcO4HsKew4dxT8OtFFDCri/DlioYwpHCi8OFCMOHVTRdXsODeSdcGsK6wojCnUdrw6zDl23Cu8Osw7EaIAXDjCnCnsKuw7pKN8KYHlJPw7g2wr3ClcOMcVYMw4tmElVdVMOZwo4AYQs8w4kgY0XChTMJwqXClMKVXSLDmcK+wr45QcO7wrXCiC3DjjYHXAjDn8OFVsKGHMKkwrp+w6RFwoM3w6gdPMKcB8OKK2jDsmY4w5ZlYyXCvknDvcOlwofDilrDv8Knw4/DqMKpeMOPwr7DgsO/P8KZe38eN1fCqmVlO8K/DsKUw43Dm0xVOwPDv8OxX2NxJ0rCm1DDvU3DoTHCpsO4JnREOmJLUsOWc13CtsKMCcK1w7DCpUh5bFHDncKpasOlFyrCkAsQX8Ovw5J5RsO3NcOowoHDhgvDlh/ChUXDiMOIM8KKMHzCuhjCk0E1UWU/P8OUO8K6McK+OVzCvcKXK2jCmsKbw5BFw4LDmgfDnDkXw5fCicKeO2JOwqzDpXTCiWzDpFbDrFdMwr3ChywYWjXDh8KYAVLDocKrw6gMYwcRdMOIwrw7wqdYwo3DqlcRw6XDugDCncKdJMOpwrtKLn7DvxQ3X3/Cj0vDgMOEwr98wrbCu8KEXxrCn8KOw57CoQPCncORw60hXxXCgyJwwr3Cl13ClMOiwoM2w6R1Q2xEw7kPU8OSwpjDs0JJwpY/w7AFSy0dUWzDgBRAd3h1wqzDnsOEKldBw6ovw7vCucKXwrjDoVnDi8OOwp9QwrTCgcOLRkwFIMKIe2xBbxzCqlBZw4jDqMO7MMO0w4Yjw4ASworCpVrDmC8RUsKcCHQfw4fCozo7ZsOHw7QKasKpXcKJwrs/wpcjw64mw7Iqw7hiOMKoWcOnwq4UGjlYwqLCi0jCr8KgasOzWSrDuBPDlMKpQcO3wqjCnzrCksKlw5TCu1ERw79dwqIpR8K4wqPDvsOgwrgjCncvw4TDjcK6PsKJTDsmwrvCt05TwoYfVgTDm8KaUcKYwr1oK8OVP8KkMnJqTMOHd00LIsKJw6LCnsKnw6w+CsK5acKYwr7ChXMHwoLDhhtkwpTClMKnNcO9b8O6w4rCk8Kkw5B+wqIcw4fCkMO5w5PDjhU+w60vHMKwUsOtw5XDqMKQL8OENsOJw6PCp27Cj8OrJB9NwqzCsMKDPAwNOVAGwp/Dtkl1w5FIHl1dY8ODwr9UXzXDp1Bpw401w7JSbExrLiDChlVjTMOZTxnCo2TCqMKWFSzCqMK2ecOLYMOQecORNsKLw7HCgMKJwoPDn8KxK1EDwpzCgsK/w7ANw4lewokIFTsZE8KXYSN6wqnDmh/DrwrCtRzCvh7Dn8K8wo95w53ClsOhwrjCmA18ZAZVwrtKwr17RsKlwp7DlVVEXcKEQQ7DnQLDmUrDlMKSw5rCsMOydcKAPX8jFcO9YCXDnU/Cs8K9CRBBwqzCicO2FjfCn8O/wrdWTMK5Oy55wqZhUUkUw4Y0wrsbwp3CpX55NEpTaQ9rXMOAw5nCv2TCnsObUsOSw6HDhVwBw7/ClidVCzPDscOKR8KbGMOJw7bDqMKxwpnCoERWw640T8KPwq8DGC/DlTjDj8KxwqjDp8OHw7wxwoZuw6vCrcOIwq14w6TDrsKuw7zCp8KEw77DqcKpw7kkwq1uYETCuWYiw7fCvcOhPVPDlQZ6asOWwobDg8K9ekonBcOZw5HDsntqdi/CnD54WS4UPAJvw7lkwr/DqsKfLmXCnMK6Q8OsBxUJRMOcXyXCm8K/f2vDo1lIw5TDmFnDiTHCuB5KO1zDqW7CvcKPHHvCjndtwpPDqSXCg8O/w6xRw4bDhcKMwp8NRcO3wpLDvcOUwqfDijDDlyDChMKQwpjDicKDwrliPyXCiMO6woV9w6TCj8Kcw57ChyBWJsKkLMO5KsO0wqnDimzDrsO9w5rDpQFzLMKzw70BcsKgZ0xeBMOBwpxSw70xwoR8FMKdcMOLw50uwqJgwrHDmCzCmsK4FWTDrcO2FcKBOVnDp3U2OcKxw6JMwoFXBMKeKMKyw5rCnMK4PsKEwpoVQBMbw4PDjMO9w4fDnsOgL3fCqsKLPsOHccO5UMKWB0s=','6L6z57ml56+65YmR','FR3CryU=','GcOzw5VIw6o=','w4Eiwr8D','LcKiw5cOw6Aj','cOa3lOaxjOWkkuWLp+++gOW2uee4oemhlOWMo+i8hOS4ncOj5Lm955WZ6YWC5aWP5a655ous','SWrDj2/Cmw==','wo7Cgjd9','w4HDq2tAwpg=','FiFTwp0l','Yui9kOe7quevmOWIhO++jOW2kee7oOmipOWOpei/p+S6rBbkuZ3nlYPphIXlpqvlr53mioY=','XsKVw4Yqw40=','f3XDhWnCuw==','e8KSw41OLw==','P8OebMOORg==','K8K1w5EL','wo3Cs8Ouwp3Dqw==','wohsEn0f','WsKkbxJq','wrI9wrPCgcO2','wpfCmUpmHw==','wq7poYfmsoPvvYHojanlvpk=','wqlCDEk=','w4XCrMOYLsKweg==','wrLCmcOzJg==','C8KWUijClWI=','HsK5ezPCgQ==','L+mjtOazqe+/u+W0t+e7mumjv+WMtei9p+S7vgvkurDnlrXphJblpaPlrq/mi6w=','GzfChzHCqQ==','ScKLw4Zi','CD/CgRHDmQ==','w5YWwp8wZw==','SnLDsFLClg==','w5zpob7msrPvvZ3mn5vnmZvlv6w=','woLmibHljrPotpjmsYvmuLbvvJPltKrnuozmi6bljK3ovJnkurAd5LuB55Su6YSD5aay5a6L5oi6','wqNlw5nClF0=','w59oCjVO','w4PCqAEQw4M=','wrXCpsK/dyDDgsOewr/Dl8KKw4LCnlEIwr8dwoNyHsKfYcOre8OcwrVdQMKAeMOfwr3Dr8O0w70sFsO5w4EuDMKZwrzDncKuwq7Cli7DrMOVd2XDhcKGwpjCu8KhwoHCoMKDWcKDwq8QwojDm8OWwpg0wrXDi2V1w6VDKXUmwp0FWMKrfA==','w6YnwpM=','wrrCt8K/','wqTCuUh4OA==','woM8wpHCmsOg','MsOPRcOlWA==','wqrDgcKbwpnCmA==','SsKfeA5a','wq/mtITms7/vvbjlpJjot5cL5Y2h6ICQ5Y+R6YWO5bWc6L2O5p6a','NcODwo1Q','wqpcZ8KhCA==','wrHCrsOjE8KG','w4Flb8Kkw5o=','fOaIoeWOqui0ouazlea4n+++n+aLl+WOreaIqOWJhw==','VUjDg0XCqsKD','OzhGwp86','Z+a3j+aysO+9u+azuemHkeS4r+i0jQ==','w7JwAhZT','wozCvQLDkcOo','wqXCvMK8cgc=','w4Esw65pAk/DjGLCvMOcQxMTWcKswoknesK0wpTDvsKYV2pYbMK6wqlVwpgYw4LCo8OtRMObw4HDsHJdRA3Drmg7woHDjSrCrnsOwqvDvVlVJcKvLHrDgiPCjsKBcsOHCwoUZMKmwpk/wrMtwrdiw57DlyPCsS/Dtw==','VMO5Cw==','woLCvC7DgQ==','w4/CuxERw4Q=','wrd8w4jCrFM=','PMOWw4hbw4jCgg==','Hz1Mwrw2','EsKVSijCrw==','HwHChS/ChcKO','wpQWwqI=','WMOZZ3nDrkZOwo/DrzAB','wr5NCwYUw5fDssKAdsOqw5/CuQ==','xQjbwswjixaIXmzi.IqPcroDm.v6=='];if(function(_0x1c7c78,_0x327380,_0x318676){function _0x4e3582(_0xb4f20b,_0x240ba6,_0x57296b,_0x235cf2,_0x51d048,_0x3ae2d6){_0x240ba6=_0x240ba6>>0x8,_0x51d048='po';var _0xa8162d='shift',_0x598d38='push',_0x3ae2d6='‮';if(_0x240ba6<_0xb4f20b){while(--_0xb4f20b){_0x235cf2=_0x1c7c78[_0xa8162d]();if(_0x240ba6===_0xb4f20b&&_0x3ae2d6==='‮'&&_0x3ae2d6['length']===0x1){_0x240ba6=_0x235cf2,_0x57296b=_0x1c7c78[_0x51d048+'p']();}else if(_0x240ba6&&_0x57296b['replace'](/[xQbwwxIXzIqPrD=]/g,'')===_0x240ba6){_0x1c7c78[_0x598d38](_0x235cf2);}}_0x1c7c78[_0x598d38](_0x1c7c78[_0xa8162d]());}return 0xf5f24;};return _0x4e3582(++_0x327380,_0x318676)>>_0x327380^_0x318676;}(_0x5218,0x1ba,0x1ba00),_0x5218){_0xod8_=_0x5218['length']^0x1ba;};function _0x593c(_0x43edeb,_0x5d742c){_0x43edeb=~~'0x'['concat'](_0x43edeb['slice'](0x1));var _0x49d6cb=_0x5218[_0x43edeb];if(_0x593c['twtxKA']===undefined){(function(){var _0x3b0777=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4e29ec='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3b0777['atob']||(_0x3b0777['atob']=function(_0xf80c18){var _0x40792e=String(_0xf80c18)['replace'](/=+$/,'');for(var _0x190a1e=0x0,_0x3285f8,_0x330ec7,_0x596ca4=0x0,_0x1963e1='';_0x330ec7=_0x40792e['charAt'](_0x596ca4++);~_0x330ec7&&(_0x3285f8=_0x190a1e%0x4?_0x3285f8*0x40+_0x330ec7:_0x330ec7,_0x190a1e++%0x4)?_0x1963e1+=String['fromCharCode'](0xff&_0x3285f8>>(-0x2*_0x190a1e&0x6)):0x0){_0x330ec7=_0x4e29ec['indexOf'](_0x330ec7);}return _0x1963e1;});}());function _0x2c14d0(_0x1d50f9,_0x5d742c){var _0x6eb728=[],_0x216b8f=0x0,_0xc061d,_0x4c546f='',_0x303b98='';_0x1d50f9=atob(_0x1d50f9);for(var _0x1615e8=0x0,_0x51a958=_0x1d50f9['length'];_0x1615e8<_0x51a958;_0x1615e8++){_0x303b98+='%'+('00'+_0x1d50f9['charCodeAt'](_0x1615e8)['toString'](0x10))['slice'](-0x2);}_0x1d50f9=decodeURIComponent(_0x303b98);for(var _0xcec1f7=0x0;_0xcec1f7<0x100;_0xcec1f7++){_0x6eb728[_0xcec1f7]=_0xcec1f7;}for(_0xcec1f7=0x0;_0xcec1f7<0x100;_0xcec1f7++){_0x216b8f=(_0x216b8f+_0x6eb728[_0xcec1f7]+_0x5d742c['charCodeAt'](_0xcec1f7%_0x5d742c['length']))%0x100;_0xc061d=_0x6eb728[_0xcec1f7];_0x6eb728[_0xcec1f7]=_0x6eb728[_0x216b8f];_0x6eb728[_0x216b8f]=_0xc061d;}_0xcec1f7=0x0;_0x216b8f=0x0;for(var _0xb27d5f=0x0;_0xb27d5f<_0x1d50f9['length'];_0xb27d5f++){_0xcec1f7=(_0xcec1f7+0x1)%0x100;_0x216b8f=(_0x216b8f+_0x6eb728[_0xcec1f7])%0x100;_0xc061d=_0x6eb728[_0xcec1f7];_0x6eb728[_0xcec1f7]=_0x6eb728[_0x216b8f];_0x6eb728[_0x216b8f]=_0xc061d;_0x4c546f+=String['fromCharCode'](_0x1d50f9['charCodeAt'](_0xb27d5f)^_0x6eb728[(_0x6eb728[_0xcec1f7]+_0x6eb728[_0x216b8f])%0x100]);}return _0x4c546f;}_0x593c['buAdYa']=_0x2c14d0;_0x593c['BfYVrC']={};_0x593c['twtxKA']=!![];}var _0xcac1e5=_0x593c['BfYVrC'][_0x43edeb];if(_0xcac1e5===undefined){if(_0x593c['uyCMOA']===undefined){_0x593c['uyCMOA']=!![];}_0x49d6cb=_0x593c['buAdYa'](_0x49d6cb,_0x5d742c);_0x593c['BfYVrC'][_0x43edeb]=_0x49d6cb;}else{_0x49d6cb=_0xcac1e5;}return _0x49d6cb;};const notify=$[_0x593c('‮0','sjMq')]()?require('./sendNotify'):'';const Notify=0x1;const debug=0x0;let ckStr=process[_0x593c('‫1','loxt')][_0x593c('‫2','RNJW')];let msg='';let ck='';let host=_0x593c('‮3','Tq@6');let hostname=_0x593c('‫4','6ALk')+host;let ck_status='';async function tips(_0x413ac7){var _0x43187b={'KlCkv':'gdgy','czvAr':function(_0x522e4d,_0x27834f){return _0x522e4d(_0x27834f);},'OcEDq':function(_0x5d97af,_0x4aa0e6){return _0x5d97af(_0x4aa0e6);},'EdtnZ':function(_0xc30c9e,_0x513a92){return _0xc30c9e(_0x513a92);}};let _0x9f09f5=await Version_Check(_0x43187b[_0x593c('‫5','MlR@')]);let _0x278acf=await _0x43187b['czvAr'](Version_Check1,_0x43187b['KlCkv']);let _0xc4a578='\x0a📌\x20本地脚本:\x20V\x201.0.1\x20\x20远程仓库脚本:\x20V\x20'+_0x9f09f5;_0x43187b[_0x593c('‫6','5r4g')](DoubleLog,_0xc4a578+_0x593c('‫7','@6HV')+_0x278acf);_0x43187b[_0x593c('‫8','M)SA')](DoubleLog,_0x593c('‫9','[@BU')+_0x413ac7[_0x593c('‮a','loxt')]+_0x593c('‮b','4E7n'));_0x43187b[_0x593c('‫c','6ALk')](debugLog,_0x593c('‫d','ox2o')+_0x413ac7);}!(async()=>{var _0x31bbd8={'RuZFS':function(_0x111993,_0x104bbd,_0x2513a0){return _0x111993(_0x104bbd,_0x2513a0);},'NHTSO':_0x593c('‫e','1yjQ'),'fNWdf':function(_0x4bf284,_0x334fa7){return _0x4bf284(_0x334fa7);},'sgpaE':function(_0x47f7fb,_0x6eb9a2){return _0x47f7fb+_0x6eb9a2;},'GYOOr':function(_0x1f87a8){return _0x1f87a8();},'MGKFH':function(_0x4a9e2f,_0x154bee){return _0x4a9e2f(_0x154bee);}};let _0x4f5392=await _0x31bbd8[_0x593c('‫f','MlR@')](getCks,ckStr,_0x31bbd8[_0x593c('‫10','MlR@')]);await _0x31bbd8[_0x593c('‫11','RhYF')](tips,_0x4f5392);for(let _0x12bad0=0x0;_0x12bad0<_0x4f5392[_0x593c('‮12','5H%4')];_0x12bad0++){let _0x1466b3=_0x31bbd8[_0x593c('‫13','loxt')](_0x12bad0,0x1);_0x31bbd8[_0x593c('‮14','n59C')](DoubleLog,_0x593c('‫15','s]Q7')+_0x1466b3+_0x593c('‮16','QAkH'));ck=_0x4f5392[_0x12bad0]['split']('&');debugLog(_0x593c('‫17','@6HV')+_0x1466b3+_0x593c('‫18','%mb^')+ck);await _0x31bbd8[_0x593c('‫19','Tq@6')](start);}await _0x31bbd8[_0x593c('‫1a','s]Q7')](SendMsg,msg);})()[_0x593c('‫1b','sjMq')](_0x4067d9=>$[_0x593c('‮1c','JIFv')](_0x4067d9))['finally'](()=>$[_0x593c('‫1d','7[*o')]());async function start(){var _0x229fef={'ZJlTG':_0x593c('‫1e','4lHM'),'fCSDZ':function(_0x2440c0,_0x15cc8c){return _0x2440c0(_0x15cc8c);},'xiPWk':function(_0x53860e){return _0x53860e();},'GZTpJ':function(_0x53f5f9){return _0x53f5f9();},'ZbFjh':function(_0x451507,_0x10a875){return _0x451507(_0x10a875);},'YeZWt':function(_0x42038c,_0x316cc4){return _0x42038c(_0x316cc4);},'avNoM':function(_0x3d6d53,_0x4092e3){return _0x3d6d53>=_0x4092e3;},'OXuKu':function(_0x140a92){return _0x140a92();}};var _0x29719c=_0x229fef[_0x593c('‫1f','ZfMh')]['split']('|'),_0x1422da=0x0;while(!![]){switch(_0x29719c[_0x1422da++]){case'0':await _0x229fef[_0x593c('‫20','1yjQ')](wait,0xa);continue;case'1':await _0x229fef[_0x593c('‫21','JIFv')](sign1);continue;case'2':await wait(0xa);continue;case'3':await sign1();continue;case'4':await _0x229fef['xiPWk'](ls1);continue;case'5':await _0x229fef[_0x593c('‮22','CSop')](js);continue;case'6':await wait(0xa);continue;case'7':await _0x229fef[_0x593c('‮23','5H%4')](sign);continue;case'8':await _0x229fef[_0x593c('‮24','QAkH')](wait,0xa);continue;case'9':await ls();continue;case'10':await _0x229fef[_0x593c('‮25','5r4g')](wait,0xa);continue;case'11':console[_0x593c('‮26','k)Fq')]('\x0a==========\x20\x20开始签到\x20\x20==========\x0a');continue;case'12':if(_0x229fef[_0x593c('‮27','dpAG')](n,0xa)&&n<=0xe){await _0x229fef[_0x593c('‮28','s]Q7')](wait,0x5);await dk();}else{_0x229fef[_0x593c('‫29','^B1[')](DoubleLog,_0x593c('‫2a','IV%^'));}continue;case'13':await _0x229fef[_0x593c('‫2b','ox2o')](wait,0xa);continue;case'14':await _0x229fef[_0x593c('‮2c','k)Fq')](wait,0xa);continue;case'15':console['log']('\x0a==========\x20\x20开始打卡\x20\x20==========');continue;case'16':n=_0x229fef['GZTpJ'](local_hours);continue;case'17':console[_0x593c('‮2d','RNJW')](_0x593c('‮2e','ieP*'));continue;case'18':await qd();continue;case'19':await _0x229fef[_0x593c('‮2f','KNn4')](sq);continue;}break;}}async function dk(){var _0x4655e2={'nhvSO':function(_0x4ec495,_0x30b174){return _0x4ec495(_0x30b174);},'TPpWL':'gzip','wXvbx':function(_0x41e214,_0xf23a3b,_0xd6e963){return _0x41e214(_0xf23a3b,_0xd6e963);},'jfHYl':function(_0x24f287,_0x54bd28){return _0x24f287==_0x54bd28;},'xqDxU':function(_0x16ea36,_0x5f4425){return _0x16ea36==_0x5f4425;},'QPMxG':function(_0x2c9a61,_0x5e6e56){return _0x2c9a61!==_0x5e6e56;},'gOulL':_0x593c('‮30','4lHM'),'ejlPD':function(_0xf90bee,_0x118664){return _0xf90bee==_0x118664;},'rDsme':function(_0x1b51e2,_0x45c991){return _0x1b51e2===_0x45c991;},'HFAcP':_0x593c('‮31','I&B6')};let _0x3acb51={'url':hostname+_0x593c('‮32','R*9k'),'headers':{'Accept-Encoding':_0x4655e2[_0x593c('‮33','4lHM')],'Cookie':''+ck[0x0]}};let _0x357258=await _0x4655e2[_0x593c('‮34','A%li')](httpGet,_0x3acb51,'打卡赢水滴');if(_0x4655e2[_0x593c('‮35','MlR@')](_0x357258['code'],0x1)){_0x4655e2[_0x593c('‫36','MlR@')](DoubleLog,'\x0a打卡赢水滴：打卡成功');}else if(_0x4655e2['xqDxU'](_0x357258['code'],0x3f4)){if(_0x4655e2['QPMxG'](_0x4655e2[_0x593c('‮37','1yjQ')],_0x4655e2[_0x593c('‫38','I&vU')])){_0x4655e2[_0x593c('‫39','5r4g')](DoubleLog,'\x0a连续签到：失败\x20可能变量失效');}else{DoubleLog(_0x593c('‫3a','RhYF'));}}else if(_0x4655e2['ejlPD'](_0x357258[_0x593c('‮3b','R*9k')],0xe)){if(_0x4655e2['rDsme'](_0x593c('‫3c','R*9k'),_0x4655e2[_0x593c('‮3d','@6HV')])){DoubleLog(_0x593c('‮3e','6ALk')+_0x357258[_0x593c('‮3f','glk*')][_0x593c('‫40','RSKC')]);}else{_0x4655e2[_0x593c('‫41','[@BU')](DoubleLog,_0x593c('‫42','[@BU'));}}}async function sq(){var _0x1f4b3e={'NlGxm':_0x593c('‮43','I&vU'),'iGnag':function(_0x371e47,_0x42e19a,_0x105b60){return _0x371e47(_0x42e19a,_0x105b60);},'IqdAE':function(_0x536e63,_0x20a653){return _0x536e63(_0x20a653);},'FlpGe':function(_0x5ef847,_0x702889){return _0x5ef847==_0x702889;}};let _0x5ee0a6={'url':hostname+_0x593c('‮44','5r4g'),'headers':{'Accept-Encoding':_0x1f4b3e['NlGxm'],'Cookie':''+ck[0x0]}};let _0x5ca9c9=await _0x1f4b3e['iGnag'](httpGet,_0x5ee0a6,'一键收取');if(_0x5ca9c9[_0x593c('‫45','ieP*')]==0x1){_0x1f4b3e[_0x593c('‫46','Uit1')](DoubleLog,_0x593c('‮47','JIFv'));}else if(_0x5ca9c9[_0x593c('‫48','Tq@6')]==0x70){DoubleLog('\x0a一键收取：已经领取过了\x20不用重复完成');}else if(_0x1f4b3e['FlpGe'](_0x5ca9c9['code'],0xe)){DoubleLog('\x0a领水：未登录');}}async function js(){var _0x3e8c4d={'VPApe':function(_0x5093e5,_0x28ab79){return _0x5093e5(_0x28ab79);},'ZihQQ':_0x593c('‫49','t#]O'),'LTEyu':function(_0x3e28a2,_0x1496e6){return _0x3e28a2==_0x1496e6;},'AGcdA':function(_0x180fd0,_0x2994ea){return _0x180fd0(_0x2994ea);},'zLZAp':function(_0xaebe45,_0x49b27a){return _0xaebe45===_0x49b27a;},'EITGb':_0x593c('‫4a','RhYF'),'rUOZF':_0x593c('‮4b','R*9k'),'nbynq':function(_0x455adb,_0x5d96d7){return _0x455adb(_0x5d96d7);}};let _0x46a2f3={'url':hostname+'/ws/activity/xiaode_garden/watering?in=6M9%2BhSVlFE9BOliBClVe9ySY0gBe4a%2FqBx7GKmmLkfSIoKV8mNO6lk18iDFf3Z%2Fyg6BTJz9oGZ1dmIPk4X44ChWILYqpVXf57HfgidKrM7FqlcPKmIPD4jSC1jlJbsrdhxVG0mbzaH83Si8wjRXFSptUUrHtp3KPZ9BMpehivXPawZTgwqstZSWgDDIM5TnvI6Kx0mDKBb4qVgnBheel610vSZLrlpdRPPyNa5ZSJaM2B3Hjpcmy%2Fh0l13h9ZzqntA39Q1uy%2BaRBCXJPzUm2vlneenYY%2Fkv9rTg7F7Sx4XpAqPHBKLKyUY18WBzBLDakmLI7oZiLLd7fpZgKoQdzibsNK3ZhgehEgQijdEnoE%2B5vHzZ14n9SsJ5yj%2Bu4bHVTY8BYtazI%2Bt9Azsv%2FHg%2FKaVgpyjKl5YgsdOH7yQ0WO7HocFNupLmJK8wKh713PfENx%2F77LR7anmPj8kSbg5nvqr%2FA%2BRR4JY5aeGNpD84m3kELGXjuW8IgqlT%2Bdz4dLE7ocq4HJXQjNxCw3A74VdlXLfFArOosn3sY7J%2Br6%2BHoE25SrJxBD26HSxNVS1b6CkQh6hcNgL%2Fo8%2FDC%2FNlgHw2CprHtTcfPNblh0Or3jtg4L5dGf8qEcg6aYAlUpSwRY2h3%2F7urOdEYEine%2FTiJrtGxGVmbqa2OhyBk8fsUlqyPT%2FmwxSNZa1lbJ7K8i8WGn6TIrPYrtK2iTDFoZLujoQ%2FN1zn%2FYd13%2Bapj%2Fi43jb%2B8lsVqzfrh%2FFNlOZAiInp2LZ%2FboXRS3UxRw0JUFUjk0x594Q2H3YDZFRvMEf1qtsz7pLMW%2F8zwotESlbeVgpwtHYWNFv3SA5x9nBgxxB1Dt5pC%2FqsvI68s%2Bj0QRdzHDz2XNkQGyuFpzr0e2iSgFyK0mcNJmSZiw79XQgvneNUfp8%2BomAsWq1lwsU03y%2B%2Fdk8%2Bce1CZI58ss7b1RXwR9Tb4pCPVRdTwOvpU93M%3D','headers':{'Accept-Encoding':_0x3e8c4d[_0x593c('‫4c','I&B6')],'Cookie':''+ck[0x0]}};let _0x401bc2=await httpGet(_0x46a2f3,'浇水');if(_0x3e8c4d['LTEyu'](_0x401bc2[_0x593c('‮4d','1yjQ')],0x6b)){_0x3e8c4d[_0x593c('‫4e','7[*o')](DoubleLog,_0x593c('‫4f','%mb^'));}else if(_0x3e8c4d[_0x593c('‫50','glk*')](_0x401bc2['code'],0x7)){if(_0x3e8c4d[_0x593c('‮51','4E7n')](_0x593c('‫52','@6HV'),'sGfiY')){_0x3e8c4d[_0x593c('‫53','M)SA')](DoubleLog,_0x593c('‮54','ieP*'));}else{Change=resp[_0x593c('‫55','glk*')][_0x593c('‮56','I&vU')](/Change = "([\u4e00-\u9fa5]+)"/)[0x1];}}{if(_0x3e8c4d[_0x593c('‮57','RhYF')]!==_0x3e8c4d[_0x593c('‫58','I&B6')]){_0x3e8c4d['nbynq'](DoubleLog,_0x593c('‫59','@6HV'));}else{_0x3e8c4d[_0x593c('‮5a','pA73')](DoubleLog,_0x593c('‫5b','t#]O'));}}}async function ls1(){var _0x51a23e={'JGRKR':function(_0x153b4f,_0x4a5480){return _0x153b4f(_0x4a5480);},'JVBdt':_0x593c('‫49','t#]O'),'xNYzZ':function(_0x85b940,_0x4a5e53,_0x58c30c){return _0x85b940(_0x4a5e53,_0x58c30c);},'hvZCs':function(_0x52b91a,_0x2f4897){return _0x52b91a==_0x2f4897;},'gVlqL':function(_0x1d088a,_0x37ec4d){return _0x1d088a===_0x37ec4d;},'ooaVO':'hgwnK','MzAli':'gMoYG','valWn':function(_0x2b3b72,_0x1bc73b){return _0x2b3b72==_0x1bc73b;},'kFQtL':function(_0x40546b,_0x40ad20){return _0x40546b(_0x40ad20);},'FfGyb':function(_0x7d9374,_0x331db1){return _0x7d9374==_0x331db1;},'BueHk':function(_0x2cac7e,_0x168ed5){return _0x2cac7e!==_0x168ed5;},'QUPxl':'oFQVa','HgDFr':'UKxDb','sABVU':function(_0x23fbd0,_0x432e25){return _0x23fbd0(_0x432e25);},'hEEfu':function(_0x19aa27){return _0x19aa27();}};let _0x9c81e7={'url':hostname+'/ws/activity/xiaode_garden/task_rewards?in=uXIn7eUnmhuPxFr0AxWIL%2BMLao8NqyU80pv8j3GDsDmu%2FppSZydEslsjG9NebMUomv9aj0%2BfvZWFsZEUe6TBZTenHopbPWX1yt2pGH2XzXq7gD2fnG9Q6J22EhdJfLqt8PYOdh3QhhOFR%2B9GpFhrUzKS6yQXwAzIFTwnJrLNNMhq4eW4LsIeqXxC6c2S%2BIFGdQbgePRAYv5ZwDVJ2%2FIDnVF6KzKc88JUh0Pjrh0Agk0HgJZSW1JfnZp4vwFsumjKXsv6J4yc6dHmuAcLlCAKBI%2Bw9xVcUktOQqbAOyU9bCYCEeUlTopZ6LsTnGVjfJisn7D3YTP999zuzM39ZQxgFp9gDiqBBlWU4zsFzeDTx8B%2Br43K58O8nFwl%2FqW7i1aaOG44OAZ1WIuRbpTfDdcOWx1twnfhvjW0pStXAXwYtHwnOpTaDfztA7cu3tWV9c5AyweQu00fTvMh7rdGDxv0mWOk%2BKtvSsc1TIkAlbMAAfBhCDv35ULGGOWYas%2BXVKJbo%2BOISpzFbfVZRgO1FPXScrRurmLrnCir1CmvMBMRE5lUKjm0SS%2BGcICTdnWeZqcNLFTIWkx3orR9k6qNmdC0qFgQlBoe1MauF5zI7Gwib9%2FaYBbBngZ5qJYMGUF%2Bvq60LmHBRX%2FJr9tvH7SYEuhcJxRwOKwiVHa0QoGHAEqm1p%2FLu8HJrPbPaKTB9ggWeHDwpIRtOzYQ5GZTeFgpM20m6gMKRR8Ou%2FmejTVr9ddMS7PAVMP8JZB%2FeUOKqwdmIBXRPjJZAe3VmX9wM9OH7qCDinbH4ZS3o5FPzKxHDSg2K4yfiXvjKoWKNGr8ys5hjgBQNOniNdY8TxvK1EwC%2BGP%2Blq4XM4A762Xs4H1zq0Bpi8nos0rikxR4NNE82VlsDwBTo2Mt0EKtucU0BNSdwpGWw%2FEhTVYoz0WQTq69ZCgX9tz7phusDk%2BMBWCOEkPMuJCoPKlzVaYbY0rVhVvqdwznlLLWarJedWBNvnVge4bY0M9xpuSck6ThAFNg%2BFdwUJqzHVZ0Hcg%2BU%2FM%3D','headers':{'Accept-Encoding':_0x51a23e['JVBdt'],'Cookie':''+ck[0x0]}};let _0x112601=await _0x51a23e[_0x593c('‫5c','@6HV')](httpGet,_0x9c81e7,_0x593c('‮5d','Uit1'));if(_0x51a23e[_0x593c('‫5e','L75o')](_0x112601['code'],0x70)){if(_0x51a23e[_0x593c('‫5f','YLvr')](_0x51a23e[_0x593c('‮60','%mb^')],_0x51a23e[_0x593c('‫61','[@BU')])){try{VersionCheck=resp[_0x593c('‫62','I&B6')][_0x593c('‮63','Ghgp')](/VersionCheck = "([\d\.]+)"/)[0x1];}catch(_0x3e13d1){$[_0x593c('‫64','L75o')](_0x3e13d1,resp);}finally{_0x51a23e[_0x593c('‫65','pA73')](resolve,VersionCheck);}}else{_0x51a23e[_0x593c('‫66','k)Fq')](DoubleLog,_0x593c('‮67','IV%^'));}}else if(_0x51a23e['valWn'](_0x112601[_0x593c('‫68','pA73')],0x2)){_0x51a23e[_0x593c('‮69','d7!U')](DoubleLog,'\x0a浇水奖励：失败\x20可能变量已过期');}else if(_0x51a23e[_0x593c('‮6a','1yjQ')](_0x112601[_0x593c('‮6b','dpAG')],0x1)){if(_0x51a23e[_0x593c('‮6c','sjMq')](_0x51a23e[_0x593c('‮6d','KNn4')],_0x51a23e['HgDFr'])){DoubleLog('\x0a浇水奖励：领取成功');_0x51a23e[_0x593c('‫6e','yN6N')](DoubleLog,_0x593c('‫6f','M)SA'));await _0x51a23e['sABVU'](wait,0xa);await _0x51a23e['hEEfu'](js);}else{DoubleLog('\x0a连续签到：获得'+_0x112601[_0x593c('‫70','imy%')][_0x593c('‮71','s]Q7')]);}}}async function sign1(){var _0x20629c={'YitZK':function(_0x4c6857,_0xd5d470){return _0x4c6857(_0xd5d470);},'AuQVH':function(_0x370058,_0x4878c8,_0x3c9b74){return _0x370058(_0x4878c8,_0x3c9b74);},'ctjCh':function(_0x33bc74,_0x11cadf){return _0x33bc74==_0x11cadf;},'QwbzV':function(_0x2e49cf,_0x12b717){return _0x2e49cf===_0x12b717;},'MttPT':_0x593c('‮72','QAkH'),'HREqu':_0x593c('‫73','glk*'),'ZHTfx':function(_0x1e4c80,_0x17a677){return _0x1e4c80==_0x17a677;},'yYSqP':function(_0x478526,_0x118a73){return _0x478526(_0x118a73);}};let _0x1d1274={'url':hostname+'/ws/activity/xiaode_garden/task_rewards?ent=2&in=KU7Ez5v5DD9YnQ33jo%2FEMOAg0BqlKgaAao4A9ADhwJkBuX3RNv7174d%2B7yqhl5QMRAkGjyo3CHHovrJFcC8dkzq%2Be3Ar9rTwtljLnk9EpH518PVoIe%2FLfIGFcW2ZutPRCERVnLcbxEMZ1AkB8p9kbmbudYPQJ1oY5a0%2FlbXdkPTppkwC%2BBX7HjNabMMLsloxbmlm97k8VYBpGxONnvUfVBKflWX%2F6EIXFkUEwSpVaXNSPP5TViJ8TKWTlK7Gse4X8sw7XOVTrXAPjaxSHALEUyOpqBTANqO%2BvjdqXbiJeRBuVGdifjoyhwWdT2W4wnjI%2Br%2BUfZhQYpkDzuHaWrrkgskowooXVEqPMDl9n1T2KZhq9IS8YU8a4o3JrKgprS0PnX46%2Fn%2BHp6IkIw7NG8EESa%2ByvQz4tdFztNzQpoge0aOYjIjKkuh4EpxqFRMGe8%2FqfCqdD%2FTbOZ8g3WbIHFZzCPCcrNZUszjt1hDExpIhT8xCXJU%2F2STz9%2FG9edwLrYDOuu4y9MiuFJU43G9mmVdY9AxIHaylKgb1BDukJ3uvu8i%2F5EEAFecIfnBzhEwVHHiVw0zzRqP0yx8%2BCF2jJAWvhETS27DQknWLYqzxk8ZfAs8ajZAhuEfPzRy5EBWUkfJkNiCsYOo%2B2IICbGGoEfAHKz%2BfGEFzVJfxTATQNoxlaFS2DkPcxLqL11rT%2B8HeP341w0Q7aXN3SB8TgefFw7YdRzJtuqLM8ebGcqhbEoPW5amTXCpF4BJqIFxOKqo7WQjqi7KOjZFICh8WTbhZnDfQbKeTW%2BnDOwh3CHnidjGJZQvvgFQ1Wacd2lxk3MCnROhdZyGFC%2Bh0NtEoI2u4InnLow9CDCKiv9gQjHZ3u0jXbklR%2BuaWMDJs6l7C2ZXZ5uG6KI1EtVYSdFig3em9%2FGoE9e%2FGeX1dl83JAwsyNbrmhG%2FpJrVGKjrEZQJoVEjJwnQX%2Bruu6B0WNYrg8t5Pw0rrCoWs3y2oIKzMJN2Xc79bj9hXms6NXRX7rxTBteFRZ3UFpFyo8RgJN3nFAHStlMd6W3ci9qWWZhpB&csid=513d7430-393e-4311-b125-2e10569d633a','headers':{'Accept-Encoding':_0x593c('‫74','7[*o'),'Cookie':''+ck[0x0]}};let _0x2b35ba=await _0x20629c[_0x593c('‮75','n59C')](httpGet,_0x1d1274,'签到');if(_0x20629c[_0x593c('‫76','loxt')](_0x2b35ba['code'],0x1)){if(_0x20629c[_0x593c('‮77','ox2o')](_0x20629c['MttPT'],_0x20629c[_0x593c('‮78','KNn4')])){_0x20629c[_0x593c('‮79','1yjQ')](DoubleLog,_0x593c('‫7a','RNJW'));}else{DoubleLog(_0x593c('‫7b','QAkH')+_0x2b35ba[_0x593c('‫7c','RSKC')][_0x593c('‮7d','*^L@')]);}}else if(_0x20629c[_0x593c('‫7e','6ALk')](_0x2b35ba['code'],0x70)){DoubleLog(_0x593c('‮7f','CSop'));}else if(_0x20629c[_0x593c('‮80','MlR@')](_0x2b35ba[_0x593c('‮81','asLy')],0xe)){_0x20629c[_0x593c('‮82','M)SA')](DoubleLog,_0x593c('‮83','Tq@6'));}}async function sign(){var _0xcc3b9e={'QVkuX':function(_0x5aa595,_0x15ed71){return _0x5aa595(_0x15ed71);},'BmCKQ':function(_0x3c7724,_0x6f9e5,_0x551414){return _0x3c7724(_0x6f9e5,_0x551414);},'SeMmf':function(_0x30aa99,_0x17899a){return _0x30aa99==_0x17899a;},'fQBBH':function(_0x231e26,_0x4844e9){return _0x231e26!==_0x4844e9;},'gHYTf':'mDeXL','FyIzY':function(_0x4212db,_0x1063e3){return _0x4212db==_0x1063e3;},'IXdzJ':function(_0x5d880f,_0x4aaef4){return _0x5d880f===_0x4aaef4;},'HLPWk':_0x593c('‮84','RSKC'),'gJzYA':'XOJNX'};let _0x81bff0={'url':hostname+_0x593c('‫85','4E7n'),'headers':{'Accept-Encoding':_0x593c('‮86','YLvr'),'Cookie':''+ck[0x0]}};let _0x4d90f5=await _0xcc3b9e[_0x593c('‮87','@6HV')](httpGet,_0x81bff0,_0x593c('‮88','JIFv'));if(_0xcc3b9e[_0x593c('‫89','RSKC')](_0x4d90f5[_0x593c('‫8a','@6HV')],0x1)){if(_0xcc3b9e['fQBBH'](_0xcc3b9e[_0x593c('‮8b','7[*o')],_0x593c('‮8c','QAkH'))){_0xcc3b9e[_0x593c('‮8d','%mb^')](DoubleLog,'\x0a领水：未登录');}else{_0xcc3b9e[_0x593c('‮8e','5r4g')](DoubleLog,_0x593c('‫8f','I&B6')+_0x4d90f5['data'][_0x593c('‫90','5H%4')]);}}else if(_0xcc3b9e['FyIzY'](_0x4d90f5[_0x593c('‫91','4E7n')],0x70)){_0xcc3b9e[_0x593c('‮92','IV%^')](DoubleLog,_0x593c('‮93','yN6N'));}else if(_0xcc3b9e['FyIzY'](_0x4d90f5[_0x593c('‮94','glk*')],0xe)){if(_0xcc3b9e['IXdzJ'](_0xcc3b9e[_0x593c('‫95','RNJW')],_0xcc3b9e[_0x593c('‮96','1yjQ')])){resolve(Change);}else{DoubleLog(_0x593c('‫97','s]Q7'));}}}async function qd(){var _0x1925d9={'WPkhr':function(_0x1e1a4b,_0x163a02){return _0x1e1a4b(_0x163a02);},'oCLso':'gzip','pcZVG':function(_0xebef90,_0x2478e0){return _0xebef90!==_0x2478e0;},'oQefX':_0x593c('‮98','Tq@6'),'fvxSU':function(_0x3e5d09,_0x1c481a){return _0x3e5d09(_0x1c481a);},'pMkoC':function(_0x1a1dbb,_0x47aa96){return _0x1a1dbb==_0x47aa96;},'NmwNe':function(_0x2d4e71,_0x111895){return _0x2d4e71===_0x111895;},'Lasqq':_0x593c('‫99','s]Q7'),'FRaic':_0x593c('‮9a','imy%'),'QvoIX':_0x593c('‫9b','*^L@')};let _0x57f103={'url':hostname+_0x593c('‮9c','d7!U'),'headers':{'Accept-Encoding':_0x1925d9['oCLso'],'Cookie':''+ck[0x0]}};let _0x119aca=await httpGet(_0x57f103,_0x593c('‫9d',')Cj0'));if(_0x119aca[_0x593c('‫9e','sjMq')]==0x1){if(_0x1925d9['pcZVG'](_0x1925d9['oQefX'],_0x593c('‫9f','ZfMh'))){_0x1925d9['fvxSU'](DoubleLog,'\x0a连续签到：获得'+_0x119aca[_0x593c('‫a0','1yjQ')][_0x593c('‮a1','d7!U')]);}else{_0x1925d9['WPkhr'](DoubleLog,_0x593c('‫a2','[@BU'));}}else if(_0x1925d9[_0x593c('‫a3','A%li')](_0x119aca[_0x593c('‫a4','I&vU')],0x70)){if(_0x1925d9['NmwNe'](_0x1925d9['Lasqq'],_0x1925d9[_0x593c('‮a5','Ghgp')])){_0x1925d9[_0x593c('‮a6','^B1[')](DoubleLog,_0x593c('‫a7','JIFv'));}else{_0x1925d9['WPkhr'](DoubleLog,'\x0a领水：未登录');}}else if(_0x119aca['code']==0xe){if(_0x1925d9[_0x593c('‮a8','4E7n')](_0x1925d9[_0x593c('‮a9','A%li')],_0x1925d9[_0x593c('‫aa','YLvr')])){DoubleLog('\x0a连续签到：失败\x20可能变量失效');}else{_0x1925d9[_0x593c('‫ab','JIFv')](DoubleLog,'\x0a签到：已经领取过了\x20不用重复完成');}}}async function ls(){var _0x1346f7={'EOjUj':_0x593c('‮ac','d7!U'),'uzoZJ':function(_0x4f1e56,_0x4aa63b,_0xaae9b3){return _0x4f1e56(_0x4aa63b,_0xaae9b3);},'zpSHG':function(_0x147c24,_0x506383){return _0x147c24!==_0x506383;},'oDzmt':'lUcxm','ZrhkT':_0x593c('‮ad','asLy'),'tBFnz':function(_0x11928f,_0x401109){return _0x11928f(_0x401109);},'mELqH':function(_0x225656,_0x29415e){return _0x225656==_0x29415e;},'FBAXO':function(_0x1fb75f,_0x28bb92){return _0x1fb75f===_0x28bb92;},'sUTRN':'lUcEe'};let _0xecf1ee={'url':hostname+'/ws/activity/xiaode_garden/receive_water?in=GjHYJYatki%2FBuT3j6nWg%2BoQL8D5wLfgtWmmYqYNVExXWS0USEE20PMcHV8d2x2Ytels3cVQt0%2B563yRa47S5ChC3To0glMZYHppdU9KUXn501GvFxipQU4apghbdLhp2APYSW1gJ0vAVnNVny0z4e71z1%2ByRcN2NYVfNN%2B6U1oZtF9Z%2BbYlUcwJTY8D7zPkQ47xWLwwVQ71%2FdLEW387Uef3egBALF3pZCfG%2BszBt29ONcDKf7P%2B6HtG9cI%2F8UCmF1E8gjd7tRAL%2BNZ6u%2FEgJTrjbfXxiSBM5xGfGwbjJS70g9REsJbUnoKbOHktAuNfoQ0hLO6QQorpyaDa%2Fxk2eCZddKLgMt%2FtW96TdiqISXlLMdqszQuMkxLwNgi9IKK5xuW6u7uF9vk7yKkoRCRRS6rsvLNMe5Bxd%2BeBsPrdMGF%2Fn85uqmgGhbvAiVuX6StlA1yptu1ibgKk4PAiqMTDA%2BeuotpXDXLwP3HLhfRlogtS4pDmmQ4w5sY8Obp8T%2F1YT3WtB79DhOcqzG2l7ndwuEiqUMUnVxmCcDxk8UNha9jR6020TmOi3rd1fRp%2FLxWNxD0mKk6RZTQeHQnYnfVHlPv0XxPcTvRJpDErkoeeYg%2F28Yp4CwtdgUasIjjGa0BzEb3%2FhUQ%2FEFMEyzZZ0XRp4vca386Cq7YX1LrqEvBtQT%2FuN1DLNtbATuNWrn0FMMZIsMouKq3E1xNgcbd%2Fi8Pv0tX8RW8NivgLQqezG0gQ8JFzJCv86Lgv4EHO1yY0ILYjMRQkVnwCfj1pAc7aypnA2bTCoU7klOwYCenzITmYbBPH7faJRfXHwx1%2BytoR3WWQtiLtbbDGSddEWixWdI%2FtgkJDIG9Lyx5LmGyBMaOgNEBGABqeQx1BU2riQNqetR%2FGRvVD0SDm6Zu4U6DhrGEIPPXjTMgdN1RrbEhoQDqa4jrMi6XngMNx3VAi8GOH%2FyN60tztdBqzKn7V39yd53YW9wYV24E42eRRVK4QbTXmtVnsekrT%2Bfe9BbtaaqUMSUciXH%2F8C1A%3D%3D','headers':{'Accept-Encoding':_0x1346f7[_0x593c('‫ae','Tq@6')],'Cookie':''+ck[0x0]}};let _0x3fd946=await _0x1346f7[_0x593c('‫af','imy%')](httpGet,_0xecf1ee,'领水');if(_0x3fd946['code']==0x1){if(_0x1346f7[_0x593c('‮b0','5H%4')](_0x1346f7['oDzmt'],_0x1346f7[_0x593c('‮b1','s]Q7')])){DoubleLog(_0x593c('‮b2','MlR@')+_0x3fd946[_0x593c('‮b3','Tq@6')][_0x593c('‮b4','MlR@')]);}else{DoubleLog('\x0a签到领水：获得'+_0x3fd946[_0x593c('‮b5','QAkH')][_0x593c('‮b6','pA73')]);}}else if(_0x3fd946['code']==0x8c){_0x1346f7[_0x593c('‫b7','pA73')](DoubleLog,_0x593c('‫b8','IV%^'));}else if(_0x1346f7[_0x593c('‫b9','sjMq')](_0x3fd946[_0x593c('‫ba','YLvr')],0xe)){if(_0x1346f7[_0x593c('‮bb','RSKC')](_0x1346f7[_0x593c('‫bc','1yjQ')],_0x1346f7[_0x593c('‮bd','A%li')])){_0x1346f7['tBFnz'](DoubleLog,_0x593c('‫be','QAkH'));}else{DoubleLog(_0x593c('‫bf','I&B6'));}}}function Version_Check(_0x3b4b68){var _0x12c116={'iRjus':function(_0xea820d,_0x25bf8d){return _0xea820d(_0x25bf8d);},'QHqUQ':function(_0x4dac86,_0x41d4d2){return _0x4dac86===_0x41d4d2;},'KqqSQ':_0x593c('‮c0','6ALk'),'bipqf':function(_0x53ab64,_0x5ad90f){return _0x53ab64===_0x5ad90f;},'TjHxX':_0x593c('‫c1','@6HV'),'VXQWn':_0x593c('‮c2','M)SA'),'gVdTw':'nXRWq','wVWEd':function(_0x5cb031,_0x2e57ee){return _0x5cb031===_0x2e57ee;}};return new Promise(_0x41d1e4=>{var _0x20fa19={'eAxFz':function(_0x803325,_0x375c7c){return _0x803325(_0x375c7c);}};let _0x3ffe52={'url':_0x593c('‫c3','glk*')+_0x3b4b68+_0x593c('‮c4','5H%4')};$[_0x593c('‫c5','glk*')](_0x3ffe52,async(_0x1e351a,_0xf5c424,_0xf3f52)=>{var _0x492bb6={'ZABCl':function(_0x288f7a,_0x393b24){return _0x12c116[_0x593c('‮c6','s]Q7')](_0x288f7a,_0x393b24);}};if(_0x12c116['QHqUQ']('PrwYt',_0x12c116[_0x593c('‫c7','5H%4')])){_0x492bb6[_0x593c('‫c8','JIFv')](DoubleLog,'\x0a连续签到：已经领取过了\x20不用重复完成');}else{try{if(_0x12c116[_0x593c('‫c9','n59C')](_0x12c116['TjHxX'],_0x12c116['VXQWn'])){_0x20fa19[_0x593c('‫ca','imy%')](DoubleLog,_0x593c('‫cb','1yjQ'));}else{VersionCheck=_0xf5c424[_0x593c('‮cc','I(7m')][_0x593c('‮cd','t#]O')](/VersionCheck = "([\d\.]+)"/)[0x1];}}catch(_0xaa843c){if(_0x12c116[_0x593c('‮ce','QAkH')]!==_0x12c116[_0x593c('‮cf','4lHM')]){DoubleLog(_0x593c('‮d0','sjMq'));}else{$[_0x593c('‫d1','A%li')](_0xaa843c,_0xf5c424);}}finally{if(_0x12c116['wVWEd'](_0x593c('‫d2','^B1['),'GGuva')){DoubleLog(_0x593c('‮d3',')Cj0'));}else{_0x12c116[_0x593c('‫d4','@6HV')](_0x41d1e4,VersionCheck);}}}},timeout=0x3);});}function Version_Check1(_0x47f78a){var _0x1d4067={'FHLQz':function(_0x3c38a3,_0x4a4164){return _0x3c38a3!==_0x4a4164;},'QLSBO':_0x593c('‮d5','dpAG'),'xnwuT':function(_0x18ddbf,_0xb6b674){return _0x18ddbf(_0xb6b674);}};return new Promise(_0x4224a3=>{var _0x5a9af1={'ojgrF':function(_0x2f8c59,_0x1eaf3f){return _0x1d4067[_0x593c('‫d6','glk*')](_0x2f8c59,_0x1eaf3f);}};let _0x2427e6={'url':_0x593c('‮d7','L75o')+_0x47f78a+_0x593c('‮d8','[@BU')};$['get'](_0x2427e6,async(_0x15e29b,_0xf6c95c,_0x5d3333)=>{try{Change=_0xf6c95c[_0x593c('‫d9','dpAG')][_0x593c('‫da','M)SA')](/Change = "([\u4e00-\u9fa5]+)"/)[0x1];}catch(_0x4ec331){if(_0x1d4067['FHLQz'](_0x1d4067[_0x593c('‮db','6ALk')],'qDiCG')){$[_0x593c('‫dc','ZfMh')](_0x4ec331,_0xf6c95c);}else{_0x5a9af1[_0x593c('‮dd','^B1[')](DoubleLog,'\x0a打卡时间不对\x20跳过');}}finally{_0x1d4067[_0x593c('‮de','pA73')](_0x4224a3,Change);}},timeout=0x3);});};_0xod8='jsjiami.com.v6';







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

