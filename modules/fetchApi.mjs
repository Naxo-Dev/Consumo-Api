export async function fetchApi() {
    const api = 'https://dog.ceo/api/breeds/image/random'
    try {
        const data = await fetch(api)
        if(data.status != 200) throw new Error
        const json = await data.json()
        return {
            img : json.message,
            estado: json.status,
            error: false
        }
    } catch (error) {
        return {
            img: null,
            estado: null,
            error: true
        }
    }
}