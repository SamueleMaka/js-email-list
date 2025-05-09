const emailListEl = document.getElementById("mail-list");
const resetButtonEl = document.getElementById("new-mails");

resetButtonEl.addEventListener("click", resetMails);

function generateEmails(){
    const generateEmailsArr = [];
    for(let i=0; i<10; i++){
        axios
        .get(
            "https://flynn.boolean.careers/exercises/api/random/mail"
        )
        .then((resp) => {
           generateEmailsArr.push(resp.data.response);
           if(i===9){
            for(let j=0; j<10; j++) emailListEl.innerHTML += `<li>${generateEmailsArr[j]}</li>`;
           }
        });
    }
    
}
function resetMails(){
    emailListEl.innerHTML = "";
    generateEmails();
}
generateEmails();