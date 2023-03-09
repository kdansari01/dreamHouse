export const sleep = (time=2000)=> {
    return new Promise((res)=>{
        setTimeout(res, time)
    })
}

export const fetchData = (data, callback, time=2000)=> {
    callback({ status:"pending", data:null })
    return sleep(time).then(res=>{
        callback({ status: 'success', data })
    }).catch(()=> {
        callback({ staus: 'failed', data: null, error:'something went wrong' })
    })
}