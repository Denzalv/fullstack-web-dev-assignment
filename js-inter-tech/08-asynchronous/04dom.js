const elFormUsername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async( username ) => { 
    try {
        if (!username) {
            return null;
        }
        const url = await fetch("https://api.github.com/users/"+username);
        let response = await url.json();
        if (response?.login) {
            return response;
        }
        return {login:"Not Found"};
    } catch (error) {
        throw (error);
    }
}

elFormUsername.onsubmit = async (e) => {
    e.preventDefault();
    const c = await getGitHubUser(elFormUsername.firstElementChild.value);
    console.log(c);
    elCardTitle.innerText =c.login;
    if(c.id){
        elCardImg.src = c.avatar_url;
        elCardBtn.classList.remove("d-none");
        elCardImg.classList.remove("d-none");
    }
    else{
        elCardBtn.classList.add("d-none");
        elCardImg.classList.add("d-none");
    }
    elCard.classList.remove("d-none");
};