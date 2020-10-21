import createCard from '../../elements/card.js';

export default function Calculator() {
    
    const descriptionContent = `
    2020 10. 18.
    <br>Basic decimal calculator.
    `; 
    const id = "calculator";
    
    // createCard(id, title, text, image = null)
    createCard(id, 
    "Basic calculator", 
    `${descriptionContent}`,
    "../.././img/calculator.png"
    );            

    //languages pages
    const javascript = document.querySelector(`#${id} .javascript`);
    // toActivate(id, language, languageName, descriptionContent, consoleVersionURL, guiVersionURL)
    // toActivate(id, csharp, "C#", descriptionContent, "https://github.com/dudikpal/ShuffleLetters", "#");
    toActivate(id, javascript, "JS", descriptionContent, "#", "https://github.com/dudikpal/calculator.git", "https://playcode.io/695478");
    
};

function toActivate(id, language, languageName, descriptionContent, consoleVersionURL, guiVersionURL, runInSandboxUrl) {
    const generatedDownloadPage = downloadContentGenerator(languageName, consoleVersionURL, guiVersionURL, runInSandboxUrl);

    const innerPage = document.querySelector(`#${id} .card-text`);
    const footer = document.querySelector(`#${id} .card-footer`);
    const card = document.querySelector(`#${id}`);
    footer.innerHTML = "View more";
    footer.classList.add('btn');
    
    language.classList.add("active");
    language.removeAttribute("hidden");

    language.addEventListener('mouseover', function() {
        innerPage.innerHTML = generatedDownloadPage;
        footer.innerHTML = 'Back to description';        
    });
    
    footer.onclick = function() {
        if (footer.innerHTML === "View more") {            
            footer.innerHTML = "Less view";        
            card.style.height = "auto";
        } else if (footer.innerHTML === "Less view") {            
            card.style.height = "550px";
            footer.innerHTML = "View more";        
        } else {
            card.style.height = "550px";
            footer.innerHTML = "View more";        
            innerPage.innerHTML = descriptionContent;
        }
    }     
}

function downloadContentGenerator(languageName, consoleVersionURL, guiVersionURL, runInSandboxUrl) {
    return `
    <p>    
    <a 
    href=${guiVersionURL} 
    class="btn btn-primary my-1" target="_blank" >
    ${languageName} GUI version
    </a>
    <br>
    <a 
    href=${runInSandboxUrl} 
    class="btn btn-primary my-1" target="_blank" >
    Run in sandbox
    </a>

    </p>
    `;   
}