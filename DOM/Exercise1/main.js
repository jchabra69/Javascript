/* Using the DOM, display the following data:
*/

//it will return an array of tags with that name
const arrayLinks = document.getElementsByTagName('a');
const arrayParagraphs = document.getElementsByTagName('p');

//Number of links
let countLinks = function(arrayLinks) {

    return arrayLinks.length;

}

//Address to which the penultimate link links to
let extractUrlPenultLink = function (arrayLink) {

    return arrayLink[arrayLink.length - 2];

}

//Number of links linking to the institute's website
let groupUrlBelen = function(arrayLinks) {

    let urlBelenCount = 0;

    //Read every link and check If it belongs to iesbelen.org
    for (let link of arrayLinks) {

        //I need the href attribute to check the value
        let url = link.getAttribute('href') ?? ""; //Twice ?? to avoid a null/undef error

        if (url.includes("iesbelen.org")) {

            urlBelenCount++;

        }

    }

    return urlBelenCount;

}

//Number of links in the third paragraph
let numberLinksThirdParagraph = function(arrayParagraph) {

    const thirdParagraph = arrayParagraph[2]; // it returns a <p>

    const totalLinks = thirdParagraph.getElementsByTagName("a");

    return totalLinks.length;
}

window.onload = function() {

    console.log(`There's a total of ${countLinks(arrayLinks)} links on the page.\n
    Penultimate URL: ${extractUrlPenultLink(arrayLinks)} \n
    URL linked to iesbelen.org = ${groupUrlBelen(arrayLinks)} \n
    Total links in the third paragraph: ${numberLinksThirdParagraph(arrayParagraphs)} \n
    `);

}
