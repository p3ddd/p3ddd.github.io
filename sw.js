/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/archives/1970/01/index.html","aad7644dfc370658144ad404daf91faf"],["/archives/1970/index.html","a0021bca0be411bbabd17cdd591d990a"],["/archives/2021/07/index.html","c52e0f89b94a4ef11bcfa3b630484966"],["/archives/2021/08/index.html","eb81ab8527d9e863ae8ab505dd848e2c"],["/archives/2021/10/index.html","cf0a1f7615e74b9a20bcab92247c96d8"],["/archives/2021/11/index.html","a26f9e0fe59ab4f6d7572ece7c17439c"],["/archives/2021/12/index.html","e69fff8e023067e8f74985eba852da39"],["/archives/2021/index.html","7f95ac10038067fbfc83e0a11fac8d27"],["/archives/2022/02/index.html","83f2aba9249c4a79d01e8d358dc4dbdc"],["/archives/2022/03/index.html","bcb3e588696469559631251c910493da"],["/archives/2022/index.html","c3fcb0d93fca48b1e239d559f9f34d0f"],["/archives/index.html","ed2d76d327b0dd149becdbb67827ab95"],["/articles/WinWallpaperSaver/index.html","aad846b7ac699795db2c1c55b1ef0f83"],["/articles/begin/index.html","c83f8bf856b3428c7bc7b934d1c442c1"],["/articles/go-const-inline/index.html","5fda1873e8e95c8207fe02c38ec28bd0"],["/articles/go/index.html","31cb35ad57a1e4f4822734d3061b908c"],["/articles/npm-config/index.html","42f59e43690f836f11de0d8c7ebf7f0c"],["/articles/reg/index.html","cf2dc4a17c40384cfe3497bb2f84818d"],["/articles/test/index.html","5347a817cb55f682e404423dba699352"],["/articles/webp-bat/index.html","726b127ed0c7b22cee88a6830ffe506c"],["/categories/index.html","459443292dd686459e4ebe139e32b8a2"],["/categories/计算机/Windows/index.html","a1b491611dc36b2796e4f67d044d9c95"],["/categories/计算机/Windows/批处理/index.html","5f356d56c6225b597f420c1c75a1eb0c"],["/categories/计算机/index.html","7f8a751422c924ac9508e847616db72f"],["/categories/计算机/编程语言/Go/index.html","3300f0aea8674b31a5b8a5cfe9e7b604"],["/categories/计算机/编程语言/Node-js/index.html","4b059ef7b9e87344697276f7485c18a4"],["/categories/计算机/编程语言/index.html","f1d0a819fb4885202189a6d75b215949"],["/css/highlight/a11y-dark.css","5438e221505b911dcdeca435ed07884f"],["/css/highlight/a11y-light.css","ee7fc0c01d5464075db8d6800dbc7083"],["/css/highlight/agate.css","8f375b8e2722679d7e54e52a4dbd72f3"],["/css/highlight/an-old-hope.css","fa3ccb4f7de063019c042a336a974a54"],["/css/highlight/androidstudio.css","714aa88c6388bd8d1c2e3e66ffc5b7d5"],["/css/highlight/arduino-light.css","d38d5fa439112d84f3e782e5bbc2b926"],["/css/highlight/arta.css","a5d6a4aa3f185e9bc08c91f75a85bc5c"],["/css/highlight/ascetic.css","3ecc4ca4c6666275e9abf53fd2e1dab8"],["/css/highlight/atelier-cave-dark.css","d4e6a2ed75eb8b286716a6416abf5c12"],["/css/highlight/atelier-cave-light.css","bbc2c6bf3e568ca90f967b21eabf204f"],["/css/highlight/atelier-dune-dark.css","5e0776cfb9cd36aba952c151588ed12d"],["/css/highlight/atelier-dune-light.css","cc01df88eafbef7dd0a8a7bfdb0c012e"],["/css/highlight/atelier-estuary-dark.css","2c56e748a79f4bb1e2eb8311b64b3306"],["/css/highlight/atelier-estuary-light.css","60ee1a37c3aae0dcaf0e583f1a5fa824"],["/css/highlight/atelier-forest-dark.css","e0eb1dc1610ee9a447ced3b189b50227"],["/css/highlight/atelier-forest-light.css","7dd98ac07c86fcef5f5fb44482903e53"],["/css/highlight/atelier-heath-dark.css","4482bba6868f7465513fb941de59a88d"],["/css/highlight/atelier-heath-light.css","059e10a4b6acfbcee0e58b71eff1f9f6"],["/css/highlight/atelier-lakeside-dark.css","4e2f08d279e1a275804a142e9c939d5e"],["/css/highlight/atelier-lakeside-light.css","d541edff7689dfb3f7ded161c3512883"],["/css/highlight/atelier-plateau-dark.css","7629f3868bbf843924d9b446f7a8d796"],["/css/highlight/atelier-plateau-light.css","263a6303cf429e536ebb2ffc74c0107b"],["/css/highlight/atelier-savanna-dark.css","ebb41e78d3082690aa2bfe7be1f9c863"],["/css/highlight/atelier-savanna-light.css","0a30f1a34368d34160e74bd9b9ce251b"],["/css/highlight/atelier-seaside-dark.css","d78075ffd4152a51177ca5ae10a60765"],["/css/highlight/atelier-seaside-light.css","7a6a53d7028849c3439dcbc5bf2a3666"],["/css/highlight/atelier-sulphurpool-dark.css","0da99e8a6a01481883c7c9db5389a9ab"],["/css/highlight/atelier-sulphurpool-light.css","7b5e50e726dea1f4e0c872800f7f61d2"],["/css/highlight/atom-one-dark-reasonable.css","f73582e02cac59e510e052583cedb40e"],["/css/highlight/atom-one-dark.css","0bcdea4fc3661a55e41e4c47b3d70342"],["/css/highlight/atom-one-light.css","87f89e36eb78c59208d290a961e782cb"],["/css/highlight/brown-paper.css","71df0a70e51d3322dd35817a9be86e5d"],["/css/highlight/codepen-embed.css","0f5b0d170764987fb8ee3eed118e480f"],["/css/highlight/color-brewer.css","155039e2413c4ffdb6548569660d5dd6"],["/css/highlight/darcula.css","28323d72d7e6c0c71a9188d85a6979e3"],["/css/highlight/dark.css","e6ea00a7274848c596920e9418095b06"],["/css/highlight/default.css","26fc15366bf3539d3089959db01bfc8c"],["/css/highlight/docco.css","bb2e655dffa2c50b05f201d151738e79"],["/css/highlight/dracula.css","5f8ea4d7817c2e77a275ced0de4b5b44"],["/css/highlight/far.css","7f7f19abb880cc06c391d81665209695"],["/css/highlight/foundation.css","01cc573389904c3fc896683ed033a650"],["/css/highlight/github-gist.css","3e8de2d089baad43bfea2caa6a4b0289"],["/css/highlight/github.css","c95858f7233b9d6330997669aa0fcb5f"],["/css/highlight/gml.css","582b64f36649c322ad0bc220b287025f"],["/css/highlight/googlecode.css","2b037d96d9653447aeb319bb0fc97f90"],["/css/highlight/gradient-dark.css","e35d484e283ae10210d72ad90c4c69df"],["/css/highlight/grayscale.css","9c9cac60f04c6ed11ca7a909fea05e84"],["/css/highlight/gruvbox-dark.css","d985ed5bac343d7561d5f32614407099"],["/css/highlight/gruvbox-light.css","37347405aa39eb0dc9462f18b3385174"],["/css/highlight/hopscotch.css","d13d0ad7801c95d8f02d498234cfbb82"],["/css/highlight/hybrid.css","d10d32e61ed836006e7057e5cc413fe4"],["/css/highlight/idea.css","afbd77b060793dcceed91f588ab2e1b4"],["/css/highlight/ir-black.css","0bb7c46af6ff75326609ceb20fcc4bc3"],["/css/highlight/isbl-editor-dark.css","bab80630f164f16fb246f4f7fadb1dbb"],["/css/highlight/isbl-editor-light.css","87dd1b9e3576d3f25abba2f7e0d3569d"],["/css/highlight/kimbie.dark.css","07686f064ccb276096c2b69bfb3644a1"],["/css/highlight/kimbie.light.css","1ac623413d03090b02eaa2ae3236be44"],["/css/highlight/lightfair.css","691c3af948ec86160a074bc4010e805c"],["/css/highlight/lioshi.css","10cf1c62a7f370aff86b1a7cb903e4bf"],["/css/highlight/magula.css","2fceb47eaeef7b4ad53c997537dca52c"],["/css/highlight/mono-blue.css","0022543e740184dadcbd0da260a71ce3"],["/css/highlight/monokai-sublime.css","f9e43b5ec2aded35442618751b5eb2e5"],["/css/highlight/monokai.css","456bc77c893da87c80273be0f8505296"],["/css/highlight/night-owl.css","c1118b22866f5fba6f6cb09a75deae9b"],["/css/highlight/nnfx-dark.css","ec4f3da8bd88d1114dfe85aa92f9a8c4"],["/css/highlight/nnfx.css","ee4d016747756888d121fb39b7c8c528"],["/css/highlight/nord.css","9af1e2949996034518df053d0c1f6386"],["/css/highlight/obsidian.css","1b1e01de7798c359001e68cbe9a01222"],["/css/highlight/ocean.css","28d754561f586d90d385265b443dd2f0"],["/css/highlight/paraiso-dark.css","9f739376dfc8536971bb37123c91d86c"],["/css/highlight/paraiso-light.css","f5df5e0124d150652ebe744907b0299c"],["/css/highlight/pojoaque.css","31ccda12966e98f48fefba8bd082b08e"],["/css/highlight/purebasic.css","c28c8c77015cfc477d058cfb1d68c5bf"],["/css/highlight/qtcreator_dark.css","f5d011c35a1df6a44b0a5bd2cd30ef0e"],["/css/highlight/qtcreator_light.css","b0fde36a4b73339e24379e370d8d767e"],["/css/highlight/railscasts.css","2a72d16526051a251d5381a37aa5fc63"],["/css/highlight/rainbow.css","00aacaeffea1153172161ea1653f5dbd"],["/css/highlight/routeros.css","0c079fc05a4e73adc3957ade0ee4bf2e"],["/css/highlight/school-book.css","5a81e7318a27ffd0b5aac78cabd18e2a"],["/css/highlight/shades-of-purple.css","0cf06a7deadcdfb83a14c0f056d2ec56"],["/css/highlight/solarized-dark.css","ac54ff6d4fe685644ea686a345f76b24"],["/css/highlight/solarized-light.css","bf4b04984f6c06f60b94677a7bf22d78"],["/css/highlight/srcery.css","f52a0068f5fdab07d747776b15094c22"],["/css/highlight/sunburst.css","322db5a028f0814a1bb89538476f4dcd"],["/css/highlight/tomorrow-night-blue.css","f4a915c982da05675639c692f4b7ad13"],["/css/highlight/tomorrow-night-bright.css","e12ca8ab4964c98b4b41929f19768154"],["/css/highlight/tomorrow-night-eighties.css","e6ff13ca60ae68764fcd567335bf8ce0"],["/css/highlight/tomorrow-night.css","8c43f2fcd30949bd033ee0c8f78e96b5"],["/css/highlight/tomorrow.css","81f410a0ab31b22198b55612662a3a7c"],["/css/highlight/vs.css","1a861ffbdeb980a2d231990763da8514"],["/css/highlight/vs2015.css","95017fe7cf3f851f28983ff55460ab50"],["/css/highlight/xcode.css","e20ec1f306dba8327976fa335bbb3ad8"],["/css/highlight/xt256.css","1cf52d958d105db1f1b3debf395818fe"],["/css/highlight/zenburn.css","365f5585970ceba89d302828fac19961"],["/css/style/dark.css","7772c1358ac044d0955af0764242efc5"],["/css/style/main.css","65f99d87bc9d3008d6ce1944abb2bf2e"],["/sw-register.js","62a4c4b141be3ac8da6f3d9ce3fc43b5"],["/tags/Go/index.html","879da053a2284dce3d00b2afa93e3d23"],["/tags/Node-js/index.html","3f3b0bb64f7da57895c894df910b7b13"],["/tags/Windows/index.html","8e335fac260d579cd40adbb10e89ba13"],["/tags/index.html","664075ef4d32c8188e0994a5ec704cd5"],["/tags/npm/index.html","1c495c5c9a62576987c69e661ff29a1e"],["/tags/webp/index.html","7bff161c7f24d7c7d94e2c86c734679a"],["/tags/壁纸/index.html","d3b1327c4e189eca5b6479a89952c998"],["/tags/批处理/index.html","379704a02d7dc5513fc334cd2ab136d0"],["/tags/模板/index.html","2d6a594d0add469050191eba46fd2d80"],["/tags/正则表达式/index.html","adc5e47e9c7072d15d1c7d29f308ac43"],["/tags/站点/index.html","a5b2ff26782741044c539470b6fe50d6"]];
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
