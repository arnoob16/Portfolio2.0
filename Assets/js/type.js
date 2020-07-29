const Skills = ["B.Tech Under Grad", "Front-End Web Developer", "Java & Python Programmer", "Open Source Contributer", "Student"];
let index = 0,
    skillIndex = 0,
    skill = "";
! function e() {
    skillIndex === Skills.length && (skillIndex = 0);
    let l = (skill = Skills[skillIndex]).slice(0, ++index);
    document.querySelector("#type-text").textContent = l, 
    l.length === skill.length ? (skillIndex++, index = 0, setTimeout(e, 1000)) : setTimeout(e, 100)
}();