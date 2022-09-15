let URL = "https://engtwm5daa70tp8.m.pipedream.net/v1/xpinova"

export async function useGet(route){
    let {data: response} = await axios.get(`${URL}${route}`)
    // let response = await axios.get(`${URL}/${route}`)

    return response
}

export async function usePost(route, body){
    let {data: response} = await axios.post(`${URL}${route}`, body)

    return response
}

export async function usePut(route, body){
    let {data: response} = await axios.put(`${URL}${route}`, body)

    return response
}

export async function useDelete(route, body){
    body.isDelete = true;
    let {data: response} = await axios.post(`${URL}${route}`, body)

    return response
}