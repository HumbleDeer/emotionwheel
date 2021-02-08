/*jshint esversion: 6 */
(function() {
    var rangeInput = document.getElementById("range-input");
    var wheelInput;
    // Print the range value to the output
    rangeInput.oninput = wheelUpdate(rangeInput.value);

    function wheelUpdate(wheelInput) {
        document.getElementById("range-value").innerText = wheelInput; //Update the visual value
        document.getElementById("wheel").style.transform = `rotate(${wheelInput}deg)`;
    }
    document.getElementById("lucky-button").addEventListener("click", function() {
        rangeInput = Math.random() * (360 - 0) - 180;
        wheelUpdate();
    });
})();
