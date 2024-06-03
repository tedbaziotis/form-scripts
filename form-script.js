<script>
function captureFormData() {
    try {
        let formData = {
            firstName: document.querySelector('[data-index="1"]').value, // First Name using data attribute
            lastName: document.querySelector('[data-index="2"]').value, // Last Name using data attribute
            email: document.getElementById('text-00000014').value, // Email
            phone: document.getElementById('text-00000016').value, // Phone Number
            companyName: document.getElementById('text-00000026').value, // Company Name
            industry: document.getElementById('text-00000022').value, // Industry
            financingType: document.querySelector('input[name="c_0000000f"]:checked').value // Type of Financing
        };

        console.log('Form Data:', formData);

        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Form data saved to localStorage');
    } catch (error) {
        console.error('Error capturing form data:', error);
    }
}

// Capture form data immediately
captureFormData();
</script>
