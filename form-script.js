<script>
    console.log('Script loaded for form submission page');

function captureFormData() {
    try {
        let formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            industry: document.getElementById('industry').value,
            annualRevenue: document.getElementById('annualRevenue').value,
            financingType: document.getElementById('financingType').value,
            companyName: document.getElementById('companyName').value
        };

        console.log('Form Data:', formData);

        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Form data saved to localStorage');
    } catch (error) {
        console.error('Error capturing form data:', error);
    }
}

document.getElementById('yourForm').addEventListener('submit', function(event) {
    event.preventDefault();
    captureFormData();
    // Redirect to thank you page
    window.location.href = 'thank-you-page-url'; // Replace with your thank you page URL
});

console.log('Script end for form submission page');
<script>
