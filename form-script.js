document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('form#form'); // Using the correct form ID

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

      console.log('Captured Form Data:', formData); // Debugging log
      localStorage.setItem('formData', JSON.stringify(formData));
      console.log('Stored Form Data in localStorage:', localStorage.getItem('formData'));

      // Get geolocation data
      $.get("https://ipinfo.io?token=00f522b5ae36c7", function(response) {
        var geoData = {
          city: response.city,
          region: response.region,
          postal_code: response.postal,
          country: response.country
        };
        localStorage.setItem('geoData', JSON.stringify(geoData));
        console.log('Geo Data:', geoData); // Debugging log
        console.log('Stored Geo Data in localStorage:', localStorage.getItem('geoData'));

        form.submit(); // Continue with form submission
      }, "json").fail(function(jqXHR, textStatus, errorThrown) {
        console.error('Geolocation error:', textStatus, errorThrown);
        form.submit(); // Continue with form submission even if geolocation fails
      });
    });
  } else {
    console.error('Form element with ID "form" not found.');
  }
});
