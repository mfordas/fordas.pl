export default formHandler = () => $(document).ready(function() {
    $("#contact .button").click(function() {
    let firstname = $('#firstname').val();
    let subject = $('#subject').val();
    let email = $('#email').val();
    let message = $('#message').val();
    let statusFirstName = $('.statusFirstName');
    let statusEmail = $('.statusEmail');
    let statusSubject = $('.statusSubject');
    let statusMessage = $('.statusMessage');
    let statusResult = $('.statusResult')
    statusFirstName.empty();
    statusEmail.empty();
    statusSubject.empty();
    statusMessage.empty();
    statusResult.empty();

    let firstNameVal = false;
    let emailVal = false;
    let subjectVal = false;
    let messageVal = false;

    if(email.length >5 && email.includes('@') && email.includes('.')) {
    emailVal = true;
    }
    else {
    event.preventDefault()
    statusEmail.append('<div style="color: #ff6347;">Błędny e-mail. Użyj maila w formacie mail@mail.com</div>')
    }

    if(firstname.length >=2) {
    firstNameVal = true;
    }
    else {
    event.preventDefault()
    statusFirstName.append('<div style="color: #ff6347;">Imię powinno mieć więcej niż dwa znaki.</div>')
    }

    if(subject.length >=5) {
    subjectVal = true;
    }
    else {
    event.preventDefault()
    statusSubject.append('<div style="color: #ff6347;">Temat powinien mieć wiecej niż 5 znaków.</div>')
    }

    if(message.length >=5) {
    messageVal = true;
    }
    else {
    event.preventDefault()
    statusMessage.append('<div style="color: #ff6347;">Wiadmość powinna zawierać co najmniej 5 znaków.</div>')
    }

if(firstNameVal==true && subjectVal== true && messageVal== true && emailVal== true){

    let varData = {
               name: firstname,
               subject: subject,
               email: email,
               message: message
           };


    $.ajax({
    type: 'post',
    url: '../../Contact/contact.php',
    data: varData,
    success: function(){
                   $('.success').fadeIn(1000);
                   console.log('it works');
                   statusResult.append('<div>Wiadomość wysłana! Dziękuję bardzo. Skontaktuję się z Tobą najszybciej jak będę mógł.</div>');
               }

    });}
    return false;
    });
});