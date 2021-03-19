document.addEventListener("DOMContentLoaded", () => {
    const hideSections = document.querySelectorAll(".hide")
    for(const section of hideSections){
        section.style.display = "none"
    }

    const dateTime = Date().split(" ")
    dateTime.splice(3, 1)
    dateTime.splice(4, 4)
    dateTime[2] = dateTime[2][0] === "0" ? dateTime[2].slice(1) : dateTime[2]
    document.querySelector("#time-text").innerHTML = `${dateTime.join(" ")}`

    let i = 0;
    const typeText = "load Du-Min's personal website"
    const typeSpeed = 70 //70
    function typeWriter(){
        if(i < typeText.length){
            document.querySelector("#typed-text").innerHTML += typeText.charAt(i++)
            setTimeout(typeWriter, typeSpeed)
        } else {
            setTimeout(() => document.querySelector("#term-cursor").innerHTML = "", 1000)
        }
    }
    setTimeout(typeWriter, 1000) //1000
    setTimeout(() => {
        const p = document.querySelector("#count-down")
        p.textContent = "Loading finished! Ready in "
        let ms = 0
        for(let i = 3; i > 0; i--){
            ms += 1000
            setTimeout(() => p.textContent += `${i}..`, ms)
        }
    }, 4300) //4300
    setTimeout(() => {
        const secIntro = document.querySelector(".show")
        secIntro.style.display = "none"
        secIntro.className = "hide"
        const secAbout = document.querySelector("#about")
        secAbout.style.display = ""
        secAbout.className = "show"
        document.querySelector("nav").style.display = ""
    }, 8000) //3400 8000

    function showSection(sectionId){
        const oldSection = document.querySelector(".show")
        oldSection.style.display = "none"
        oldSection.className = "hide"
        const newSection = document.querySelector(sectionId)
        newSection.style.display = ""
        newSection.className = "show"
    }
    const allBtn = document.querySelectorAll(".nav-button")
    for(const btn of allBtn){
        btn.addEventListener("click", () => showSection(`#${btn.id.split("-")[1]}`))
    }

    const btnAboutRead = document.querySelector("#btn-about-read")
    btnAboutRead.addEventListener("click", event => {
        const msg4 = document.querySelector("#msg4")
        const read = event.target.textContent === "read more"
        msg4.style.visibility = read ? "visible" : ""
        event.target.textContent = read ? "show less" : "read more"
    })
    const nameColor = ["#ff0000", "#ff8000", "#ffff00", "#80ff00", "#00ff00", "#00ff80", "#00ffff", "#0080ff", "#0000ff", "#8000ff", "#ff00ff", "#ff0080"]
    function shuffleNameColor(){
        const length = nameColor.length
        for(let i = 0; i < length; i++){
            const temp = nameColor[i]
            const randIndex = Math.floor(Math.random() * length)
            nameColor[i] = nameColor[randIndex]
            nameColor[randIndex] = temp
        }
    }
    shuffleNameColor()
    const myName = document.querySelector("#my-name")
    let colorIndex = 0
    let colorChange = true
    myName.addEventListener("mouseover", () => {
        if(!colorChange){
            return
        }
        myName.style.color = nameColor[colorIndex]
        colorIndex = (colorIndex + 1) % 11
        if(colorIndex === 0) {
            colorChange = false
            myName.textContent = "You broke it"
            shuffleNameColor()
            setTimeout(() => {
                myName.textContent = "Du Min Chen"
                myName.style.color = ""
                colorChange = true
            }, 8000)
        }
    })
    const profile = document.querySelector("#profile")
    let degVal = 0
    profile.addEventListener("click", () => {
        degVal = (degVal + 45) % 360
        profile.style.transform = `rotate(${degVal}deg)`
    })
})