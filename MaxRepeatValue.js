function migratoryBirds(arr) {
    var mapp = arr.reduce(function (prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {});
    var sortable = [];
    
    var array = Object.keys(mapp).map(function (key) { return mapp[key]; });
    var min = Math.min.apply(null, array);
    var max = Math.max.apply(null, array);

     function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
     }
    return getKeyByValue(mapp,max)
    

}