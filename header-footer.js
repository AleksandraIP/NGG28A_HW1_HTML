let headerText = `
    <a href="main.html" id="main" style="color: rgb(174, 93, 11);">OLEKSANDRA</a>
    <ul id="menu">
      <li><a href="about.html" style="color: rgb(174, 93, 11);">ABOUT</a></li>
      <li><a href="projects.html" style="color: rgb(174, 93, 11);">PROJECTS</a></li>
      <li><a href="contact.html" style="color: rgb(174, 93, 11);">CONTACT</a></li>
    </ul>
`

let footerText = `
      <div class="social">
         <p style="font-size: 30px;color: rgb(174, 93, 11);">Follow me in Social Media</p>
         <a href="https://www.instagram.com/sandra_p0p0va/" style="font-size: 20px;color: black;">Instagram</a>
      </div>
      <div class="contact">
        <p style="font-size: 30px;color: rgb(174, 93, 11);">Contact</p>
        <p style="font-size: 20px;">079 111 11 11</p>
        <p style="font-size: 20px;">aleksandraip@ukr.net</p>
      </div>`

function setHeader(){ 
    let header = document.createElement('header');
    header.innerHTML = headerText;    
    header.style.display = 'flex';
    header.style.justifyContent = 'space-around'; 
    header.style.fontSize = '25px';
    header.style.width = '100%';
    header.style.height = '100px';
    header.style.textAlign = 'center';
    header.style.padding = '20px';
    document.body.insertAdjacentElement('afterbegin', header);
}
setHeader();

function setFooter(){
    let footer = document.createElement('footer');
    footer.innerHTML = footerText;
    footer.style.display = 'flex';
    footer.style.justifyContent = 'space-around';
    footer.style.width = '100%';
    footer.style.height = '200px';
    footer.style.paddingTop = '30px';
    document.body.insertAdjacentElement('beforeend', footer);
}
setFooter();

