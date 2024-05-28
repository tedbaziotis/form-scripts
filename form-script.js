<script>
async function fetchGeolocation() {
  const response = await fetch('https://ipinfo.io?token=00f522b5ae36c7');
  const data = await response.json();
  localStorage.setItem('geoData', JSON.stringify(data));
}

fetchGeolocation();

document.getElementById('form_6639455').addEventListener('submit', function(event) {
  var firstName = document.querySelector('input[name="First"]').value;
  var lastName = document.querySelector('input[name="Last"]').value;
  var email = document.querySelector('input[name="Email"]').value;
  var phone = document.querySelector('input[name="Phone Number"]').value;
  var companyName = document.querySelector('input[name="Company Name"]').value;
  var industry = document.querySelector('input[name="Industry"]').value;
  var annualRevenue = document.querySelector('input[name="Annual Revenue"]').value;
  var financingType = document.querySelector('input[name="Type of Financing"]:checked').value;

  var formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    companyName: companyName,
    industry: industry,
    annualRevenue: annualRevenue,
    financingType: financingType
  };

  localStorage.setItem('formData', JSON.stringify(formData));

  // Continue with form submission
});
</script>
