/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
function onWindowLoad() {
    var days = 0;
    var dayRate = 35;
    var total = 0;

    let monday = document.getElementById("monday");
    const monList = monday.classList;

    let tuesday = document.getElementById("tuesday");
    const tueList = tuesday.classList;

    let wednesday = document.getElementById("wednesday");
    const wedList = wednesday.classList;

    let thursday = document.getElementById("thursday");
    const thuList = thursday.classList;

    let friday = document.getElementById("friday");
    const friList = friday.classList;

    let clear = document.getElementById("clear-button");
    
    
    let full = document.getElementById("full");
    let half = document.getElementById("half");

    let weekCost = document.getElementById("calculated-cost");


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
    monday.addEventListener("click", mondayChange);
    tuesday.addEventListener("click", tuesdayChange);
    wednesday.addEventListener("click", wednesdayChange);
    thursday.addEventListener("click", thursdayChange);
    friday.addEventListener("click", fridayChange);
    function mondayChange() {
        if(monday.classList.contains("monDone")) {
            return;
        }
        else {
            monList.add("monDone");
            monday.style.backgroundColor = "#E5AF42";
            days += 1;
            calculation();
        }
    }
    
    function tuesdayChange() {
        if(tuesday.classList.contains("tueDone")) {
            return;
        }
        else {
            tueList.add("tueDone");
            tuesday.style.backgroundColor = "#E5AF42";
            days += 1;
            calculation();
        }
    }
    
    function wednesdayChange() {
        if(wednesday.classList.contains("wedDone")) {
            return;
        }
        else {
            wedList.add("wedDone");
            wednesday.style.backgroundColor = "#E5AF42";
            days += 1;
            calculation();
        }
    }
    
    function thursdayChange() {
        if(thursday.classList.contains("thuDone")) {
            return;
        }
        else {
            thuList.add("thuDone");
            thursday.style.backgroundColor = "#E5AF42";
            days += 1;
            calculation();
        }
    }
    
    function fridayChange() {
        if(friday.classList.contains("friDone")) {
            return;
        }
        else {
            friList.add("friDone");
            friday.style.backgroundColor = "#E5AF42";
            days += 1;
            calculation();
        }
    }


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
    clear.addEventListener("click", reset);
    function reset() {
        days = 0;
        monList.remove("monDone");
        monday.style.backgroundColor = "";
        tueList.remove("tueDone");
        tuesday.style.backgroundColor = "";
        wedList.remove("wedDone");
        wednesday.style.backgroundColor = "";
        thuList.remove("thuDone");
        thursday.style.backgroundColor = "";
        friList.remove("friDone");
        friday.style.backgroundColor = "";
        calculation();
    }

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
    
    half.addEventListener("click", halfRate);
    function halfRate() {
        half.style.backgroundColor = "#E5AF42";
        full.style.backgroundColor = "white";
        dayRate = 20;
        calculation();
    }



// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
    full.addEventListener("click", fullRate);
    function fullRate() {
        half.style.backgroundColor = "";
        full.style.backgroundColor = "#E5AF42";
        dayRate = 35;
        calculation();
    }




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
    function calculation() {
        total = dayRate * days;
        weekCost.innerHTML = total;
    }

}
window.addEventListener("load", onWindowLoad);