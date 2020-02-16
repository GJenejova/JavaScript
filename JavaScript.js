// var snack = process.argv[2]



var snack = prompt(`
Hello! Welcome to "What should I eat tonigt"

Press 1 to check for salty inspiration

Press 2 to check for sweet inspiration

Press 3 to check for healthy inspiration

`)

if (snack === "1") {
    var salty = confirm("Are you very hungry")

    if (salty === true) {
        var pizza = confirm("Is it Pizza?")
        if (pizza === true) {
            alert("Great! Check out Lorenza via Thuisbezorg.nl")
        } else if (pizza === false) {
            var burger = confirm("Is it Hamburger")
            if (burger === true) {
                alert("Great! Check out Thuisbezorg and enjoy your burger!")
            } else {
                alert('I give up. Have some tea')
            }

        }

    } else if (salty === false) {
        var doritos = confirm("Maybe Doritos?")
        if (doritos === true) {
            alert("Great! Have some Doritos")
        } if (doritos === false) {
            var fries = confirm("Maybe some french fries?")
            if (fries === true) {
                alert("Great! McDonals is just around the corner")
            } else if (fries === false) {
                alert("I give up. Have some tea")
            }
        }


    }

} else if (snack == 2) {
    var sweet = confirm("Are you very hungry")

    if (sweet === true) {
        var redVelvet = confirm("Is it a Red Velvet?")
        if (redVelvet === true) {
            alert("Horray! Have a Red Velvet at De Drie Graefjes")
        } else if (redVelvet === false) {
            var turtleCake = confirm("Is it a Turtle Cake?")
            if (turtleCake === true) {
                alert("Horray! Have a Turtle Cake at De Drie Graefjes")
            } else {
                alert('I give up. Have some tea')
            }
        }

    } else if (sweet === false) {
        var croissant = confirm("Is it a fresh Croissant?")
        if (croissant === true) {
            alert("Horray! You can buy one at Le Fournil")
        } else if (croissant === false) {
            var macaroon = confirm("Is it a french macaroon?")
            if (macaroon === true) {
                alert("Horray! You can buy chocolate one at Le Fournil")
            } else {
                alert('I give up. Have some tea')
            }
        }
    }

} else if (snack == 3) {
    var healthy = confirm("Are you very hungry")
    if (healthy === true) {
        var salad = confirm("Is it a Salad?")
        if (salad === true) {
            alert("Horray! You can have one at Batavia")
        } else if (salad === false) {
            var soup = confirm("Is it a soup?")
            if (soup === true) {
                alert("Horray! You can have minestrone at Batavia")
            } else {
                alert('I give up. Have some tea')
            }
        }

    } else if (healthy === false) {
        var carrot = confirm("Is it a carrot?")
        if (carrot === true) {
            alert("Horray! Be like Bugs Bunny and eat a carrot")
        } else if (carrot === false) {
            var apple = confirm("Is it an apple?")
            if (apple === true) {
                alert("Horray! Eat an apple")
            } else {
                alert('I give up. Have some tea')
            }
        }

    }

} else {
    alert("Okay, you're on a diet, go drink some tea!")
}

