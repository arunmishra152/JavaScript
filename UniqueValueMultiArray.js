function sym(arr1,arr2) {
    var res=[]
    for(var a in arguments){
    res=sol(res,arguments[a]);
    
    }
    
    return res
    }
    function sol(arr1,arr2){
      res=[...new Set([...arr1.filter(a=>arr2.indexOf(a)<0),...arr2.filter(a=>arr1.indexOf(a)<0)])]
    return res;
    }
    sym([1, 2, 3], [5, 2, 1, 4]);