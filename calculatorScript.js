$( function() {
	var age;
	var dogSize;
	var textMessage;
		var dogAgeSml = [
		"15", /* 1 in small dog years */
		"24",
		"28",
		"32",
		"36",
		"40",
		"44",
		"48",
		"52",
		"56",
		"60",
		"64",
		"68",
		"72",
		"76",
		"80", /* 16 in dog years */
	];
	
	var dogAgeMed = [
		"15", /* 1 in medium dog years */
		"24",
		"28",
		"32",
		"36",
		"42",
		"47",
		"51",
		"56",
		"60",
		"65",
		"69",
		"74",
		"78",
		"83",
		"87", /* 16 in dog years */
	];
	
	var dogAgeLrg = [
		"15", /* 1 in large dog years */
		"24",
		"28",
		"32",
		"36",
		"45", 
		"50",
		"55",
		"61",
		"66",
		"72",
		"77",
		"82",
		"88",
		"93",
		"120", /* 16 in dog years */
	];
	
	$("#calculate").on( "click", function() {
		
		age = $("#value").val();

		if(dogSize == null) { //if no dog size was selected, do nothing
			textMessage = "Please select a Dog Size first.";
		}
		else if(dogSize == "Small") {//if dog size entered was small
			if (age == 1) {
				textMessage = "Your dog is " + dogAgeSml[0] + " years old.";
			}
			else if (age == 2) {
				textMessage = "Your dog is " + dogAgeSml[1] + " years old.";
			}
			else if (age == 3) {
				textMessage = "Your dog is " + dogAgeSml[2] + " years old.";
			}
			else if (age == 4) {
				textMessage = "Your dog is " + dogAgeSml[3] + " years old.";
			}
			else if (age == 5) {
				textMessage = "Your dog is " + dogAgeSml[4] + " years old.";
			}
			else if (age == 6) {
				textMessage = "Your dog is " + dogAgeSml[5] + " years old.";
			}
			else if (age == 7) {
				textMessage = "Your dog is " + dogAgeSml[6] + " years old.";
			}
			else if (age == 8) {
				textMessage = "Your dog is " + dogAgeSml[7] + " years old.";
			}
			else if (age == 9) {
				textMessage = "Your dog is " + dogAgeSml[8] + " years old.";
			}
			else if (age == 10) {
				textMessage = "Your dog is " + dogAgeSml[9] + " years old.";
			}
			else if (age == 11) {
				textMessage = "Your dog is " + dogAgeSml[10] + " years old.";
			}
			else if (age == 12) {
				textMessage = "Your dog is " + dogAgeSml[11] + " years old.";
			}
			else if (age == 13) {
				textMessage = "Your dog is " + dogAgeSml[12] + " years old.";
			}
			else if (age == 14) {
				textMessage = "Your dog is " + dogAgeSml[13] + " years old.";
			}
			else if (age == 15) {
				textMessage = "Your dog is " + dogAgeSml[14] + " years old.";
			}
			else if (age == 16) {
				textMessage = "Your dog is " + dogAgeSml[15] + " years old.";
			}
			else if (age > 16 && age <= 30) {
				textMessage = "Your dog is at least older than " + dogAgeSml[15] + " years old. Treat them with love <3 .";
			}
			else if (isNaN(age) || age == "" || age < 0 || age > 30) {
				textMessage = "Enter a valid age please.";
			}
			else if (age == 0) {
				textMessage = "Your dog is younger than " + dogAgeSml[0] + " years old. Train them with Harry Potter spells.";
			}
		}
		else if(dogSize == "Medium") { //if dog size entered was medium
			if (age == 1) {
				textMessage = "Your dog is " + dogAgeMed[0] + " years old.";
			}
			else if (age == 2) {
				textMessage = "Your dog is " + dogAgeMed[1] + " years old.";
			}
			else if (age == 3) {
				textMessage = "Your dog is " + dogAgeMed[2] + " years old.";
			}
			else if (age == 4) {
				textMessage = "Your dog is " + dogAgeMed[3] + " years old.";
			}
			else if (age == 5) {
				textMessage = "Your dog is " + dogAgeMed[4] + " years old.";
			}
			else if (age == 6) {
				textMessage = "Your dog is " + dogAgeMed[5] + " years old.";
			}
			else if (age == 7) {
				textMessage = "Your dog is " + dogAgeMed[6] + " years old.";
			}
			else if (age == 8) {
				textMessage = "Your dog is " + dogAgeMed[7] + " years old.";
			}
			else if (age == 9) {
				textMessage = "Your dog is " + dogAgeMed[8] + " years old.";
			}
			else if (age == 10) {
				textMessage = "Your dog is " + dogAgeMed[9] + " years old.";
			}
			else if (age == 11) {
				textMessage = "Your dog is " + dogAgeMed[10] + " years old.";
			}
			else if (age == 12) {
				textMessage = "Your dog is " + dogAgeMed[11] + " years old.";
			}
			else if (age == 13) {
				textMessage = "Your dog is " + dogAgeMed[12] + " years old.";
			}
			else if (age == 14) {
				textMessage = "Your dog is " + dogAgeMed[13] + " years old.";
			}
			else if (age == 15) {
				textMessage = "Your dog is " + dogAgeMed[14] + " years old.";
			}
			else if (age == 16) {
				textMessage = "Your dog is " + dogAgeMed[15] + " years old.";
			}
			else if (age > 16 && age <= 30) {
				textMessage = "Your dog is at least older than " + dogAgeMed[15] + " years old. Treat them with love <3 .";
			}
			else if (isNaN(age) || age == "" || age < 0 || age > 30) {
				textMessage = "Enter a valid age please.";
			}
			else if (age == 0) {
				textMessage = "Your dog is younger than " + dogAgeMed[0] + " years old. Train them with Harry Potter spells.";
			}
		}
		else if(dogSize == "Large") {//if dog size entered was large
			if (age == 1) {
				textMessage = "Your dog is " + dogAgeLrg[0] + " years old.";
			}
			else if (age == 2) {
				textMessage = "Your dog is " + dogAgeLrg[1] + " years old.";
			}
			else if (age == 3) {
				textMessage = "Your dog is " + dogAgeLrg[2] + " years old.";
			}
			else if (age == 4) {
				textMessage = "Your dog is " + dogAgeLrg[3] + " years old.";
			}
			else if (age == 5) {
				textMessage = "Your dog is " + dogAgeLrg[4] + " years old.";
			}
			else if (age == 6) {
				textMessage = "Your dog is " + dogAgeLrg[5] + " years old.";
			}
			else if (age == 7) {
				textMessage = "Your dog is " + dogAgeLrg[6] + " years old.";
			}
			else if (age == 8) {
				textMessage = "Your dog is " + dogAgeLrg[7] + " years old.";
			}
			else if (age == 9) {
				textMessage = "Your dog is " + dogAgeLrg[8] + " years old.";
			}
			else if (age == 10) {
				textMessage = "Your dog is " + dogAgeLrg[9] + " years old.";
			}
			else if (age == 11) {
				textMessage = "Your dog is " + dogAgeLrg[10] + " years old.";
			}
			else if (age == 12) {
				textMessage = "Your dog is " + dogAgeLrg[11] + " years old.";
			}
			else if (age == 13) {
				textMessage = "Your dog is " + dogAgeLrg[12] + " years old.";
			}
			else if (age == 14) {
				textMessage = "Your dog is " + dogAgeLrg[13] + " years old.";
			}
			else if (age == 15) {
				textMessage = "Your dog is " + dogAgeLrg[14] + " years old.";
			}
			else if (age == 16) {
				textMessage = "Your dog is " + dogAgeLrg[15] + " years old.";
			}
			else if (age > 16 && age <= 30) {
				textMessage = "Your dog is at least older than " + dogAgeLrg[15] + " years old. Treat them with love <3 .";
			}
			else if (isNaN(age) || age == "" || age < 0 || age > 30) {
				textMessage = "Enter a valid age please.";
			}
			else if (age == 0) {
				textMessage = "Your dog is younger than " + dogAgeLrg[0] + " years old. Train them with Harry Potter spells.";
			}
		}

		$("#result").html("<p>" + textMessage + "</p>");
		$("#effect").show("blind", callback);
    });
	
	function callback() {
		setTimeout(function() {
			$( "#effect:visible" ).removeAttr( "style" ).fadeOut();
		}, 1500 );
    };
	
	$( "input" ).on( "click", function() {
		dogSize = $( "input:checked" ).val();
	});
	
	$( "#effect" ).hide();

	//https://jqueryui.com/checkboxradio/#default
});