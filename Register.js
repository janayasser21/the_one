function validate() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("Email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;

    if (username == "admin" && password == "admin" && cpassword == "admin" && email == "admin@gmail.com") {
        alert("Register Successfully");
        window.location.href = "AdminDashboard.html";
    }
    else if (username == "organization" && password == "organization" && cpassword == "organization" && email == "organization@gmail.com") {
        alert("Register Successfully");
        window.location.href = "OrganizationDashboard.html";
    }
    else if (username == "donor" && password == "donor" && cpassword == "donor" && email == "donor@gmail.com") {
        alert("Register Successfully");
        window.location.href = "DonorDashboard.html";
    }
    else {
        alert("Register Failed");
    }
}

function register() {
    // Check if the file upload button has been clicked
    if (!document.getElementById("org-document").value) {
        alert("Please choose a file to upload.");
        return;
    }

    var firstName = document.getElementById("First_Name").value.trim();
    var lastName = document.getElementById("Last_Name").value.trim();
    var email = document.getElementById("Email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document.getElementById("cpassword").value.trim();
    var gender = document.getElementById("Gender").value;
    var contactNumber = document.getElementById("Contact_Number").value.trim();
    var orgName = document.getElementById("Organization_Name").value.trim();
    var orgType = document.getElementById("Organization_Type").value.trim();
    var address = document.getElementById("Address").value.trim();
    var area = document.getElementById("Area").value.trim();
    var governorate = document.getElementById("Governorate").value.trim();
    var agreeTerms = document.getElementById("agree-terms").checked;

    if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === "" ||
        gender === "" ||
        contactNumber === "" ||
        address === "" ||
        area === "" ||
        governorate === ""
    ) {
        alert("Failed to register. Please fill in all required fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (!agreeTerms) {
        alert("You must agree to the terms and conditions to register.");
        return;
    }

    if (username === "organization" && password === "organization") {
        if (orgName === "" || orgType === "") {
            alert("Please fill the Organization Name & Type");
            return;
        }
    }

    alert("You registered successfully");
}

function chooseFile() {
    // Trigger click event on the file input element
    document.getElementById("org-document").click();

    // Add event listener for when file selection is completed
    document.getElementById("org-document").addEventListener("change", function () {
        // Check if a file is selected
        if (this.files && this.files[0]) {
            // Display success message
            alert("File chosen successfully!");
        }
    });
}
