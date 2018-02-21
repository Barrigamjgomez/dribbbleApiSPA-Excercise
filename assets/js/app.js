 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCkeqW1Dx8h8Ov98dey7e0sa93-p_4P8_E",
    authDomain: "trivia-8494a.firebaseapp.com",
    databaseURL: "https://trivia-8494a.firebaseio.com",
    projectId: "trivia-8494a",
    storageBucket: "trivia-8494a.appspot.com",
    messagingSenderId: "343758776919"
  };

firebase.initializeApp(config);

var provider = new firebase.auth.GoogleAuthProvider();

 function user(){
 firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  console.log(user.displayName);
  $('.user_name').append('<h3> Hi ' + user.displayName + '!</h3>');
  $('#multiple_option').removeClass('hidden');
  $('#google-sign').addClass('hidden');
  $('#other_option').removeClass('hidden');
  $('#select_title').removeClass('hidden')
  
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
}



//Get Username
const dribbble = 'RypeArts';
//Amoung of shots to display
 limit = 18;
const token = '1c73ffb7859f2c1c37450789dce2369af5caa9e18c3df1fa30485cfad79081d8';
//Call Dribble API
/*$.ajax({
     url: 'https://api.dribbble.com/v1/users/' + dribbble + '/shots?access_token=' + token,
    dataType: 'jsonp',
    type: 'GET',
    data: { access_token: token, count: limit },
    // si tiene exito la solicitud pediremos que haga lo siguiente 
    success: function (data) {
       
            console.log(data);
            for (x in data.data) {
                $('ul').append('<li><img src="' + data.data[x].images.normal +  '"></li>');
                $('div').append('<p>' + data.data[x].html_url + '></p>');
                // $('ul').append("<li class='port'>" + "<img class='img-responsive' src='" + data.data[x].images.normal + "'><div class='overlay'><div class='text'>" + title[0] + "</div></div><div class='icon-port hidden-xs hidden-sm'>" +
                //     "<span class='view-icon'>" +
                //     "<i class='fa fa-eye' aria-hidden='true'></i>" + " " +
                //     views_count +
                //     "</span>" +
                //     "<span class='coment-icon'>" +
                //     "<i class='fa fa-comment' aria-hidden='true'></i>" + " " +
                //     comments_count +
                //     "</span>" +
                //     "<span class='like-icon'>" +
                //     "<i class='fa fa-heart' aria-hidden='true'></i>" + " " +
                //     likes_count +
                //     "</span></div></li>");




            }
        
    },
    error: function (data) {
        console.log(data);
    }
});*/

$('.datos').show();

