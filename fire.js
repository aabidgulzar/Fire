 let light = document.getElementById("light");
        let scale = document.getElementById("scale");
        let stick = document.getElementById("stick");
        let cursor = document.getElementById("cursor");
        addEventListener('pointermove', handleEvent);
        function handleEvent(event) {
            const x = event.clientX;
            const y = event.clientY;
            light.style.left = x-110 + "px";
            light.style.top = y-125 + "px";

            scale.style.left = x-110 + "px";
            scale.style.top = y-125 + "px";
            
            stick.style.left = x-110 + "px";
            stick.style.top = y-125 + "px";
        }