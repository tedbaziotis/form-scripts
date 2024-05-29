document.addEventListener('DOMContentLoaded', function() {
  var forms = document.querySelectorAll('form');
  forms.forEach(function(form, index) {
    console.log('Form ' + index + ':', form);
  });
});
