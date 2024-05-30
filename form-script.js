document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form[data-form-id="6639455"]'); // Using the correct data-form-id attribute

  if (form) {
    console.log('Form found:', form); // Debugging log
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

      console.log('Form Data:', formData); // Debugging log
      localStorage.setItem('formData', JSON.stringify(formData));

      // Get geolocation data
      $.get("https://ipinfo.io?token=00f522b5ae36c7", function(response) {
        localStorage.setItem('geoData', JSON.stringify({
          city: response.city,
          region: response.region,
          postal_code: response.postal,
          country: response.country
        }));

        console.log('Geo Data:', response); // Debugging log
        form.submit(); // Continue with form submission
      }, "json").fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Geolocation error:', textStatus, errorThrown);
        form.submit(); // Continue with form submission even if geolocation fails
      });
    });
  } else {
    console.error('Form element with data-form-id "6639455" not found.');
  }
});
