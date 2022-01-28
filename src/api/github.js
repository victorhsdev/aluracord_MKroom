export default function RequestGithubAPI(username){
    return fetch(`https://api.github.com/users/${username || 'skynexui'}`)
    .then((response)=>response.json())
    .then((data)=>{
        return {
            name:data.name,
            location:data.location,
            repositorys:data.public_repos,
        }
    })
}