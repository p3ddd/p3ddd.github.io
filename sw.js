/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","469b71e93f5f1a03c742212277b98b0d"],["/about/index.html","6959d675c68288fac3cbc90bf180869c"],["/archives/1970/01/index.html","53f9b6202c1d1d4bf092a7ebcb94b2cf"],["/archives/1970/index.html","f9b8461a5808af478b5a828bf96f44c5"],["/archives/2021/07/index.html","3ac871d6ac1081415b9c7645d9a0302b"],["/archives/2021/08/index.html","370be50c1c7a2a070369fbea37febe0c"],["/archives/2021/10/index.html","61867bf516ae510a3c3fb2a2aa77397d"],["/archives/2021/11/index.html","9b7a913fbd1966dcde04cffdf7942223"],["/archives/2021/index.html","b3717b49ffee10cd6aa3246447ffde97"],["/archives/index.html","9eeae053356277920648526544cc380a"],["/articles/begin/index.html","9f2f2c97b78644ec3da2e9eb07ce9035"],["/articles/go-const-inline/index.html","4e33628b195cf9dc258cdb17c79e2c07"],["/articles/go/go.webp","a173f428e0bbb21e4ddce19e57a6f550"],["/articles/go/index.html","96077b49acb452bff3185126818b231c"],["/articles/reg/index.html","dc2f265bee2690d37f178dca74982c51"],["/articles/test/index.html","4fa1e9db4155047c48e4c1feaace90c6"],["/assets/LostInMemory-thumbnail.png","3b0534a03efc5025736a5fbfb02d032c"],["/assets/LostInMemory-thumbnail.webp","ea481815922e1fc17e8a1998cf45adf1"],["/assets/comment.webp","c9e6254ff7429e52b5b7f56d8acfb44a"],["/assets/default.png","4358c262c7122a4a4bc7c82a330cf162"],["/assets/default.webp","8cf3caa59e9cbd40485e880116d1754c"],["/assets/go.png","7abff4101023f1bcb8d3fcca600263a7"],["/assets/go.webp","a173f428e0bbb21e4ddce19e57a6f550"],["/assets/golang.png","4d5128e735f13d626b7e718131037d92"],["/assets/golang.webp","a3d48f49e82a1432079ba09c698278fd"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/assets/jwt-1.png","58552f89df6931b5c23046ef22bf8b0c"],["/assets/jwt-1.webp","821afd9c1b9b64e3ee255e488c588a5e"],["/assets/jwt-2.png","1f5c84f12afdfcd2c2a770b3f94cf992"],["/assets/jwt-2.webp","204e515a4406cecee885d5dd5272bc33"],["/assets/jwt.io.png","0e9a7798c59beb41fa3a1a5152c84d93"],["/assets/jwt.io.webp","eca4f9f63068284459b36170384bd68a"],["/assets/jwt.png","8d3d9bdcbfda231c71ff6af9e1687957"],["/assets/jwt.webp","0026ad4ad1875ba7823f6beb03d8eab1"],["/assets/luogu.png","6006db8b8813b1c04365d584a245633c"],["/assets/luogu.webp","328d0025a8ed573f4c3ce8f7b42b887f"],["/assets/wt.png","a56ac8ad7515810df5daf2995eae28be"],["/assets/wt.webp","0b19b7f4dd4ab0a88049b77a2ed81e8a"],["/assets/zhihu-card-default.svg","84f0bf311745d4a814b2cc126f76a1e5"],["/categories/index.html","a0726e8ce2e972304b33a1b83c0c0a14"],["/categories/计算机/index.html","0ee9d838f233b5b8c08eee4372cb3783"],["/css/highlight/a11y-dark.css","bc0e10390c4ecf08667730cd7d79562f"],["/css/highlight/a11y-light.css","63e7d832efd5e22a9a1eb5561d841a24"],["/css/highlight/agate.css","ed6199f0a7039882a3d3e006041e85ed"],["/css/highlight/an-old-hope.css","6c7388eb23a68793f132027b13960c50"],["/css/highlight/androidstudio.css","b4a4be826bd08a7a3f53218ae2d33b09"],["/css/highlight/arduino-light.css","21e5414274ab4488b6b75af317a1dbb0"],["/css/highlight/arta.css","75be0d750531c622804337f428385fdb"],["/css/highlight/ascetic.css","426e2f1b6fc5b00960803a69a46d5146"],["/css/highlight/atelier-cave-dark.css","636ee3d70d49ea6a05f4ce418b50efc6"],["/css/highlight/atelier-cave-light.css","30abf2705207684595809e07e15a684f"],["/css/highlight/atelier-dune-dark.css","b800a5046ddb73a1505e2256606780ac"],["/css/highlight/atelier-dune-light.css","7f816a9a5cf96d8b22e4dfa565391d82"],["/css/highlight/atelier-estuary-dark.css","7bf27341717f945da36f278c92c65757"],["/css/highlight/atelier-estuary-light.css","e74fbb55ad598b226434bc2b40895b41"],["/css/highlight/atelier-forest-dark.css","5085d9ff55833f7af9e48077931425d6"],["/css/highlight/atelier-forest-light.css","8ea4ab5639743fa0462407a361045ea0"],["/css/highlight/atelier-heath-dark.css","83f7a9f95aa595e6a34e660b2185072c"],["/css/highlight/atelier-heath-light.css","0f606fff842c9979ef2fc91d4de26ab7"],["/css/highlight/atelier-lakeside-dark.css","4ddf7e8c54aa2a2e218c50d22ccfc31b"],["/css/highlight/atelier-lakeside-light.css","a59ac7ed878d142a8991f8ca406a6993"],["/css/highlight/atelier-plateau-dark.css","cb3c863a5a9d997136ac10ecb89467d1"],["/css/highlight/atelier-plateau-light.css","daff6e7f05631cc8ecfb4665eae2086a"],["/css/highlight/atelier-savanna-dark.css","388d05702f2587d4e9a68e7986bec7d6"],["/css/highlight/atelier-savanna-light.css","d9aa33d8b573816d6039d69c19a095da"],["/css/highlight/atelier-seaside-dark.css","0170f7d012f04fdcc3829091ba20a106"],["/css/highlight/atelier-seaside-light.css","8f6a2fccad03d8e84c4de5c7e7c0646c"],["/css/highlight/atelier-sulphurpool-dark.css","b822642aeee97f4d0e48614b81b46fd0"],["/css/highlight/atelier-sulphurpool-light.css","64cc3bc73d021a12c13f9855143ccb2d"],["/css/highlight/atom-one-dark-reasonable.css","d4c303a2cdb22dd4087b1365c13fb0cf"],["/css/highlight/atom-one-dark.css","000a176a3a6c5007b034b808bb40e597"],["/css/highlight/atom-one-light.css","e76415092ece903bb793aec914f3ae02"],["/css/highlight/brown-paper.css","841851f5bc8e6c7469960b397c4d52db"],["/css/highlight/codepen-embed.css","cfc14c662ebebc7b17cc88137b8d7f9b"],["/css/highlight/color-brewer.css","e07db1e48e1a6fbe1f71a07a22f7b4ae"],["/css/highlight/darcula.css","5b7c3c0b579c1b6735ef1ebc36c7d16a"],["/css/highlight/dark.css","5dc88f5c2d261e79fa9a8c807be82efa"],["/css/highlight/default.css","6646b0ef8556f7f4ce202a0fc0bfeb27"],["/css/highlight/docco.css","9d219d7dfc5b6f5e987e9ce9668b7cc4"],["/css/highlight/dracula.css","3889f722a290e16735d5edc5ba4b015a"],["/css/highlight/far.css","a628107d76291c048f0730c8203475f0"],["/css/highlight/foundation.css","8a34faad73a6c77a5d069d3c0be0ee52"],["/css/highlight/github-gist.css","5647efa67367fbcacfff82d69db20e2f"],["/css/highlight/github.css","ea88fe77b08379b80025adaa5879bc15"],["/css/highlight/gml.css","ff46d1fe4416330fbfbff8c529026766"],["/css/highlight/googlecode.css","95ef66679d46c1f6abb48265d78a49d1"],["/css/highlight/gradient-dark.css","c09c3f7de88a209aefed89d2f63bcde2"],["/css/highlight/grayscale.css","1a3fb4102d4fe47310ccfc061a8c3fb7"],["/css/highlight/gruvbox-dark.css","f351d4036b78321c4b06fc981ad0f358"],["/css/highlight/gruvbox-light.css","fe2c99c483d2997e2816bf10e021caca"],["/css/highlight/hopscotch.css","63842552bf8fc5e4ce4970d901a3aea8"],["/css/highlight/hybrid.css","1f9e4989f94301e8376582e7a85b817b"],["/css/highlight/idea.css","6d22e6ae8f025bb0d9c61d4136f5cb02"],["/css/highlight/ir-black.css","51c3d9a319793cf109c3ec7a989df54d"],["/css/highlight/isbl-editor-dark.css","4eb7ed47481b9c2c368bd32050fd45a0"],["/css/highlight/isbl-editor-light.css","379d5dbbfdaa1e7727d8f2534d67aab3"],["/css/highlight/kimbie.dark.css","3f1d769d6d15ec41337ae91066477452"],["/css/highlight/kimbie.light.css","c8a78f5cb1500397ec95e8307123f7c0"],["/css/highlight/lightfair.css","f01d543f50aafbf4c9f55cf48a5e6e74"],["/css/highlight/lioshi.css","fa2659f4ae67d88be7533dc0879d2210"],["/css/highlight/magula.css","3adba65144395b00e3c802f5ae1c5ea2"],["/css/highlight/mono-blue.css","4f186fac85b2216debd98077a0990e3d"],["/css/highlight/monokai-sublime.css","12a987f32bb22852080999b95c2b6862"],["/css/highlight/monokai.css","e3c879f60cf309b5da2f1fba78be7683"],["/css/highlight/night-owl.css","cee405662ec532bfc4919911c84cd587"],["/css/highlight/nnfx-dark.css","e78c7162ccf56845e2184371788ed608"],["/css/highlight/nnfx.css","fb4f4a527874dbe39d77f70bc3da8d71"],["/css/highlight/nord.css","c3a944577d281e5cda33cd877f5b2db0"],["/css/highlight/obsidian.css","e778e4740ece7a5e0fc5fbcb888e6f5a"],["/css/highlight/ocean.css","f1af8d2485f4567310a118923335bc2e"],["/css/highlight/paraiso-dark.css","f7a602996aa65e823e9e7913c90b8d33"],["/css/highlight/paraiso-light.css","91a448fca3a99c49f3ff8dadb53aacce"],["/css/highlight/pojoaque.css","61592f53077c0b3936fb9a290cd922c7"],["/css/highlight/purebasic.css","c221cb49e4f452c95c6207dd6851ba95"],["/css/highlight/qtcreator_dark.css","02617f9cceee3e135bc0e8571b602d9d"],["/css/highlight/qtcreator_light.css","28c5c41c7e85d9a477fbd691c8632eb9"],["/css/highlight/railscasts.css","f141ac0c0d43d2398823070403a3ac20"],["/css/highlight/rainbow.css","4d69fcc0a01cc753a174c47f4be29751"],["/css/highlight/routeros.css","b431686fa32385a132290804b51c3a93"],["/css/highlight/school-book.css","ff031fb1f26dcf74117368dec3e9e79b"],["/css/highlight/shades-of-purple.css","6314f1ac917707e5c36b4bd13bfd8ab1"],["/css/highlight/solarized-dark.css","fb222b2e7397e893adc1ac92167d0901"],["/css/highlight/solarized-light.css","f74c41615ec274a66a252d2a5e9bf45a"],["/css/highlight/srcery.css","9df18adc8707d7918af9469460295e8d"],["/css/highlight/sunburst.css","b977248c2aea5ab575e0d68ba644ce5f"],["/css/highlight/tomorrow-night-blue.css","cf91e9d7154f60e4939dc19b407f3d1b"],["/css/highlight/tomorrow-night-bright.css","b4468b60ec4ef505795c2bd067c90ed5"],["/css/highlight/tomorrow-night-eighties.css","2a98e06e57c9b51ee01bc55356870f5e"],["/css/highlight/tomorrow-night.css","b4c52ecc094c00c6036441dade2aefa1"],["/css/highlight/tomorrow.css","1d843b493551e5d3d52690428cf8848f"],["/css/highlight/vs.css","aec4b81b720f9e197f11f6da9741783e"],["/css/highlight/vs2015.css","6a6a269a08446bce0fd2165589410999"],["/css/highlight/xcode.css","c8663abf0df4cfcef05fb48f403fa8fa"],["/css/highlight/xt256.css","47e6400258afc17d729b1fa66c7525ca"],["/css/highlight/zenburn.css","b5945c240778c218fd3bf9bef48526d1"],["/css/style/dark.css","30e954499390c2e8d72a99421c03b6e4"],["/css/style/main.css","42bd8b7ef13d54cb49405bdbee5d4f78"],["/images/android-chrome-144x144.png","47e30c8645b5a85f489788f4ca971011"],["/images/android-chrome-192x192.png","c8af9d9a21b2d6e97b3e34598c3e5132"],["/images/android-chrome-256x256.png","d066968d5a5c8458db7b86c69c4c5ac1"],["/images/android-chrome-36x36.png","e22ab0faf5771944b2829f1ca8393e1b"],["/images/android-chrome-384x384.png","33f443175c98a2ba3d858fb2d9a5456e"],["/images/android-chrome-48x48.png","638d502a5e49bbbf267000a7e9223e17"],["/images/android-chrome-512x512.png","e9410529a972b34465b0030cd3c6794e"],["/images/android-chrome-72x72.png","528d1f807af09e7dcc8d7bc72660f2cb"],["/images/android-chrome-96x96.png","d3a180943590edffdb2022669ee8c005"],["/images/apple-touch-icon-114x114-precomposed.png","5c264eb297471c6c0e34c2b09122fdd2"],["/images/apple-touch-icon-114x114.png","6cb312a75ff19fa05848c82fdd6f81c6"],["/images/apple-touch-icon-120x120-precomposed.png","06f57bed97047aa7b7c1d07b8d1c010b"],["/images/apple-touch-icon-120x120.png","5254c5aa94cdb6c642f8d264374bb1b4"],["/images/apple-touch-icon-144x144-precomposed.png","bef4adcd7c1a5270f7951c59b5c44d4d"],["/images/apple-touch-icon-144x144.png","28a72d2116528276693598a148942e75"],["/images/apple-touch-icon-152x152-precomposed.png","293d8a28102b5b8302bbad81106b0427"],["/images/apple-touch-icon-152x152.png","2f41a9994ef80355a78665f60cf79962"],["/images/apple-touch-icon-180x180-precomposed.png","81585cda341a2e12449837bee482f892"],["/images/apple-touch-icon-180x180.png","0c0124d4d61cc555e84edea121dee6ff"],["/images/apple-touch-icon-57x57-precomposed.png","cac8eb7558d0d942b1ac19b6407c30c6"],["/images/apple-touch-icon-57x57.png","a670fead1203bd73e5f5e53a7f39af4e"],["/images/apple-touch-icon-60x60-precomposed.png","0e310308d3b2fde1d2f9bdccaceb3f6d"],["/images/apple-touch-icon-60x60.png","85e3c2805026354cb6d64d905414cde2"],["/images/apple-touch-icon-72x72-precomposed.png","5a567f399a082af946f26e5fefa8efa1"],["/images/apple-touch-icon-72x72.png","cd2ae579c9b721205e69bcd392e7efb1"],["/images/apple-touch-icon-76x76-precomposed.png","a9133da32241d1653b1bf60744e434f6"],["/images/apple-touch-icon-76x76.png","4981bfeac3eec1b1ed885837ff401adb"],["/images/apple-touch-icon-precomposed.png","81585cda341a2e12449837bee482f892"],["/images/apple-touch-icon.png","0c0124d4d61cc555e84edea121dee6ff"],["/images/avatar.svg","08e8849798ee33247ca0ab8cb913d68b"],["/images/favicon-16x16.png","59e10649b4e60e9436d697a644a6dca5"],["/images/favicon-32x32.png","b99b6e0482d747ba8628322ccea7af46"],["/images/mstile-144x144.png","952f298d0b1d27d43d0488e77f311eea"],["/images/mstile-150x150.png","afb41cc82a7020c929464d77d72da19b"],["/images/mstile-310x150.png","c565d245e7c37872beb85b1512037c23"],["/images/mstile-310x310.png","faedc0576d1141718fa63e125f53c8a2"],["/images/mstile-70x70.png","ae468744d1fca7dedea33c7d4c706cf0"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/safari-pinned-tab.svg","9d92a54bf0481839e4bcde616840021d"],["/index.html","f2fb19450dd72cbcee1e2fd24c45e6e4"],["/js/b2t.js","ff7fee4413d70545d069b5f328e5cdbe"],["/js/darkmode.js","2be8ee2c06f76137631d04a452d4a5bc"],["/js/local-search.js","a3ad965edded7e9337d84ccc3112053c"],["/js/mermaid.js","ba0140579f821a30fa1236d508267b39"],["/js/valine.js","bcdece35c06db35adbd928ca72246dda"],["/js/webp.js","a1ef5e4c7002f4955ce0cc8aa552e6c7"],["/msg/index.html","a96a8cb8562e170bc0c5713ff36af466"],["/s/index.html","92c4cf446e76a6cb9002802bc22bef1a"],["/sw-register.js","cbb77f9988aebab5bfa77566bd4028d4"],["/tags/Go/index.html","1df9ff8e588f783d833e4bbf64558f42"],["/tags/index.html","383804a00d6600caba5564b3e28a0455"],["/tags/模板/index.html","f5cf2ebfb4efadeb457d66c43dacfcab"],["/tags/正则表达式/index.html","bc3852695af8d6f368ddd20ed7507aad"],["/tags/站点/index.html","f0a1e739320274e236670fe4c9c5d2bc"],["/tags/编程语言/index.html","7a2f0a821e2a4c9afe818981a48dc238"],["/talk/index.html","f65aa01dea505cf5dc88dd27782ba2ba"]];
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
