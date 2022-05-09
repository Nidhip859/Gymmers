var data = {
	time1: "02:30 PM - 03:00 PM",
	time2: "10:00 AM - 10:30 AM",
	time3: "01:30 PM - 02:00 PM",
	time4: "01:45 AM - 02:15 PM",
	time5: "03:50 PM - 04:25 PM",
	time6: "02:15 PM - 02:45 PM",
	time7: "03:15 PM - 03:45 PM",
	time8: "10:30 AM - 11:15 AM",
	time9: "04:40 PM - 05:35 PM",
	instructor1: "Terrence",
	instructor2: "Mark",
	instructor3: "Hans",
	instructor4: "Dumi",
	instructor5: "Micol",
	instructor6: "Stella",
	instructor7: "Yaakov",
	instructor8: "Christina",
	instructor9: "Isaac",
	content1: "Zumba - Virtual: Dance Moves ",
	content2: "Long run - Virtual: Running ",
	content3: "Gym Fitness - Barbell Glute Bridge ",
	content4: "Slow Flow  - Virtual: Meditation ",
	content5: "Heavy Exercise - Hips, Back, Shoulders ",
	content6: "Squats - Virtual: Deadlift",
	content7: "Best-Exercise - Barbell Bench Press ",
	content8: "Vinyasa - Trap Bar Deadlift",
	content9: "Free Class - Front Squat ",
}

function getDate() {

	var date = document.getElementById('datepicker').value;
	var dateLog = date.split("/");
	currentDate = dateLog[1];

	if (date != '' && 32 > currentDate) {
		document.getElementById('bydatesearch').style.display = '';

		if (currentDate == "01" || currentDate == "08" || currentDate == "15" || currentDate == "22") {
			document.getElementById("time1").innerHTML = data.time1;
			document.getElementById('instructor1').innerHTML = data.instructor1;
			document.getElementById("content1").innerHTML = data.content1;
			document.getElementById("time2").innerHTML = data.time2;
			document.getElementById('instructor2').innerHTML = data.instructor6;
			document.getElementById("content2").innerHTML = data.content4;
			document.getElementById("time3").innerHTML = data.time3;
			document.getElementById('instructor3').innerHTML = data.instructor7;
			document.getElementById("content3").innerHTML = data.content2;
		} else if (currentDate == "02" || currentDate == "09" || currentDate == "16" || currentDate == "23") {
			document.getElementById("time1").innerHTML = data.time2;
			document.getElementById('instructor1').innerHTML = data.instructor2;
			document.getElementById("content1").innerHTML = data.content3;
			document.getElementById("time2").innerHTML = data.time3;
			document.getElementById('instructor2').innerHTML = data.instructor3;
			document.getElementById("content2").innerHTML = data.content8;
			document.getElementById("time3").innerHTML = data.time3;
			document.getElementById('instructor3').innerHTML = data.instructor7;
			document.getElementById("content3").innerHTML = data.content2;
		} else if (currentDate == "03" || currentDate == "10" || currentDate == "17" || currentDate == "24") {
			document.getElementById("time1").innerHTML = data.time5;
			document.getElementById('instructor1').innerHTML = data.instructor4;
			document.getElementById("content1").innerHTML = data.content2;
			document.getElementById("time2").innerHTML = data.time6;
			document.getElementById('instructor2').innerHTML = data.instructor5;
			document.getElementById("content2").innerHTML = data.content3;
			document.getElementById("time3").innerHTML = data.time7;
			document.getElementById('instructor3').innerHTML = data.instructor9;
			document.getElementById("content3").innerHTML = data.content1;
		} else if (currentDate == "04" || currentDate == "11" || currentDate == "18" || currentDate == "25") {
			document.getElementById("time1").innerHTML = data.time4;
			document.getElementById('instructor1').innerHTML = data.instructor1;
			document.getElementById("content1").innerHTML = data.content1;
			document.getElementById("time2").innerHTML = data.time5;
			document.getElementById('instructor2').innerHTML = data.instructor6;
			document.getElementById("content2").innerHTML = data.content4;
			document.getElementById("time3").innerHTML = data.time3;
			document.getElementById('instructor3').innerHTML = data.instructor7;
			document.getElementById("content3").innerHTML = data.content2;
		} else if (currentDate == "05" || currentDate == "12" || currentDate == "19" || currentDate == "26") {
			document.getElementById("time1").innerHTML = data.time2;
			document.getElementById('instructor1').innerHTML = data.instructor2;
			document.getElementById("content1").innerHTML = data.content3;
			document.getElementById("time2").innerHTML = data.time3;
			document.getElementById('instructor2').innerHTML = data.instructor2;
			document.getElementById("content2").innerHTML = data.content4;
			document.getElementById("time3").innerHTML = data.time4;
			document.getElementById('instructor3').innerHTML = data.instructor7;
			document.getElementById("content3").innerHTML = data.content7;
		} else if (currentDate == "06" || currentDate == "13" || currentDate == "20" || currentDate == "27") {
			document.getElementById("time1").innerHTML = data.time1;
			document.getElementById('instructor1').innerHTML = data.instructor1;
			document.getElementById("content1").innerHTML = data.content9;
			document.getElementById("time2").innerHTML = data.time2;
			document.getElementById('instructor2').innerHTML = data.instructor3;
			document.getElementById("content2").innerHTML = data.content3;
			document.getElementById("time3").innerHTML = data.time3;
			document.getElementById('instructor3').innerHTML = data.instructor7;
			document.getElementById("content3").innerHTML = data.content2;
		} else if (currentDate == "07" || currentDate == "14" || currentDate == "21" || currentDate == "28") {
			document.getElementById("time1").innerHTML = data.time6;
			document.getElementById('instructor1').innerHTML = data.instructor2;
			document.getElementById("content1").innerHTML = data.content5;
			document.getElementById("time2").innerHTML = data.time7;
			document.getElementById('instructor2').innerHTML = data.instructor5;
			document.getElementById("content2").innerHTML = data.content4;
			document.getElementById("time3").innerHTML = data.time8;
			document.getElementById('instructor3').innerHTML = data.instructor6;
			document.getElementById("content3").innerHTML = data.content3;
		} else if (currentDate == "29" || currentDate == "30") {
			document.getElementById("time1").innerHTML = data.time6;
			document.getElementById('instructor1').innerHTML = data.instructor2;
			document.getElementById("content1").innerHTML = data.content5;
			document.getElementById("time2").innerHTML = data.time7;
			document.getElementById('instructor2').innerHTML = data.instructor5;
			document.getElementById("content2").innerHTML = data.content4;
			document.getElementById("time3").innerHTML = data.time3;
			document.getElementById('instructor3').innerHTML = data.instructor7;
			document.getElementById("content3").innerHTML = data.content2;
		} else if (currentDate == "31") {
			document.getElementById("time1").innerHTML = data.time6;
			document.getElementById('instructor1').innerHTML = data.instructor2;
			document.getElementById("content1").innerHTML = data.content5;
			document.getElementById("time2").innerHTML = data.time7;
			document.getElementById('instructor2').innerHTML = data.instructor5;
			document.getElementById("content2").innerHTML = data.content4;
			document.getElementById("time3").innerHTML = data.time8;
			document.getElementById('instructor3').innerHTML = data.instructor6;
			document.getElementById("content3").innerHTML = data.content3;
		}

	} else {
		alert("Please enter a valid Date");
	}
}

