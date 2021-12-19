/**
 * scroll to top button
 */

// get the scrollToTop button
let scrollToTop = document.querySelector(".scroll-to-top");

/**
 * @description when scroll -> test if the the position of Screen Y greater than the scrren height then show the button else hide it
 * @param //anonymous function has no parameters
 */
window.onscroll = () => {
    this.scrollY >= screen.height ? scrollToTop.classList.add("show") : scrollToTop.classList.remove("show");
}

/**
 * @description Scroll to the top with anonymous function
 * @param //anounymous function has no parameters
 */
scrollToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth", }));
/***************************************************************************************** */
/**
 *  @description this function creates the nav bar menu links           dynamilcally from all sections in the Page
 * @param //anonymous function has no parameters
 * nav-bar-menu u : the name of the navbar holder in CSS file
 * 
 */

function createNavBarMenu() {
    //get the nav-bar-menu holder
    const navBarMenu = document.querySelector('.nav-bar-menu ul');
    //loop through all section in the document and then make an li element for ech section

    // get all element of tag 'section'
    const allSections = document.querySelectorAll('section');
    // create a document fragment to make adding elements to the DOM more effecient to also reducing the reflow and repaint precesses
    const navbarFragment = document.createDocumentFragment();
    //looping throught allSections collection
    allSections.forEach((section) => {
        //get the id, name and link icon of the section by using getAttribute method for id, data-nav, data-icon properties
        var link = section.getAttribute('id');
        const sectionName = section.getAttribute("data-nav");
        const linkIcon = section.getAttribute("data-icon")
        const li = document.createElement("li");

        /**
         * as long as there are sections that i do not want to make a link for it in the main menu => some sections do not have id and data-nav properties
         * the condition to exclude these section from being added in the nav-bar-menu
         */
        if (sectionName !== null) {
            if (sectionName != "In Germany") {
                li.innerHTML = `<a data-link="${link}" class="scroll" href="#"><i class="${linkIcon}"></i>${sectionName}</a>`;
            } else {
                // In Germany Section has not font awesome icon but an image so i must check about it
                li.innerHTML = `<a data-link="${link}" class="scroll" href="#"><img src="img/germany.png">${sectionName}</a>`
            }
            //navBarMenu.appendChild(li); // append li to fragment instead to DOM directly
            navbarFragment.appendChild(li);
        }
    });
    //apend the fragment to the DOM
    navBarMenu.appendChild(navbarFragment); // reflow and repaint once
    /**
     * This part for navigating through the menu bar links
     */
    //get all menu-barmenu items as links
    let links = document.querySelectorAll('.scroll');
    //loop through links and show the section which has an id equal to the data-link property for that link
    links.forEach((linkItem) => {
        // calling `scrollToSection function`
        scrollToSection(linkItem);
    })

    /**
     * @description this function accept each link item and pass it to th `scrollToSection` function.
     *  - this function will set event listner in each link and for click and listen to event object
     *  - the handler of the event will scroll to the wanted section
     * @param {string} linkItem - a link in the nav-bar-menu
     */
    function scrollToSection(linkItem) {
        linkItem.addEventListener("click", (event) => {
            //prevent the default action of anchor tag to scroll using JS
            event.preventDefault();
            // showing the desired section after clicking the item
            document.getElementById(linkItem.getAttribute("data-link")).scrollIntoView();
        })
    }

}

/** 
 * responsive menu bar in wide and small screen
 *  */
const burgerMenu = document.querySelector('.main-bars-700');
burgerMenu.addEventListener('click', (e) => {
    //show the nav-bar-menu
    const navBarMenu = document.querySelector('.nav-bar-menu');
    navBarMenu.classList.toggle('active');
});

/**
 * 
 * Active sections:
 * this part of code check if the section in the viewport or not and so determine to add the active class to the section being scrolled
 */
window.addEventListener("scroll", () => {
    let allSections = document.querySelectorAll("section");
    allSections.forEach((section) => {
        //get the top from teh returned objetc of the rectangle data that surround the section
        let top = section.getBoundingClientRect().top;
        // 400 because some section is very taller than the view port so when scrolling up it should be checked if it reaches to bog nigative value?
        if (top >= -400 && top < 250) {
            section.classList.add("active");
        } else {
            section.classList.remove("active")
        }

    });
});
createNavBarMenu();