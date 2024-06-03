console.log('Custom script loaded from GitHub'); // Verification log

function captureFormData() {
    try {
        console.log('Capturing form data'); // Log before capturing data

        let firstNameElement = document.querySelector('[data-index="1"]');
        let lastNameElement = document.querySelector('[data-index="2"]');
        let emailElement = document.getElementById('text-00000014');
        let phoneElement = document.getElementById('text-00000016');
        let companyNameElement = document.getElementById('text-00000026');
        let industryElement = document.getElementById('text-00000022');
        let financingTypeElement = document.querySelector('input[name="c_0000000f"]:checked');

        console.log('Elements:', { firstNameElement, lastNameElement, emailElement, phoneElement, companyNameElement, industryElement, financingTypeElement });

        let formData = {
            firstName: firstNameElement ? firstNameElement.value : 'N/A', // First Name using data attribute
            lastName: lastNameElement ? lastNameElement.value : 'N/A', // Last Name using data attribute
            email: emailElement ? emailElement.value : 'N/A', // Email
            phone: phoneElement ? phoneElement.value : 'N/A', // Phone Number
            companyName: companyNameElement ? companyNameElement.value : 'N/A', // Company Name
            industry: industryElement ? industryElement.value : 'N/A', // Industry
            financingType: financingTypeElement ? financingTypeElement.value : 'N/A' // Type of Financing
        };

        console.log('Form Data:', formData); // Log captured data

        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Form data saved to localStorage'); // Log after saving data
    } catch (error) {
        console.error('Error capturing form data:', error); // Log any errors
    }
}

// Capture form data immediately
captureFormData();
console.log('Custom script execution finished'); // Verification log
