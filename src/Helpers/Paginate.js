export function paginate(items, pageNumber, pageSize) {
    let startIndex = (pageNumber-1)
    return [...items].splice(startIndex, pageSize)
}