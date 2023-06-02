  const form = document.getElementById('contact-form');
  const buttonSubmit = document.getElementById('send');
  buttonSubmit.addEventListener('click', () => {
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('address').value;
    const message = document.getElementById('book').value;
  
    if (email.trim() === '' || phone.trim() === '' || message.trim() === '') {
      alert('Please fill in the fields');
      return; 
    }
  
    const token = "5567934372:AAEyujHZEfX6-t8XxMFHlS-rqumw73vEMDE    ";
    const chatId = '-900014151';
  
    const spaces = '=======================';
    let txt = '';
  
    const dataSend = {
      'Phone number: ': name,
      'Email: ': email,
      'Address: ': address,
      'Book: ': book,
    };
  
    txt += 'New order %0A%0A' + spaces + '%0A%0A';
  
    for (const [key, value] of Object.entries(dataSend)) {
      txt += '<b>' + key + '</b> ' + value + '%0A';
    }
  
    txt += '%0A' + spaces;
  
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${txt}`)
      .then(response => {
        if (response.ok) {
          // Виконано успішний запит
          console.log('Message sent');
          const result = document.createElement('div');
          result.classList = 'result';
          result.innerText = 'Message sent';
          form.appendChild(result);
        } else {
          // Обробка помилки відповіді
          console.log('Error');
        }
      })
      .catch(error => {
        // Обробка помилки з'єднання
        console.log('Error lodading: ', error);
      });
  })