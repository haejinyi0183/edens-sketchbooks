
function slider() {
    const messages = [
        "Around 920,000 cats and dogs were euthanized in animal shelters in 2020...",
        "Approximately 3.1 million dogs and 3.2 million cats enter animal shelters each year...",
        "Most pets are surrendered for adoption due to no fault of their own...",
        "If you'd like to take a leap towards adopting a pet, click on the green paw!"
    ]
    
    let i = 0;
    const slides = document.querySelector('#slides');
    
    function slide() {
        slides.innerHTML = messages[i];
        slides.style.opacity = 1;
        setTimeout(next, 4000);
    }
    
    function next() {
        i++;
        if (i > messages.length - 1) {
            i = 0;
        } else if (i === messages[3]) {
            setTimeout(10000)
        }
        slides.style.opacity = 0;
        setTimeout(slide, 2000)
    }
    return (
    slide()
    )
    }
    export default slider;