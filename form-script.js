console.log('Script loaded');

// Function to capture form data
function captureFormData() {
    try {
        let formData = {};
        // Assuming you have fields with ids like 'name', 'email', etc.
        formData.name = document.getElementById('name').value;
        formData.email = document.getElementById('email').value;
        formData.phone = document.getElementById('phone').value;
        formData.industry = document.getElementById('industry').value;
        formData.annualRevenue = document.getElementById('annualRevenue').value;
        formData.financingType = document.getElementById('financingType').value;
        formData.companyName = document.getElementById('companyName').value;

        console.log('Form Data:', formData);

        // Storing data in localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Form data saved to localStorage');
    } catch (error) {
        console.error('Error capturing form data:', error);
    }
}

// Function to push data to the data layer
function pushToDataLayer() {
    try {
        let formData = JSON.parse(localStorage.getItem('formData'));
        if (formData) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                'event': 'formSubmission',
                'formData': formData
            });
            console.log('Data pushed to dataLayer:', formData);
        } else {
            console.warn('No form data found in localStorage');
        }
    } catch (error) {
        console.error('Error pushing data to dataLayer:', error);
    }
}

// Assuming you call captureFormData on form submission
document.getElementById('yourForm').addEventListener('submit', function(event) {
    event.preventDefault();
    captureFormData();
    pushToDataLayer();
    // Optionally, redirect to thank you page
    // window.location.href = 'thank-you-page-url';
});

console.log('Script end');

