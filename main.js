function checkAccess() {
    var userRole = localStorage.getItem('userRole');
    var currentURL = window.location.href;

    if ((userRole !== 'admin' &&
        (currentURL.includes('/AdminDashboard.html')
            || currentURL.includes('/AccountSettings.html')
            || currentURL.includes('/AdminAccSettings.html')
            || currentURL.includes('/deleteDonorAcc.html')
            || currentURL.includes('/deleteOrgAcc.html')
            || currentURL.includes('/donorList.html')
            || currentURL.includes('/donorRequests.html')
            || currentURL.includes('/donorSubmissions.html')
            || currentURL.includes('/Org1Details.html')
            || currentURL.includes('/Org2Details.html')
            || currentURL.includes('/Org3Details.html')
            || currentURL.includes('/Org4Details.html')
            || currentURL.includes('/orgDetails.html')
            || currentURL.includes('/orgLists.html')
            || currentURL.includes('/orgRequests.html')
            || currentURL.includes('/orgSubmissions.html')
            || currentURL.includes('/PasswordManagement.html')
            || currentURL.includes('/registeredOrg.html')
        )) && (userRole !== 'donor' &&
            (currentURL.includes('/DonorDashboard.html')
                || currentURL.includes('/DonationRequests.html')
                || currentURL.includes('/RecNotificationForDriverArrival.html')
                || currentURL.includes('/SchedulePickup.html')
                || currentURL.includes('/viewETA.html')
                || currentURL.includes('/viewETA.html')
                || currentURL.includes('/viewETA.html')
                || currentURL.includes('/viewETA.html')
                || currentURL.includes('/viewETA.html')
                || currentURL.includes('/viewETA.html')
            )) && (userRole !== 'organization' &&
                (currentURL.includes('/OrganizationDashboard.html')
                    || currentURL.includes('/BloodDonation.html')
                    || currentURL.includes('/DonationPosts.html')
                    || currentURL.includes('/DonationPostsdelete.html')
                    || currentURL.includes('/Notifications.html')
                ))) {
        window.location.href = replaceLastPartOfURL(currentURL, "index.html");
    }
}

function replaceLastPartOfURL(url, replacement) {
    var parts = url.split('/');
    parts[parts.length - 1] = replacement;
    return parts.join('/');
}

function interceptURL() {
    checkAccess();
}
window.onbeforeunload = interceptURL;
window.addEventListener('load', function () {
    checkAccess();
});
