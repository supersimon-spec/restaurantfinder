var restaurants = []

window.addEventListener("DOMContentLoaded", function() {
    var Input = document.querySelector("#Enterinput")
    var Button= document.querySelector("#buttonenter")
    
    Button.addEventListener("click", () => {
        restaurants.push(Input.value)
    })
})
