// Validate the form data
// Making a separate file to separate the logic from the UI and maintaining modularity

export const checkValidData = ( email, password) => {
  // Checking if the entered data is valid by checking their regex
 // const isFullNameValid = /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})/.test(fullName)
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

 // if(!isFullNameValid) return "Full Name is not valid";
  if(!isEmailValid) return "Email is not Valid"; 
  if(!isPasswordValid) return "Password is not Valid";
  return null;
}