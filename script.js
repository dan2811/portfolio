
function showBio() {
        let bio = document.getElementById("bio");
        let sleeveRoll = document.getElementById("sleeveRoll");
        let linkedIn = document.getElementById("linkedIn");
        let projects = document.getElementsByClassName("project");
        if(bio.style.display != "none") {
            bio.style.display = "none";
            sleeveRoll.style.display = "none";
            linkedIn.style.display = "none";
        } else {
            bio.style.display = "block";
            sleeveRoll.style.display = "block";
            linkedIn.style.display = "block";
        };
        pageLayout();
};


function showProjects() {
        let projects = document.getElementsByClassName("project");

        for(i = 0; i < projects.length; i++) {
            if(projects[i].style.display != "none") {
                projects[i].style.display = "none";
            } else {
                projects[i].style.display = "block";
            };
        };
        pageLayout();
};


function showContact() {
        let contactSection = document.getElementsByClassName("contact");

        for(i = 0; i < contactSection.length; i++) {
            if(contactSection[i].style.display != "none") {
                contactSection[i].style.display = "none";
            } else {
                contactSection[i].style.display = "block";
            };
        
    };
    pageLayout();
};

function pageLayout() {
    let bio = document.getElementById("bio");
    let projects = document.getElementsByClassName("project");
    let contactSection = document.getElementsByClassName("contact");

    let bioDisplay = bio.style.display;
    let projectDisplay = projects[0].style.display;
    let contactSectionDisplay = contactSection[0].style.display;

    if (bioDisplay != "none" && projectDisplay != "none" && contactSectionDisplay != "none") {
        document.body.style.gridTemplateAreas = '". heading heading heading swirl swirl""sleeveRoll sleeveRoll bioTitle . swirl swirl""sleeveRoll sleeveRoll bio bio swirl swirl""sleeveRoll sleeveRoll bio bio swirl swirl""sleeveRoll sleeveRoll linkedIn linkedIn swirl swirl""sleeveRoll sleeveRoll . . swirl swirl""sleeveRoll sleeveRoll . . swirl swirl"". projectsHead projectsHead . . ."". p1title . p2title . ."". p1image p1tech p2image p2tech ."". p1text p1text p2text p2text ."". p3title . p4title . ."". p3image p3tech p4image p4tech ."". p3text p3text p4text p4text ."". contact contact . . ."". details details form form form"". details details form form form"". details details form form form"';
    } else if (bioDisplay != "none" && projectDisplay != "none" && contactSectionDisplay === "none") {
        document.body.style.gridTemplateAreas = '". heading heading heading swirl swirl""sleeveRoll sleeveRoll bioTitle . swirl swirl""sleeveRoll sleeveRoll bio bio swirl swirl""sleeveRoll sleeveRoll bio bio swirl swirl""sleeveRoll sleeveRoll linkedIn linkedIn swirl swirl""sleeveRoll sleeveRoll . . swirl swirl"". projectsHead projectsHead . . ."". p1title . p2title . ."". p1image p1tech p2image p2tech ."". p1text p1text p2text p2text ."". p3title . p4title . ."". p3image p3tech p4image p4tech ."". p3text p3text p4text p4text ."". contact contact . . ."". details details form form form"". details details form form form"". details details form form form"';
    } else if (bioDisplay != "none" && projectDisplay === "none" && contactSectionDisplay === "none") {
        document.body.style.gridTemplateAreas = '". heading heading heading swirl swirl""sleeveRoll sleeveRoll bioTitle . swirl swirl""sleeveRoll sleeveRoll bio bio swirl swirl""sleeveRoll sleeveRoll bio bio swirl swirl""sleeveRoll sleeveRoll linkedIn linkedIn swirl swirl""sleeveRoll sleeveRoll . . swirl swirl""sleeveRoll sleeveRoll . . swirl swirl"". . . . swirl swirl"". projectsHead projectsHead . swirl swirl"". p1title . p2title swirl swirl"". p1image p1tech p2image swirl swirl"". p1text p1text p2text swirl swirl"". p3title . p4title swirl swirl"". p3image p3tech p4image swirl swirl"". p3text p3text p4text swirl swirl"". contact contact . swirl swirl"". details details form swirl swirl"". details details form swirl swirl"". details details form swirl swirl"';
    } else if (bioDisplay === "none" && projectDisplay === "none" && contactSectionDisplay === "none") {
        document.body.style.gridTemplateAreas = " '. heading heading heading swirl swirl''. bioTitle bioTitle . swirl swirl''. projectsHead projectsHead . swirl swirl''. contact contact . swirl swirl''details details form form swirl swirl''details details form form swirl swirl''details details form form swirl swirl''. . . . swirl swirl''. . . . swirl swirl''. . . . swirl swirl''. . . . swirl swirl''. . . . swirl swirl''. . . . swirl swirl'";
    } else if (bioDisplay === "none" && projectDisplay === "none" && contactSectionDisplay != "none") {
        document.body.style.gridTemplateAreas = " '. heading heading heading swirl swirl''. bioTitle bioTitle . swirl swirl''. projectsHead projectsHead . swirl swirl''. contact contact . swirl swirl''details details form form swirl swirl''details details form form swirl swirl''details details form form swirl swirl''. . . . swirl swirl''. . . . swirl swirl''. . . . swirl swirl''. . . . swirl swirl''. . . . swirl swirl''. . . . swirl swirl'";
    } else if (bioDisplay === "none" && projectDisplay != "none" && contactSectionDisplay != "none") {
        document.body.style.gridTemplateAreas = " '. heading heading heading swirl swirl''. bioTitle bioTitle . swirl swirl''. projectsHead projectsHead . swirl swirl''p1title . p2title . swirl swirl''p1image p1tech p2image p2tech swirl swirl''p1text p1text p2text p2text swirl swirl''p3title . p4title . swirl swirl''p3image p3tech p4image p4tech swirl swirl''p3text p3text p4text p4text swirl swirl''. contact contact . swirl swirl''. details details form swirl swirl''. details details form swirl swirl''. details details form swirl swirl'";
    } else if (bioDisplay === "none" && projectDisplay != "none" && contactSectionDisplay === "none") {
        document.body.style.gridTemplateAreas = " '. heading heading heading swirl swirl''. bioTitle bioTitle . swirl swirl''. projectsHead projectsHead . swirl swirl''p1title . p2title . swirl swirl''p1image p1tech p2image p2tech swirl swirl''p1text p1text p2text p2text swirl swirl''p3title . p4title . swirl swirl''p3image p3tech p4image p4tech swirl swirl''p3text p3text p4text p4text swirl swirl''. contact contact . swirl swirl''details details form form swirl swirl''details details form form swirl swirl''details details form form swirl swirl'";
    } else if (bioDisplay != "none" && projectDisplay === "none" && contactSectionDisplay != "none") {
        document.body.style.gridTemplateAreas = " '. heading heading heading swirl swirl''. bioTitle bioTitle . swirl swirl''. projectsHead projectsHead . swirl swirl''. contact contact . swirl swirl''details details form form swirl swirl''details details form form swirl swirl''details details form form swirl swirl''. . . . swirl swirl''. . . . swirl swirl''. . . . swirl swirl''. . . . swirl swirl''. . . . swirl swirl''. . . . swirl swirl'";
    };
}
