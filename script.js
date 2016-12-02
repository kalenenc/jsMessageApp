//ask if they want to save, retrieve, or eixt
var array = [];
var counter = 0;
while (true) {
	var answer = prompt("Would you like to save a message, retrieve a message, or exit? Type either 'save', 'retrieve', or 'exit'");

	if (answer.toLowerCase() === "save") {
		var savedMessage = prompt("Type in the message you would like to save");
		array.push(savedMessage);
		alert("Cool, your message was saved with a Message ID of " + counter);
		counter++;
	}

	else if (answer.toLowerCase() === "retrieve") {
		var retrievedMessage = prompt("Please type in the Message ID of the message you want to retrieve");
		
		
		//if the array doesn't contain an index of retrievedMessage
		if (array[+retrievedMessage] === undefined || array[+retrievedMessage] === null) {
			alert("Sorry, this message ID doesn't exist :(");
		}

		else {
			alert("Your message is the following: " + array[+retrievedMessage]);
		}
	}

	else if (answer.toLowerCase() === "exit") {
		alert("Bye!");
		break;
	}

	else {
		alert("Please enter either save, retrieve, or exit");
	}

}