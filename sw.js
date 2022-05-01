/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","469b71e93f5f1a03c742212277b98b0d"],["/about/index.html","0d8f83c6ad33229fcfc2fcfb195f986b"],["/archives/1970/01/index.html","aad7644dfc370658144ad404daf91faf"],["/archives/1970/index.html","a0021bca0be411bbabd17cdd591d990a"],["/archives/2021/07/index.html","c52e0f89b94a4ef11bcfa3b630484966"],["/archives/2021/08/index.html","eb81ab8527d9e863ae8ab505dd848e2c"],["/archives/2021/10/index.html","cf0a1f7615e74b9a20bcab92247c96d8"],["/archives/2021/11/index.html","a26f9e0fe59ab4f6d7572ece7c17439c"],["/archives/2021/12/index.html","e69fff8e023067e8f74985eba852da39"],["/archives/2021/index.html","7f95ac10038067fbfc83e0a11fac8d27"],["/archives/2022/02/index.html","83f2aba9249c4a79d01e8d358dc4dbdc"],["/archives/2022/03/index.html","423f3a6207913f0f7e0153bb4a02f057"],["/archives/2022/04/index.html","99ef9e9d4072a42fc4a201c49db72dc6"],["/archives/2022/index.html","413283180a997fd360fad3bdada75011"],["/archives/index.html","6a694e7b93a306795ecd04d2c95d247d"],["/archives/page/2/index.html","2c98f3c4c6bf130d123e97c7321824d7"],["/articles/WinWallpaperSaver/index.html","2dc514762784cce3898f94e3af4af79f"],["/articles/begin/index.html","c83f8bf856b3428c7bc7b934d1c442c1"],["/articles/drone-gitea-golang/index.html","1c39eca0a2c22cc631284eaa590cba60"],["/articles/go-const-inline/index.html","5fda1873e8e95c8207fe02c38ec28bd0"],["/articles/go/index.html","31cb35ad57a1e4f4822734d3061b908c"],["/articles/linux-prepare/index.html","39c273226a647af679d49a236d986612"],["/articles/node-config/index.html","a021512d249fb91c0324396f10a4aa8b"],["/articles/reg/index.html","cf2dc4a17c40384cfe3497bb2f84818d"],["/articles/shell-scripts/index.html","70c153f28656e509138857a099697deb"],["/articles/test/index.html","e5048f3a04f4d7245750d8ae0746a057"],["/articles/webp-bat/index.html","726b127ed0c7b22cee88a6830ffe506c"],["/assets/LostInMemory-thumbnail.png","3b0534a03efc5025736a5fbfb02d032c"],["/assets/LostInMemory-thumbnail.png.webp","ea481815922e1fc17e8a1998cf45adf1"],["/assets/LostInMemory-thumbnail.webp","ea481815922e1fc17e8a1998cf45adf1"],["/assets/comment.webp","c9e6254ff7429e52b5b7f56d8acfb44a"],["/assets/default.png","4358c262c7122a4a4bc7c82a330cf162"],["/assets/default.png.webp","8cf3caa59e9cbd40485e880116d1754c"],["/assets/default.webp","8cf3caa59e9cbd40485e880116d1754c"],["/assets/dwd.png","f09cd76a698e42ad14ad04fed3d112c9"],["/assets/dwd.png.webp","c1ebf1c7c0ff8d9fb5fafebbda257f1e"],["/assets/dwd.svg","6d3c6c087cbaf72df2920e4f065dddcb"],["/assets/dwd.webp","c1ebf1c7c0ff8d9fb5fafebbda257f1e"],["/assets/go.png","7abff4101023f1bcb8d3fcca600263a7"],["/assets/go.png.webp","a173f428e0bbb21e4ddce19e57a6f550"],["/assets/go.webp","a173f428e0bbb21e4ddce19e57a6f550"],["/assets/golang.png","4d5128e735f13d626b7e718131037d92"],["/assets/golang.png.webp","a3d48f49e82a1432079ba09c698278fd"],["/assets/golang.webp","a3d48f49e82a1432079ba09c698278fd"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/assets/jwt-1.png","58552f89df6931b5c23046ef22bf8b0c"],["/assets/jwt-1.png.webp","821afd9c1b9b64e3ee255e488c588a5e"],["/assets/jwt-1.webp","821afd9c1b9b64e3ee255e488c588a5e"],["/assets/jwt-2.png","1f5c84f12afdfcd2c2a770b3f94cf992"],["/assets/jwt-2.png.webp","204e515a4406cecee885d5dd5272bc33"],["/assets/jwt-2.webp","204e515a4406cecee885d5dd5272bc33"],["/assets/jwt.io.png","0e9a7798c59beb41fa3a1a5152c84d93"],["/assets/jwt.io.png.webp","eca4f9f63068284459b36170384bd68a"],["/assets/jwt.io.webp","eca4f9f63068284459b36170384bd68a"],["/assets/jwt.png","8d3d9bdcbfda231c71ff6af9e1687957"],["/assets/jwt.png.webp","0026ad4ad1875ba7823f6beb03d8eab1"],["/assets/jwt.webp","0026ad4ad1875ba7823f6beb03d8eab1"],["/assets/luogu.png","6006db8b8813b1c04365d584a245633c"],["/assets/luogu.png.webp","328d0025a8ed573f4c3ce8f7b42b887f"],["/assets/luogu.webp","328d0025a8ed573f4c3ce8f7b42b887f"],["/assets/systemd.png","3b2dd386824d4d75e189ef957394a6b2"],["/assets/systemd.png.webp","0bc71968efbee0a00ee13cdd675e8b5b"],["/assets/systemd.webp","0bc71968efbee0a00ee13cdd675e8b5b"],["/assets/wt.png","a56ac8ad7515810df5daf2995eae28be"],["/assets/wt.png.webp","0b19b7f4dd4ab0a88049b77a2ed81e8a"],["/assets/wt.webp","0b19b7f4dd4ab0a88049b77a2ed81e8a"],["/assets/zhihu-card-default.svg","84f0bf311745d4a814b2cc126f76a1e5"],["/categories/index.html","1fb44cde1eaed6a198f08cf020112ff7"],["/categories/计算机/DevOps/index.html","58e94776d6b8e6aac7444fa086f39078"],["/categories/计算机/Linux/index.html","f82e01251ae07af2d18af9a01a556808"],["/categories/计算机/Linux/shell/index.html","33f2bc392fc1a51c5286eade89c6913e"],["/categories/计算机/Windows/index.html","a1b491611dc36b2796e4f67d044d9c95"],["/categories/计算机/Windows/批处理/index.html","5f356d56c6225b597f420c1c75a1eb0c"],["/categories/计算机/index.html","e1cc385fc8e50e4ead51112338bb8485"],["/categories/计算机/编程语言/Go/index.html","a4afdc10d25935cbe84f79994440f64b"],["/categories/计算机/编程语言/Node-js/index.html","6fff4a4a57739b12afd6f9a3e15d1b8f"],["/categories/计算机/编程语言/index.html","28de3d25d2857bde22d96c7a5dc35657"],["/css/highlight/a11y-dark.css","5438e221505b911dcdeca435ed07884f"],["/css/highlight/a11y-light.css","ee7fc0c01d5464075db8d6800dbc7083"],["/css/highlight/agate.css","8f375b8e2722679d7e54e52a4dbd72f3"],["/css/highlight/an-old-hope.css","fa3ccb4f7de063019c042a336a974a54"],["/css/highlight/androidstudio.css","714aa88c6388bd8d1c2e3e66ffc5b7d5"],["/css/highlight/arduino-light.css","d38d5fa439112d84f3e782e5bbc2b926"],["/css/highlight/arta.css","a5d6a4aa3f185e9bc08c91f75a85bc5c"],["/css/highlight/ascetic.css","3ecc4ca4c6666275e9abf53fd2e1dab8"],["/css/highlight/atelier-cave-dark.css","d4e6a2ed75eb8b286716a6416abf5c12"],["/css/highlight/atelier-cave-light.css","bbc2c6bf3e568ca90f967b21eabf204f"],["/css/highlight/atelier-dune-dark.css","5e0776cfb9cd36aba952c151588ed12d"],["/css/highlight/atelier-dune-light.css","cc01df88eafbef7dd0a8a7bfdb0c012e"],["/css/highlight/atelier-estuary-dark.css","2c56e748a79f4bb1e2eb8311b64b3306"],["/css/highlight/atelier-estuary-light.css","60ee1a37c3aae0dcaf0e583f1a5fa824"],["/css/highlight/atelier-forest-dark.css","e0eb1dc1610ee9a447ced3b189b50227"],["/css/highlight/atelier-forest-light.css","7dd98ac07c86fcef5f5fb44482903e53"],["/css/highlight/atelier-heath-dark.css","4482bba6868f7465513fb941de59a88d"],["/css/highlight/atelier-heath-light.css","059e10a4b6acfbcee0e58b71eff1f9f6"],["/css/highlight/atelier-lakeside-dark.css","4e2f08d279e1a275804a142e9c939d5e"],["/css/highlight/atelier-lakeside-light.css","d541edff7689dfb3f7ded161c3512883"],["/css/highlight/atelier-plateau-dark.css","7629f3868bbf843924d9b446f7a8d796"],["/css/highlight/atelier-plateau-light.css","263a6303cf429e536ebb2ffc74c0107b"],["/css/highlight/atelier-savanna-dark.css","ebb41e78d3082690aa2bfe7be1f9c863"],["/css/highlight/atelier-savanna-light.css","0a30f1a34368d34160e74bd9b9ce251b"],["/css/highlight/atelier-seaside-dark.css","d78075ffd4152a51177ca5ae10a60765"],["/css/highlight/atelier-seaside-light.css","7a6a53d7028849c3439dcbc5bf2a3666"],["/css/highlight/atelier-sulphurpool-dark.css","0da99e8a6a01481883c7c9db5389a9ab"],["/css/highlight/atelier-sulphurpool-light.css","7b5e50e726dea1f4e0c872800f7f61d2"],["/css/highlight/atom-one-dark-reasonable.css","f73582e02cac59e510e052583cedb40e"],["/css/highlight/atom-one-dark.css","0bcdea4fc3661a55e41e4c47b3d70342"],["/css/highlight/atom-one-light.css","87f89e36eb78c59208d290a961e782cb"],["/css/highlight/brown-paper.css","71df0a70e51d3322dd35817a9be86e5d"],["/css/highlight/codepen-embed.css","0f5b0d170764987fb8ee3eed118e480f"],["/css/highlight/color-brewer.css","155039e2413c4ffdb6548569660d5dd6"],["/css/highlight/darcula.css","28323d72d7e6c0c71a9188d85a6979e3"],["/css/highlight/dark.css","e6ea00a7274848c596920e9418095b06"],["/css/highlight/default.css","26fc15366bf3539d3089959db01bfc8c"],["/css/highlight/docco.css","bb2e655dffa2c50b05f201d151738e79"],["/css/highlight/dracula.css","5f8ea4d7817c2e77a275ced0de4b5b44"],["/css/highlight/far.css","7f7f19abb880cc06c391d81665209695"],["/css/highlight/foundation.css","01cc573389904c3fc896683ed033a650"],["/css/highlight/github-gist.css","3e8de2d089baad43bfea2caa6a4b0289"],["/css/highlight/github.css","c95858f7233b9d6330997669aa0fcb5f"],["/css/highlight/gml.css","582b64f36649c322ad0bc220b287025f"],["/css/highlight/googlecode.css","2b037d96d9653447aeb319bb0fc97f90"],["/css/highlight/gradient-dark.css","e35d484e283ae10210d72ad90c4c69df"],["/css/highlight/grayscale.css","9c9cac60f04c6ed11ca7a909fea05e84"],["/css/highlight/gruvbox-dark.css","d985ed5bac343d7561d5f32614407099"],["/css/highlight/gruvbox-light.css","37347405aa39eb0dc9462f18b3385174"],["/css/highlight/hopscotch.css","d13d0ad7801c95d8f02d498234cfbb82"],["/css/highlight/hybrid.css","d10d32e61ed836006e7057e5cc413fe4"],["/css/highlight/idea.css","afbd77b060793dcceed91f588ab2e1b4"],["/css/highlight/ir-black.css","0bb7c46af6ff75326609ceb20fcc4bc3"],["/css/highlight/isbl-editor-dark.css","bab80630f164f16fb246f4f7fadb1dbb"],["/css/highlight/isbl-editor-light.css","87dd1b9e3576d3f25abba2f7e0d3569d"],["/css/highlight/kimbie.dark.css","07686f064ccb276096c2b69bfb3644a1"],["/css/highlight/kimbie.light.css","1ac623413d03090b02eaa2ae3236be44"],["/css/highlight/lightfair.css","691c3af948ec86160a074bc4010e805c"],["/css/highlight/lioshi.css","10cf1c62a7f370aff86b1a7cb903e4bf"],["/css/highlight/magula.css","2fceb47eaeef7b4ad53c997537dca52c"],["/css/highlight/mono-blue.css","0022543e740184dadcbd0da260a71ce3"],["/css/highlight/monokai-sublime.css","f9e43b5ec2aded35442618751b5eb2e5"],["/css/highlight/monokai.css","456bc77c893da87c80273be0f8505296"],["/css/highlight/night-owl.css","c1118b22866f5fba6f6cb09a75deae9b"],["/css/highlight/nnfx-dark.css","ec4f3da8bd88d1114dfe85aa92f9a8c4"],["/css/highlight/nnfx.css","ee4d016747756888d121fb39b7c8c528"],["/css/highlight/nord.css","9af1e2949996034518df053d0c1f6386"],["/css/highlight/obsidian.css","1b1e01de7798c359001e68cbe9a01222"],["/css/highlight/ocean.css","28d754561f586d90d385265b443dd2f0"],["/css/highlight/paraiso-dark.css","9f739376dfc8536971bb37123c91d86c"],["/css/highlight/paraiso-light.css","f5df5e0124d150652ebe744907b0299c"],["/css/highlight/pojoaque.css","31ccda12966e98f48fefba8bd082b08e"],["/css/highlight/purebasic.css","c28c8c77015cfc477d058cfb1d68c5bf"],["/css/highlight/qtcreator_dark.css","f5d011c35a1df6a44b0a5bd2cd30ef0e"],["/css/highlight/qtcreator_light.css","b0fde36a4b73339e24379e370d8d767e"],["/css/highlight/railscasts.css","2a72d16526051a251d5381a37aa5fc63"],["/css/highlight/rainbow.css","00aacaeffea1153172161ea1653f5dbd"],["/css/highlight/routeros.css","0c079fc05a4e73adc3957ade0ee4bf2e"],["/css/highlight/school-book.css","5a81e7318a27ffd0b5aac78cabd18e2a"],["/css/highlight/shades-of-purple.css","0cf06a7deadcdfb83a14c0f056d2ec56"],["/css/highlight/solarized-dark.css","ac54ff6d4fe685644ea686a345f76b24"],["/css/highlight/solarized-light.css","bf4b04984f6c06f60b94677a7bf22d78"],["/css/highlight/srcery.css","f52a0068f5fdab07d747776b15094c22"],["/css/highlight/sunburst.css","322db5a028f0814a1bb89538476f4dcd"],["/css/highlight/tomorrow-night-blue.css","f4a915c982da05675639c692f4b7ad13"],["/css/highlight/tomorrow-night-bright.css","e12ca8ab4964c98b4b41929f19768154"],["/css/highlight/tomorrow-night-eighties.css","e6ff13ca60ae68764fcd567335bf8ce0"],["/css/highlight/tomorrow-night.css","8c43f2fcd30949bd033ee0c8f78e96b5"],["/css/highlight/tomorrow.css","81f410a0ab31b22198b55612662a3a7c"],["/css/highlight/vs.css","1a861ffbdeb980a2d231990763da8514"],["/css/highlight/vs2015.css","95017fe7cf3f851f28983ff55460ab50"],["/css/highlight/xcode.css","e20ec1f306dba8327976fa335bbb3ad8"],["/css/highlight/xt256.css","1cf52d958d105db1f1b3debf395818fe"],["/css/highlight/zenburn.css","365f5585970ceba89d302828fac19961"],["/css/style/dark.css","7772c1358ac044d0955af0764242efc5"],["/css/style/main.css","65f99d87bc9d3008d6ce1944abb2bf2e"],["/images/android-chrome-144x144.png","47e30c8645b5a85f489788f4ca971011"],["/images/android-chrome-192x192.png","c8af9d9a21b2d6e97b3e34598c3e5132"],["/images/android-chrome-256x256.png","d066968d5a5c8458db7b86c69c4c5ac1"],["/images/android-chrome-36x36.png","e22ab0faf5771944b2829f1ca8393e1b"],["/images/android-chrome-384x384.png","33f443175c98a2ba3d858fb2d9a5456e"],["/images/android-chrome-48x48.png","638d502a5e49bbbf267000a7e9223e17"],["/images/android-chrome-512x512.png","e9410529a972b34465b0030cd3c6794e"],["/images/android-chrome-72x72.png","528d1f807af09e7dcc8d7bc72660f2cb"],["/images/android-chrome-96x96.png","d3a180943590edffdb2022669ee8c005"],["/images/apple-touch-icon-114x114-precomposed.png","5c264eb297471c6c0e34c2b09122fdd2"],["/images/apple-touch-icon-114x114.png","6cb312a75ff19fa05848c82fdd6f81c6"],["/images/apple-touch-icon-120x120-precomposed.png","06f57bed97047aa7b7c1d07b8d1c010b"],["/images/apple-touch-icon-120x120.png","5254c5aa94cdb6c642f8d264374bb1b4"],["/images/apple-touch-icon-144x144-precomposed.png","bef4adcd7c1a5270f7951c59b5c44d4d"],["/images/apple-touch-icon-144x144.png","28a72d2116528276693598a148942e75"],["/images/apple-touch-icon-152x152-precomposed.png","293d8a28102b5b8302bbad81106b0427"],["/images/apple-touch-icon-152x152.png","2f41a9994ef80355a78665f60cf79962"],["/images/apple-touch-icon-180x180-precomposed.png","81585cda341a2e12449837bee482f892"],["/images/apple-touch-icon-180x180.png","0c0124d4d61cc555e84edea121dee6ff"],["/images/apple-touch-icon-57x57-precomposed.png","cac8eb7558d0d942b1ac19b6407c30c6"],["/images/apple-touch-icon-57x57.png","a670fead1203bd73e5f5e53a7f39af4e"],["/images/apple-touch-icon-60x60-precomposed.png","0e310308d3b2fde1d2f9bdccaceb3f6d"],["/images/apple-touch-icon-60x60.png","85e3c2805026354cb6d64d905414cde2"],["/images/apple-touch-icon-72x72-precomposed.png","5a567f399a082af946f26e5fefa8efa1"],["/images/apple-touch-icon-72x72.png","cd2ae579c9b721205e69bcd392e7efb1"],["/images/apple-touch-icon-76x76-precomposed.png","a9133da32241d1653b1bf60744e434f6"],["/images/apple-touch-icon-76x76.png","4981bfeac3eec1b1ed885837ff401adb"],["/images/apple-touch-icon-precomposed.png","81585cda341a2e12449837bee482f892"],["/images/apple-touch-icon.png","0c0124d4d61cc555e84edea121dee6ff"],["/images/avatar.svg","08e8849798ee33247ca0ab8cb913d68b"],["/images/dwd.png","f09cd76a698e42ad14ad04fed3d112c9"],["/images/dwd.svg","6d3c6c087cbaf72df2920e4f065dddcb"],["/images/favicon-16x16.png","59e10649b4e60e9436d697a644a6dca5"],["/images/favicon-32x32.png","b99b6e0482d747ba8628322ccea7af46"],["/images/mstile-144x144.png","952f298d0b1d27d43d0488e77f311eea"],["/images/mstile-150x150.png","afb41cc82a7020c929464d77d72da19b"],["/images/mstile-310x150.png","c565d245e7c37872beb85b1512037c23"],["/images/mstile-310x310.png","faedc0576d1141718fa63e125f53c8a2"],["/images/mstile-70x70.png","ae468744d1fca7dedea33c7d4c706cf0"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/safari-pinned-tab.svg","9d92a54bf0481839e4bcde616840021d"],["/index.html","c910b2ab6161a583c14123aaa67863c6"],["/js/b2t.js","ff7fee4413d70545d069b5f328e5cdbe"],["/js/darkmode.js","2be8ee2c06f76137631d04a452d4a5bc"],["/js/local-search.js","a3ad965edded7e9337d84ccc3112053c"],["/js/mermaid.js","ba0140579f821a30fa1236d508267b39"],["/js/valine.js","bcdece35c06db35adbd928ca72246dda"],["/js/webp.js","a1ef5e4c7002f4955ce0cc8aa552e6c7"],["/links/gin-doc.html","0c312525e6c97450965afecff1f0e641"],["/links/index.html","81d5a82d250eb094a0928e3e77a697a5"],["/msg/index.html","c71e7890cfb29e61477be670971dbb78"],["/page/2/index.html","cc0eb7486c3e390dd4faef104d9cd6fa"],["/s/index.html","0fa1fb6b6f162e51c1cdf958d2b2a0b2"],["/sw-register.js","67bebb045dc449008823ec707fc726e2"],["/tags/CI-CD/index.html","c2d7e5ceb6e104808ef422da76c7cfa9"],["/tags/DevOps/index.html","b828ed4e31b05d003e934f64428e14c7"],["/tags/Drone-CI/index.html","c3876af76aad7f4a3f1aa33a441c5e32"],["/tags/Gitea/index.html","94dec6d59d6df54bcf89d3e6cb861d58"],["/tags/Go/index.html","499fbc0fd120386d3f5df436ad3d3994"],["/tags/Node-js/index.html","56d3d34928ae82edfdd8bedaa7efad71"],["/tags/Windows/index.html","8e335fac260d579cd40adbb10e89ba13"],["/tags/index.html","a7382d114027146983054a5689b624ae"],["/tags/npm/index.html","f6c0a739ba4d455f78ff2f28c14671e8"],["/tags/webp/index.html","7bff161c7f24d7c7d94e2c86c734679a"],["/tags/壁纸/index.html","d3b1327c4e189eca5b6479a89952c998"],["/tags/批处理/index.html","379704a02d7dc5513fc334cd2ab136d0"],["/tags/模板/index.html","2d6a594d0add469050191eba46fd2d80"],["/tags/正则表达式/index.html","adc5e47e9c7072d15d1c7d29f308ac43"],["/tags/站点/index.html","a5b2ff26782741044c539470b6fe50d6"],["/talk/index.html","b49581ef1c4d148c5ee62de2cccd8726"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
