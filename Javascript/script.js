let counter = 0; 

        function change(x){
            counter = counter + x;

            slider(counter);
        }

        slider(counter);

        function slider(num){
            let show = document.getElementsByClassName("slides");

            if(num == show.length){
                counter = 0;
                num = 0;
            }
            if(num < 0){
                counter = show.length -1;
                num = show.length -1;
            }

            for(var i of show){
                i.style.display = "none";
            }

            show[num].style.display = "block";

        }