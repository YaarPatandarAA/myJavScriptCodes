        function displayOutput() {
            var input = document.getElementById("userInput").value;
            if (input.length === 0) {
                alert("Please enter a valid input");
                return;
            }
           document.getElementById("result").innerHTML = "You have entered " + input;
        }