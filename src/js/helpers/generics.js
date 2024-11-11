export function getPathFromHref(href) {
  try {
    const url = new URL(href);
    return url.pathname + url.search + url.hash;
  } catch (e) {
    console.error("Invalid URL", e);
    return null;
  }
}

export function navigateTo(href) {
  window.location.href = href;
  return;
}
