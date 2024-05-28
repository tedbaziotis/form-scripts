<script>
document.addEventListener('DOMContentLoaded', function() {
  function getCookie(name) {
    let value = "; " + document.cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }

  function getFieldValue(fieldName) {
    var field = document.querySelector('[name="' + fieldName + '"]');
    return field ? field.value : '';
  }

  var form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = getFieldValue('First');
    var lastName = getFieldValue('Last');
    var email = getFieldValue('Email');
    var phone = getFieldValue('Phone Number');
    var company = getFieldValue('Company Name');
    var industry = getFieldValue('Industry');
    var revenue = getFieldValue('Annual Revenue');
    var financingType = document.querySelector('[name="Type of Financing"]:checked') ? document.querySelector('[name="Type of Financing"]:checked').value : '';

    var currentTime = Math.floor(Date.now() / 1000);
    var fbclid = new URLSearchParams(window.location.search).get('fbclid');
    var fbc = getCookie('_fbc');
    var fbp = getCookie('_fbp');

    if (!fbc && fbclid) {
      fbc = `fb.1.${currentTime}.${fbclid}`;
    }

    fetch('https://ipinfo.io?token=00f522b5ae36c7')
      .then(response => response.json())
      .then(data => {
        var city = data.city || '';
        var region = data.region || '';
        var country = data.country || '';

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'generate_lead',
          'user_data': {
            'email_address': email,
            'phone_number': phone,
            'address': {
              'first_name': firstName,
              'last_name': lastName,
              'city': city,
              'region': region,
              'postal_code': '',
              'country': country
            },
            'company': company,
            'industry': industry,
            'annual_revenue': revenue,
            'financing_type': financingType,
            'fbc': fbc,
            'fbp': fbp
          },
          'event_time': currentTime,
          'event_source_url': window.location.href,
          'action_source': 'website',
          'referrer_url': document.referrer
        });

        event.target.submit();
      })
      .catch(error => {
        console.error('Error fetching geolocation data:', error);
        event.target.submit();
      });
  });
});
</script>
