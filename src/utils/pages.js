export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (pages) => {
    const arr = [];
    for(let i = 1; i <= pages; i++){
        arr.push(i);
    }
    return arr;
}