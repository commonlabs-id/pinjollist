import url from 'url';
import querystring from 'querystring';

/**
 * Extracts the query string from an absolute path. Returns undefined if query string is not found.
 *
 * @param path The absolute request path.
 */
const parseQueryString = (path: string) => {
  const parsedUrl = url.parse(path);

  if (parsedUrl.query) {
    return querystring.parse(parsedUrl.query);
  }

  return undefined;
};

export default parseQueryString;
