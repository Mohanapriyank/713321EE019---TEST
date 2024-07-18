function populateDays() {
    const daySelect = document.getElementById("day");
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        daySelect.appendChild(option);
    }
}

// Function to populate month dropdown
function populateMonths() {
    const monthSelect = document.getElementById("month");
    const monthNames = ["January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"];
    monthNames.forEach((month, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.text = month;
        monthSelect.appendChild(option);
    });
}

// Function to populate year dropdown
function populateYears() {
    const yearSelect = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.text = i;
        yearSelect.appendChild(option);
    }
}

// Call the functions to populate the dropdowns
populateDays();
populateMonths();
populateYears();

// Event listener for the submit button
document.getElementById("submitButton").addEventListener("click", function() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    if (day && month && year) {
        alert("Your date of birth is: " + day + "/" + month + "/" + year);
    } else {
        alert("Please select your date of birth.");
    }
});
document.getElementById("myButton").addEventListener("click",function(){
    window.location.href="home1.html";
});
document.getElementById("myButton1").addEventListener("click",function(){
    window.location.href="reprint.html";
})
document.getElementById("myButton2").addEventListener("click",function(){
    window.location.href="download.html";
})
    document.getElementById("myButton3").addEventListener("click",function(){
        window.location.href="status.html";
    })