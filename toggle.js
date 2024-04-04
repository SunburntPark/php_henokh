document.addEventListener("DOMContentLoaded", function() {
    //variables

    var words = ["Writting", "Public Speaking", "Self Improvement", "Money"],
        part,
        i = 0,
        offset = 0,
        len = words.length,
        loop = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 80;

    const CWAutoTyping = document.querySelector(".auto-typing");

    function typingText() {
        setInterval( function() {
            if(loop) {
                if(offset >= words[i].length) {
                    ++skip_count;
                    if(skip_count == skip_delay) {
                        loop = false;
                        skip_count = 0;
                    }
                }
            } else {
                if(offset == 0) {
                    loop = true;
                    i++;
                    offset = 0;
                    if(i >= len) {
                        i = 0;
                    }
                }
            }
            part = words[i].substring(0, offset);
            if(skip_count == 0) {
                if(loop) {
                    offset++;
                } else {
                    offset--;
                }
            }
            CWAutoTyping.textContent = part;
        }, speed);
    }
});