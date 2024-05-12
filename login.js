function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if username and password are provided
    if (username === "" || password === "") {
        alert("Please enter both username and password.");
        return;
    }

    // Additional conditions for predefined usernames and passwords
    if (username === "admin" && password === "admin") {
        alert("Login Successfully");
        window.location.href = "AdminDashboard.html";
        return; // Exit the function after successful login
    } else if (username === "donor" && password === "donor") {
        alert("Login Successfully");
        window.location.href = "DonorDashboard.html";
        return; // Exit the function after successful login
    } else if (username === "organization" && password === "organization") {
        alert("Login Successfully");
        window.location.href = "OrganizationDashboard.html";
        return; // Exit the function after successful login
    }

    // Retrieve user data from localStorage based on the entered username
    var userData = JSON.parse(localStorage.getItem(username));

    // Check if userData exists and passwords match
    if (userData && userData.password === password && userData.username === username) {
        // Check if organization name and type are not empty for organization dashboard
        if (userData.orgName !== "" && userData.orgType !== "") {
            alert("Login Successful");
            // Redirect to organization dashboard
            window.location.href = "OrganizationDashboard.html";
        } else {
            // Navigate to donor dashboard if organization name and type are empty
            alert("Login Successful. Redirecting to donor dashboard.");
            window.location.href = "DonorDashboard.html";
        }
    } else {
        alert("Login Failed. Please try again.");
    }
}