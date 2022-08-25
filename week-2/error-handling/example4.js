function isValidJSON(jsonStr) {
  try {
    JSON.parse(jsonStr);
    return true;
  } catch {
    return false;
  }
}
