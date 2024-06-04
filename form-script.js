<script>
console.log('123FormBuilder custom script is running');

(function() {
    console.log('Custom script loaded from GitHub'); // Verification log

    function captureFormData() {
        try {
            console.log('Capturing form data'); // Log before capturing data

            // Get elements
            let firstNameElement = document.querySelector('[data-index="1"]');
            let lastNameElement = document.querySelector('[data-index="2"]');
            let emailElement = document.getElementById('text-00000014');
            let phoneElement = document.getElementById('text-00000016');
            let companyNameElement = document.getElementById('text-00000026');
            let industryElement = document.getElementById('text-00000022');
            let financingTypeElement = document.querySelector('input[name="c_0000000f"]:checked');

            // Log element states
            console.log('Elements found:', { firstNameElement, lastNameElement, emailElement, phoneElement, companyNameElement, industryElement, financingTypeElement });

            // Ensure elements exist before accessing values
            let formData = {
                firstName: firstNameElement ? firstNameElement.value : 'N/A',
                lastName: lastNameElement ? lastNameElement.value : 'N/A',
                email: emailElement ? emailElement.value : 'N/A',
                phone: phoneElement ? phoneElement.value : 'N/A',
                companyName: companyNameElement ? companyNameElement.value : 'N/A',
                industry: industryElement ? industryElement.value : 'N/A',
                financingType: financingTypeElement ? financingTypeElement.value : 'N/A'
            };

            console.log('Form Data:', formData); // Log captured data

            // Store form data in localStorage
            localStorage.setItem('formData', JSON.stringify(formData));
            console.log('Form data saved to localStorage'); // Log after saving data
        } catch (error) {
            console.error('Error capturing form data:', error); // Log any errors
        }
    }

    // Capture form data immediately
    captureFormData();
    console.log('Custom script execution finished'); // Verification log
})();
</script>
