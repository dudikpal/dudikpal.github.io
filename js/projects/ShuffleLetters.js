import createCard from '../.././elements/card.js';

export default function shuffleLetters() {
    
    const descriptionContent = `
    2020 10. 08.
    <br>This program shuffle the letters of words, 
        except the first and the last letter, and the sentence still readable!This program shuffle the letters of words, 
        except the first and the last letter, and the sentence still readable!This program shuffle the letters of words, 
        except the first and the last letter, and the sentence still readable!
    `; 

    const id = "ShuffleLetters";
    
    // createCard(id, title, text, href, image = null)
    createCard(id, 
    "Shuffle Letters", 
    `${descriptionContent}`,
    "../.././img/consoleProjectImage.png"
    );  

    //languages pages
    const csharp = document.querySelector(`#${id} .csharp`);
    const java = document.querySelector(`#${id} .java`);
    toActivate(id, csharp, "C#", descriptionContent, "https://github.com/dudikpal/ShuffleLetters", "#");
    
};

function toActivate(id, language, languageName, descriptionContent, consoleVersionURL, guiVersionURL) {
    const generatedDownloadPage = downloadContentGenerator(languageName, consoleVersionURL, guiVersionURL);

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
    /* footer.addEventListener('click', (event) => {
        //event.preventDefault();

        if (footer.innerHTML === "View more") {
            console.log("if");
            footer.innerHTML = "Less view";        
            card.style.height = "auto";
        } else {
            console.log("else");
            card.style.height = "550px";
            footer.innerHTML = "View more";        
        }
    }); */    
}

function downloadContentGenerator(languageName, consoleVersionURL, guiVersionURL) {
    return `
    <p>
    <a 
    href=${consoleVersionURL} 
    class="btn btn-primary my-1" target="_blank" >
    ${languageName} console version
    </a>
    <br>
    <a 
    href=${guiVersionURL} 
    class="btn btn-primary my-1 disabled" target="_blank" >
    ${languageName} GUI version
    </a>
    </p>
    `;   
}