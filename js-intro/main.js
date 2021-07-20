//console.log("Connected");
//const firstName = "AdazaDGreat";
//const lastName = "Call me anytime";
const favoriteFood = "Roti";
//let favoriteNumber = 14;
//const likeToPlayFootball = true;

//favoriteNumber += 3;





 const whatFoodsDoILike = () => {
    if (favoriteFood === "hot dogs" || favoriteFood.toUpperCase() === "SUSHI") {
        console.log("You like hot dogs!");
     } else {
         console.log("You like something else!");
 }
 }

 whatFoodsDoILike();

 const myFunction = (string) => {
     console.log(`Your aregument was: ${string}`)
 }

 myFunction ("I am GREAT!");