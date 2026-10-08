const floatingChat=document.getElementById("floatingChat");
const chatWindow=document.getElementById("chatWindow");
const closeButton=document.getElementById("closeButton");
const messageInput=document.getElementById("messageInput");
const sendButton=document.getElementById("sendButton");
const chatMessages=document.getElementById("chatMessages");
floatingChat.addEventListener("click",function(){
floatingChat.style.display="none";
chatWindow.style.display="flex";
messageInput.focus();
});
closeButton.addEventListener("click",function(){
chatWindow.style.display="none";
floatingChat.style.display="flex";
});
sendButton.addEventListener("click",sendMessage);
messageInput.addEventListener("keydown",function(event){
if(event.key==="Enter"){
event.preventDefault();
sendMessage();
}
});
function sendMessage(){
const text=messageInput.value.trim();
if(text===""){
return;
}
addUserMessage(text);
messageInput.value="";
showTyping();
setTimeout(function(){
removeTyping();
generateResponse(text);
},800);
}
function addUserMessage(text){
const row=document.createElement("div");
row.className="message-row user-row";
const message=document.createElement("div");
message.className="user-message";
message.textContent=text;
row.appendChild(message);
chatMessages.appendChild(row);
scrollToBottom();
}
function addAIMessage(text){
const row=document.createElement("div");
row.className="message-row";
const avatar=document.createElement("div");
avatar.className="message-avatar";
avatar.textContent="W";
const message=document.createElement("div");
message.className="ai-message";
message.innerHTML=text;
row.appendChild(avatar);
row.appendChild(message);
chatMessages.appendChild(row);
scrollToBottom();
}
function generateResponse(question){
const text=question.toLowerCase();
if(text.includes("hello")||text.includes("hi")||text.includes("hey")){
addAIMessage("Hello! 👋<br><br>Welcome to Winners DT Sacco Limited AI Assistant.<br><br>How can I help you today?");
return;
}
if(text.includes("loan")||text.includes("borrow")){
addAIMessage("💰 <strong>Loans</strong><br><br>I can help you with information about Winners DT Sacco Limited loans, requirements, application procedures and repayment.");
return;
}
if(text.includes("saving")||text.includes("savings")){
addAIMessage("💳 <strong>Savings</strong><br><br>I can help you with information about Winners DT Sacco Limited savings products and requirements.");
return;
}
if(text.includes("member")||text.includes("membership")||text.includes("join")){
addAIMessage("👤 <strong>Membership</strong><br><br>I can help you with information about joining Winners DT Sacco Limited and membership requirements.");
return;
}
if(text.includes("share")||text.includes("shares")){
addAIMessage("📊 <strong>Shares</strong><br><br>I can provide general information about shares and related requirements.");
return;
}
if(text.includes("dividend")||text.includes("dividends")){
addAIMessage("💰 <strong>Dividends</strong><br><br>I can provide general information about dividends. Please confirm the latest dividend information with Winners DT Sacco Limited.");
return;
}
if(text.includes("branch")||text.includes("location")||text.includes("office")){
addAIMessage("📍 <strong>Branches</strong><br><br>I can help you with information about Winners DT Sacco Limited branches and offices.");
return;
}
if(text.includes("contact")||text.includes("phone")||text.includes("email")){
addAIMessage("📞 <strong>Contact Us</strong><br><br>I can help you with Winners DT Sacco Limited contact information.");
return;
}
if(text.includes("thank")||text.includes("thanks")){
addAIMessage("You're welcome! 😊<br><br>I'm always here to help.");
return;
}
addAIMessage("Thank you for contacting Winas DT Sacco Limited. 😊<br><br>I can help you with:<br><br>💰 Loans<br>💳 Savings<br>👤 Membership<br>📊 Shares<br>💰 Dividends<br>📍 Branches<br>📞 Contact information<br><br>Please tell me what you would like to know.");
}
function showTyping(){
const typing=document.createElement("div");
typing.className="message-row";
typing.id="typingIndicator";
const avatar=document.createElement("div");
avatar.className="message-avatar";
avatar.textContent="W";
const message=document.createElement("div");
message.className="ai-message typing";
message.textContent="Typing...";
typing.appendChild(avatar);
typing.appendChild(message);
chatMessages.appendChild(typing);
scrollToBottom();
}
function removeTyping(){
const typing=document.getElementById("typingIndicator");
if(typing){
typing.remove();
}
}
function scrollToBottom(){
chatMessages.scrollTop=chatMessages.scrollHeight;
}