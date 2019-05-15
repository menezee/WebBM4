$(window, document, undefined).ready(function() {

    $('.input').blur(function() {
      var $this = $(this);
      if ($this.val())
        $this.addClass('used');
      else
        $this.removeClass('used');
    });  
});
  
  
  $('#tab1').on('click' , function(){
      $('#tab1').addClass('login-shadow');
     $('#tab2').removeClass('signup-shadow');
  });
  
  $('#tab2').on('click' , function(){
      $('#tab2').addClass('signup-shadow');
     $('#tab1').removeClass('login-shadow');  
  });



function ingreso() {
  var email = document.getElementById('email').value;
  var contra = document.getElementById('contra').value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, contra)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(error);
      // ...
    });
}

firebase
  .auth()
  .onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      console.log('user', user);
      // ...
    } else {
      console.log('algo mudou', user);
      // User is signed out.
      // ...
    }
  });
  