//Switch case to find day schedule with date 
var checkDiet = function () {
	document.getElementById('bydaysearch').style.display = '';
	let day = document.getElementById("day").value;
	day = parseInt(day);
	switch (day) {
		case 0:
			day = "Sunday";
			breakfast = "Tuna,White Bean & Dill Salad";
			lunch = "Toaster Oven Tostada";
			dinner = "Chicken Cauliflower Fried Rice";
			calory = "1198";
			break;

		case 1:
			day = "Monday";
			breakfast = "Avocado Egg Toast";
			lunch = "Seared Salmon with Green Peppercorn Sauce";
			dinner = "Loaded Black Bean Nacho Soup";
			calory = "1224";
			break;

		case 2:
			day = "Tuesday";
			breakfast = "nonfat plain Greek yogurt with slivered almonds";
			lunch = "Spinach & Strawberry Meal-Prep Salad";
			dinner = "Curried Sweet Potato & Peanut Soup";
			calory = "1212";
			break;

		case 3:
			day = "Wednesday";
			breakfast = "bran cereal with skim milk";
			lunch = "Spinach & Strawberry Meal-Prep Salad";
			dinner = "Charred Shrimp & Pesto Buddha Bowls";
			calory = "1225";
			break;

		case 4:
			day = "Thursday";
			breakfast = "skim milk & blueberries";
			lunch = "steamed brocolli";
			dinner = "Cod with Tomato Cream Sauce";
			calory = "1223";
			break;

		case 5:
			day = "Friday";
			breakfast = "Rolled Oats cooked in milk";
			lunch = "Seared Salmon with Green Peppercorn Sauce";
			dinner = "Loaded Black Bean Nacho Soup";
			calory = "600";
			break;

		case 6:
			day = "Saturday";
			breakfast = "Avocado Egg Toast";
			lunch = "whole wheat bread toasted";
			dinner = "Skillet Lemon Chicken & Potatoes with Kale";
			calory = "1220";
			break;

		default:
			day = "";
			alert("Please enter a valid day");
			break;
	}

	// validation with data concat data
	if (day != "") {
		document.getElementById("dayName").innerHTML = "It is " + day;
		document.getElementById("breakfast").innerHTML = "Breakfast for today is " + breakfast;
		document.getElementById("lunch").innerHTML = "Lunch for today is " + lunch;
		document.getElementById("dinner").innerHTML = "Dinner for today is " + dinner;

	}


}