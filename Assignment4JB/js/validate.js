function validate() {
	/* creates variables from answers gathered through form */
	var fname = document.getElementById('fname').value;
      var lname = document.getElementById('lname').value;
      var address = document.getElementById('address').value;
      var city = document.getElementById('city').value;
      var state = document.getElementById('state').value;
      var zip = document.getElementById('zip').value;
      var email = document.getElementById('email').value;
      var phone = document.getElementById('phone').value;
	/* makes sure that only numbers were entered */
      var numbers = /^[0-9]+$/;
      /* makes sure that email format is correct */
	var emailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

         /* check fields are empty */
	if(fname=="") {
		alert("Please fill in a first name!");
            return false; 
         }

	if(lname=="") {
            alert("Please fill in a last name!");
            return false; 
         }
		
	if(address=="") {
            alert("Please fill in an address!");
            return false; 
         }

	if(city=="") {
            alert("Please fill in a city!");
            return false; 
         }

	if(state=="-1") {
            alert("Please fill in a state!");
            return false; 
         }
		
	if(zip=="") {
            alert("Please fill in a zip code!");
            return false; 
         }
	
	if(phone.length==0) {
            alert("Please fill in a phone number!");
            return false; 
         }

	if(email=="") {
            alert("Please fill in an email address");
            return false; 
         }	

         /* check to see if everything is longer than 1 letter/number */
      if(fname.length<=1||lname.length<=1,address.length<=1||city.length<=1,zip.length<=1||email.length<=1) {
            alert("input must be greater than one character");
		return false;      
         }

         /* checks to see if zip code is only numbers and is 5 digits */
      if((!zip.match(numbers)) || zip.length!==5){
            alert('enter only numbers or length of zip code must be equal to 5');
		return false;
         }

         /* checks if the phone number only contains numbers and must have 10 digits */
      if((!phone.match(numbers)) || phone.length!==10){
      	alert('enter only numbers or length of Phone number must be equal to 10');
		return false;
         }

         /* checks if valid email */
      if((!email.match(emailformat))){
            alert('please enter valid email id');
		return false;
         }
      }