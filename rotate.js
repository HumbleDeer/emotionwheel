/*jshint esversion: 6 */
(function() {
    var rangeInput = document.getElementById("range-input");
    // Print the range value to the output
    rangeInput.oninput = wheelUpdate(rangeInput.value);

    function wheelUpdate(degrees) {
        document.getElementById("range-value").innerText = degrees; //Update the visual value
        document.getElementById("wheel").style.transform = `rotate(${degrees}deg)`;
    }
    
    document.getElementById("feeling-lucky").addEventListener("click", function() {
        wheelUpdate(Math.random() * (180 - (-180)) + (-180));
    });
})();
