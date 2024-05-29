<!DOCTYPE html>
<html>
<head>
  <title>Form Page</title>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', function() {
      document.getElementById('form_6639455').addEventListener('submit', function(event) {
        event.preventDefault();

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

        localStorage.setItem('formData', JSON.stringify(formData));

        $.get("https://ipinfo.io?token=00f522b5ae36c7", function(response) {
          localStorage.setItem('geoData', JSON.stringify({
            city: response.city,
            region: response.region,
            postal_code: response.postal,
            country: response.country
          }));

          // Continue with form submission
          event.target.submit();
        }, "json");
      });
    });
  </script>
</head>
<body>
  <form id="form_6639455">
    <input type="text" name="First" placeholder="First Name" required>
    <input type="text" name="Last" placeholder="Last Name" required>
    <input type="email" name="Email" placeholder="Email" required>
    <input type="tel" name="Phone Number" placeholder="Phone Number" required>
    <input type="text" name="Company Name" placeholder="Company Name">
    <input type="text" name="Industry" placeholder="Industry">
    <input type="number" name="Annual Revenue" placeholder="Annual Revenue">
    <input type="radio" name="Type of Financing" value="Revenue-based Financing"> Revenue-based Financing
    <input type="radio" name="Type of Financing" value="Asset-based Financing"> Asset-based Financing
    <input type="radio" name="Type of Financing" value="Personal Loan"> Personal Loan
    <input type="radio" name="Type of Financing" value="SBA 7(a) or USDA Program"> SBA 7(a) or USDA Program
    <button type="submit">Submit</button>
  </form>
</body>
</html>
