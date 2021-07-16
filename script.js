const mHTML = document.getElementById('message'),
messages = [
  'Information Management Graduate',
  'Computer Repair Guy.',
  'Networking Guy.',
  'Laravel Developer.',
  
];
let currentMessage = 0;
function typeMessage() {
  if (!messages[currentMessage]) {
    currentMessage = 0;
  }
  const currentStr = messages[currentMessage];
  currentStr.split();
  let part = '';
  let currentLetter = 0;
  let int1 = setInterval(()=>{
    if (!currentStr[currentLetter]) {
      currentMessage++;
      setTimeout(()=>{
        deleteMessage(part);
      }, 500);
      clearInterval(int1);
    } else {
      part += currentStr[currentLetter++];
      mHTML.innerHTML = part;
    }
  }, 100);
}
function deleteMessage(str) {
  let int = setInterval(()=>{
    if (str.length === 0) {
      setTimeout(()=>{
        typeMessage();
      }, 500);
      clearInterval(int);
    } else {
      str = str.split('');
      str.pop();
      str = str.join('');
      mHTML.innerHTML = str;
    }
  },50);
}
typeMessage();