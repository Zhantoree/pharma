export function paginate(items:any, pageNumber:any, pageSize:any): any[] {
    const  startIndex = (pageNumber-1)
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return [...items].splice(startIndex, pageSize)
}