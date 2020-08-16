
export const GetRequest = async (url, headers={}) => {
    try {
        const response = await fetch(url, headers);
        return await response.json();
    }
    catch (err) {
        return err;
    }
}

export const PostRequest = async (url, postData, headers={}) => {
    let body = new FormData();
    Object.keys(postData).forEach(el => {
        body.append(el, typeof(postData[el]) == "string" ? postData[el] : JSON.stringify(postData[el]));
    })
    try {
        const response = await fetch(url, {
            method: "POST",
            body,
            headers
        });
        return await response.json();
    }
    catch (error) {
        return error;
    }
    
}