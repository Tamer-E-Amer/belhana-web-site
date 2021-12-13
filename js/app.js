/**
 * scroll to top button
 */

// get the scrollToTop button
let scrollToTop = document.querySelector(".scroll-to-top");

/**
 * @description when scroll -> test if the the position of Screen Y greater than the scrren                     height then show the button else hide it
 * @param //anonymous function has no parameters
 */
window.onscroll = () => {
    console.log(this.scrollY);
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
    let navBarMenu = document.querySelector('.nav-bar-menu ul');
    //loop through all section in the document and then make an li element for ech section

    // get all element of tag 'section'
    let allSections = document.querySelectorAll('section');
    //looping throught allSections collection
    allSections.forEach((section) => {
        //get the id, name and link icon of the section by using getAttribute method for id, data-nav, data-icon properties
        var link = section.getAttribute('id');
        let sectionName = section.getAttribute("data-nav");
        let linkIcon = section.getAttribute("data-icon")
        let li = document.createElement("li");

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
            navBarMenu.appendChild(li);
        }
    });
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
createNavBarMenu();