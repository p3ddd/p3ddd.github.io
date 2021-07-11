/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","469b71e93f5f1a03c742212277b98b0d"],["/archives/2020/02/index.html","bfcb16cc2d24b8474a4f5d7f84e1da2f"],["/archives/2020/03/index.html","b7d24cb8a81f8d4cc05b9721d3c3c50c"],["/archives/2020/12/index.html","d8d2e22ac601c21fd563a4c8523dddfb"],["/archives/2020/index.html","8fc4cb89ec6c63e6a80d446ad2830fea"],["/archives/2021/02/index.html","cc645ce39ffe957ba0ace6512c233478"],["/archives/2021/index.html","0073be36b67344f93e471659e63acad7"],["/archives/index.html","ff93bf47d4a1fb3246a2598b8293a19d"],["/articles/2020-2021/index.html","ec0c5de6b87c9e34dabc027aef8bd535"],["/articles/snippets/index.html","6316b211689eef52c3f75d736b44da5c"],["/articles/test/index.html","f3ba1d562aaa27db0e7b1797fb808566"],["/articles/update/index.html","3f97a863d5caba0a573a0b545c7ae811"],["/assets/2020-2021-pic1.png","fdea1d04aaba3670eed4fb6956845cfb"],["/assets/2020-2021-pic1.png.webp","24ef5c27a4dc3b6da894d6860a8811ca"],["/assets/2020-2021-thumbnail.png","38972bf607274c3908edf087f2e3b4dd"],["/assets/2020-2021-thumbnail.png.webp","10063040c48e0f96027224d3c389c58b"],["/assets/AcademicSubject-pic1.png","2559ceff9ac73cccf054e9c359fd139b"],["/assets/AcademicSubject-pic1.png.webp","26d73096d98dd6b119c813d3d11de1a2"],["/assets/Backpack-pic1.png","55ac5e4847284550f56082ddeb137768"],["/assets/Backpack-pic1.png.webp","eb60203c87ebe1deccc96d1e7e18c0bc"],["/assets/BuildBlog-pic1.png","ee1facac3909301810da77164c5151bd"],["/assets/BuildBlog-pic1.png.webp","6597b42b23d2b4c12980ff84368c5531"],["/assets/BuildBlog-pic10.png","c5f4a0d600365f389ece4c619e924f45"],["/assets/BuildBlog-pic10.png.webp","baef353cca626ccc069e744d4896cf45"],["/assets/BuildBlog-pic11.png","d0e5a5d065042fddd2d1e16f8ad9b249"],["/assets/BuildBlog-pic11.png.webp","08369b8ad1482defaae8ce1b6356c3c3"],["/assets/BuildBlog-pic12.png","8a0225a1b49d4e3317748ea294774bd2"],["/assets/BuildBlog-pic12.png.webp","0b7c5885802cc0303422931127c2ef4a"],["/assets/BuildBlog-pic13.png","2977508761c4bb37451ff2d4d48a23e3"],["/assets/BuildBlog-pic13.png.webp","35c1ab4c3f4add7148c9f2e42a23e5b6"],["/assets/BuildBlog-pic14.png","b678a1486b4286ac3bbe065444b79ce0"],["/assets/BuildBlog-pic14.png.webp","e905ad6e2b50ef5d0d2ee87c054304ac"],["/assets/BuildBlog-pic15.png","6d7a2d412e91028e3ab80a631678518a"],["/assets/BuildBlog-pic15.png.webp","fc92516a47884882effc20714fe3db63"],["/assets/BuildBlog-pic16.png","b1b2189a3bf0ab3aae4494092057c874"],["/assets/BuildBlog-pic16.png.webp","4091ffe7ac2aed456e816d06bc522357"],["/assets/BuildBlog-pic17.png","5f07bb22dc4720eea140dd964400c122"],["/assets/BuildBlog-pic17.png.webp","223acc07c46d0c59d6a5cf22e6b19446"],["/assets/BuildBlog-pic18.png","28b515fd343fed90822f80c4ade673cf"],["/assets/BuildBlog-pic18.png.webp","05e473638b725a81d026448cd88591b9"],["/assets/BuildBlog-pic19.png","fec61af8f5235d6786392e02520760b0"],["/assets/BuildBlog-pic19.png.webp","32a86e6895d59b8b8dafae830756c3b5"],["/assets/BuildBlog-pic2.png","007e9fbe317e59678cc0bf0441b2961e"],["/assets/BuildBlog-pic2.png.webp","eaaa40fce01f14210c3a73f4488ab991"],["/assets/BuildBlog-pic3.png","82035b7078a01012d19d7f347a1b8fac"],["/assets/BuildBlog-pic3.png.webp","c123282bd3f9a900cfbe07191c706031"],["/assets/BuildBlog-pic4.png","bf2f6eb1eba4edb7bf4a7b0549188c64"],["/assets/BuildBlog-pic4.png.webp","3a5c50c9c612623e03c2311a73aa6f98"],["/assets/BuildBlog-pic5.png","7cda1504733cd2dfdd9ffb89f8207828"],["/assets/BuildBlog-pic5.png.webp","9c832d38e2c50a4152690147803b047c"],["/assets/BuildBlog-pic6.png","47a69bf983284288c6a9939502abe5c4"],["/assets/BuildBlog-pic6.png.webp","a768d549399cb9e89022f5a69e4e1f28"],["/assets/BuildBlog-pic7.png","ccb94c9a46e98e012f775dc4b405a4e9"],["/assets/BuildBlog-pic7.png.webp","904acebcafe8e676ce2669f1bef74486"],["/assets/BuildBlog-pic8.png","abbac1cab56f56355b61802227279322"],["/assets/BuildBlog-pic8.png.webp","cff26c2e4ae967865b454bbb1cf79c3b"],["/assets/BuildBlog-pic9.png","21d1d836a4a0828798fa448de6fccc88"],["/assets/BuildBlog-pic9.png.webp","065cfa3536b2f63dc80b5249cfefd0dc"],["/assets/CubeSimulator-pic1.png","df1cf394189ace85ae20d258f475dfce"],["/assets/CubeSimulator-pic1.png.webp","ed34dde854ee08ebeafae7c756e1edb5"],["/assets/CubeSimulator-pic2.png","760dbbf07824e7836d6e3c857bd8cf89"],["/assets/CubeSimulator-pic2.png.webp","2bba0b0f2718db732e814adc6f888d1d"],["/assets/CubeSimulator-pic3.png","c239b7d7274065da92743cadaeaef69b"],["/assets/CubeSimulator-pic3.png.webp","1e974a073026e282062b54a8702f9194"],["/assets/CubeSimulator-pic4.png","56d0573f16a19e902a5bfb14b83eacc4"],["/assets/CubeSimulator-pic4.png.webp","9e320a4b3d05b66e6b0f2834777a02ab"],["/assets/CubeSimulator-pic5.png","72ba02869779d77c273555a018a789a0"],["/assets/CubeSimulator-pic5.png.webp","e8aea734d23238a1b26b441c87ac55c0"],["/assets/CubeSimulator-pic6.png","c40883297b8f4f4ec3b39e8bf62f45df"],["/assets/CubeSimulator-pic6.png.webp","0bfd272b06f4f3a48700d628264f64a2"],["/assets/CubeSimulator-pic7.png","2fadcedb1083fb8413dbd9fdb1bac8fa"],["/assets/CubeSimulator-pic7.png.webp","17c651f2738165e6f734fb8db0697ebb"],["/assets/CubeSimulator-pic8.png","c03bcf8f731d9233c2c70904c743c343"],["/assets/CubeSimulator-pic8.png.webp","8500816e8dee57d5cf393216b98aa075"],["/assets/DFT-IDFT-thumbnail.png","027aaa80852521edfbfc25568212296c"],["/assets/DFT-IDFT-thumbnail.png.webp","44209cb736da910ac5dda1e9660b7eab"],["/assets/EulerIdentity-pic1.png","d4d6f7fe2a7973e41b0a9759ac21ba15"],["/assets/EulerIdentity-pic1.png.webp","45939c996d274c08831738b4b42a1cad"],["/assets/EulerIdentity-pic2.gif","f27455aaf83a3b645a748384e59fe536"],["/assets/EulerIdentity-pic3.png","34025469fb93369d8b11e4601735f008"],["/assets/EulerIdentity-pic3.png.webp","77a9d4a74c92ae65777b48e0ea7b8806"],["/assets/EulerIdentity-pic4.gif","1dfddf06d5d10f6146d2162ec5dd53b0"],["/assets/EulerIdentity-pic5.png","59ca89bdbad98d92e4f5661625b652fa"],["/assets/EulerIdentity-pic5.png.webp","590c1addf20bf22e32e80d77a25db566"],["/assets/EulerIdentity-pic6.gif","a50c5382f9c50dbc35296a44183a6221"],["/assets/EulerIdentity-pic7.png","b674be6ba3cdffea0391622a34891c42"],["/assets/EulerIdentity-pic7.png.webp","55e908886e8501137599f34acace3e65"],["/assets/EulerIdentity-pic8.gif","d0f45905355a9dfb18b1728505de75f7"],["/assets/Hausdorff-pic1.png","df3bd40ed81183dbcfadb2fd741f378c"],["/assets/Hausdorff-pic1.png.webp","51b62d3a5ac3cca8458e2856b7a8a384"],["/assets/Hausdorff-pic2.png","eab31451c4a36e549c0b5d04a7c2980a"],["/assets/Hausdorff-pic2.png.webp","11ca3751442a769c4342aa361fa91ca1"],["/assets/Hausdorff-pic3.png","fd6e8d2b578b81572d50e8f43bc3324e"],["/assets/Hausdorff-pic3.png.webp","a092044ca0bdea89539044034b909ee4"],["/assets/HexoTagTIY-thumbnail.png","1491b66735a3c88bd654d8f873ab96bc"],["/assets/HexoTagTIY-thumbnail.png.webp","fab7dad69e02eaaffb6372829bb65e37"],["/assets/KmpSubstringSearch-pic1.gif","2da93a53fd6045a1425f30bd19016cab"],["/assets/KmpSubstringSearch-pic10.png","300f8633d0f88588b52657da7a43d2ef"],["/assets/KmpSubstringSearch-pic10.png.webp","0509ccdd702c7979837ef38a396a865c"],["/assets/KmpSubstringSearch-pic11.gif","71d02113253f158a404c1bbc144d9248"],["/assets/KmpSubstringSearch-pic12.gif","f0821a5f56a974fde4d5fc8cff699297"],["/assets/KmpSubstringSearch-pic13.gif","b99cb1323af2c76794bc2845448780b4"],["/assets/KmpSubstringSearch-pic2.png","11afd475f6031c6fa3dbae735eef7d4e"],["/assets/KmpSubstringSearch-pic2.png.webp","d34e91a5c6637098ca37dc8f1e43f1a6"],["/assets/KmpSubstringSearch-pic3.png","41c31d90502ab83ea84474deba1564d1"],["/assets/KmpSubstringSearch-pic3.png.webp","a395100eea5f57e60b85354fafcb152c"],["/assets/KmpSubstringSearch-pic4.gif","38265ba4d2ac2ee498d47a5805fbd4fc"],["/assets/KmpSubstringSearch-pic5.gif","a7994ace25b192c30afd08b2a511cbe8"],["/assets/KmpSubstringSearch-pic6.gif","b7df6ae862d03f66dfc0de2746d99b26"],["/assets/KmpSubstringSearch-pic7.gif","0f8c7d7fe4f5143d1f30ac18d5a4c789"],["/assets/KmpSubstringSearch-pic8.png","a0e8a14b9a30fec9857ab3046637aea6"],["/assets/KmpSubstringSearch-pic8.png.webp","6eba8684c6bfd38392adc5b3b11530ef"],["/assets/KmpSubstringSearch-pic9.gif","7b89fdaaec74bf4ac8fff3e6ee9975a4"],["/assets/LifeGame-pic1.gif","00a0f94f16cc5d33190bee6bdf59ed24"],["/assets/LifeGame-pic2.png","30030a9b63a639abf5596c3f66e15674"],["/assets/LifeGame-pic2.png.webp","237418e00953d86d81be38cbf9d3bc1a"],["/assets/LifeGame-pic3.png","7d9876ae379c6adb51a91f61810e182d"],["/assets/LifeGame-pic3.png.webp","e227aca55f348c8766e800bc8039254f"],["/assets/LifeGame-thumbnail.png","6494066d1a3b64f4aa76c22f8e41973b"],["/assets/LifeGame-thumbnail.png.webp","db57df6fcebaaec4dfd57f299c99facf"],["/assets/LostInMemory-thumbnail.png","3b0534a03efc5025736a5fbfb02d032c"],["/assets/LostInMemory-thumbnail.png.webp","3c7856e9488c73995dc3c664c93d7254"],["/assets/NazoXecades-pic10.png","b6a44d3e2c8e519137fc26fb73b50cd0"],["/assets/NazoXecades-pic10.png.webp","cf022af0b741f6a53ebcb3f19ee76b09"],["/assets/NazoXecades-pic11.png","61356adff332e0c70543620832ead8ea"],["/assets/NazoXecades-pic11.png.webp","12e114fe49a683fc49dbf801d3b5d7d0"],["/assets/NazoXecades-pic12.png","81a457ab714fe8f7138c3863f46599dc"],["/assets/NazoXecades-pic12.png.webp","6236b89267e6f7579fb1736f22a2bd48"],["/assets/NazoXecades-pic13.png","be44db70ef883c2471f2a492193d714b"],["/assets/NazoXecades-pic13.png.webp","2afdc0b44f086a4393d3e3ab270b4452"],["/assets/NazoXecades-pic14.png","0fbb1e83a222b9ad1613dae8604d9ee2"],["/assets/NazoXecades-pic14.png.webp","6d94d043e099c2306ae0f25ee3c7e9cf"],["/assets/NazoXecades-pic15.png","227ae56af881f8986d567b76852e3e78"],["/assets/NazoXecades-pic15.png.webp","8a386aee377b8dfd0e2272bfde0985ff"],["/assets/NazoXecades-pic16.png","d3e103120fbab694323db48b141b7761"],["/assets/NazoXecades-pic16.png.webp","65cf5457341d99653e3e32393203ce25"],["/assets/NazoXecades-pic17.png","306f5603158217538edd066e5dc676eb"],["/assets/NazoXecades-pic17.png.webp","f98067659ed81b4e5104939f142333f4"],["/assets/NazoXecades-pic18.png","35cf9ec605d94ed0602a29050b63b0da"],["/assets/NazoXecades-pic18.png.webp","dbf5d88c68b7c2d59368ba8096014536"],["/assets/NazoXecades-pic19.png","79d1ea00499e71359230ec29548578e6"],["/assets/NazoXecades-pic19.png.webp","5876dc85a62a572504a34e448e9518dd"],["/assets/NazoXecades-pic2.png","0af7f06cc28aa8ec76d34b2b97182415"],["/assets/NazoXecades-pic2.png.webp","38e9ab1899c1480bdf7f4b3506e2b58c"],["/assets/NazoXecades-pic20.png","600143f34aa6babb2bd973d217669fdc"],["/assets/NazoXecades-pic20.png.webp","c1f66fd9601b423cb3ac7d8142a101fe"],["/assets/NazoXecades-pic21.png","cbd601a59922b14e26bbf62fd9897a42"],["/assets/NazoXecades-pic21.png.webp","1f6a52b5e4d1da0c872caff6cab2a5ad"],["/assets/NazoXecades-pic22.png","62fc3ae1259ad983a4c56b5cec0e2bb4"],["/assets/NazoXecades-pic22.png.webp","2e4aaf0a1b28308e9615c2e146162260"],["/assets/NazoXecades-pic23.png","94d9006d81404da9a9ce07ce137b788a"],["/assets/NazoXecades-pic23.png.webp","ea42aebd9ed6183c6e6b690ee59b56b7"],["/assets/NazoXecades-pic24.png","c4358450af196c76512e287848ad2785"],["/assets/NazoXecades-pic24.png.webp","537f294d2be859bcc4313d8e79991a3e"],["/assets/NazoXecades-pic25.png","780857b91bc62521e0217ba9344e8620"],["/assets/NazoXecades-pic25.png.webp","8a6cf0da162a43bbe0b6d266b2bc02f5"],["/assets/NazoXecades-pic26.png","949eaf5e7f7e9e11fd61a38c121eca3a"],["/assets/NazoXecades-pic26.png.webp","b5edd8cff2cc40052c619f6c3b5c1454"],["/assets/NazoXecades-pic27.png","8e42cb3c067c5696fe8afc9237cb5ade"],["/assets/NazoXecades-pic27.png.webp","9c3fdc0219201f115e640a2f8452c051"],["/assets/NazoXecades-pic28.png","27ad8e469f1c9e9c4571bced3a3a3518"],["/assets/NazoXecades-pic28.png.webp","7721bd004de4ef891cd2272175a0cd4b"],["/assets/NazoXecades-pic29.png","403055a88d16965c26f4095721ccb87b"],["/assets/NazoXecades-pic29.png.webp","dbea5b7094fee381f3c6e41ef6634a21"],["/assets/NazoXecades-pic3.png","7c76369c1a9ffeb4572a2817b9e18f74"],["/assets/NazoXecades-pic3.png.webp","792fe8510c87af6773ca668b9c301f66"],["/assets/NazoXecades-pic30.png","410d91317392c5fcc167683ea8980803"],["/assets/NazoXecades-pic30.png.webp","b767f025e8e11e7de3d40da4ea17ee8f"],["/assets/NazoXecades-pic31.png","d9686ae23ad530453e90d459798ea136"],["/assets/NazoXecades-pic31.png.webp","b972e7ec68792aa1ca38a88a72fd8d6e"],["/assets/NazoXecades-pic4.png","c362ced3d02fba175e3ec27ba31758e2"],["/assets/NazoXecades-pic4.png.webp","1a04d61992562c0f278e287477295ab7"],["/assets/NazoXecades-pic5.png","1ecb48f49122ed8a1c0edbd2a1a5e104"],["/assets/NazoXecades-pic5.png.webp","20ea7ddc9061be79f31a341adec846bf"],["/assets/NazoXecades-pic6.png","2a86ba541641c9514a70c93d85e0f4a7"],["/assets/NazoXecades-pic6.png.webp","89bc323bb2873aeafa8aa1b846d547ce"],["/assets/NazoXecades-pic7.png","ef898757343cd651b4016e75fe775fb1"],["/assets/NazoXecades-pic7.png.webp","13d74be9ac1a0e4bf8ff49266e3cbcef"],["/assets/NazoXecades-pic8.png","5f877c01d98f6b3370171ca643458f0b"],["/assets/NazoXecades-pic8.png.webp","579ecb54188a0e0240055674bf53ba0c"],["/assets/NazoXecades-pic9.png","d4044a1747f81fbf7a90bdfefea6a778"],["/assets/NazoXecades-pic9.png.webp","0a0bdb1276c0ab683b0f0708201ced20"],["/assets/NumberTheory-pic1.png","436c8d007770a124b083f570d9e3bd8b"],["/assets/NumberTheory-pic1.png.webp","436c8d007770a124b083f570d9e3bd8b"],["/assets/NumberTheory-pic2.png","b926158bb99b145d12696555bc5eb721"],["/assets/NumberTheory-pic2.png.webp","b926158bb99b145d12696555bc5eb721"],["/assets/NumberTheory-pic3.png","c0e2e71df83b563dd215da41924fc68f"],["/assets/NumberTheory-pic3.png.webp","c0e2e71df83b563dd215da41924fc68f"],["/assets/PiInCollision-pic10.svg","335443b0869924add1d056f97f10c824"],["/assets/PiInCollision-pic11.png","f73268707cc96450eb7a7b84cc51ef3c"],["/assets/PiInCollision-pic11.png.webp","77c9f5131e630c29598775bb07590838"],["/assets/PiInCollision-pic2.svg","2c7f197793d97d18fa6a99696f68590e"],["/assets/PiInCollision-pic3.svg","1aa1935b49d4184d88836f9a0d561507"],["/assets/PiInCollision-pic4.svg","dbd7730b8d08b895de3fedbc22120b4b"],["/assets/PiInCollision-pic5.svg","75732c0311b72b08d6fbc12676ad7c23"],["/assets/PiInCollision-pic6.svg","09c2fa369b61ec8199255d77c654c342"],["/assets/PiInCollision-pic7.svg","3c7591ecbcb2a1ec649883730bbbe448"],["/assets/PiInCollision-pic8.svg","351ea4c231a3ac6126d7bcf1a3a31721"],["/assets/PiInCollision-pic9.svg","81e51dad1994b78a6b650fbb7b082738"],["/assets/Poem1-thumbnail.png","7611d4fcbb613e8e79155c707e402f54"],["/assets/Poem1-thumbnail.png.webp","3cd8ca030721d8c8bd5d92249c26a023"],["/assets/Question2-pic1.svg","838ce6fd12c939b9658a0b09e0b71362"],["/assets/QuineRelay-pic1.png","fcc4b55de965eeaabdad35b2cce91d46"],["/assets/QuineRelay-pic1.png.webp","6fbe72fe8e577fe93a417b09f9ad8adf"],["/assets/QuineRelay-pic2.png","a42f65d6a83268cdf70a0ee797fcc899"],["/assets/QuineRelay-pic2.png.webp","26f829ed214e9437d0ebf7f8d62068b3"],["/assets/QuineRelay-pic3.png","b564e5a85ffc9c433df2b4fd54a25f44"],["/assets/QuineRelay-pic3.png.webp","f7c24ff8bd1d1e4936794edffaadc80b"],["/assets/QuineRelay-pic4.png","c23f2e1bfc5d28710461c66a61a1df0a"],["/assets/QuineRelay-pic4.png.webp","4973ede5022e9cd056caf2ab19ae8ac9"],["/assets/QuineRelay-pic5.png","e69da0b01e182089ec201ccd39eeb22c"],["/assets/QuineRelay-pic5.png.webp","bbad164458739b91b937b6c16df68a23"],["/assets/QuineRelay-pic6.png","a35bbfb26fc6505f2f2bfd787c7257a6"],["/assets/QuineRelay-pic6.png.webp","95552682aabbd67ebfe0bf9566694ab5"],["/assets/QuineRelay-pic7.png","eb9f167815bac4c86b063878d8a22018"],["/assets/QuineRelay-pic7.png.webp","1d08990e438597e82b8eaf299bb247ce"],["/assets/QuineRelay-pic8.png","27dd57c12e093be263d1ea290432729e"],["/assets/QuineRelay-pic8.png.webp","88d2c64250ef7400dc9af2bb6024e56c"],["/assets/QuineRelay-pic9.png","22e09687adb601d80f723584e3b64383"],["/assets/QuineRelay-pic9.png.webp","108a663b20c07fcf80ea9c57c7361e76"],["/assets/RegularPentagon-pic1.svg","952df73fa4088412d649185192c88431"],["/assets/RegularPentagon-pic2.svg","c97eeadb51a69f6a8aa688c3117f6f16"],["/assets/RegularPentagon-pic3.svg","702399f1d84c65193e811e25e01afe67"],["/assets/RegularPentagon-pic4.svg","b9096ea7f454e28e7a7b467493c97a95"],["/assets/RegularPentagon-pic5.svg","ed0cc9be1990676112b79f96d41b9bc3"],["/assets/RegularPentagon-pic6.svg","185749a062625f1f33d9cc26a44f40f1"],["/assets/ShadedArea-pic1.svg","3cbcd0b08cfac60db1d7a056de149229"],["/assets/ShadedArea-pic2.svg","9bc562216c1918b9db9b77053865f8c3"],["/assets/ShadedArea-pic3.svg","4269fea1b72db3d89d300951a9f58fa8"],["/assets/ShadedArea-pic4.svg","cd1c35365800b5fe05be24182b32004a"],["/assets/ShadedArea-pic5.svg","670d164542d6c91bda8a84d92361ccf3"],["/assets/base64-pic1.png","331fa72e145d08434f428967d8546a86"],["/assets/base64-pic1.png.webp","4ee0d4a107375f4e702191967e9771f6"],["/assets/base64-pic2.png","3d484b1ed0f00466d9fc246ee24422e9"],["/assets/base64-pic2.png.webp","6c15248f70c0de58b13886c92e910742"],["/assets/base64-pic3.png","7289359ff7f7056a53cba33ac79cdb68"],["/assets/base64-pic3.png.webp","8c1ec0f235ed821bd61af4f6126b3bd7"],["/assets/bookmarklet-pic1.png","a818f27266bd2eeb3d0e89344133a815"],["/assets/bookmarklet-pic1.png.webp","7e9df66a0543fd87a7b117de5426f354"],["/assets/bookmarklet-pic2.png","f271ab4152982a14f2aff963ec41cd6c"],["/assets/bookmarklet-pic2.png.webp","6fd544ab6b94c442757ba6fda4b9dc58"],["/assets/comment.webp","c9e6254ff7429e52b5b7f56d8acfb44a"],["/assets/cursor-gif1.gif","4006ee14f6461efd1819082187b0113c"],["/assets/cursor-gif2.gif","60a93669f71c90889d620bb445716eb4"],["/assets/cursor-gif3.gif","92b3ee8ec236b0d4de3b77bad1a81dee"],["/assets/cursor-gif4.gif","d6b884a7b1f7df1838e1f1cf620c0688"],["/assets/cursor-gif5.gif","519af1788606a7f58972c7ad98805a72"],["/assets/cursor-thumbnail.png","2d1fa7caa13cbd85e6a27ea70954b4bc"],["/assets/cursor-thumbnail.png.webp","6edd42ad02a283b8ea248468c34b7078"],["/assets/default.png","4358c262c7122a4a4bc7c82a330cf162"],["/assets/default.png.webp","ea08e0a263538eeac5ba5fbba0095341"],["/assets/fieldStrength-pic1.svg","0c9b5c5344fe9c7390fb8bcb5c6d6183"],["/assets/fractal-pic1.png","3bf65c45bbfd4f09436d5f47f343a1c2"],["/assets/fractal-pic1.png.webp","6b4ff343525c383d8f5bcba896c78543"],["/assets/fractal-pic10.png","3bae62443b43507f11d15d651eabbb2f"],["/assets/fractal-pic10.png.webp","aeeed6cb62e7b60eb71c8c460fb32396"],["/assets/fractal-pic11.png","f3e54acb67350387e1ffc680621e107a"],["/assets/fractal-pic11.png.webp","b4d720a70339da485fcb25dce299fbce"],["/assets/fractal-pic12.png","2fb0cc2d7a6d7dc5bfee9ee8fc78c186"],["/assets/fractal-pic12.png.webp","fa6155807da0954ee737ba1966893d55"],["/assets/fractal-pic13.png","48cdc9f2e9dcbe870ed8de16f480327a"],["/assets/fractal-pic13.png.webp","689703cf236b0be1c364513fd2e0f994"],["/assets/fractal-pic2.png","4f4673063ea970bc873a02f8f94b2d54"],["/assets/fractal-pic2.png.webp","1357d88421d77beef10e7ca697c0cadd"],["/assets/fractal-pic3.gif","04463b2ba06da8b5ef39b531539256ba"],["/assets/fractal-pic4.png","749d8d346d6fea586d3227f0e61857ea"],["/assets/fractal-pic4.png.webp","a2f35eaf8bd5c8a52eb6f8f722ac156c"],["/assets/fractal-pic5.png","caa09a5cd31624fb60403060ee102922"],["/assets/fractal-pic5.png.webp","56362872b467eaafbc386a3fb2c3ae30"],["/assets/fractal-pic7.png","888e7177bc7af1a5d92f72f4fae4ad7d"],["/assets/fractal-pic7.png.webp","8f680a5bbcf356d05951117b29a333c0"],["/assets/fractal-pic8.png","387ca76d55e4d4caa9bdbcc4e4491e0a"],["/assets/fractal-pic8.png.webp","862a0a6faaa9ac8920485c39b2a791b3"],["/assets/fractal-pic9.png","eebcc32d2eec6dad8a32ace9deaf1876"],["/assets/fractal-pic9.png.webp","1956c69f0028bad801efe7e0d812e1a0"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/assets/luogu.png","6006db8b8813b1c04365d584a245633c"],["/assets/luogu.png.webp","67638b24a51e338172ca5c016b5ce21e"],["/assets/minecraft-thumbnail.png","bc02c0a6e7876fc4a811817dc7e09e82"],["/assets/minecraft-thumbnail.png.webp","56fca759dda36b430ca781f9b12e6554"],["/assets/multiprocessing-thumbnail.png","6dcb2cfc120b69266a3d92b12c29e2da"],["/assets/multiprocessing-thumbnail.png.webp","3fd70199e24ebf3a90a65696bdcdf0ff"],["/assets/neuralNetwork-pic1.png","1f27c9935ddc955e7953b92d10b27d58"],["/assets/neuralNetwork-pic1.png.webp","23875cdbb3a9a1afa28d3388de7c6ed8"],["/assets/neuralNetwork-pic2.png","e4dc28308528fe38f76a96394ac192e5"],["/assets/neuralNetwork-pic2.png.webp","c410e5c842201300095967bccd7d0e06"],["/assets/neuralNetwork-pic3.png","0e9d4b93a7aecdddf5daac6f438b62a7"],["/assets/neuralNetwork-pic3.png.webp","4ceca50cec148b3a311954b5808b740e"],["/assets/neuralNetwork-pic4.png","9e930a5c344430f35c525cca74dd34f4"],["/assets/neuralNetwork-pic4.png.webp","8afd8799e759d7d89d68c2e1195d795a"],["/assets/neuralNetwork-pic5.png","dca7b765826d78354bb5d98108650b2d"],["/assets/neuralNetwork-pic5.png.webp","24ccab96caa2ca071b7425140ed789d7"],["/assets/neuralNetwork-pic6.png","f25cdb9c1483d9ddf8fad6f7b753eb32"],["/assets/neuralNetwork-pic6.png.webp","b47dce8227e8558cf80fc649b7167f9f"],["/assets/neuralNetwork-pic7.png","cdd7b0b102f3a622e0832162bf152c9a"],["/assets/neuralNetwork-pic7.png.webp","1cd409f29fe2603835cfbac2e75a9d3b"],["/assets/pi-pic1.png","231e83f9bb7c41fcfb652df24b7f2792"],["/assets/pi-pic1.png.webp","fac77381151feaa5f2ec2e19609c48c8"],["/assets/pi-pic2.svg","6dde2e2ff61c4204078811fe0ed7ee50"],["/assets/pi-pic3.svg","8b2f1759445aeca42df1968fb13b53f9"],["/assets/pi-pic4.svg","47aa15ae62a5b7ece2f7e980f8564bd7"],["/assets/progress-thumbnail.png","5bf431211a8a0a5a1c2eaaed2068e84d"],["/assets/progress-thumbnail.png.webp","78becfa2761480b04f709b18c29f27a6"],["/assets/reverse-pic1.png","52ffa0155869e4c404c278dc1c840f2b"],["/assets/reverse-pic1.png.webp","eebccc65482d6bbf0eb0388d673baead"],["/assets/reverse-pic2.png","91aabe18ae0bc9882b56400d569083fe"],["/assets/reverse-pic2.png.webp","d291a3e05c0cf77a6cc8541aacafa239"],["/assets/reverse-pic3.png","ddb36c06053b5de6f912616454e59e6f"],["/assets/reverse-pic3.png.webp","f653356f3818996251aa38def8a1b9d9"],["/assets/reverse-pic4.png","49677ce3fbc553ae560503e9fe013653"],["/assets/reverse-pic4.png.webp","e9d715d2e0d1e8994a3f9ad30c1cbf32"],["/assets/reverse-pic5.png","d1bd41c38595b0a63fab01e8ab4d8389"],["/assets/reverse-pic5.png.webp","71f5445b446fb81f20587fa556810756"],["/assets/reverse-pic6.png","27bd6c53fa8871171b8ff5782abf8914"],["/assets/reverse-pic6.png.webp","fc8f5d7b39ae4a3b1e9df649d72ccc84"],["/assets/reverse-pic7.png","8099b95f4e173fb3da6935ac6a509776"],["/assets/reverse-pic7.png.webp","741491574dfd9f91cf0149a2cbe1acf6"],["/assets/snippets-pic1.png","60e56919f463e1dfb52f30542713572b"],["/assets/snippets-pic1.png.webp","8eee06bff0b76c6895395d8314a68042"],["/assets/solution-p3386-pic1.png","6040c107786c45209f4fec2c368bac7e"],["/assets/solution-p3386-pic1.png.webp","507a8fcdb1f6d8ace13684fbfd271317"],["/assets/summary-pic1.png","b0aafc395ce3fdeb10a6cb103d363291"],["/assets/summary-pic1.png.webp","57442faeac5bffe15420d2c40243626f"],["/assets/summary-pic2.png","7ab89c2710bbcd0a3a4d6c58e1e63bbb"],["/assets/summary-pic2.png.webp","534eea1bb8b455683745767a7beaad9e"],["/assets/summary-pic3.png","4f79715945ab18874fadb0cf45f1e7fb"],["/assets/summary-pic3.png.webp","127b5d3b04e737be91590dca5b815b07"],["/assets/summary-pic4.png","b362c2d4709512442cacebaaf90fa8d2"],["/assets/summary-pic4.png.webp","0bed6864633eda59f5e586c5c01d6302"],["/assets/summary-pic5.png","28de8307854cd7f060b1a1e771531476"],["/assets/summary-pic5.png.webp","4ec4180d5d982f7e245e5e2ff68ad672"],["/assets/zhihu-card-default.svg","84f0bf311745d4a814b2cc126f76a1e5"],["/categories/index.html","27328897fe54f65191e0951368b26f21"],["/categories/计算机/index.html","09cb9d9b49bf5feda084129a3bbd6594"],["/css/highlight/a11y-dark.css","47ef99712ba9c645a657b68cf3dc8d18"],["/css/highlight/a11y-light.css","ebad960fb2eb9a12486c6735b1f5e3b5"],["/css/highlight/agate.css","8652fe5ec1d92c7c656585a2fcc9880d"],["/css/highlight/an-old-hope.css","cec04de7ac48fd13ae2dd0302f3b27a8"],["/css/highlight/androidstudio.css","c090969bb8279d85b2c754c5d7d3e6db"],["/css/highlight/arduino-light.css","2c0fa95ad1b43851e60109bb58021771"],["/css/highlight/arta.css","09307e445cabb13b6f877a93dfedf19c"],["/css/highlight/ascetic.css","e0660da67b91ad872bc6315d2b486cd1"],["/css/highlight/atelier-cave-dark.css","ecd7b531d054b1c3bf26dda1a1286fb8"],["/css/highlight/atelier-cave-light.css","d6a5071bfb4f51b8f1be405fe08dbb3e"],["/css/highlight/atelier-dune-dark.css","80f275df3e238e3d04b41d99cf633ad3"],["/css/highlight/atelier-dune-light.css","df78c83bb1e3372b5d2269fd4aa4bdc8"],["/css/highlight/atelier-estuary-dark.css","fc5894a04bf14d7b7fab69a5add403b4"],["/css/highlight/atelier-estuary-light.css","50f070c0e2e6460a891e141f06073e70"],["/css/highlight/atelier-forest-dark.css","7d1298c161a3e1bea24192b04840cf53"],["/css/highlight/atelier-forest-light.css","23cbc56961884a7903b9ec4e406298f8"],["/css/highlight/atelier-heath-dark.css","de8170905b5f9b1b7347e02b876c28cd"],["/css/highlight/atelier-heath-light.css","1f61c5d05b374f481d4732b7e3788f27"],["/css/highlight/atelier-lakeside-dark.css","f8d5bc51376a94d589a640a773354b28"],["/css/highlight/atelier-lakeside-light.css","908d2bb49f7328aeca0538ef61895dbb"],["/css/highlight/atelier-plateau-dark.css","68d6a5fc2f6a5d6207be756e650d1151"],["/css/highlight/atelier-plateau-light.css","d8ffdb06b46764020f3c99ef4c01334e"],["/css/highlight/atelier-savanna-dark.css","97639aec80eea7a91af7131f29f0b50f"],["/css/highlight/atelier-savanna-light.css","3acbdde477461b5fb252b19517e6c6b7"],["/css/highlight/atelier-seaside-dark.css","841d8b5050ef20982662ef3a9e828ff1"],["/css/highlight/atelier-seaside-light.css","40a53cb9dd7bc7f1463ae1a80bdff6f9"],["/css/highlight/atelier-sulphurpool-dark.css","d8368c1d4faead70cee3eef6ecc80177"],["/css/highlight/atelier-sulphurpool-light.css","341078d36515ad491d848ea7431141ff"],["/css/highlight/atom-one-dark-reasonable.css","d446e457a19b9a13d1b98cab85ac4411"],["/css/highlight/atom-one-dark.css","0dd04e26668bafd6c23f182b65448f42"],["/css/highlight/atom-one-light.css","960b0ae935b09501ce11d405a4e9fa40"],["/css/highlight/brown-paper.css","5e22ab81376d1ed8ebef1f5f044bb877"],["/css/highlight/codepen-embed.css","b7e51abc8a6ba0eea2b1aa799763a8ea"],["/css/highlight/color-brewer.css","02d0ef72f78023051546083d203b0c19"],["/css/highlight/darcula.css","6eee07af6d4e10f7d291756e98dee06b"],["/css/highlight/dark.css","76e16776b64d96b226765dab3a5582b2"],["/css/highlight/default.css","fd82de74a055e6719e0d571e3d024d1c"],["/css/highlight/docco.css","c7781cf7e45175b93b043506e6ce16e6"],["/css/highlight/dracula.css","71fc2a3504f59e37725146530ced2743"],["/css/highlight/far.css","b96909a6dac2cefdb0b1af2b7b5cc5c3"],["/css/highlight/foundation.css","372a00058ef4a95cf3bfe73bf80245ac"],["/css/highlight/github-gist.css","cf4efb3329e583d988dc533b239b2c86"],["/css/highlight/github.css","ea8f76260eeb7230f7d0998a88e5d33f"],["/css/highlight/gml.css","29dc74261eabaccafe03843ed294ad0d"],["/css/highlight/googlecode.css","4e61ed9d492e2692dfaba0517d34cc9b"],["/css/highlight/gradient-dark.css","b49483705e7637660708c9e602ceda6d"],["/css/highlight/grayscale.css","31a2a1292db17954cb5bbdbccb5f1e27"],["/css/highlight/gruvbox-dark.css","854c85f1a9de9b323b964c54550d689f"],["/css/highlight/gruvbox-light.css","6910d44710a9f68481602d2634047292"],["/css/highlight/hopscotch.css","83272954e31f4af84170178188a2a3c4"],["/css/highlight/hybrid.css","6e3115901e52c4772f31aea13429a38e"],["/css/highlight/idea.css","9da981d507d472b6b3b5282134b79171"],["/css/highlight/ir-black.css","5dcdeb20756d5123c59e32b510be4521"],["/css/highlight/isbl-editor-dark.css","aeae3e8d619b475a01a67d8a2119e7d1"],["/css/highlight/isbl-editor-light.css","d8f658414ec9c8fdf3a8253557be8761"],["/css/highlight/kimbie.dark.css","df82cdc97b9759150bfd794eebe36bb9"],["/css/highlight/kimbie.light.css","8ce0fdf3efe0f409139efa40d7c39f12"],["/css/highlight/lightfair.css","fca0aac334ba8b436c1a037c6a75c321"],["/css/highlight/lioshi.css","513553fa67d86af907008a1bd8347d0c"],["/css/highlight/magula.css","304783a26e47ae54241fbbf22bdf2024"],["/css/highlight/mono-blue.css","158263b0296e09d35d101f5f054221a8"],["/css/highlight/monokai-sublime.css","1f98f59818f2a95edf2f1be007fed2b4"],["/css/highlight/monokai.css","d05881a97c0e712d56f9d5db424a5fb4"],["/css/highlight/night-owl.css","0b611f2268e6423096ed7097d74421e5"],["/css/highlight/nnfx-dark.css","8468c8b28c8a0d19aeba6376c8f9b853"],["/css/highlight/nnfx.css","7cfabddd494e0fccb70e76c9c35d857f"],["/css/highlight/nord.css","0ba19e893784539b53c24fd148abb487"],["/css/highlight/obsidian.css","f067f3dbc3f8b9f4ffcb4b6635f0f61d"],["/css/highlight/ocean.css","98e89809d4fcb4276dcfbcabf1f44d28"],["/css/highlight/paraiso-dark.css","edb33e1b46ab8780714a8f049bb026b7"],["/css/highlight/paraiso-light.css","630826fadb130c421a00954857f94da0"],["/css/highlight/pojoaque.css","4b1a4f58eed9a8463280b309f0dcd0e7"],["/css/highlight/purebasic.css","4b666518779ab10e044c1f57908baf8d"],["/css/highlight/qtcreator_dark.css","c275e7e908018f5d7c00e9236571c8bc"],["/css/highlight/qtcreator_light.css","3b2287900f2e2f9ff6ee6b4c3d4ed814"],["/css/highlight/railscasts.css","ae63ee6da240d4b0fd1db8ec09cb69a5"],["/css/highlight/rainbow.css","cf7437c13b5836f5cc544f8e7734b666"],["/css/highlight/routeros.css","9d5e4d748ebef3272453dd39bb3d471e"],["/css/highlight/school-book.css","13106b1117b80e7f51b7507616525d2f"],["/css/highlight/shades-of-purple.css","a5fb96ce8a6407642f01b21dcdb00fa5"],["/css/highlight/solarized-dark.css","031c788d12026944a1e3d3459877f8f8"],["/css/highlight/solarized-light.css","b489bc08e91ee5e97d5463dadbd3419e"],["/css/highlight/srcery.css","0c29253bdfb823830ea7a9c74540540d"],["/css/highlight/sunburst.css","55647c37dbcb3d40b1ce8dbb7834b7e6"],["/css/highlight/tomorrow-night-blue.css","7e96a03f766db3d3c9777be5c17d4a61"],["/css/highlight/tomorrow-night-bright.css","bde2c031962005490124c05134bda087"],["/css/highlight/tomorrow-night-eighties.css","db8104ab6d4504f12ea18a7945c3c2e4"],["/css/highlight/tomorrow-night.css","5d19ca111fb900b710119e75a5c175d4"],["/css/highlight/tomorrow.css","91f972775a5e1265cfed0c8f4ad0cd3c"],["/css/highlight/vs.css","91f43bad4129d33f5b243a434bcd0ac5"],["/css/highlight/vs2015.css","55625d38b86680c0071601e94868fb25"],["/css/highlight/xcode.css","6096a2cd903c25e3fdc374d9fc7ea71b"],["/css/highlight/xt256.css","e336424c126d1d10b48781f0fdeddaf0"],["/css/highlight/zenburn.css","a85c87c1c91e3cc8b0e3a2c6125ad411"],["/css/style/dark.css","c911f0aecfacbbd4c68fd31e1557dc27"],["/css/style/main.css","bcf75ee6d40e34015235e1cc517a0c33"],["/drafts/QuineRelay.html","6b90fd89bb973488613d7f1ef1e7e5f3"],["/drafts/minecraft.html","bf949caefcca93d2750b93c880983cb4"],["/images/android-chrome-144x144.png","47e30c8645b5a85f489788f4ca971011"],["/images/android-chrome-192x192.png","c8af9d9a21b2d6e97b3e34598c3e5132"],["/images/android-chrome-256x256.png","d066968d5a5c8458db7b86c69c4c5ac1"],["/images/android-chrome-36x36.png","e22ab0faf5771944b2829f1ca8393e1b"],["/images/android-chrome-384x384.png","33f443175c98a2ba3d858fb2d9a5456e"],["/images/android-chrome-48x48.png","638d502a5e49bbbf267000a7e9223e17"],["/images/android-chrome-512x512.png","e9410529a972b34465b0030cd3c6794e"],["/images/android-chrome-72x72.png","528d1f807af09e7dcc8d7bc72660f2cb"],["/images/android-chrome-96x96.png","d3a180943590edffdb2022669ee8c005"],["/images/apple-touch-icon-114x114-precomposed.png","5c264eb297471c6c0e34c2b09122fdd2"],["/images/apple-touch-icon-114x114.png","6cb312a75ff19fa05848c82fdd6f81c6"],["/images/apple-touch-icon-120x120-precomposed.png","06f57bed97047aa7b7c1d07b8d1c010b"],["/images/apple-touch-icon-120x120.png","5254c5aa94cdb6c642f8d264374bb1b4"],["/images/apple-touch-icon-144x144-precomposed.png","bef4adcd7c1a5270f7951c59b5c44d4d"],["/images/apple-touch-icon-144x144.png","28a72d2116528276693598a148942e75"],["/images/apple-touch-icon-152x152-precomposed.png","293d8a28102b5b8302bbad81106b0427"],["/images/apple-touch-icon-152x152.png","2f41a9994ef80355a78665f60cf79962"],["/images/apple-touch-icon-180x180-precomposed.png","81585cda341a2e12449837bee482f892"],["/images/apple-touch-icon-180x180.png","0c0124d4d61cc555e84edea121dee6ff"],["/images/apple-touch-icon-57x57-precomposed.png","cac8eb7558d0d942b1ac19b6407c30c6"],["/images/apple-touch-icon-57x57.png","a670fead1203bd73e5f5e53a7f39af4e"],["/images/apple-touch-icon-60x60-precomposed.png","0e310308d3b2fde1d2f9bdccaceb3f6d"],["/images/apple-touch-icon-60x60.png","85e3c2805026354cb6d64d905414cde2"],["/images/apple-touch-icon-72x72-precomposed.png","5a567f399a082af946f26e5fefa8efa1"],["/images/apple-touch-icon-72x72.png","cd2ae579c9b721205e69bcd392e7efb1"],["/images/apple-touch-icon-76x76-precomposed.png","a9133da32241d1653b1bf60744e434f6"],["/images/apple-touch-icon-76x76.png","4981bfeac3eec1b1ed885837ff401adb"],["/images/apple-touch-icon-precomposed.png","81585cda341a2e12449837bee482f892"],["/images/apple-touch-icon.png","0c0124d4d61cc555e84edea121dee6ff"],["/images/avatar.svg","08e8849798ee33247ca0ab8cb913d68b"],["/images/favicon-16x16.png","59e10649b4e60e9436d697a644a6dca5"],["/images/favicon-32x32.png","b99b6e0482d747ba8628322ccea7af46"],["/images/mstile-144x144.png","952f298d0b1d27d43d0488e77f311eea"],["/images/mstile-150x150.png","afb41cc82a7020c929464d77d72da19b"],["/images/mstile-310x150.png","c565d245e7c37872beb85b1512037c23"],["/images/mstile-310x310.png","faedc0576d1141718fa63e125f53c8a2"],["/images/mstile-70x70.png","ae468744d1fca7dedea33c7d4c706cf0"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/safari-pinned-tab.svg","9d92a54bf0481839e4bcde616840021d"],["/index.html","2e9c0234c9ab9a28496e2318cf2b31bc"],["/js/b2t.js","ff7fee4413d70545d069b5f328e5cdbe"],["/js/darkmode.js","2be8ee2c06f76137631d04a452d4a5bc"],["/js/local-search.js","a3ad965edded7e9337d84ccc3112053c"],["/js/valine.js","bcdece35c06db35adbd928ca72246dda"],["/js/webp.js","a1ef5e4c7002f4955ce0cc8aa552e6c7"],["/msg/index.html","facc78edc4dababbd3e5cd7eabecd55b"],["/s/index.html","a1c750ecc8e1fc1f471b554f8837a95e"],["/sw-register.js","c90a5e043b285f7acd68cf8af0ecfc0b"],["/tags/2020/index.html","f23197457f9d2f2b32ef19f372e9c1fa"],["/tags/index.html","17511969575a70fef2e906f108bc0f57"],["/tags/代码片段/index.html","12367fe213fc9870a130edbf201f1a70"],["/tags/模板/index.html","2af783d69a253cdad4c06c309aa48dfb"],["/tags/站点/index.html","1318c0807a30e32dda50dd69f4e8cc10"],["/talk/index.html","99d0948a39cc8d60be6d8a72235c747d"]];
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
