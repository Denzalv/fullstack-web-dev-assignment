const getGitHubUser = async(username) => {
    try {
        if (!username) {
            return null;
        }
        const url = await fetch(`https://api.github.com/users/${username}`);
        let response = await url.json();
        if (response?.login) {
            return response;
        }

    } 
    catch (error) {
        console.log(error);
    }
    return "Not Found"
}

const printGitHubUser = async() => {
    const mojombo = await getGitHubUser("mojombo");
    const orange = await getGitHubUser("");
    const rudiTabuti = await getGitHubUser("rudi.tabuti");

    console.log(mojombo);
    console.log(orange);
    console.log(rudiTabuti);
}

printGitHubUser();