var first = prompt("What is your name?")
if (first) {
    alert("Hello " + first + ". We are going to play a game.")
}

alert("This game is going to tell a story. And you are going to decide where this story goes. I'm going to give you two options to choose from. You must choose from the options I have given and type them exactly as they are presented. Then you will be given more options and you will continue to proceed just like that until the end. There are multiple endings so make every decision count.")

var start = confirm("Are up you ready to play?") 
if (start == true) {
    alert("Then let's get started!")
} else {
    alert("Well that sucks.")
}

alert("Angel is a guy who likes to spend his free time playing League of Legends. He isn't a great player, but he isn't necessarily bad. Today with your choices, you are going to determine whether or not he will improve to new heights, or spiral downward into mediocrity. Angel wakes up bright and early at 3 PM on the dot, like any other League player. He decides he's going to dedicate today to improving his skills. Before he does that, he looks for something to eat in his kitchen to fuel his body for the intense training day ahead")



var food = prompt("There isn't much to eat, so he narrows it down to two main choices. There is a 'breakfast burrito' that his mom made and a 'sandwich' his brother had brought back as leftovers. Which one does he decide to eat?")
if (food == "breakfast burrito") {
    alert("Angel is feeling energized. Nothing beat mom's homemade burritos")
    var music = prompt("Now that he's feeling energized he decides to get on his PC and start playing. Before he starts he needs some music to listen to. What kind of music does he listen to? Something 'hype' or something 'chill'?")
    if (music == "hype") {
        alert("Angel is hype now and his blood is feeling pumped.")
        var choices1 = prompt("Angel is feeling good so he wants to play either jungle or a solo lane. Does he play 'jungle', 'middle', or 'top'?")
        if (choices1 == "jungle") {
            alert("Jungle is Angel's best role. He should do great.")
            var play1 = prompt("Now that he's playing, how should his play style be? Should he be 'aggresive' or 'passive'?")
            if (play1 == "aggresive") {
                alert("Angel is playing great. At this rate he'll for sure get to diamond and maybe higher!") //ending 3
            } else if (play1 == "passive") {
                alert("Angel is playing great. At this rate he'll for sure get to diamond and maybe higher!") //ending 3
            }
        } else if (choices1 == "middle" || "top") {
            alert("Angel is pretty good at at solo lanes so he should do pretty well.")
            var play2 = prompt("Now that he's playing, how should his play style be? Should he be 'aggresive' or 'passive'?")
            if (play2 == "aggresive") {
                alert("Angel is playing great. At this rate he'll for sure get to diamond and maybe higher!") //ending 3
            } else if (play2 == "passive") {
                alert("Angel is playing the same as he always does. It doesn't look like he will improve, but at least he won't get worse. Good job I guess?") //ending 2
            }
        }
    } else if (music == "chill") {
        alert("Angel is relaxed now and he's feeling level-minded.")
        alert("Angel is chilling so he makes the smart decision and picks jungle since it's his main role.")
        var branch12 = prompt("Now that he's playing, how should his play style be? Should he be 'aggresive' or 'passive'?")
        if (branch12 == "aggresive") {
            alert("Angel is playing perfectly! He's relaxed, on his main role, and he's playing the way he wants. At this rate he'll be challenger! Great job on helping Angel.") //ending 4
        } else if (branch12 == "passive") {
            alert("Angel is playing great. At this rate he'll for sure get to diamond and maybe higher!") //ending 3
        }
    }

} else if (food == "sandwich") {
    alert("The sandwich tasted a little funny. At least he's full now.")
    var choices2 = prompt("Angel is feeling a little weird now but that's fine. He decides to jump straight into things. Which role is he going to pick? He can pick between 'bottom', 'support', 'middle', 'top', or 'jungle'.")
    if (choices2 == "bottom" || "support") {
        alert("Angel isn't very good at bot lane but he's always looking to improve.")
        var play3 = prompt("Now that he's playing, how should his play style be? Should he be 'aggresive' or 'passive'?")
        if (play3 == "aggresive") {
            alert("Angel is doomed. He'll never get better at the game. After your decisions Angel will only get worse and will die alone.") //ending 1
        } else if (play3 == "passive") {
            alert("Angel is doomed. He'll never get better at the game. After your decisions Angel will only get worse and will die alone.") //ending 1
        }
    } else if (choices2 == "mid" || "top" ) {
        alert("Angel is pretty good at at solo lanes so he should do pretty well")
        var play4 = prompt("Now that he's playing, how should his play style be? Should he be 'aggresive' or 'passive'?")
        if (play4 == "aggresive") {
            alert("Angel is playing the same as he always does. It doesn't look like he will improve, but at least he won't get worse. Good job I guess?") //ending 2
        } else if (play4 == "passive") {
            alert("Angel is doomed. He'll never get better at the game. After your decisions Angel will only get worse and will die alone.") //ending 1
        }
    } else if (choices2 == "jungle") {
        alert("Jungle is Angel's best role. He should do great.")
        var play5 = prompt("Now that he's playing, how should his play style be? Should he be 'aggresive' or 'passive'?")
        if (play5 == "aggresive") {
            alert("Angel is playing great. At this rate he'll for sure get to diamond and maybe higher!") //ending 3
        } else if (play5 == "passive") {
            alert("Angel is playing the same as he always does. It doesn't look like he will improve, but at least he won't get worse. Good job I guess?") //ending 2
        }

    }
} 



