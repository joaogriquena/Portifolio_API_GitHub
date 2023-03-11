
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/joaogriquena/Portifolio_API_GitHub/master/data/profile.json'
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}