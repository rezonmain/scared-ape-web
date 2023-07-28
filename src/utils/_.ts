/**
 * Returns true for empty values, check .spec for details.
 * @param value
 * @returns
 */
export const isNothing = (value: unknown): boolean => {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === "string" && value.trim() === "") {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (typeof value === "object" && Object.keys(value).length === 0) {
    return true;
  }
  if (typeof value === "number" && isNaN(value)) {
    return true;
  }
  if (Array.isArray(value) && value.every((v) => isNothing(v))) {
    return true;
  }
  return false;
};

export const first = <T>(arr: Array<T>) => {
  if (arr.length < 1) return undefined;
  return arr[0];
};

/**
 * Parses a cookie string into a key value pair object.
 */
export const parseCookie = (
  cookie: string | undefined
): Record<string, string> => {
  const parsed: Record<string, string> = {};
  if (isNothing(cookie) || !cookie) return parsed;
  cookie.split(";").forEach((pair) => {
    const [key, value] = pair.split("=");
    parsed[key.trim()] = value;
  });
  return parsed;
};
