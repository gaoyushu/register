function isSingleInstanceProd(s){return-1<("|"+["mn","ma","im_hi"].join("|")+"|").indexOf("|"+s+"|")}function isLoginInstance(s){return(s=s||"login")+""=="login"}function saveInitInstance(s){window._pass_popinit_instance=s}function getInitInstance(){return window._pass_popinit_instance}var passport;(passport=passport||window.passport||{})._modulePool=passport._modulePool||{},passport._define=passport._define||function(s,i){passport._modulePool[s]=i&&i()},passport._getModule=passport._getModule||function(s){return passport._modulePool[s]},(passport=window.passport||{}).pop=passport.pop||{},passport.pop.insertScript=passport.pop.insertScript||function(s,i){var n=document,a=n.createElement("SCRIPT");a.type="text/javascript",a.charset="UTF-8",a.readyState?a.onreadystatechange=function(){"loaded"!==a.readyState&&"complete"!==a.readyState||(a.onreadystatechange=null,i&&i())}:a.onload=function(){i&&i()},a.src=s,n.getElementsByTagName("head")[0].appendChild(a)},passport.ieVersion=function(){var s,i=navigator.userAgent.toLowerCase();return-1<i.indexOf("msie")&&(s=i.match(/msie ([\d.]+)/)[1]),s},passport.pop.init=passport.pop.init||function(i){var s,n={"http:":"http://passport.bdimg.com","https:":"https://passport.bdimg.com"};if(passport.ieVersion()<=8&&(n={"http:":"http://passport.baidu.com","https:":"https://passport.baidu.com"}),isSingleInstanceProd(i.apiOpt.product)&&isLoginInstance(i.type)&&getInitInstance())return getInitInstance();s=i&&"https"===i.protocol?"https:":window.location?window.location.protocol.toLowerCase():document.location.protocol.toLowerCase();var a=i&&i.apiOpt&&i.apiOpt.product||"",e=-1<("|"+["pp","mn","wk","cmovie","translate","baidugushitong","ik","exp","waimai","jn","im","do","yuedu","hao123","tb","netdisk","developer","newdev","image_eco","zbsc","bpit_hcm","defensor","study","bizcrm"].join("|")+"|").indexOf("|"+a+"|"),t={uni_login:e?"/passApi/js/uni_loginv4_77eba66.js":"/passApi/js/uni_login_b096797.js",uni_login_tangram:e?"/passApi/js/uni_loginv4_tangram_5303642.js":"/passApi/js/uni_login_tangram_532f79b.js",uni_loginPad:"/passApi/js/uni_loginPad_f60d38a.js",uni_loginPad_tangram:"/passApi/js/uni_loginPad_tangram_7a22aa1.js",uni_smsloginEn:"/passApi/js/uni_smsloginEn_e11f4cf.js",uni_smsloginEn_tangram:"/passApi/js/uni_smsloginEn_tangram_591bf75.js",uni_loginWap:"/passApi/js/uni_loginWap_cd74af3.js",uni_loginWap_tangram:"/passApi/js/uni_loginWap_cd74af3.js",uni_accConnect:"/passApi/js/uni_accConnect_eb2ed2d.js",uni_accConnect_tangram:"/passApi/js/uni_accConnect_tangram_2834ec9.js",uni_accRealName:"/passApi/js/uni_accRealName_0943011.js",uni_accRealName_tangram:"/passApi/js/uni_accRealName_tangram_ecb43c7.js",uni_checkPhone:"/passApi/js/uni_checkPhone_6b68f55.js",uni_checkPhone_tangram:"/passApi/js/uni_checkPhone_tangram_d494305.js",uni_checkIDcard:"/passApi/js/uni_checkIDcard_85a4afc.js",uni_checkIDcard_tangram:"/passApi/js/uni_checkIDcard_tangram_192f8da.js",uni_accSetPwd:"/passApi/js/uni_accSetPwd_f78240a.js",uni_accSetPwd_tangram:"/passApi/js/uni_accSetPwd_tangram_b4496f0.js",uni_IDCertify:"/passApi/js/uni_IDCertify_998c926.js",uni_IDCertify_tangram:"/passApi/js/uni_IDCertify_tangram_aae740f.js",uni_travelComplete:"/passApi/js/uni_travelComplete_a3d369e.js",uni_travelComplete_tangram:"/passApi/js/uni_travelComplete_tangram_9aee478.js",uni_bindGuide:"/passApi/js/uni_bindGuide_0a6fc7c.js",uni_bindGuide_tangram:"/passApi/js/uni_bindGuide_tangram_af5ec4f.js",uni_fillUserName:"/passApi/js/uni_fillUserName_62b6a41.js",uni_fillUserName_tangram:"/passApi/js/uni_fillUserName_tangram_0f0f99e.js",uni_IDCertifyQrcode:"/passApi/js/uni_IDCertifyQrcode_1925f93.js",uni_IDCertifyQrcode_tangram:"/passApi/js/uni_IDCertifyQrcode_tangram_45d8c58.js",uni_loadingApi:"/passApi/js/uni_loadingApi_cdbc9b6.js",uni_loadingApi_tangram:"/passApi/js/uni_loadingApi_tangram_28a0468.js",uni_secondCardList:"/passApi/js/uni_secondCardList_d98300f.js",uni_secondCardList_tangram:"/passApi/js/uni_secondCardList_tangram_badee2c.js",uni_secondCardVerify:"/passApi/js/uni_secondCardVerify_d480f72.js",uni_secondCardVerify_tangram:"/passApi/js/uni_secondCardVerify_tangram_3f6877f.js",uni_multiBind:"/passApi/js/uni_multiBind_42dd149.js",uni_multiBind_tangram:"/passApi/js/uni_multiBind_tangram_9dd6867.js",uni_multiUnbind:"/passApi/js/uni_multiUnbind_b630831.js",uni_multiUnbind_tangram:"/passApi/js/uni_multiUnbind_tangram_dc61455.js",uni_changeUser:"/passApi/js/uni_changeUser_28ce793.js",uni_changeUser_tangram:"/passApi/js/uni_changeUser_tangram_9bc90fb.js",uni_loginMultichoice:"/passApi/js/uni_loginMultichoice_228f985.js",uni_loginMultichoice_tangram:"/passApi/js/uni_loginMultichoice_tangram_eec5f7d.js",uni_confirmWidget:"/passApi/js/uni_confirmWidget_d258f56.js",uni_confirmWidget_tangram:"/passApi/js/uni_confirmWidget_tangram_6cb3e1e.js"},p={login:e?"/passApi/css/uni_loginv4_35dda7d.css":"/passApi/css/uni_login_new_5b1f23c.css",loginWap:"/passApi/css/uni_loginWap_f57424a.css",smsloginEn:"/passApi/css/uni_smsloginEn_eef0a6a.css",accConnect:"/passApi/css/uni_accConnect_ab6dda9.css",accRealName:"/passApi/css/uni_accRealName_a224a37.css",secondCardVerify:"/passApi/css/uni_secondCardVerify_1a69328.css",secondCardList:"/passApi/css/uni_secondCardList_94f229c.css",checkPhone:"/passApi/css/uni_checkPhone_cd7c7a0.css",checkIDcard:"/passApi/css/uni_checkIDcard_be79680.css",accSetPwd:"/passApi/css/uni_accSetPwd_b4c75e0.css",IDCertify:"/passApi/css/uni_IDCertify_36e091b.css",IDCertifyQrcode:"/passApi/css/uni_IDCertifyQrcode_1e8827b.css",loadingApi:"/passApi/css/uni_loadingApi_f8732c0.css",loginPad:"/passApi/css/uni_loginPad_ab36627.css",multiBind:"/passApi/css/uni_multiBind_e8d24e4.css",multiUnbind:"/passApi/css/uni_multiUnbind_21428a6.css",changeUser:"/passApi/css/uni_changeUser_c7ae7b4.css",loginMultichoice:"/passApi/css/uni_loginMultichoice_289d3a0.css",confirmWidget:"/passApi/css/uni_confirmWidget_3d41f3b.css",uni_rebindGuide:"/passApi/css/uni_rebindGuide_347ecf2.css",travelComplete:"/passApi/css/uni_travelComplete_b06b013.css",bindGuide:"/passApi/css/uni_bindGuide_35d4a06.css",fillUserName:"/passApi/css/uni_fillUserName_931cb17.css"},c=n[s]||n["https:"];(i=i||{}).type=i.type||"login";var o,_=document,r=((new Date).getTime(),c+p[i.type]);i.cssUrlWrapper&&(r=cssUrlWrapper.join(e?"uni_loginv4.css":"uni_login.css")),o={show:function(){return o.loadPass(i.apiOpt),o.willShow=!0,o},setSubpro:function(s){return i.apiOpt&&(i.apiOpt.subpro=s),o},setMakeText:function(s){return i.apiOpt&&(i.apiOpt.makeText=s),o},loadPass:function(){var s=_.createElement("link");s.rel="stylesheet",s.type="text/css",s.href=r,s.disabled=!1,s.setAttribute("data-for","result"),_.getElementsByTagName("head")[0].appendChild(s),o.show=function(){return o.willShow=!0,o},i.plugCss&&((s=_.createElement("link")).rel="stylesheet",s.type="text/css",s.href=i.plugCss,s.disabled=!1,s.setAttribute("data-for","result"),_.getElementsByTagName("head")[0].appendChild(s)),o.passCallback(),delete o.loadPass},passCallback:function(){passport.pop.insertScript("https://wappass.baidu.com/static/waplib/moonshad.js?tt="+(new Date).getTime(),function(){0<o.components.length?passport.pop.insertScript(o.components.shift(),o.passCallback):(passport.pop[i.type](i,o,function(){o.willShow&&o.show(),i&&i.onRender&&i.onRender()}),delete o.passCallback,delete o.components)})},components:[]};var u="uni_"+i.type;return i.tangram&&(u+="_tangram"),i.apiOpt&&i.apiOpt.product+""=="ik"&&Math.random()<.3&&(o.components.push(c+"/passApi/js/uni/passhunt.js"),i.hunter=!0),o.components.push(c+t[u]),i.cache&&o.loadPass(i.apiOpt),i.id&&_.getElementById(i.id)&&(_.getElementById(i.id).onclick=function(){o.show()}),isSingleInstanceProd(i.apiOpt.product)&&isLoginInstance(i.type)&&saveInitInstance(o),o};