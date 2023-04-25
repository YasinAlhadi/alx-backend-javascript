export default function cleanSet(set, startString) {
  const start = startString.length;
  const result = [];
  for (const item of set) {
    if (item.startsWith(startString) && startString.length !== 0) {
      result.push(item.slice(start));
    }
  }
  return result.join('-');
}
