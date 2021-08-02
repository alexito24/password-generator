// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = writePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
var btn = ""

function generate() {
  event.preventDefault();
  var critia = alert("Please select the critia for your password!")
  
  var btn = prompt("enter a number of characters for your password between 8-128")
  console.log(btn)
  var lowerCase = confirm("would you like to include lowerCase letters?")

  var upperCase = confirm("would you like to include uppperCase letters?")

  var numeric = confirm("would you like to include numbers?")
  
  var specialCaracters = confirm("would you like to include special characters?")

  var text = "your password is ";
  var len = btn;
  var char_list ="abcdefghijklmnopqrstuvwxyz"
    ;
  var char_list2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var char_list3 = "0123456789";
  var char_list4 = "U+0020U+0021U+0022U+0023U+0024U+0025U+0026U+0027U+0028U+0029U+002AU+002BU+002CU+002DU+002EU+002FU+003AU+003BU+003CU+003DU+003EU+003FU+0040U+005BU+005CU+005DU+005EU+005BFU+0060U+007BU+007CU+007DU+007EU+007F";
  
  var char_list1_2 = "AfdsjlfkdfDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var char_list2_3 = "ABsdhvbhdfe12749CDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  var char_list2_4 = "AHU+0025AU+0020BCDEFGHIJKLMNOPQRSTUVWXYZU+0020U+0021U+0022U+0023U+0024U+0025U+0026U+0027U+0028U+0029U+002AU+002BU+002CU+002DU+002EU+002FU+003AU+003BU+003CU+003DU+003EU+003FU+0040U+005BU+005CU+005DU+005EU+005BFU+0060U+007BU+007CU+007DU+007EU+007F";
  
  var char_list1_3 = "ab1863920cdefghijklmnopq480rstuvwxyz0123456789";
  var char_list1_4 = "aU+0020bcdeU+0026fghU+002EijklmnopqrstuvwxyzU+0020U+0021U+0022U+0023U+0024U+0025U+0026U+0027U+0028U+0029U+002AU+002BU+002CU+002DU+002EU+002FU+003AU+003BU+003CU+003DU+003EU+003FU+0040U+005BU+005CU+005DU+005EU+005BFU+0060U+007BU+007CU+007DU+007EU+007F";
  var char_list3_4 = "01U+002023U+00213870U+002254U+0023U+0024U+0025U+0026U+0027U+0028U+0029U+002AU+002BU+002CU+002DU+002EU+002FU+003AU+003BU+003CU+003DU+003EU+003FU+0040U+005BU+005CU+005DU+005EU+005BFU+0060U+007BU+007CU+007DU+007EU+007F";

  var char_list123 = "AB4943fsh9970jfcvIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var char_list124 = "02r8U+0020443e5EFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzU+0020U+0021U+0022U+0023U+0024U+0025U+0026U+0027U+0028U+0029U+002AU+002BU+002CU+002DU+002EU+002FU+003AU+003BU+003CU+003DU+003EU+003FU+0040U+005BU+005CU+005DU+005EU+005BFU+0060U+007BU+007CU+007DU+007EU+007F";
  var char_list134 = "abgfU+0020ldfBU+0025CDEFGHIJKLMNOPQRSTUVWXYZ0123456789U+0020U+0021U+0022U+0023U+0024U+0025U+0026U+0027U+0028U+0029U+002AU+002BU+002CU+002DU+002EU+002FU+003AU+003BU+003CU+003DU+003EU+003FU+0040U+005BU+005CU+005DU+005EU+005BFU+0060U+007BU+007CU+007DU+007EU+007F";
  var char_list234 = "abcdefU+0025ghijklmnopqrstuvwxyz0123456789U+0020U+0021U+0022U+0023U+0024U+0025U+0026U+0027U+0028U+0029U+002AU+002BU+002CU+002DU+002EU+002FU+003AU+003BU+003CU+003DU+003EU+003FU+0040U+005BU+005CU+005DU+005EU+005BFU+0060U+007BU+007CU+007DU+007EU+007F";

  var char_list1 = "AbCU+0021E1GHedU+0024IJU+0025KLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789U+0020U+0021U+0022U+0023U+0024U+0025U+0026U+0027U+0028U+0029U+002AU+002BU+002CU+002DU+002EU+002FU+003AU+003BU+003CU+003DU+003EU+003FU+0040U+005BU+005CU+005DU+005EU+005BFU+0060U+007BU+007CU+007DU+007EU+007F";
  

  

  
  if (specialCaracters === numeric === lowerCase === upperCase) {
    for (var i = 0; i < len; i++) {
    text += char_list1.charAt(Math.floor(Math.random() * char_list.length));
  }}
  else if (numeric === lowerCase === upperCase) {
    for (var i = 0; i < len; i++) {
    text += char_list123.charAt(Math.floor(Math.random() * char_list.length));
  }}
  else if (specialCaracters === lowerCase === upperCase) {
    for (var i = 0; i < len; i++) {
    text += char_list124.charAt(Math.floor(Math.random() * char_list.length));
  }}
  else if (specialCaracters === numeric === upperCase) {
    for (var i = 0; i < len; i++) {
    text += char_list134.charAt(Math.floor(Math.random() * char_list.length));
  }}
  else if (specialCaracters === numeric === lowerCase) {
    for (var i = 0; i < len; i++) {
    text += char_list234.charAt(Math.floor(Math.random() * char_list.length));
  }}
  else if (lowerCase === upperCase) {
    for (var i = 0; i < len; i++) {
    text += char_list1_2.charAt(Math.floor(Math.random() * char_list.length));
  }}
  else if (numeric === upperCase) {
    for (var i = 0; i < len; i++) {
    text += char_list2_3.charAt(Math.floor(Math.random() * char_list.length));
  }}
  else if (specialCaracters === upperCase) {
    for (var i = 0; i < len; i++) {
    text += char_list2_4.charAt(Math.floor(Math.random() * char_list.length));
  }}
  else if (lowerCase === numeric) {
    for (var i = 0; i < len; i++) {
    text += char_list1_3.charAt(Math.floor(Math.random() * char_list.length));
  }}
  else if (lowerCase === specialCaracters) {
    for (var i = 0; i < len; i++) {
    text += char_list1_4.charAt(Math.floor(Math.random() * char_list.length));
  }}
  else if (specialCaracters === numeric) {
    for (var i = 0; i < len; i++) {
    text += char_list3_4.charAt(Math.floor(Math.random() * char_list.length));
  }}
  else if (lowerCase !== upperCase !== numeric !== specialCaracters) {
    for (var i = 0; i < len; i++) {
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }}
  else if (upperCase !== numeric!== lowerCase!== specialCaracters) {
    for (var i = 0; i < len; i++) {
    text += char_list2.charAt(Math.floor(Math.random() * char_list2.length));
  }}
  else if (numeric !== lowerCase !== upperCase !== specialCaracters) {
    for (var i = 0; i < len; i++) {
    text += char_list3.charAt(Math.floor(Math.random() * char_list3.length));
  }}
  else if (specialCaracters !== numeric !== lowerCase !== upperCase ) {
    for (var i = 0; i < len; i++) {
    text += char_list4.charAt(Math.floor(Math.random() * char_list4.length));
  }} 

    
 
  var result = text;
  
  alert(result);
  return(result);
  }

  
  //var 

 

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", generate);