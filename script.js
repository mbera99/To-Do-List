var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// This is for existing items.
// var list = document.getElementsByTagName("li");

// Input list item length.

function inputLength() {
	return input.value.length;
}

// Delete button function.

function addDelButton(del) {
	var buttonElem = del.appendChild(document.createElement("button"));
	buttonElem.innerHTML = "Delete";
	buttonElem.onclick = function() {
		this.parentElement.remove();
	}
}

function taskDone(done){
	done.target.classList.toggle("done");
}

// Creating new list items and adding .done class and adding delete button function.

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", taskDone);
	addDelButton(li);
	ul.appendChild(li);
	input.value = "";
}

// Press Click to create item function.

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// Press Enter to create item function.

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Adding Delete button for already existing items and adding .done class. 

// for(var i=0; i<list.length; i++)
// {
//     list[i].addEventListener("click", function(done){
//     	done.target.classList.toggle("done");
//     });
//     addDelButton(list[i]);
// }

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);