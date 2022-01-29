//initial count
let count = 0;

//buttons and value
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//Instead of writing the same code for 03 separate buttons we used for each.
//for each runs the function in all of the elements once at a time.

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList; //which button clicked and its classes
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }

        //changing text

        if (count > 0) {
            value.style.color = "green";
        } else if (count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})
