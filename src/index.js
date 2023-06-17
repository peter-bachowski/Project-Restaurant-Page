import './styles/main.scss';
import addPageBaseElements from './addPageBaseElements';
import resizeContent from './resizeContent';
import makeHeaderElements from './makeHeaderElements';
import linkListeners from './linkListeners';
import addHomeContent from './addHomeContent';


addPageBaseElements(); //creates the header, middle content and footer areas
makeHeaderElements(); //creates and adds the header links and logo to the header
resizeContent(); //creates a function that will resize the content depending on the width of the window
addHomeContent(); // sets default tab to Home
linkListeners(); //creates listeners for the tabs, then reloads the DOM with content from respective tab







