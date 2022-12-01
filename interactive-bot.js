function display()
        {
            document.getElementById("para").innerHTML = "Because No, one can intract with me.";
            document.getElementById("para1").innerHTML = "Will you we my freind??";
            document.getElementById("yes").innerHTML = "YES";
            document.getElementById("not").innerHTML = "NO";

        }
        function interested()
        {
            let username=prompt("enter your name:");
            let place=prompt("where are you form " + username +" :" );
            document.getElementById("para1").innerHTML = "Really " + username + " you are very great person.";
            document.getElementById("para").innerHTML = "";
            document.getElementById("yes").innerHTML = "Heyy "+place+" is also my favoriate place buddy.";
            document.getElementById("not").innerHTML = " ";
            alert('Thanks for intract with me '+ username + '.');
            document.getElementById("img1").src="happy1.jpg";
        }
        function notinrested()
        {
            alert('Why you are not interested to intract with me buddy.');
            document.getElementById("para").innerHTML = " ";
            document.getElementById("para1").innerHTML = "Sorry for waste our time.";
            document.getElementById("yes").innerHTML = " ";
            document.getElementById("not").innerHTML = " ";

        }
