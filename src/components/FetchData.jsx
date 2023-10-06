const URL_DATA = '../src/json/data.json'

export const fetchData = async () => {
    try {
        const res = await fetch(URL_DATA);
        if(res.ok){
            const data = await res.json();
            return data
        } else{
            console.log(res.status);
        }
    } catch (error) {
        console.error(error)
    }
}