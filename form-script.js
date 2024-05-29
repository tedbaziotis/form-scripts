document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('form'); // Using the correct form ID

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission

      // Capture form data
      var formData = {
        firstName: document.querySelector('input[name="First"]').value,
        lastName: document.querySelector('input[name="Last"]').value,
        email: document.querySelector('input[name="Email"]').value,
        phone: document.querySelector('input[name="Phone Number"]').value,
        companyName: document.querySelector('input[name="Company Name"]').value,
        industry: document.querySelector('input[name="Industry"]').value,
        annualRevenue: document.querySelector('input[name="Annual Revenue"]').value,
        financingType: document.querySelector('input[name="Type of Financing"]:checked').value
      };

      console.log('Form Data:', formData); // Log form data

      localStorage.setItem('formData', JSON.stringify(formData));

      // Get geolocation data
      $.get("https://ipinfo.io?token=00f522b5ae36c7", function(response) {
        localStorage.setItem('geoData', JSON.stringify({
          city: response.city,
          region: response.region,
          postal_code: response.postal,
          country: response.country
        }));

        console.log('Geo Data:', response); // Log geo data

        // Continue with form submission
        event.target.submit();
      }, "json").fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Geolocation error:', textStatus, errorThrown);
      });
    });
  } else {
    console.error('Form element with ID "form" not found.');
  }
});
