export function urlToName(url: string) {
  return url.replace(/(^\w+:|^)\/\//, "")
}
