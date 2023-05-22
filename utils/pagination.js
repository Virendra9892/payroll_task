let pagination = (fromPara,toPara,orderBy)=>{
    let from = (typeof fromPara=="undefined"?1:fromPara)
    let to = (typeof toPara =="undefined"?5:toPara)
    let order = (typeof orderBy=="undefined"?"DESC":orderBy)
    const offset = (from - 1);
    const limit = (to-from)+1;   
    return {offset,limit,order}
}

module.exports = pagination;