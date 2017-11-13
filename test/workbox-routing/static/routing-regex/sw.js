importScripts('/__WORKBOX/buildFile/workbox-core');
importScripts('/__WORKBOX/buildFile/workbox-routing');

/* globals workbox */

workbox.routing.registerRoute(
  new workbox.routing.RegExpRoute(
    new RegExp('/RegExpRoute/RegExp/.*/'),
    ({url}) => {
      return new Response(`RegExpRoute.RegExp.${url.href}`);
    }
  )
);

workbox.routing.registerRoute(
  new workbox.routing.RegExpRoute(
    new RegExp('/RegExpRoute/regular-expression/.*/'),
    ({url}) => {
      return new Response(`RegExpRoute.regular-expression.${url.href}`);
    }
  )
);

workbox.routing.registerRoute(
  new RegExp('/RegExp/.*/'),
  ({url}) => {
    return new Response(`RegExp.${url.href}`);
  }
);

workbox.routing.registerRoute(
  /\/regular-expression\/.*\//,
  ({url}) => {
    return new Response(`regular-expression.${url.href}`);
  }
);

self.addEventListener('install', (event) => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
