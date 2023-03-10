
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/joaogriquena/Portifolio_API_GitHub/master/src/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json()
}