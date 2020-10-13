<?php
htmlspecialchars($_SERVER["PHP_SELF"]);
if($_SERVER["REQUEST_METHOD"] == "POST"){

    $data = json_decode(file_get_contents("php://input"), true);

    echo $data;

    function test_input($data2) {
          $data2 = trim($data2);
          $data2 = stripslashes($data2);
          $data2 = htmlspecialchars($data2);
          return $data2;
        }

    if (empty($data['name'])) {
        $nameErr = "Name is required";
      } else {
        $name = $data['name'];
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
          $nameErr = "Only letters and white space allowed";
        }
      }

      if (empty($data['email'])) {
        $emailErr = "Email is required";
      } else {
        $email = $data['email'];
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $emailErr = "Invalid email format";
        }
      }

      if (empty($data['message'])) {
        $subject = "";
      } else {
        $message = $data['message'];
      }

      if (empty($data['subject'])) {
              $subject = "";
            } else {
              $subject = $data['subject'];
            }

    $formcontent="$name \r\n $message \r\n";
    $recipient = 'mateusz@fordas.pl';
    $mailheader = "$email \r\n";
    $headers .= 'From: ' . $name . "\r\n";
    $headers .= 'E-mail: ' . $email . "\r\n";
    $headers .= 'Wiadmość: ' . $message . "\r\n";

    mail($recipient, $subject, $headers);
    }
?>


