import {getAssetFromKV, mapRequestToAsset} from '@cloudflare/kv-asset-handler'

/**
 * The DEBUG flag will do two things that help during development:
 * 1. we will skip caching on the edge, which makes it easier to
 *    debug.
 * 2. we will return an error message on exception in your Response rather
 *    than the default 404.html page.
 */
const DEBUG = false;

const routes = ['rules']

addEventListener('fetch', event => {
    try {
        event.respondWith(handleRequest(event))
    } catch (e) {
        if (DEBUG) {
            return event.respondWith(
                new Response(e.message || e.toString(), {
                    status: 500,
                }),
            )
        }
        event.respondWith(new Response('Internal Error', {status: 500}))
    }
})

async function handleRequest(request) {
    // Check the HTTP method
    if (request.method === 'POST') {
        return handlePost(request);
    }
    return handleFetchEvent(request);
}

async function handlePost(request) {
    try {
        const body = await request.json(); // Parse the JSON body if applicable
        // Process the POST request (e.g., save data, perform logic, etc.)
        return new Response(JSON.stringify({ message: 'Post request received', body }), { status: 200 });
    } catch (e) {
        return new Response(`Error during POST handling: ${e.message}`, { status: 400 });
    }
}

async function handleFetchEvent(event) {
    let options = {}
  
    try {
      if (DEBUG) {
        // customize caching
        options.cacheControl = {
          bypassCache: true,
        }
      }
  
      const page = await getAssetFromKV(event, { ...options, mapRequestToAsset: mapRouteToHtmlPath })
  
      return new Response(page.body, page)

    } catch (e) {
      // if an error is thrown try to serve the asset at 404.html
      if (!DEBUG) {
        try {
          let notFoundResponse = await getAssetFromKV(event, {
            mapRequestToAsset: req => new Request(`${new URL(req.url).origin}/404.html`, req),
          })
  
          return new Response(notFoundResponse.body, { ...notFoundResponse, status: 404 })
        } catch (e) {}
      }
  
      return new Response(e.message || e.toString(), { status: 500 })
    }

}

function mapRouteToHtmlPath(request) {
    let url = request.url.split('?')[0]

      for(let x = 0; x < routes.length; x++) {
          const route = routes[x];
          url = url.replace(RegExp(`\\/${route}$`), `/${route}.html`)
      }
  
    return mapRequestToAsset(new Request(url, request))
  }
