const emailListEl = document.getElementById("mail-list");
const resetButtonEl = document.getElementById("new-mails");

resetButtonEl.addEventListener("click", resetMails);

function generateEmails(){
    for(let i=0; i<10; i++){
        axios
        .get(
            "https://flynn.boolean.careers/exercises/api/random/mail"
        )
        .then((resp) => {
            emailListEl.innerHTML += `<li> ${resp.data.response} </li>`
        });
    }
    
}
function resetMails(){
    emailListEl.innerHTML = "";
    generateEmails();
}
generateEmails();