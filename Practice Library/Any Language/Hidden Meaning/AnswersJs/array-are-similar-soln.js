log = (...val) => console.log(...val)

function areSimilar(a, b) {
    // for a pair swap we must have at most two incorrect indexes in the chosen comparison array
    // compare each element of both arrays
    // save the indexes whose elements are not the same
    // this indexes must total 2 for one valid swap.
    let ids = []
    
    for(let i=0; i<a.length; i++) {
        if(a[i] != b[i]) ids.push(i)
    }
    
    if(ids.length==0) return log(true)
    if(ids.length != 2) return log(false);
    
    // elements must be fully swappable
    return log(a[ids[0]]==b[ids[1]] && a[ids[1]]==b[ids[0]])
}