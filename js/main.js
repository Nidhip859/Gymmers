

//navbar mobile here
function myFunction() {
	var x = document.getElementById("myTopnav");
	var className = x.className;
	x.classList.toggle("responsive");

}

// tooltip in footer
$(() => {
	$('#brand').hover(() => {
		console.log('assigned');
		$('#tool').css('display', 'inline');
	}, () => {
		$('#tool').css('display', 'none');
	})
})