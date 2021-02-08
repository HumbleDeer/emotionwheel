/*jshint esversion: 6 */
(function() {
    var rangeInput = document.getElementById("range-input");
    // Print the range value to the output

    rangeInput.addEventListener("input", function(){
        wheelUpdate(rangeInpout.value);
    });

    function wheelUpdate(wheelInput) {
        document.getElementById("range-value").innerText = wheelInput; //Update the visual value
        document.getElementById("wheel").style.transform = `rotate(${wheelInput}deg)`;
    }
    document.getElementById("lucky-button").addEventListener("click", function() {
        wheelUpdate(Math.random() * (360 - 0) - 180;);
    });
})();
