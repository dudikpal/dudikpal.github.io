import navBar from '../elements/navbar.js';
import head from '../elements/head.js';
import projects from './projects/projectsContainer.js';

function projectPageBuilder() {
    head();
    navBar();
    
    projects.shuffleLetters();   
    projects.calculator();   
    projects.binaryCalculator();
}

export default projectPageBuilder;