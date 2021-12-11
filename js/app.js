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

function createNavMenu() {

}