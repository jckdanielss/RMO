<?php
// ponytail: single-purpose mail relay for the contact form, no framework needed on shared cPanel hosting
header("Access-Control-Allow-Origin: https://rmollc.com");
// served same-origin from rmollc.com/newsite, so the header above is a no-op safety net, not required
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["ok" => false, "error" => "Method not allowed"]);
  exit;
}

$data = json_decode(file_get_contents("php://input"), true) ?? $_POST;

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$company = trim($data["companyName"] ?? "");
$message = trim($data["message"] ?? "");

if ($name === "" || $company === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(422);
  echo json_encode(["ok" => false, "error" => "Invalid submission"]);
  exit;
}

$to = "info@rmollc.com";
$subject = "New contact form message from $name";
$body = "Name: $name\nEmail: $email\nCompany: $company\n\nMessage:\n$message\n";
$headers = "From: no-reply@rmollc.com\r\nReply-To: " . filter_var($email, FILTER_SANITIZE_EMAIL);

$sent = mail($to, $subject, $body, $headers);

if ($sent) {
  echo json_encode(["ok" => true]);
} else {
  http_response_code(500);
  echo json_encode(["ok" => false, "error" => "Mail send failed"]);
}
