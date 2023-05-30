

//Contact Us Page Send button

document.getElementById("Submit").addEventListener("click", myFunction);
function myFunction() {
    alert("your response had been submitted")
  }

// Virtual Reality button function //beware of myFunction this is the second part
  document.getElementById("VR-Experience").addEventListener("click", myFunction2);
  function myFunction2() {
      alert("Enhanced Booking System Coming Soon")
    }
  

//Proudly Supporting Local function
let popup_modal = document.getElementById("popup_modal");
function openPopup_modal(){
 popup_modal.classList.add("open-popup")

}

function closePopup_modal(){
 popup_modal.classList.remove("open-popup")

}
//Voice to Text Message Us
click_to_record.addEventListener('click', function(){
  const speech = true;
  window.SpeechRecognition=window.webkitSpeechRecognition;
  const recognition= new SpeechRecognition();
  recognition.interimResults=true;
  recognition.addEventListener('result', e=>{
    const transcript = Array.from(e.results)
    .map(result =>result[0])
    .map(result =>result.transcript)
    convert_text.innerHTML = transcript;
  })
  if(speech==true){
    recognition.start();
  }
});




//Chatbot see chatbot response.js for seperate fles

const chatBody=document.querySelector(".chat-body");
const txtInput= document.querySelector("#txtInput");
const send = document.querySelector(".send");


send.addEventListener("click", () => renderUserMessage());

//length of character how many the user typed up
txtInput.addEventListener("keyup",(event) => {
  if(event.keyCode === 13){
    renderUserMessage();
  }
})



// chatbot response
const renderUserMessage = ()=>{
const userInput = txtInput.value; 
renderMessageEle(userInput,"user");
txtInput.value="";
setTimeout(() => {
  renderChatbotResponse(userInput);
  setScrollPosition();
}, 600);
};

const renderChatbotResponse = (userInput) =>{
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
}
// this is where if the user type any message and it will appear on the chatbox 
const renderMessageEle=(txt, type) => {
  let className="user-message";
  if(type!=="user"){
    className="chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode= document.createTextNode(txt);
  messageEle.classList.add("user-message");
  messageEle.append(txtNode);
  chatBody.append(messageEle);
}

const getChatbotResponse=(userInput) => {
  return responseObj[userInput]== undefined?"Please try to call 09-528-0580":responseObj[userInput]
}

//scroll position
const setScrollPosition = () => {
  if(chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}