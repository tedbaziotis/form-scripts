document.addEventListener('DOMContentLoaded', function() {
  // Function to get the value of a specified cookie
  function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  // Function to get the value of a form field by its name
  function getFieldValue(fieldName) {
    var field = document.querySelector('[name="' + fieldName + '"]');
    return field ? field.value : '';
  }

  // Add event listener to the form for the submit event
  var form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Capture form field values
    var name = getFieldValue('Name');
    var email = getFieldValue('Email');
    var phone = getFieldValue('Phone Number');
    var company = getFieldValue('Company Name');
    var industry = getFieldValue('Industry');
    var revenue = getFieldValue('Annual Revenue');
    var financingType = getFieldValue('Type of Financing');

    // Get the current Unix timestamp
    var currentTime = Math.floor(Date.now() / 1000);

    // Get fbclid from the URL query parameters
    var fbclid = new URLSearchParams(window.location.search).get('fbclid');

    // Get _fbc and _fbp cookies
    var fbc = getCookie('_fbc');
    var fbp = getCookie('_fbp');

    // If _fbc cookie is not available, construct it using fbclid
    if (!fbc && fbclid) {
      fbc = `fb.1.${currentTime}.${fbclid}`;
    }

    // Fetch geolocation data from IPinfo
    fetch('https://ipinfo.io?token=00f522b5ae36c7')
      .then(response => response.json())
      .then(data => {
        // Get city, region, and country from the geolocation data
        var city = data.city || '';
        var region = data.region || '';
        var country = data.country || '';

        // Push data to the data layer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'generate_lead',
          'user_data': {
            'email_address': email, // Email
            'phone_number': phone, // Phone number
            'address': {
              'first_name': name.split(' ')[0], // First name
              'last_name': name.split(' ')[1] || '', // Last name
              'city': city, // City
              'region': region, // State/Region
              'postal_code': '', // Postal code (if needed, add a form field for it)
              'country': country // Country
            },
            'company': company, // Company name
            'industry': industry, // Industry
            'annual_revenue': revenue, // Annual revenue
            'financing_type': financingType, // Type of financing
            'fbc': fbc, // Click ID
            'fbp': fbp // Browser ID
          },
          'event_time': currentTime, // Event time
          'event_source_url': window.location.href, // URL where the event happened
          'action_source': 'website', // Source of the action
          'referrer_url': document.referrer // Referrer URL
        });

        // Proceed with form submission
        event.target.submit();
      })
      .catch(error => {
        console.error('Error fetching geolocation data:', error);
        // Proceed with form submission even if geolocation fails
        event.target.submit();
      });
  });
});
