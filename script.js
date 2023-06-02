document.getElementById('purchase-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var firstName = document.getElementById('first-name').value;
  var lastName = document.getElementById('last-name').value;
  var bookTitle = document.getElementById('book-title').value;
  var address = document.getElementById('address').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;

  var firstNameError = document.getElementById('first-name-error');
  var lastNameError = document.getElementById('last-name-error');
  var bookTitleError = document.getElementById('book-title-error');
  var addressError = document.getElementById('address-error');
  var phoneError = document.getElementById('phone-error');
  var emailError = document.getElementById('email-error');

  firstNameError.textContent = '';
  lastNameError.textContent = '';
  bookTitleError.textContent = '';
  addressError.textContent = '';
  phoneError.textContent = '';
  emailError.textContent = '';

  if (firstName === '') {
      firstNameError.textContent = 'Please enter your first name.';
      return;
  }

  if (lastName === '') {
      lastNameError.textContent = 'Please enter your second name.';
      return;
  }

  if (bookTitle === '') {
      bookTitleError.textContent = 'Please enter the name of the book.';
      return;
  }

  if (address === '') {
      addressError.textContent = 'Please enter the delivery address.';
      return;
  }

  if (email === '') {
    emailError.textContent = 'Please enter the name of the book.';
    return;
  }
  if (phone === '') {
    phoneError.textContent = 'Please enter the delivery address.';
    return;
  }

  alert('The form was sent successfully');
});