/**
 * Cloudflare Pages Function
 * 处理所有路由请求，将它们重写到index.html
 * 这是Cloudflare Pages处理SPA（单页应用）路由的标准方式
 */

export const onRequest = async ({ request, next }) => {
  const url = new URL(request.url);
  
  // 如果请求的是静态资源（js, css, images等），直接返回
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.pathname.endsWith('.jpeg') ||
    url.pathname.endsWith('.gif') ||
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.ico') ||
    url.pathname.endsWith('.woff') ||
    url.pathname.endsWith('.woff2') ||
    url.pathname.endsWith('.ttf') ||
    url.pathname.endsWith('.eot')
  ) {
    return next();
  }
  
  // 对于其他所有路由，返回index.html
  // 这样React Router就能正确处理客户端路由
  return next(new Request(`${url.origin}/index.html`, request));
};
