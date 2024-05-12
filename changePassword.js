
function validate() {

    const adminPassword = "admin";
    const donorPassword = "donor";
    const organizationPassword = "organization";

    const oldPasswordInput = document.getElementById("Old Password");
    const newPasswordInput = document.getElementById("New Password");
    const confirmNewPasswordInput = document.getElementById("Confirm New Password");

    const oldPassword = oldPasswordInput.value;
    const newPassword = newPasswordInput.value;
    const confirmNewPassword = confirmNewPasswordInput.value;

    let currentPassword = "admin";

    if (oldPassword !== currentPassword) {
        alert("Incorrect old password");
        return;
    }

    if (newPassword != confirmNewPassword) {
        alert("New passwords do not match");
        return;
    }
    if (newPassword == confirmNewPassword) {
        alert("Password changed successfully");
        return;
    }


    // Passwords match and old password is correct
    // You can proceed with changing the password
    
}
