const Skills = ["B.Tech Under Grad", "Front-End Web Developer", "App Developer", "Java & Python Programmer", "Open Source Contributer"];
let index = 0,
    skillIndex = 0,
    skill = "";
! function e() {
    skillIndex === Skills.length && (skillIndex = 0);
    let l = (skill = Skills[skillIndex]).slice(0, ++index);
    document.querySelector("#type-text").textContent = l, 
    l.length === skill.length ? (skillIndex++, index = 0, setTimeout(e, 1000)) : setTimeout(e, 100)
}();