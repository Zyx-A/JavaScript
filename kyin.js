/**
 *抓https://api.kaixinyf.cn/passport/UnionLogin链接下的
  返回体里access_token，refresh_token，请求体里device-id 用&依次连接放变量里 (注意：退出软件重新登陆才能抓到)
 * ========= 青龙--配置文件 =========
 * 变量格式: export kyin_token='token@token'  多个账号用 换行 或 @分割
 *  
 */
const $ = new Env("快音");
var _0xodn='jsjiami.com.v6',_0xodn_=['‮_0xodn'],_0x550c=[_0xodn,'woIeHgJG','ZDzDlVPCrQ==','WcOmw7B7wqg=','woktOcOQ','woTCtsOEw459','wplaDn1F','wp83OMO9w6PCs3s=','wpjCl8Oaw5pw','w74Gwr1BJQ==','Bj7Dh8OxwpM=','WOWkiei1hizljJrlm43mn67nnLc=','wofCl1s=','w6kGwqdE','wrvDgsKMwp/Cng==','IyPCoUPDoQ==','Y8Ks5py95aOO5Ya+5Y+l6YSOw5k=','PMKdwqnCqcO5','w6XCgiTCl24=','FsOawqcbw5I=','wpA7w7HCkgI=','BcOfQ8K1CBbCuhDCqQLDvcOheVtrw69Jw5PDvMKAYXJ9LzpQwrFBHRDDsSE7F8Ojw5/CnsO0JcOWw4vCm8O0OTRKMWtBwoMfwqFcwrNlw4t+JsKPZHPDuiomdMOowqzDk3d5UMKYw6TCggRpZ2PDryfDpn8=','CDbCrw==','dHPClMONw5M=','WmfCicO3w7s=','F8KyWMOy','wpYpw60zw7s=','w57Dm38b','K8KjwpTChUE=','w6DChzbCnXU=','fUDCkcKSwog=','wpHCoFTjgpZ0D0rDsMO/44G/wp9RfH0Yw53ChzbDrMOSwr4ZwrnDt8ON6LyP5puZwqo=','wqAmw7Q=','wrRj44Krw5wfeVJe44Oaw7LCoA17wpjChiDClMOtFcO2wpwd6Lyp5pi+wro=','w4LClsOjw7Rx6KeK5p6c5ZOP5paL5o+hGsKgIBwfwq7DpMOcM1R+w5o=','wok5OMOLw6c=','M3A0esOO','wpN6I8OINg==','w6rDslk3Rw==','NicpBcO/','IcKIccOPMA==','f8KVw7dP','AHTCkTLDqQ==','Q8OAw7dpwoU=','wp0mw43CoRg=','QsOlwpoxw58=','f2XCmsOZw7o=','wpPDrmfDicOJ','WEd6KMOJ','w5XDg8OQwrVp','w78VwoJfCg==','GATDhsOWwok4wo0aRcKCXMONwpTDt8OrwoEoEnd7BsKDwqwYNRRgB8OiQsOwPTPDqMKNYnUdZsKfb8KDWnU9M2vCsUBCw73DrwrDs1pdw69NBsK2w4fDiAwPwq/Cgj1Hw7ppwokEZMOnNVcOwoQWMyHCgQ==','w4zClsOj','wqssw6c=','UGnChMO5','X2fClMOjw7c=','wpoUJCBc','wrLnpoPnuarmlqLnmqnvv4w=','GMK4T8O4JwPDkA==','w6xvwpLDmhY=','ccOjwrE5','a1HCh8K3Mw==','wp3DpHHDu8Os','Sl3CscKYAw==','w5VJw7InQS0=','cuWkiei1huS6isKk6K+a56uJ5ZOc5bG+6K+2wqzCmg==','FADDoMOWwqo=','w51qw5QEaQ==','wogtw7c0w53CosKKXMOHwow=','w5Mww5w=','w6jlv7zlrI3nrKrlpK7otIws5Y2e5Zib5p6l55+C','w5RXwrI=','w5l2wqbDjC8=','BMOEYMOJUQ==','f0jCrA==','w5rDucOR','wrYFw5bCtx0=','cHNhB8OZ','Iwx3','wpwawpxo','dMOOwoEew44=','WXhuOMO8','w480wrzDl8Oi','w6Mbwrl1HA==','U8Oww796wrE=','C8KrwrnCoUs=','GsO6XcOLQg==','wpbDjGLCo3gQ','woJ2McOMCkoOw6U=','wpDDl8KC','MQ4oGMOs','wqDCoWsCw4w=','PhtXQsOa','w5Isw5w=','wqPDgUXjg4VSDcO2w4/CrOODisKxQT50w6hCw4gWw68EUcKewo8iRui9m+aYkWs=','Iei9guWYnDVPwowIwqnDgitCOsKbf19GSHvCgsK7Xg==','w4skX8KFRR4=','w7sdwoLDpsOs','wrQPw47CpRE=','woZFBQ==','w7fDhRM=','wpVPPQ==','w7Fo44KJNMO2wq/Ci1LjgrDDiC1hM3sLEsOpTMKHS8OzG+i8g+aagsKZ','w7HCs18cw67opZnmnJrlkIHmlZvmjaV/LlkgB8KZXgI8KcKjAw==','M8OawrA=','wospw6sjw7Y=','w4EtwojDuMOi','dGvCscKQAg==','LiFxcMOX','LcK5wpzCpcOq','wqPmjJvnj5Xvv48=','XGzCo8KjwrE3Og==','wpAqH8Oww4Y=','wowXJsOCw4g=','FsK8UMOnIwE=','wrrDkkfDng==','Mxko','w45O44KswrIRwqELw5XjgbkhW3bCgmHCpsKkw6PDssOiwoPCn8K8WxUX6L+B5pqvRg==','wok3OcOM','w5XDkMKm','w6vDr2I9bQ==','LiQNC8OP','w5zDnMOuwo5l','FcKWwozCmVbCqj8=','worCnsO8w5VL','w6bDmncofw==','woF+JnZb','GcOEZMKxCUXDu1g=','wofChMO1w7g=','w4zCuAHCklk=','w77DmRDDgX8=','IeitoeaygHHkv4/mgpdJwqnDgitCOsKbf19GSHvCgsK7XsKZ','wpcnw74=','PMOgYDQ7','wpp2BQ==','wodLIMO/GQ==','QMO0w7p6wpU=','RmnCs8O0w618w7ZZ','Og4qLw==','WDJD44Ccw6FIwqbCpwTjgLLCsMKGwp1sw6nCgMKVSMOOUFdjw5TChsKq6LyN5pucw44=','cui/rOWaveaVvOaPqxDDucOvXh7CsMKGwp1sw6nCgMKVSMOO','HB/DlQ==','w6wjw6DDgi3opafmn7Xlk6rmlLrmjoHCrsKhw7/DuMKAeTjCrAxkRRo=','M8O3ZcOWQg==','wqHCqXNPAA==','QnLCm8K1BA==','wrPCqcOAw7p8','NuaNs+eMn+Wlo+i0m3Hljo3lmaXmnJDnn5o=','cFlF','Z0nCg8OEw4c=','XcOKwqUUw74=','wqLCoWt6AA==','AcKywpPCo1k=','DsOKW8KpHkk=','AcKyb8O/NA3Dm8KR','eU5HAg==','wp7DgcK4wojCkcKX','w4vDgHo=','fMOywqMdw4vCjMOwwrsHw6o=','W8O8w51D','FMK/wqrCjn0=','w4fDslEg','wrrxjLODwqPmn53lnYvohoPmnavCplPDq8O4w694wo/CvMOsQsOV6Ly/56iz5Lmh5buq6Ia85p+mCR8OAg==','C/C6sI5x5pua5pWI5Yes5aytw4U2','w6vDhRnDjHY=','N2nCjC/DtDYxw4LCnsOLEuWFuOaKjOWIvRU=','wqgLw5LCsQDCqw==','w7Hku7PotIrljoTCoMKHwrcyFjZ/LlkgBw==','flPCv8KbwpU=','44CDQ8KuwrYSw5zjgZ0+6L2j5puX5L+H55qe6LW05Y+85pW257myw5rDpsOv','UcOGwroTYQ==','HsKkVcOlGRDDmsKdODY=','wqozDcO3w6M=','woMTw4nDlA0=','wpQ8w684w6Q=','w5sswojDl8OG','wrTDimLClns=','acO3w6x9wrE=','wrzCu8Kbw5sCCnLDg8OAw53lvbPlpIbjg6HnrLkg','woTDgsKawo7CgQ==','wrHCl8OXw5R+','44CCw6x7w55ywqbjgrDCkei8qeabjOS+hueviSU=','a8OEw54xZg==','w6cTwpc=','wpboraHms7TDluS/juaBiH/Dk8OQw4BOw7DDjCg9w5EnWmXDiloL','w5PCr3vDoMKZ','wofCl1tsOsOG','wp9JNC/CicO8wqs=','VMOqw5pI','ccOswqwpVg==','w7/CkDPDsiBIeEnDmBXDk1FzVcOaaeW/suWluuW8quWui+esvVHDkMKPaMO0WsKLXn8taMOiODF3w7g=','wrAbw7Ynw6c=','wpfDk0DDssOO','L8KKwp/Co0Q=','HcK2w7dOwqnDhcKiw61fwrktXMK6cBXDiOW/ieWkk+etheWJv+WOleW+qOiZt+S6n+WLgRDCq8KVwrTCmjLDlTzDosOlPBsQwrzCqmo=','DsOifMKuNA==','PlcE','w4ZDwrPjgr0nw6EHwpEt44O+wq7CocO/w7jCgHk4wqwMZEUaIBfDtei+k+aZplQ=','w5vovpzlmYc0w7LCucKfCMKcw4gtYTN7CxLDqUzCh0vDsw==','XMOqw5M=','fsOneQ==','RUPjgIBXw7NowoPDt+OBj8OHw4gNYsKwwrvCrMOFwr3Dv8KpwolT6LyZ5piKAQ==','wqsWwoPDusOn6KaW5p6r5ZGj5pWK5o2uw5fCtMKcMsOMBMO2KnXDj8O/DQ==','ZjvDlg==','w4bDt8OEwoVK','wpvCglJRMA==','O+mdl+aKg+WOseaUpumWpH/otprov4bCqw==','VsOEw7kXfQ==','wqTCkzFOw6LCpVxSecOQwoDDih7CmRzDkui3huS4muaXtOeYocO3RcObw4zCjzpKfcOkw5d8wqpNNy4U','KRgQUcKjw6vCpg==','wrPDrkrDnMOI','ByfCr0vDucKmO8OuJ8KTwpYdw4rClMKpFA8hCAwKecOBwoEVWsOCwrJjS8KwfUJ7S8OOTcO/w5vCk8KLHQ==','EQDDm8KIwpFjw4tNS8KFUcKFw5bDvcOt','wojDnmASwqvDvg4dKcOQw7zCmUfDlk7Cm8OmwpvCocKHwr4dwojChcOtcUp1w7fDmHHCuUA4NX/DjzYxIghyOQtmw75pZhPCocKzw5HCisKzYQU8wqXCqMK8WgPCnU/Ds0Qge8Obwr1kw5EKB3oLUQ/DoQ0Iw6FkMDDDk8OdMmtkwqzDscOTG1AWZxLCqsO3w50xZFgGw58kYsK4woIzwr3CtsKYwrIew7EVwqASwqvDtwPDmHTCusKEw7YHwpzClcKGwqg7ABDDkcKOIA==','wq1fOnBm','5Yir5paGVg7DpsK+w7o=','bjXDhXM=','L8OGcxURAcK6KX1TYMOK','O8OUwqMO','w7IQw7bDmgo=','wppPPis=','wpXDjGTDpcOf','HeWKvOaVugfDu8KTw7rCvu+9uOaKlOWKjw==','LsOzZMOWRlrCpA==','w5BVw5s=','CMK5wpnCtsOTw5LDiQ==','XcOzwrk1w6M=','wqrCrMOqw5NF','w5lbwrbDsRDCpcORYzomwrfDsi7DpcO5w6LDpWjCi8K9JifDoxdRYnvChATDgwzCtDlbGMOVwovDpsOIwqnCisOkwq/DrsKwcSTDvAxHDMOTw6hzw6HDgyJmRw4KX8KkFsOvw6zDrkTCokgOwpkowpzCnmXDum3Djh4uwodJwq55w63DlTsywqrDj0xcY8Okw7E0HxfCnGHCnsKawrHDmcKvTyTDmsKseMKuwqgDwojCmhHDj8KbKcO8STl7w5R5P10Aw7kBNMONw5XDh8KBTsOqIMK4w5Ecw77CgsKwdWhFwpTCq8KSUkvCt8OKwpjCqsOfwpLCh8KiBBPCicK1Z8KHTMOIwpBKwoTDlAsMwpfDjz3Ds8KSf8OzKkcCw6/Cs8OiQsOUwp3CssOYwpFaw6rDrsOcw4HDpxzCucKbwpZIQEXDlsKrccKEIsKpw4wgwr7DhRZfwqZnZ8KSw6d3VxnDshbCpDrCnsOkw4kNw5ttw41SegfCllYRw7Z8wrLChFvCjW1Iw5PDtMKDwpXCu8OYw4PCscKMKlnDmwnCrcOoJEAtw7ZKXxZhUWkcSR7DlcORfRYZRU3Dl8O5w6HCgcKnfhECw5bChjzClcOfw71OwpLCh8KJKjUZwp/ChFNgT8KsC8Kyw6nDoifDkMOuSGYJw6/Cn1Esw5oow6zDucKHQUU5WQvCrMO5wrPDoBfCoFHDrcKzwq/DosKywohhwoZoScO8w54Xw6jChj4cVQ7Ds8OuIMKcMQ1sQgXCuxw1woHCnDLCrFlEworDpcK+PVE1w7gUOHvCpcK8wp8tw7Myc8KMw57Dj8OKwoDCvFfDkMKgYnfCln/CgCpRwo3CpcKWw5FWw7fCqcOfwppjw5zCtHbDo1ld','5b+i5a2h56yh','wr7DoHjCt24=','w6jlv7zlrI3nrKrvvIU=','wo/CmcOjw6h+Tmk=','DsOmWsK9CA==','wqATHMOtw7I=','WMOdwpQEXg==','wpDDri/Cow==','bcOTwp8ew6c=','wo/DtVvCom4=','wpDCt0gBw6/Dk8Ou','wr5Sw4LCpcKnRQk=','cVDCjMKOPw==','w5jCunvDs8KCQcK2aMO0RsKTwrPCvz/DhcO7wrIbwpPDjVvDnFbDh8K6WhAvS8KEfhzDhcOsw53CkUAvwovCgi8=','wrfCnwzDlsOYwrxjc8O1HsK5wqzDiG8=','w4HDicKKZCE=','YMO1wqE0XcKLNsOgwpB9GmnCmycbMRkjw7fDhwrDq0xowqLDjMKMDQ08wpTCkW0RBEnCkcOFRsOcw7rDjMOSwo4lw7ticcK3V8OEw6oIw5bDgMORGj9iwqV0wrgxYC9UNMKhw7NBwqDCt8Kkay1Jw5VXRxtxOcKrwrPCqcOMwrPCqHbCjMKnw4kZXMOyw6p3w7Y0TMKjw5/DncKfw6HChcKEcMOwwqQrw6M8KkYASShFwrnDl8OwLcK2GS3DumzDusOGw57DmcOXB8OEdW3DqBwTG8K0w6E2wq7CuMKUZFwfPy3Dt8O9DcODMx8/wo05IXtYK0AlUcO6wr/DlMKDwrYhw57DlsOrw4vCr1LCuMOIwpDDrmERNzhVIx1vdDdhwrHDmEPDq8OGKMKlasOHMcOxVMOBCcOBwrV2wqjDhsKcTcOpMMKWSDg5wpNhHwDDmDtUd8OOw4/CqMKQw5vCuzTDrcOPPWwDLsO3LEU9JsK8wrIBdy/Clmp8JHnCk3/DihlrXMKrw65Yw6zCuFDDu8KNC8KJwqnCtsOfw6bDmsKZe8KjRUjCtcK8DsOOOMKOw5k4IhnCuBnCtQ7CvUlrI8OMUsK3NcOcYcKSUMKOHGkPwrHCj8KPZzLDgMKFQ8KqwrlrFsKTw74NwqrDpMOXesKRakHDmxPCtcOew6PDtcOiw7XDncKEwrpiw7FHEsK/NHzCuwHDi2fDgzfDpcO0fivCjgdXJMOZNkQ9w7gRwrjDrwBbHn0cwpXDgxlUV0oSw6IJwrY7woTCmVoewqpZwpDCmBk4w5zDvCxKwqY4Dz/ChMKMVB3DhB3Cjg/DtFDCmBHCi1PDssK2bEHCoMOzIA==','wpQgw5w+w4Y=','w5Erw77Dli8=','cVNREsOswrzDsQ==','w7/lvq3lrpPnrb7vvIc=','woc4w7zDmRY=','LcOKdBU=','Q3vCh8KJwoM=','woHnp4fnuY/mlqPnmYPvva8=','w5xZwqHDtQ==','MMOTwrEDw7zDiMOAamvCqsKQwok=','w5TCr3vDog==','w4oiw4jDkyV/QkrCqA==','wpLDn2jDv8O+','X8OgwoIaw44=','woHnp4fnuY/mlqPnmYPlpYTotJ5N5Y6l5Zug5p+A552s','wpvDncKR','cGfCtMKiwr85Ow==','SE9jOMOu','w5Y3w4/DiAkhCBbCo8O6wrNbJ8OMw4N0w4fCqU7DpcOCTsOfcMOqw4DDtkMcw4vCusONW8OUwrbCn8KRJsOIw4fDtcKvw63CtFlFSQ==','D8OGw5PCh1LCsDPCkhjDlCvCvsKUag==','wphIMkJX','HcOeRMKtJFzDsE3CowLDusK8fF1twqcRw5vDsMKPLX96KBVXw6QFVwzCrTNsOsOmw47CvsOALsOsw5LCu8K0FA9HdkBVwpAAwox3wpc5w6lhO8KMSlHDn3AYXsKwwo/Dq1ZgbcKyw7zChB1ODkPDtwDDnAnDuT3CmcOewpNiRkFAVB3DpltDw6/Cph4Tw7HCtsK0w7DCo8KPwq7DqFDCqMKEwrBAwoNBwqlRw7ZSPcKJwqfCvsOUYnbCmkXDn8KNYDUAwqETXWrDhcOLwo8KaMOWwrbDg8KHw7/Dr8Kbw4/Cj37DtMKUdcKFH8OQw7w8wqdLPm5RGhTCqMOXwpE/wrPDp2NCw7PDhcKqNknClRLDp3vCm8OHw6TDoMKSwrzDvMKtEnPCr8Kuw4jDsMKTdTXDqcKRcxTDuF7DkcOhwqMWwo5jwpbChcOtYMKuVDMSwrcUacKbeBxUDT3DqwfCmi87wpEKw4BPFsOPeAJ5MVQGw7LCsD51BS8mw5FawrPCpBI+ZcKKw6jDl8OvwqcQw5p9RTsKw5nCgRXDr8KRw7rCg2Qjw6pGOD3Ci8K6G8OASBQ5EE7ChcOfOQvCpMK4bxo1WsOxwqkww6RnKcKnw5zCpcKzWTctccOxw5Y6wrNWw69BEmJUIwhDw5xCw6gQwr7ChlHCsMKUHsKDwqHDhGs9YHTCpMKwwpzDrMKOw6d5w5QFw41Iw7sywpnDg8KdYsKjw7nCusOaw6k4wrXCug4zAyhhwp8LGEY7w4cDwq0uw6zCiRzDsRoUDcOwwrgRw7UCasKiwqEew7RVwqbDuTzCohhAYn/DqcOnw7rCkBMYesKgdsOiw51Bd1IHw5drFsKuGcKDw6JRY1TCuUk+wq7Cuh1/CcKxwrhF','6Laz5LiV562X55Oh','wqNMNsO/Cg==','w7jDhRDDow==','OcOsdsKxLQ==','w7HotIzkuL7mnrXorbHvv5c=','w5vDs8OFwoVOQDo=','wqLDp1zCoEQ=','wqTnlobmiLvvvak=','PMKkwpjCtsO1w5XDi8KJ','CcKawp7Ch13CuCbCng==','w47phr/lur3ml6Dnmr7vv5k=','wpV2C8OW','w4bnj7nphYLkv7Tpo57vvp4=','wp05PsOZ','wrk6w7bDnwrDqgPCiw==','wqbCvgl4wr7DpsKBw48=','aDXDnXPCp2hp','wr4dw58ow74=','MsKPdsOuHw==','PMKvS8OMIg==','AzzCvA==','cuivj+awoSzDsF/CqMOyXh7CsMKGwp1sw6nCgMKVSMOOUFdjw5Q=','XmnChw==','I8OxcwcG','w5Qyw47DlSI=','w5sxwqRdHA==','Jj47LcO3','Z+S/sumiquWnouS7tR3lh5Yfw67lsbborZzmjJ/njqU=','w5lXwozDvyk=','w6jlp43otrXCu+WOgOWbieacpuecpA==','C8Kcwpo=','UHnCoMK8wrkzPh1ow6TDnGVUwo0Mwp5nw4sawp9Nw7zCtsKNwrjCk8ONwocaBDpcKkPCjRvDiMKIIWEqwovDiU/DkMKSbA==','dsK4JcKVCQ3Dsw==','w5BMwqHDpBDDrMKhOD14w7zDt3LDqcO4w4HDp3TCpcOSLAY=','wqovw77CgBE=','f8O/wr4Dw6fDgsKww78KwrE+CsOmJFDCgcKnwqFdYTzCr8KTBRBZwrnDn8Ogw5Nnwoxzwr7Cr20JTsOgw7k/BMO3NsOJwoNfUCE1QSZlcDcTUU8=','dAMMCsOswrLDrMOdEcOdw7jDhsKiEg==','w73CmVzDoMKm','w5HCrWzDpsKCCMOGM8OzGMOYwrbDow==','w58gw5jDnQloeE3CpMKkw7hee8OAw4JXw4XCtWDCisOIb8KaVMKow6fCjVdNw6rCmMOPHcO/w53Cp8KbOMOAw5/Do8KUw5zCmCFuVylJwqdoPEsiZsKlJ8KpFhLDmsKQw4QcwrZmw64xRiQubcK5BMO7YWICwrdyw4klY8K3XsKyRALDjkwKT8K3w5XCigVbH8K2w6TDpVDDpRDDr1TDlEFZw6stXsOXCcOpwovCmnwZw7kNw7xRw7jCucOpw6gYw5XDm1kTesOawovDgMKaK0jDpcKqw4/Dl33Dl8KmLkkMNCrDusOqPMKbw7DCnTlONcOnw7t/wqEjM0BfI8KWOEk5wocbwp/CjCHCn19RYnlBdGXCmMOybcOoMU8ywokYwrrCtMKgwp0kw77DsMKJwrMzPMKMwq5uwqvChlh6ABTDm1jCjMO/NDjCq8KoNcOXM8KzwoLDvjfCvMOZUjXCuxcBw7vCgyPDi8OxKMONwovDpTXDmcKDw7gpw4AcGcOYDkpSw7BhwpxBwp/CrQgmwqU8C8KwecKmM0rCpFLDvsOEfsKoQsOoBcObTMOSw5bDg8OywpHDoGjDuj7DlCQVwqMFRDppw4TCgxLCksKQw4jCrcOaw7DCsnIuw5zChcKzw5jDuRxrw4dfwrwqTMOzw4Q1wrnDlBNFw58ew5PCnDYsKErCh8KbZMOSwq/DuxpXScKGAEvCoQHCpcKaw5Agw5nCqkpMwqPCmm0OZMKSwojDv8Ogw4nDoC5uwql1fMK+cT7DtlEuwrfDh8ORwqhUw60mwprDjMOpwrPChTRrw4nCn8OPwq08TcK+wpzDjWfCqsKPHMKnworCn0ooUiTDo8OqTUPCrMOLwqgew4gZfkpkw41casK3VRbCiDrDvxRROcO8wqwSP8Kow5TDlFNeDMOSJ8OOw4jDtsKRw55AXS/DvmTDvkVqey7CicK6BGEmwonDn8KCRsK5GsKxwopJw5zCpWzCjUfDs0F3U8KgQ8OuVMKlwpY5wpvDlWcVw69SGAnDksOnHsKLAMKYw6LCqWsLwp3DowJww7tQwoZswrrCikU9OyQ2WMOAIsKaCgFfwpLDicOKVw==','wrYOw5bDmS4=','PsO+U8KqAg==','w43DgWgW','Hi8WO8OI','wqMdw4zCrBM=','AiPDvsOTwrI=','w6jmjKznjKDvvoE=','w73lioXmlYbCk8KawpnCisKR5aeq6LSzwo7ljIblm4vmnLXnnIkq','wrPDhUU=','wqbDuGrCoGQ=','wp1nCxjCrQ==','VcO6wqwhw6I=','wqIIw5HDuyY=','wph5LmF5','GeaPt+eNu++/jg==','MhM8P8OPwrPCoA==','NzwLI8Ol','w44aw4zDlTQ=','wq8EFARK','w7sHwqNNIw==','w6rDvUQLwqw=','G8Ohwpg3w4A=','GR7DlsODwoJNw4Q=','w4tIwrnDvRc=','jfYsjLifKRakmi.WRcoLdm.pTKv6MW=='];if(function(_0x82f7,_0xfcccee,_0x23bbf0){function _0x20c714(_0x5cbc85,_0x208f8c,_0x54b86c,_0x1d0274,_0x5ad476,_0x548dd1){_0x208f8c=_0x208f8c>>0x8,_0x5ad476='po';var _0x15ae92='shift',_0x5addb6='push',_0x548dd1='‮';if(_0x208f8c<_0x5cbc85){while(--_0x5cbc85){_0x1d0274=_0x82f7[_0x15ae92]();if(_0x208f8c===_0x5cbc85&&_0x548dd1==='‮'&&_0x548dd1['length']===0x1){_0x208f8c=_0x1d0274,_0x54b86c=_0x82f7[_0x5ad476+'p']();}else if(_0x208f8c&&_0x54b86c['replace'](/[fYLfKRkWRLdpTKMW=]/g,'')===_0x208f8c){_0x82f7[_0x5addb6](_0x1d0274);}}_0x82f7[_0x5addb6](_0x82f7[_0x15ae92]());}return 0xf70dd;};return _0x20c714(++_0xfcccee,_0x23bbf0)>>_0xfcccee^_0x23bbf0;}(_0x550c,0x1e6,0x1e600),_0x550c){_0xodn_=_0x550c['length']^0x1e6;};function _0x56ae(_0x5c730c,_0x4aaba6){_0x5c730c=~~'0x'['concat'](_0x5c730c['slice'](0x1));var _0x54c394=_0x550c[_0x5c730c];if(_0x56ae['twEnug']===undefined){(function(){var _0x24d88f=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x558288='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x24d88f['atob']||(_0x24d88f['atob']=function(_0x5111e5){var _0x5e6212=String(_0x5111e5)['replace'](/=+$/,'');for(var _0x20917b=0x0,_0x55b9cd,_0x31544f,_0x44aaf5=0x0,_0xc7bbb9='';_0x31544f=_0x5e6212['charAt'](_0x44aaf5++);~_0x31544f&&(_0x55b9cd=_0x20917b%0x4?_0x55b9cd*0x40+_0x31544f:_0x31544f,_0x20917b++%0x4)?_0xc7bbb9+=String['fromCharCode'](0xff&_0x55b9cd>>(-0x2*_0x20917b&0x6)):0x0){_0x31544f=_0x558288['indexOf'](_0x31544f);}return _0xc7bbb9;});}());function _0x1259d1(_0x586c74,_0x4aaba6){var _0x226f19=[],_0x1a420a=0x0,_0xaaba3d,_0x2b40be='',_0x12f1f2='';_0x586c74=atob(_0x586c74);for(var _0x1dd107=0x0,_0x4b9daa=_0x586c74['length'];_0x1dd107<_0x4b9daa;_0x1dd107++){_0x12f1f2+='%'+('00'+_0x586c74['charCodeAt'](_0x1dd107)['toString'](0x10))['slice'](-0x2);}_0x586c74=decodeURIComponent(_0x12f1f2);for(var _0x38ff02=0x0;_0x38ff02<0x100;_0x38ff02++){_0x226f19[_0x38ff02]=_0x38ff02;}for(_0x38ff02=0x0;_0x38ff02<0x100;_0x38ff02++){_0x1a420a=(_0x1a420a+_0x226f19[_0x38ff02]+_0x4aaba6['charCodeAt'](_0x38ff02%_0x4aaba6['length']))%0x100;_0xaaba3d=_0x226f19[_0x38ff02];_0x226f19[_0x38ff02]=_0x226f19[_0x1a420a];_0x226f19[_0x1a420a]=_0xaaba3d;}_0x38ff02=0x0;_0x1a420a=0x0;for(var _0x59bc89=0x0;_0x59bc89<_0x586c74['length'];_0x59bc89++){_0x38ff02=(_0x38ff02+0x1)%0x100;_0x1a420a=(_0x1a420a+_0x226f19[_0x38ff02])%0x100;_0xaaba3d=_0x226f19[_0x38ff02];_0x226f19[_0x38ff02]=_0x226f19[_0x1a420a];_0x226f19[_0x1a420a]=_0xaaba3d;_0x2b40be+=String['fromCharCode'](_0x586c74['charCodeAt'](_0x59bc89)^_0x226f19[(_0x226f19[_0x38ff02]+_0x226f19[_0x1a420a])%0x100]);}return _0x2b40be;}_0x56ae['czbBoY']=_0x1259d1;_0x56ae['JLjyNV']={};_0x56ae['twEnug']=!![];}var _0x5a727b=_0x56ae['JLjyNV'][_0x5c730c];if(_0x5a727b===undefined){if(_0x56ae['bhjirf']===undefined){_0x56ae['bhjirf']=!![];}_0x54c394=_0x56ae['czbBoY'](_0x54c394,_0x4aaba6);_0x56ae['JLjyNV'][_0x5c730c]=_0x54c394;}else{_0x54c394=_0x5a727b;}return _0x54c394;};const notify=$[_0x56ae('‮0','cfb[')]()?require('./sendNotify'):'';const Notify=0x1;const debug=0x1;let ckStr=process[_0x56ae('‮1','OOqJ')][_0x56ae('‫2','3k#3')];let msg='';let ck='';let VersionCheck='1.2.0';let Change='修复错误、增加一些任务';let thank='感谢\x20不知名大佬指点\x20\x0a';async function tips(_0x3048d4){var _0xb4b8af={'sLWbN':function(_0xdc215f,_0x269609){return _0xdc215f(_0x269609);},'eMCME':_0x56ae('‫3','VOzO'),'pomJf':function(_0xe3728c,_0x333ba2){return _0xe3728c(_0x333ba2);},'OZoKE':function(_0xbb6d76,_0x131966){return _0xbb6d76(_0x131966);}};let _0x5bed1e=await _0xb4b8af[_0x56ae('‫4','u8qZ')](Version_Check,_0x56ae('‫5','Y4d0'));let _0xba6bfb=await Version_Check1(_0xb4b8af['eMCME']);let _0x18c3b4=_0x56ae('‫6','Pvj[')+_0x5bed1e;_0xb4b8af['pomJf'](DoubleLog,_0x18c3b4+_0x56ae('‮7','W4yx')+_0xba6bfb);_0xb4b8af[_0x56ae('‫8','k*yB')](DoubleLog,''+thank);DoubleLog(_0x56ae('‮9','#bZ9')+_0x3048d4[_0x56ae('‫a','%)VT')]+_0x56ae('‫b','v[Gj'));_0xb4b8af[_0x56ae('‮c','Xtb%')](debugLog,_0x56ae('‮d','NLIN')+_0x3048d4);}!(async()=>{var _0x1e31b9={'SkGOa':function(_0x706802,_0x1c7f6b){return _0x706802(_0x1c7f6b);},'OZZyN':function(_0x5bba8b,_0x1854f6){return _0x5bba8b<_0x1854f6;},'otvhw':function(_0x488216,_0x479441){return _0x488216===_0x479441;},'AglYf':_0x56ae('‮e','W4yx'),'YrXPV':function(_0x63816d,_0x32edb5){return _0x63816d+_0x32edb5;},'WgqcX':function(_0x43de1a){return _0x43de1a();}};let _0x5a0bf5=await getCks(ckStr,_0x56ae('‫f','#8p#'));await _0x1e31b9[_0x56ae('‮10','zyIx')](tips,_0x5a0bf5);for(let _0x3bd4da=0x0;_0x1e31b9[_0x56ae('‫11','f1Bh')](_0x3bd4da,_0x5a0bf5[_0x56ae('‫a','%)VT')]);_0x3bd4da++){if(_0x1e31b9[_0x56ae('‮12','Pm[g')](_0x56ae('‮13','&uLt'),_0x1e31b9[_0x56ae('‫14','XxMm')])){let _0x592f39=_0x1e31b9[_0x56ae('‫15','VOzO')](_0x3bd4da,0x1);DoubleLog(_0x56ae('‮16','MO$2')+_0x592f39+'\x20个账号】--------');ck=_0x5a0bf5[_0x3bd4da][_0x56ae('‫17','cfb[')]('&');_0x1e31b9[_0x56ae('‫18','5H*7')](debugLog,_0x56ae('‮19','$4)6')+_0x592f39+'\x20账号信息:\x0a\x20'+ck);await _0x1e31b9[_0x56ae('‫1a','dVDQ')](start);}else{console[_0x56ae('‮1b','&uLt')]('\x0a\x20【debug】===============\x20这是\x20'+tip+_0x56ae('‫1c','MO$2'));console['log'](options);}}await SendMsg(msg);})()[_0x56ae('‫1d','Pvj[')](_0x4b949f=>$[_0x56ae('‮1e','^umZ')](_0x4b949f))[_0x56ae('‫1f','4MNK')](()=>$[_0x56ae('‮20','VOzO')]());async function start(){var _0x43ff93={'pznxx':function(_0x5765b7,_0x30dcc2){return _0x5765b7(_0x30dcc2);},'KSowt':function(_0x19e771){return _0x19e771();},'cIKkO':function(_0x618859){return _0x618859();},'tdEao':function(_0x39f19b,_0x50e108){return _0x39f19b>=_0x50e108;},'OxWcL':function(_0x323936,_0x5a8a19){return _0x323936<=_0x5a8a19;},'ATpzE':function(_0x334e91,_0x19467f){return _0x334e91===_0x19467f;},'HybOw':'BXNBf','jgVEC':function(_0x9ad256,_0x1d1c97){return _0x9ad256(_0x1d1c97);}};_0x43ff93[_0x56ae('‮21','W4yx')](DoubleLog,_0x56ae('‫22','XxMm'));await _0x43ff93[_0x56ae('‫23','Pm[g')](signIn);await wait(0x3);await _0x43ff93['cIKkO'](lx);n=local_hours();if(_0x43ff93['tdEao'](n,0x8)&&_0x43ff93['OxWcL'](n,0x9)){if(_0x43ff93['ATpzE'](_0x43ff93[_0x56ae('‮24','iY80')],_0x43ff93[_0x56ae('‮25','u8qZ')])){_0x43ff93['pznxx'](DoubleLog,_0x56ae('‮26','3k#3'));await _0x43ff93[_0x56ae('‮27','5WQQ')](dl);}else{console[_0x56ae('‮28','6lwG')](_0x56ae('‫29','f1Bh')+tip+_0x56ae('‫2a','Pm[g'));console[_0x56ae('‫2b','VOzO')](data);console[_0x56ae('‮2c','$4)6')](_0x56ae('‫2d','LXqD')+tip+_0x56ae('‫2e','&uLt'));console[_0x56ae('‫2f','#bZ9')](JSON[_0x56ae('‮30','MO$2')](data));}}else{_0x43ff93[_0x56ae('‮31','^umZ')](DoubleLog,_0x56ae('‮32','Xtb%'));}_0x43ff93[_0x56ae('‮33','dVDQ')](DoubleLog,_0x56ae('‮34','OOqJ'));await _0x43ff93['cIKkO'](zc);}async function signIn(){var _0x5b393b={'ErLNb':function(_0x2c2a3e,_0x3fa11d){return _0x2c2a3e(_0x3fa11d);},'XGDSQ':_0x56ae('‮35','Tx[l'),'GuXdW':function(_0x3ca501,_0x32b114,_0x2e082a){return _0x3ca501(_0x32b114,_0x2e082a);},'LSMbp':function(_0x4c7e3b,_0x5d3ad3){return _0x4c7e3b==_0x5d3ad3;},'suaBj':function(_0x23b67e,_0x17a2d7){return _0x23b67e===_0x17a2d7;},'JfFXf':_0x56ae('‮36','iY80'),'qemmF':function(_0x241492){return _0x241492();}};let _0x5e29c1={'url':_0x56ae('‮37','P8xv'),'headers':{'Host':_0x56ae('‫38','TshW'),'platform':'Android','client-v':_0x5b393b['XGDSQ'],'device-id':''+ck[0x2],'access-token':''+ck[0x0]},'body':'refresh_token='+ck[0x1]+_0x56ae('‮39','OOqJ')};let _0x486ed3=await _0x5b393b[_0x56ae('‫3a','(z!B')](httpPost,_0x5e29c1,_0x56ae('‮3b','Tx[l'));access_token=_0x486ed3[_0x56ae('‫3c','#bZ9')][_0x56ae('‫3d','4)v0')];refresh_token=_0x486ed3[_0x56ae('‮3e','O]NT')]['refresh_token'];if(_0x5b393b[_0x56ae('‫3f','3Yr*')](_0x486ed3[_0x56ae('‫40','4MNK')],0x0)){if(_0x5b393b['suaBj']('lDhaq',_0x5b393b[_0x56ae('‮41','iY80')])){DoubleLog(_0x56ae('‮42','3k#3'));await _0x5b393b['qemmF'](openbox);}else{_0x5b393b['ErLNb'](DoubleLog,'\x0a资产查询：'+_0x486ed3[_0x56ae('‫43','aYbv')]);}}else{DoubleLog('\x0a刷新token失败\x20原因未知\x0a');console[_0x56ae('‮44','CQSf')](_0x486ed3);}}async function openbox(){var _0x12e385={'HPzHZ':_0x56ae('‮45',')WeO'),'PodmJ':'5.20.02','ASwzC':function(_0x395897,_0x1db07,_0x499e86){return _0x395897(_0x1db07,_0x499e86);},'KMvxs':function(_0x12c434,_0x27668b){return _0x12c434==_0x27668b;},'cMmxs':function(_0x1b6408,_0x43b81d){return _0x1b6408==_0x43b81d;},'YKVUp':_0x56ae('‮46','3k#3'),'zXUms':function(_0xbd07ea,_0x1e4346){return _0xbd07ea(_0x1e4346);}};let _0x51fdb6={'url':'https://h5.kaixinyf.cn/api/task/clock_sign_in','headers':{'Host':'h5.kaixinyf.cn','platform':_0x12e385[_0x56ae('‮47','5H*7')],'client-v':_0x12e385['PodmJ'],'device-id':''+ck[0x2],'access-token':access_token},'body':_0x56ae('‮48','FZM5')};let _0x2fd3f2=await _0x12e385['ASwzC'](httpPost,_0x51fdb6,_0x56ae('‫49','5H*7'));if(_0x12e385[_0x56ae('‫4a','XxMm')](_0x2fd3f2['code'],0x2711)){DoubleLog(_0x56ae('‮4b','5H*7')+_0x2fd3f2[_0x56ae('‫4c','5H*7')]);}else if(_0x12e385[_0x56ae('‫4d','5WQQ')](_0x2fd3f2['code'],0x0)){if(_0x12e385[_0x56ae('‮4e','zyIx')]!==_0x12e385[_0x56ae('‮4f','W4yx')]){if(data){console['log'](_0x56ae('‫50','Pvj[')+data);msg+='\x0a\x20\x20\x20\x20'+data;}}else{_0x12e385[_0x56ae('‮51','3k#3')](DoubleLog,'\x0a开宝箱：获得'+_0x2fd3f2['data']['reward_amount']+'金币');}}else{_0x12e385[_0x56ae('‫52','XxMm')](DoubleLog,'\x0a开宝箱失败\x20原因未知');console['log'](_0x2fd3f2);}}async function lx(){var _0x2cc9d9={'ZKxKd':_0x56ae('‮53','v[Gj'),'xvKgt':_0x56ae('‫54','&uLt'),'ohEnU':'Iiksg','oxYub':function(_0x3d6b73,_0xd35e8c){return _0x3d6b73(_0xd35e8c);},'KqotU':function(_0x1e77fe,_0x128212){return _0x1e77fe==_0x128212;},'rrWYS':function(_0xa31c1e,_0x2de177){return _0xa31c1e(_0x2de177);},'nrxUf':function(_0x2b9341,_0x1c731a){return _0x2b9341!==_0x1c731a;},'MuJBG':_0x56ae('‮55','NLIN')};let _0x4991b4={'url':_0x56ae('‫56','Pvj['),'headers':{'Host':_0x56ae('‫57','iY80'),'platform':_0x2cc9d9['ZKxKd'],'client-v':_0x2cc9d9[_0x56ae('‮58','gbMJ')],'device-id':''+ck[0x2],'access-token':access_token},'body':_0x56ae('‮59','W4yx')};let _0x209ece=await httpPost(_0x4991b4,'离线收益');if(_0x209ece['code']==0x2711){if(_0x2cc9d9[_0x56ae('‫5a','Pm[g')]===_0x2cc9d9[_0x56ae('‮5b','3Yr*')]){_0x2cc9d9['oxYub'](DoubleLog,'\x0a离线收益：'+_0x209ece[_0x56ae('‮5c','Tx[l')]);}else{DoubleLog(_0x56ae('‫5d','XxMm')+_0x209ece[_0x56ae('‮5c','Tx[l')]);}}else if(_0x2cc9d9[_0x56ae('‫5e','f1Bh')](_0x209ece[_0x56ae('‮5f','4)v0')],0x0)){_0x2cc9d9[_0x56ae('‫60','Xtb%')](DoubleLog,_0x56ae('‫61','&uLt')+_0x209ece[_0x56ae('‮62','FZM5')][_0x56ae('‫63','O]NT')]+'获得'+_0x209ece[_0x56ae('‫64','Pvj[')][_0x56ae('‮65','3Yr*')]);}else{if(_0x2cc9d9['nrxUf'](_0x2cc9d9[_0x56ae('‮66','iY80')],_0x56ae('‫67','3k#3'))){DoubleLog(_0x56ae('‮68','&uLt'));console['log'](_0x209ece);}else{console[_0x56ae('‮69','cfb[')](message);}}}async function zc(){var _0x1f60bc={'aoYkJ':function(_0x1a142c,_0x1e3257){return _0x1a142c(_0x1e3257);},'VaIKw':_0x56ae('‮6a','Xtb%'),'rbPVf':'5.20.02','PexlQ':function(_0x189849,_0x3bf6ee,_0x469905){return _0x189849(_0x3bf6ee,_0x469905);},'UUTGr':function(_0x47a6d7,_0x3bec99){return _0x47a6d7==_0x3bec99;},'TGAtV':function(_0x4abf63,_0x496a3d){return _0x4abf63(_0x496a3d);},'WJRoY':function(_0x25a64b,_0x495502){return _0x25a64b==_0x495502;},'jqumX':function(_0x46efaa,_0x51b0a4){return _0x46efaa>=_0x51b0a4;},'EUFxm':function(_0x252191,_0x44b29a){return _0x252191===_0x44b29a;},'IrwGd':_0x56ae('‮6b','Tx[l'),'mTcwd':function(_0x1676f3){return _0x1676f3();},'BBpqZ':'GirfJ','yHtaY':'qhOkX','pJkdW':function(_0x37f528){return _0x37f528();}};let _0x2c85a2={'url':_0x56ae('‮6c','3Yr*'),'headers':{'Host':_0x56ae('‫6d','u8qZ'),'platform':_0x1f60bc['VaIKw'],'client-v':_0x1f60bc[_0x56ae('‫6e','(z!B')],'device-id':''+ck[0x2],'access-token':access_token},'body':_0x56ae('‫6f','5WQQ')};let _0x3f3cd9=await _0x1f60bc['PexlQ'](httpPost,_0x2c85a2,_0x56ae('‮70','cfb['));if(_0x1f60bc[_0x56ae('‫71','&hr#')](_0x3f3cd9[_0x56ae('‫72','k*yB')],0x2711)){_0x1f60bc[_0x56ae('‫73','5WQQ')](DoubleLog,_0x56ae('‮74','Pm[g')+_0x3f3cd9[_0x56ae('‫75','MO$2')]);}else if(_0x1f60bc[_0x56ae('‫76','XxMm')](_0x3f3cd9['code'],0x0)){DoubleLog(_0x56ae('‮77','OOqJ')+_0x3f3cd9['data'][_0x56ae('‮78',')WeO')][_0x56ae('‫79','u8qZ')]+_0x56ae('‫7a','%)VT')+_0x3f3cd9['data']['userInfo'][_0x56ae('‫7b','&hr#')]+_0x56ae('‫7c','f1Bh')+_0x3f3cd9[_0x56ae('‮7d','zyIx')][_0x56ae('‮7e','f1Bh')]['balance']);if(_0x1f60bc['jqumX'](_0x3f3cd9['data'][_0x56ae('‮7f','(5u6')][_0x56ae('‮80','#bZ9')],0x1)){if(_0x1f60bc[_0x56ae('‮81','Pm[g')](_0x56ae('‮82','#8p#'),_0x1f60bc[_0x56ae('‫83','#8p#')])){console[_0x56ae('‮84','P8xv')]('\x0a\x20【debug】===============\x20这是\x20'+tip+_0x56ae('‫85','6lwG'));console[_0x56ae('‮86','W(l8')](url);}else{n=_0x1f60bc[_0x56ae('‫87','4)v0')](local_hours);if(_0x1f60bc[_0x56ae('‫88','3Yr*')](n,0xc)&&n<=0xc){if(_0x1f60bc[_0x56ae('‫89','cF#F')]!==_0x1f60bc[_0x56ae('‫8a','wTA3')]){DoubleLog(_0x56ae('‫8b','5WQQ'));await _0x1f60bc['pJkdW'](tx);}else{try{VersionCheck=resp['body']['match'](/VersionCheck = "([\d\.]+)"/)[0x1];}catch(_0x5e53b1){$['logErr'](_0x5e53b1,resp);}finally{_0x1f60bc[_0x56ae('‫8c','FZM5')](resolve,VersionCheck);}}}}}}else{_0x1f60bc['TGAtV'](DoubleLog,_0x56ae('‫8d','5H*7'));console[_0x56ae('‫8e','u8qZ')](_0x3f3cd9);}}async function tx(){var _0x38612f={'EgsfI':function(_0x538382,_0x5976d2){return _0x538382(_0x5976d2);},'dbmhw':_0x56ae('‮53','v[Gj'),'jXwgq':_0x56ae('‮8f','Xtb%'),'MWScW':_0x56ae('‫90','aYbv'),'khNJj':_0x56ae('‫91','FZM5'),'zGEtm':function(_0x3ce1ea,_0x26c59b,_0x9b6d18){return _0x3ce1ea(_0x26c59b,_0x9b6d18);},'SUdoy':function(_0x5af077,_0x402fb5){return _0x5af077==_0x402fb5;},'AYYwf':function(_0x80c0d4,_0x4c7811){return _0x80c0d4!==_0x4c7811;},'oxumu':'qTvVd','rSLuH':function(_0x11ae3a,_0x358967){return _0x11ae3a(_0x358967);},'dGQVH':function(_0x279852,_0x3366f2){return _0x279852===_0x3366f2;},'BqfRv':_0x56ae('‫92','%)VT')};let _0x2b17c8={'url':_0x56ae('‫93','3k#3'),'headers':{'Host':_0x56ae('‮94','Tx[l'),'platform':_0x38612f['dbmhw'],'content-type':_0x38612f['jXwgq'],'client-v':_0x38612f[_0x56ae('‫95','Pvj[')],'device-id':''+ck[0x2],'origin':_0x38612f['khNJj'],'x-requested-with':'com.kuaiyin.player','Cookie':_0x56ae('‮96','Pvj[')+access_token},'body':_0x56ae('‮97','3Yr*')};let _0x5db09e=await _0x38612f[_0x56ae('‮98','f1Bh')](httpPost,_0x2b17c8,'提现');if(_0x38612f[_0x56ae('‫99','5WQQ')](_0x5db09e[_0x56ae('‫9a','OOqJ')],0x2711)){if(_0x38612f[_0x56ae('‫9b','wTA3')](_0x56ae('‫9c','%)VT'),_0x38612f['oxumu'])){_0x38612f[_0x56ae('‮9d','TshW')](DoubleLog,_0x56ae('‫9e','5H*7')+_0x5db09e['message']);}else{_0x38612f['EgsfI'](DoubleLog,_0x56ae('‮9f','cfb['));console[_0x56ae('‮a0','iY80')](_0x5db09e);}}else if(_0x38612f[_0x56ae('‮a1','XxMm')](_0x5db09e[_0x56ae('‫72','k*yB')],0x2)){if(_0x38612f[_0x56ae('‮a2','4MNK')](_0x38612f[_0x56ae('‫a3','3k#3')],_0x56ae('‮a4','f1Bh'))){_0x38612f[_0x56ae('‮a5','(z!B')](DoubleLog,_0x56ae('‮a6','NLIN')+_0x5db09e[_0x56ae('‮a7','wTA3')]);}else{resolve();}}else{DoubleLog('\x0a提现失败\x20原因未知');console['log'](_0x5db09e);}}async function getCks(_0x39656a,_0x1ad92e){var _0x4dafc8={'AORLt':function(_0x23fc30){return _0x23fc30();},'eBeol':function(_0x5e2a11,_0x58503f){return _0x5e2a11!==_0x58503f;},'nhdAd':'IRgHL','icDVO':'pnjuE','btwae':_0x56ae('‫a8','wTA3'),'DSHxs':_0x56ae('‮a9','3Yr*'),'DTOXU':function(_0x36ac52,_0x43ab42){return _0x36ac52!==_0x43ab42;},'Lpzxk':_0x56ae('‮aa','s^xw')};return new Promise(_0x24c008=>{var _0x40265c={'AHtns':function(_0x2846e3,_0x4f02fe){return _0x2846e3===_0x4f02fe;},'zkJAo':_0x4dafc8[_0x56ae('‮ab','cF#F')],'guimc':_0x4dafc8[_0x56ae('‮ac','OOqJ')]};let _0x7655f=[];if(_0x39656a){if(_0x4dafc8[_0x56ae('‫ad','O]NT')](_0x39656a[_0x56ae('‫ae','TshW')]('@'),-0x1)){_0x39656a[_0x56ae('‫af','FZM5')]('@')['forEach'](_0x581d2f=>{var _0x493186={'fJTUb':function(_0x3bba5f){return _0x4dafc8[_0x56ae('‫b0','s^xw')](_0x3bba5f);}};if(_0x4dafc8['eBeol'](_0x4dafc8[_0x56ae('‫b1','#bZ9')],_0x4dafc8[_0x56ae('‮b2','VOzO')])){_0x7655f[_0x56ae('‮b3','zyIx')](_0x581d2f);}else{_0x493186[_0x56ae('‮b4','5H*7')](_0x24c008);}});}else if(_0x39656a[_0x56ae('‫ae','TshW')]('\x0a')!==-0x1){_0x39656a[_0x56ae('‮b5','(z!B')]('\x0a')[_0x56ae('‮b6','zyIx')](_0x281505=>{var _0x2f3073={'vNuWi':function(_0x4579ab,_0x359b5d){return _0x4579ab(_0x359b5d);}};if(_0x40265c['AHtns'](_0x40265c[_0x56ae('‫b7','5H*7')],_0x40265c[_0x56ae('‮b8','cF#F')])){_0x2f3073[_0x56ae('‫b9','TshW')](DoubleLog,_0x56ae('‫ba','6lwG'));console[_0x56ae('‮bb','^umZ')](result);}else{_0x7655f[_0x56ae('‮bc','cF#F')](_0x281505);}});}else{if(_0x4dafc8[_0x56ae('‮bd','cfb[')]===_0x4dafc8[_0x56ae('‮be','P8xv')]){_0x7655f['push'](_0x39656a);}else{_0x24c008(Change);}}_0x24c008(_0x7655f);}else{console[_0x56ae('‫8e','u8qZ')](_0x56ae('‮bf','aYbv')+_0x1ad92e);}});}function Version_Check(_0x5d00c){var _0x268bb4={'FutML':function(_0x509828,_0xb275ba){return _0x509828===_0xb275ba;},'haiwd':_0x56ae('‮c0',')WeO'),'LPiir':function(_0x1379ef,_0x507582){return _0x1379ef===_0x507582;},'ILSHC':_0x56ae('‮c1','Nc0g'),'ecApN':function(_0x545d7f,_0x3a0682){return _0x545d7f!==_0x3a0682;},'iQfIQ':_0x56ae('‮c2','O]NT'),'TUMDv':function(_0x4c0f5a,_0x10c613){return _0x4c0f5a(_0x10c613);}};return new Promise(_0x4d103c=>{var _0x365e04={'aHWvK':function(_0x586884,_0x34a03b){return _0x268bb4[_0x56ae('‫c3','%)VT')](_0x586884,_0x34a03b);}};let _0x14ba92={'url':_0x56ae('‮c4','5WQQ')+_0x5d00c+'.js'};$[_0x56ae('‮c5','P8xv')](_0x14ba92,async(_0x1b5035,_0x16f475,_0xfe8dfa)=>{try{if(_0x268bb4[_0x56ae('‫c6','W(l8')](_0x268bb4['haiwd'],_0x268bb4[_0x56ae('‮c7','W(l8')])){VersionCheck=_0x16f475[_0x56ae('‮c8','#8p#')][_0x56ae('‫c9','Pm[g')](/VersionCheck = "([\d\.]+)"/)[0x1];}else{ckArr[_0x56ae('‫ca','OOqJ')](item);}}catch(_0x28aeab){if(_0x268bb4[_0x56ae('‮cb','u8qZ')](_0x268bb4[_0x56ae('‫cc','Nc0g')],_0x56ae('‮cd','Xtb%'))){$['logErr'](_0x28aeab,_0x16f475);}else{if(debug){console['log'](_0x56ae('‮ce','k*yB')+tip+'\x20返回数据==============');console[_0x56ae('‮cf','f1Bh')](_0xfe8dfa);console['log'](_0x56ae('‮d0','3Yr*')+tip+_0x56ae('‮d1','5H*7'));console[_0x56ae('‫2b','VOzO')](JSON['parse'](_0xfe8dfa));}let _0x5b4826=JSON[_0x56ae('‮d2','zyIx')](_0xfe8dfa);if(!_0x5b4826)return;_0x365e04[_0x56ae('‮d3','6lwG')](_0x4d103c,_0x5b4826);}}finally{if(_0x268bb4[_0x56ae('‫d4','&hr#')](_0x56ae('‮d5','Y4d0'),_0x268bb4[_0x56ae('‫d6','wTA3')])){_0x268bb4[_0x56ae('‮d7','#8p#')](_0x4d103c,VersionCheck);}else{console['log'](_0x56ae('‮d8','O]NT')+_0xfe8dfa);msg+=_0x56ae('‮d9','#bZ9')+_0xfe8dfa;}}},timeout=0x3);});}function Version_Check1(_0x3d48c1){var _0x1dd3b5={'MczYe':_0x56ae('‮da','VOzO'),'LDEtp':_0x56ae('‫db','%)VT'),'DqXID':function(_0x2bc97c,_0x13cc29){return _0x2bc97c!==_0x13cc29;},'cUfCF':_0x56ae('‮dc','3k#3')};return new Promise(_0x3048b5=>{var _0x1a1353={'YEhnn':function(_0x234c02,_0x549ac2){return _0x234c02(_0x549ac2);},'EtOmP':_0x1dd3b5[_0x56ae('‫dd','W(l8')],'OYMTh':_0x1dd3b5[_0x56ae('‮de','iY80')],'xzDiG':function(_0x1593e3,_0x80a2cc){return _0x1dd3b5[_0x56ae('‫df','Tx[l')](_0x1593e3,_0x80a2cc);},'TWGNu':_0x1dd3b5[_0x56ae('‮e0','MO$2')],'QKsyk':_0x56ae('‫e1','cF#F')};let _0x596a8c={'url':_0x56ae('‫e2','TshW')+_0x3d48c1+_0x56ae('‮e3','5H*7')};$[_0x56ae('‫e4','f1Bh')](_0x596a8c,async(_0x326de0,_0x261cf7,_0x2cc4df)=>{try{if(_0x1a1353['EtOmP']!==_0x1a1353['OYMTh']){Change=_0x261cf7[_0x56ae('‮e5','W(l8')][_0x56ae('‫e6','W(l8')](/Change = "([\u4e00-\u9fa5]+)"/)[0x1];}else{_0x1a1353[_0x56ae('‮e7','s^xw')](DoubleLog,_0x56ae('‫e8','FZM5')+result[_0x56ae('‮e9','#8p#')]);}}catch(_0x508955){$['logErr'](_0x508955,_0x261cf7);}finally{if(_0x1a1353['xzDiG'](_0x1a1353[_0x56ae('‫ea','FZM5')],_0x1a1353['QKsyk'])){_0x1a1353['YEhnn'](_0x3048b5,Change);}else{ckArr[_0x56ae('‫eb','W4yx')](ck);}}},timeout=0x3);});}async function SendMsg(_0x491e14){var _0x43d6a8={'BNSFU':function(_0x1968f9,_0x494481){return _0x1968f9>_0x494481;},'OfzxS':function(_0x232889,_0x372253){return _0x232889===_0x372253;},'YzzLd':_0x56ae('‮ec','NLIN'),'WxAtZ':'AGigO','dpRpP':function(_0x958e14,_0xdc3937){return _0x958e14(_0xdc3937);},'aPhLL':'./sendNotify','GRwlv':'aNsXL'};if(!_0x491e14)return;if(_0x43d6a8[_0x56ae('‫ed','iY80')](Notify,0x0)){if(_0x43d6a8['OfzxS'](_0x43d6a8[_0x56ae('‫ee','NLIN')],_0x43d6a8['YzzLd'])){if($[_0x56ae('‮ef','CQSf')]()){if(_0x43d6a8['WxAtZ']==='SPvDh'){console['log'](err,resp);console['log']('\x0a\x20'+tip+_0x56ae('‮f0','6lwG'));msg+='\x0a\x20'+tip+'\x20失败了!请稍后尝试!!';}else{var _0x5a5ccd=_0x43d6a8[_0x56ae('‫f1','TshW')](require,_0x43d6a8[_0x56ae('‫f2','CQSf')]);await _0x5a5ccd[_0x56ae('‮f3','Pm[g')]($['name'],_0x491e14);}}else{$[_0x56ae('‫f4','3Yr*')](_0x491e14);}}else{DoubleLog(_0x56ae('‫f5','5H*7'));console[_0x56ae('‮f6','FZM5')](result);}}else{if(_0x56ae('‫f7','FZM5')!==_0x43d6a8[_0x56ae('‫f8','aYbv')]){console[_0x56ae('‫f9','NLIN')](...args);}else{console[_0x56ae('‫fa','MO$2')](_0x491e14);}}}function DoubleLog(_0x5dc086){var _0x3b6a1b={'tyWKC':function(_0x58527c,_0x5b2b04){return _0x58527c===_0x5b2b04;},'jBgbm':_0x56ae('‮fb','%)VT'),'lECfT':'ylTrX'};if(_0x5dc086){if(_0x3b6a1b['tyWKC'](_0x3b6a1b['jBgbm'],_0x3b6a1b[_0x56ae('‮fc','Tx[l')])){ckArr['push'](item);}else{console[_0x56ae('‮fd','LXqD')](_0x56ae('‮fe','CQSf')+_0x5dc086);msg+='\x0a\x20\x20\x20\x20'+_0x5dc086;}}}async function httpGet(_0x196701,_0x4e059d,_0x13e7ab=0x3*0x3e8){var _0x207d27={'DHLBk':function(_0x2ac4c7,_0xe8227e){return _0x2ac4c7!==_0xe8227e;},'zhmYZ':_0x56ae('‫ff','3k#3'),'cuKWV':function(_0x515004,_0x46f32b){return _0x515004===_0x46f32b;},'sOgYN':_0x56ae('‮100','Tx[l'),'fqNBa':function(_0x1b9524){return _0x1b9524();}};return new Promise(_0x536ec2=>{var _0x10f335={'nxgTB':function(_0x34ff11,_0x968e35){return _0x207d27[_0x56ae('‫101','&uLt')](_0x34ff11,_0x968e35);},'qxGqL':_0x207d27[_0x56ae('‮102','cF#F')],'dnaaV':function(_0x1dec3f,_0x298ee4){return _0x1dec3f(_0x298ee4);},'JQxmk':function(_0x30df29,_0x194ee9){return _0x207d27[_0x56ae('‮103','VOzO')](_0x30df29,_0x194ee9);},'gLzDe':_0x207d27['sOgYN'],'aBaCA':function(_0x57d8a3){return _0x207d27['fqNBa'](_0x57d8a3);}};if(_0x56ae('‫104','u8qZ')!==_0x56ae('‮105','aYbv')){let _0x5dfb91=_0x196701;if(!_0x4e059d){let _0x2907da=arguments[_0x56ae('‮106','XxMm')][_0x56ae('‮107','&hr#')]();let _0x3035db=/function\s*(\w*)/i;let _0x428b1f=_0x3035db['exec'](_0x2907da);_0x4e059d=_0x428b1f[0x1];}if(debug){console['log']('\x0a\x20【debug】===============\x20这是\x20'+_0x4e059d+_0x56ae('‫85','6lwG'));console[_0x56ae('‫2f','#bZ9')](_0x5dfb91);}$[_0x56ae('‮108','cfb[')](_0x5dfb91,async(_0x4a4eda,_0x30d59d,_0x2ec98a)=>{try{if(_0x10f335[_0x56ae('‮109','wTA3')](_0x10f335[_0x56ae('‮10a','v[Gj')],_0x10f335[_0x56ae('‮10b','LXqD')])){if(debug){console[_0x56ae('‫10c','3Yr*')](_0x56ae('‫10d','Nc0g')+_0x4e059d+_0x56ae('‮10e','W4yx'));console[_0x56ae('‮cf','f1Bh')](_0x2ec98a);console['log'](_0x56ae('‫10f','&hr#'));console['log'](JSON[_0x56ae('‫110','&uLt')](_0x2ec98a));}let _0x3dd15e=JSON[_0x56ae('‫111','%)VT')](_0x2ec98a);_0x536ec2(_0x3dd15e);}else{if(debug){console[_0x56ae('‮112','(z!B')]('\x0a\x0a\x20【debug】===============这是\x20'+_0x4e059d+'\x20返回data==============');console[_0x56ae('‫113','k*yB')](_0x2ec98a);console[_0x56ae('‮114','4MNK')](_0x56ae('‮115','Pm[g')+_0x4e059d+_0x56ae('‫116','v[Gj'));console[_0x56ae('‫117','O]NT')](JSON[_0x56ae('‫118','Pm[g')](_0x2ec98a));}let _0x2b52fd=JSON['parse'](_0x2ec98a);_0x10f335['dnaaV'](_0x536ec2,_0x2b52fd);}}catch(_0x5b151a){}finally{if(_0x10f335[_0x56ae('‫119','&uLt')](_0x10f335[_0x56ae('‫11a','NLIN')],'ENLYq')){_0x10f335[_0x56ae('‫11b','LXqD')](_0x536ec2);}else{$['logErr'](e,_0x30d59d);}}},_0x13e7ab);}else{_0x10f335[_0x56ae('‮11c',')WeO')](DoubleLog,_0x56ae('‮11d','Nc0g')+result[_0x56ae('‮11e','Xtb%')]);}});}async function httpPost(_0x38ebc5,_0xdeaa91,_0x58e375=0x3*0x3e8){var _0x393dea={'irUHD':function(_0x493923){return _0x493923();},'mLxru':function(_0x157718,_0x4f8867){return _0x157718!==_0x4f8867;},'uOlzJ':'bSdMJ'};return new Promise(_0x4b8b04=>{var _0x1f2fa1={'GdZsZ':function(_0x5ac7df){return _0x393dea[_0x56ae('‮11f','zyIx')](_0x5ac7df);}};let _0x7f98ef=_0x38ebc5;if(!_0xdeaa91){if(_0x393dea['mLxru']('KYtGj',_0x393dea[_0x56ae('‫120','zyIx')])){let _0x321a05=arguments[_0x56ae('‮121','#8p#')]['toString']();let _0x1e6055=/function\s*(\w*)/i;let _0x184206=_0x1e6055[_0x56ae('‫122','iY80')](_0x321a05);_0xdeaa91=_0x184206[0x1];}else{$['logErr'](e,resp);}}if(debug){console[_0x56ae('‮123','wTA3')](_0x56ae('‫124','%)VT')+_0xdeaa91+'\x20请求\x20url\x20===============');console['log'](_0x7f98ef);}$[_0x56ae('‫125','zyIx')](_0x7f98ef,async(_0x2e875e,_0x354222,_0x54b087)=>{try{if(debug){console['log']('\x0a\x0a\x20【debug】===============这是\x20'+_0xdeaa91+'\x20返回data==============');console['log'](_0x54b087);console[_0x56ae('‫126','gbMJ')]('======');console['log'](JSON['parse'](_0x54b087));}let _0x511a35=JSON['parse'](_0x54b087);_0x4b8b04(_0x511a35);}catch(_0x1c5ca1){}finally{_0x1f2fa1[_0x56ae('‮127','Y4d0')](_0x4b8b04);}},_0x58e375);});}async function httpRequest(_0x2baf79,_0x4076a6,_0x3466a3=0x3){var _0x5ca5d8={'VJoPt':'ybLkh','DIIEo':function(_0x1d30f4,_0x580446){return _0x1d30f4!==_0x580446;},'pqNWr':_0x56ae('‮128','wTA3'),'JQOfH':function(_0x6849d0,_0x54abea){return _0x6849d0(_0x54abea);},'QUPac':_0x56ae('‮129','MO$2'),'UOcDX':function(_0x4d1de0){return _0x4d1de0();},'kTDbj':_0x56ae('‫12a','u8qZ'),'aGwbI':function(_0x2fc478,_0x4a6c89){return _0x2fc478===_0x4a6c89;},'esdGo':_0x56ae('‮12b','5H*7'),'rEpDY':function(_0x1b3406,_0x595057,_0x21f335){return _0x1b3406(_0x595057,_0x21f335);}};return new Promise(_0x187fa9=>{var _0x1e0594={'MhLLo':function(_0x37cc5c,_0x372f3f){return _0x37cc5c(_0x372f3f);}};let _0x58a3a2=_0x2baf79;let _0x413243=_0x5ca5d8[_0x56ae('‫12c','Y4d0')](require,_0x5ca5d8[_0x56ae('‫12d','(z!B')]);if(!_0x4076a6){let _0x2449d5=arguments[_0x56ae('‮106','XxMm')][_0x56ae('‮12e','5WQQ')]();let _0x11c22e=/function\s*(\w*)/i;let _0x395550=_0x11c22e[_0x56ae('‫12f','5H*7')](_0x2449d5);_0x4076a6=_0x395550[0x1];}if(debug){if(_0x5ca5d8['aGwbI'](_0x5ca5d8[_0x56ae('‮130','Nc0g')],_0x5ca5d8[_0x56ae('‮131','k*yB')])){console['log']('\x0a\x20【debug】===============\x20这是\x20'+_0x4076a6+_0x56ae('‮132','W4yx'));console[_0x56ae('‮133','Pm[g')](_0x58a3a2);}else{_0x187fa9(VersionCheck);}}_0x5ca5d8[_0x56ae('‮134','4)v0')](_0x413243,_0x58a3a2,async(_0xb37edb,_0x9ead82,_0x24673a)=>{if('TnqlX'===_0x5ca5d8['VJoPt']){console[_0x56ae('‫135','&hr#')]('\x0a\x20【debug】===============\x20这是\x20'+_0x4076a6+_0x56ae('‫85','6lwG'));console[_0x56ae('‮133','Pm[g')](url);}else{try{if(debug){if(_0x5ca5d8['DIIEo'](_0x56ae('‫136','&hr#'),_0x5ca5d8[_0x56ae('‫137','VOzO')])){let _0x1f0015=arguments['callee'][_0x56ae('‫138','W(l8')]();let _0x231fd0=/function\s*(\w*)/i;let _0x4f680a=_0x231fd0[_0x56ae('‮139','wTA3')](_0x1f0015);_0x4076a6=_0x4f680a[0x1];}else{console[_0x56ae('‫135','&hr#')](_0x56ae('‫13a','6lwG')+_0x4076a6+_0x56ae('‫13b','6lwG'));console['log'](_0x24673a);console[_0x56ae('‫13c','TshW')]('\x0a\x20【debug】=============这是\x20'+_0x4076a6+_0x56ae('‫13d','f1Bh'));console['log'](JSON['parse'](_0x24673a));}}let _0x2dcf3b=JSON[_0x56ae('‮13e','aYbv')](_0x24673a);if(!_0x2dcf3b)return;_0x5ca5d8[_0x56ae('‮13f','^umZ')](_0x187fa9,_0x2dcf3b);}catch(_0xc0f470){if(_0x5ca5d8[_0x56ae('‫140','NLIN')]!==_0x5ca5d8[_0x56ae('‫141','5H*7')]){_0x1e0594['MhLLo'](DoubleLog,_0x56ae('‫142','dVDQ'));console[_0x56ae('‫10c','3Yr*')](result);}else{console[_0x56ae('‮112','(z!B')](_0xb37edb,_0x9ead82);console[_0x56ae('‫143','Tx[l')]('\x0a\x20'+_0x4076a6+'\x20失败了!请稍后尝试!!');msg+='\x0a\x20'+_0x4076a6+'\x20失败了!请稍后尝试!!';}}finally{_0x5ca5d8[_0x56ae('‮144','W(l8')](_0x187fa9);}}}),_0x3466a3;});}function debugLog(..._0x48db26){var _0x34b669={'IYWSH':function(_0x2ac69d,_0x277731){return _0x2ac69d!==_0x277731;},'qHUwV':'jEPSM','fAnOj':_0x56ae('‫145','3k#3')};if(debug){if(_0x34b669[_0x56ae('‫146','^umZ')](_0x34b669['qHUwV'],_0x34b669[_0x56ae('‫147','u8qZ')])){console['log'](..._0x48db26);}else{let _0x362d54=arguments[_0x56ae('‮148','5WQQ')][_0x56ae('‫149','#8p#')]();let _0x2576f4=/function\s*(\w*)/i;let _0x5845c1=_0x2576f4[_0x56ae('‮14a','Tx[l')](_0x362d54);tip=_0x5845c1[0x1];}}};_0xodn='jsjiami.com.v6';
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

