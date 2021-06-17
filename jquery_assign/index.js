$(document).ready(function () {
  //   $("button").click(function () {
  //     $(".signup__header").hide();
  //   });
  console.log("Watashi ga kita");
  // For header
  $(".signup").append('<div class="signup__header"><h1>Sign In</h1></div>');

  //   For Form for email
  $(".signup").append('<div class="form__control"></div>');
  $(".form__control").append('<label class="form__label"></label>');
  $(".form__label").text("Enter Email");
  $(".form__control").append(
    '<input type="text" class="form__input" placeholder="Enter Email"></input>'
  );

  //   For form for password
  $(".signup").append('<div class="form__control"></div>');
  $(".form__control:eq(1)").append('<label class="form__label"></label>');
  $(".form__label:eq(1)").text("Enter Password");
  $(".form__control:eq(1)").append(
    '<input type="text" class="form__input" placeholder="Enter Password"></input>'
  );

  //   For Checkbox
  $(".signup").append('<div class="form__checkbox"></div>');
  $(".form__checkbox").append('<input type="checkbox"  />');
  $(".form__checkbox").append('<label for=""></label>');
  $(".form__checkbox label").text("Remember Me");

  //   For Button
  $(".signup").append('<button class="btn"></button>');
  $("button").text("Submit");

  //   For forgot password
  $(".signup").append("<small></small>");
  $("small").text("Forgot ");
  $("small").append("<span>Password?</span>");
});
