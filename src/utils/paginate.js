export function paginate(items, pageSize, currentPage) {
  const startIdx = currentPage * (pageSize - 1);

  //console.log(items.slice(startIdx, startIdx + pageSize))
  return items.slice(startIdx, startIdx + pageSize);
}
