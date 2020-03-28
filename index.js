const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');
const body = document.body;

darkButton.onclick = () =>{
body.classList.replace('light', 'dark');
localStorage.setItem('theme', 'dark');
}
lightButton.onclick = () =>{
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'dark');
}
const theme = localStorage.getItem('theme');
if (theme){
    body.classList.add(theme);
}