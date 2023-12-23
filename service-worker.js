/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2730f73a62ca274d5c554ec48fa497a7"
  },
  {
    "url": "assets/css/0.styles.7a14c95c.css",
    "revision": "a0a76cfe17c3a3bffff194328b7979d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/UserCreating.fecb7c9c.png",
    "revision": "fecb7c9cab02fc3f58e2bf1d09c8211e"
  },
  {
    "url": "assets/img/UserDelete.d8ca34f3.png",
    "revision": "d8ca34f3cfb9d1a3e0940af7fbc7c9e3"
  },
  {
    "url": "assets/img/UserGet.e447f252.png",
    "revision": "e447f2522fdf61643461ddd421a64b49"
  },
  {
    "url": "assets/img/UserGetAfterDeleting.9daabefc.png",
    "revision": "9daabefcd1431527cea4b07b166dce47"
  },
  {
    "url": "assets/js/10.98b1d7e6.js",
    "revision": "2ae075bcbfc3d9d9d9f3658deff768ee"
  },
  {
    "url": "assets/js/11.a0fe37ad.js",
    "revision": "a6dd6c6f755e298478f754d4e1270ef4"
  },
  {
    "url": "assets/js/12.022538e1.js",
    "revision": "a603ee8224338f0bd66f9a1169297313"
  },
  {
    "url": "assets/js/13.698c8118.js",
    "revision": "8d9da4ed3e33e8e34806ea43a66888a1"
  },
  {
    "url": "assets/js/14.270df476.js",
    "revision": "51e09efc5fd2d50d650b061b37711cc2"
  },
  {
    "url": "assets/js/15.29e947fa.js",
    "revision": "179a5f75ba42176ae752a5ec5db116f7"
  },
  {
    "url": "assets/js/16.c3fe1333.js",
    "revision": "c34fe4c0967d4f9fc8b0714bbef3fabd"
  },
  {
    "url": "assets/js/17.a0c81efb.js",
    "revision": "385943034686dc9f2987a2c76799c459"
  },
  {
    "url": "assets/js/18.1d7b9325.js",
    "revision": "18f09c9677ab442e4b17814fab2bbc68"
  },
  {
    "url": "assets/js/19.ba4685d2.js",
    "revision": "f0bae812da65827cd37daf00b803f325"
  },
  {
    "url": "assets/js/2.28e67435.js",
    "revision": "387eee010feff9b8611d6af5bb53808e"
  },
  {
    "url": "assets/js/20.f1f6b975.js",
    "revision": "7c98e59f2e1fc9465a8208eac64a9770"
  },
  {
    "url": "assets/js/21.cf64a0c1.js",
    "revision": "1aa1779da8b8e83a5ffdb9426fbb9c54"
  },
  {
    "url": "assets/js/22.25d705ac.js",
    "revision": "fc9fd3558daf620450cd3021e4a63a35"
  },
  {
    "url": "assets/js/23.dcbdca51.js",
    "revision": "c554992326ae42a4774a20d23103e643"
  },
  {
    "url": "assets/js/24.4c63abc0.js",
    "revision": "bb66195ca1fd631e01dabc99421c9ac5"
  },
  {
    "url": "assets/js/26.50db2776.js",
    "revision": "2366541b1883d3ba3aaa9fc6a045dc87"
  },
  {
    "url": "assets/js/3.cdabe2fe.js",
    "revision": "62fcf2aefb42eef07dceca26126775cf"
  },
  {
    "url": "assets/js/4.1cd8b822.js",
    "revision": "9ebf2a0ee88c2ed36334c6e73ee8889a"
  },
  {
    "url": "assets/js/5.e9a692b2.js",
    "revision": "4df2ad404675fbb3db645e412652ce8b"
  },
  {
    "url": "assets/js/6.e06c244c.js",
    "revision": "b895ea23a0f1edb3394fe034b0f57492"
  },
  {
    "url": "assets/js/7.115ef3ab.js",
    "revision": "469233d70a9cfcd04a89e81e32f4fff8"
  },
  {
    "url": "assets/js/8.fdcdae34.js",
    "revision": "422e098e9d18ed44904bf0437c31e62c"
  },
  {
    "url": "assets/js/9.63d364d4.js",
    "revision": "80683277c6f12d517c9194192b7106d7"
  },
  {
    "url": "assets/js/app.0a1a2a6e.js",
    "revision": "284e5f784203322d59d821d89eadda35"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b9881633483e10cd7365fdd058222eb6"
  },
  {
    "url": "design/index.html",
    "revision": "2b089806d2def6d8a7a4486b573764e7"
  },
  {
    "url": "image_2023-11-27_12-34-32.png",
    "revision": "820893c679183a2ec1c77e6f83142a24"
  },
  {
    "url": "index.html",
    "revision": "51eba515e90a341394445d95abcc786c"
  },
  {
    "url": "intro/index.html",
    "revision": "4c6756495aba8ec745cce564fdc7bdaa"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "eec35165742acb22f07d8c90fa50b0fe"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "be80f80202ec2b24db2659bfc898ec47"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "82fd03539ea5a5abb525767709c50c1a"
  },
  {
    "url": "software/index.html",
    "revision": "8eb2ec9c2347311667f6c6ad5e5abeb2"
  },
  {
    "url": "test/index.html",
    "revision": "d06918c125b96921d511124fe197ba56"
  },
  {
    "url": "use cases/index.html",
    "revision": "1e7fb9ae3821e8c466a28c7f9d9e8e79"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
