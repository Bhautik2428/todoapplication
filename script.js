var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] , 
    month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    window.onload = function () { 
        formListItem();
        document.querySelector(".form").style.transform = 'translateY(-100%)'
        document.querySelector(".preloader").style.transform = 'translateY(-100%)';
        var date = new Date();
        document.querySelector(".date").innerHTML = date.getDate();
        document.querySelector(".daymonthyear").innerHTML = days[date.getDay()] + "<br>" + month[date.getMonth()] + ", " + date.getFullYear();
        var firstDayOfWeek = date.getDate() - date.getDay();

        for (var i = 0; i <= 6; i++) {
            var wDate = new Date(date.getFullYear(), date.getMonth(), firstDayOfWeek++);
            if (wDate.getDate() == date.getDate())
                document.querySelector("#d" + (i + 1)).innerHTML = "<div class = 'circle'>" + wDate.getDate() + '</div>';
            else
                document.querySelector("#d" + (i + 1)).innerHTML = wDate.getDate();
        }
    }

var itemsTitles = ["Have a haircut", "Make a web app"] , 
    itemsTime = ["At 1:39 ", "At 12:45 "] , 
    itemsDesc = ["Get a new haircut to allow myself", "Make a new Web App for w3school"]

    function addItem() {
        document.querySelector(".titleInp").value = '';
        document.querySelector(".timeInp").value = '';
        document.querySelector(".descInp").value = '';
        document.querySelector(".form").style.transform = 'translateY(0)';
    }

    function submit() {
        if ((document.querySelector(".titleInp").value).trim() != '' && (document.querySelector(".timeInp").value).trim() != '' && (document.querySelector(".descInp").value).trim() != '') {
            itemsTitles.push(document.querySelector(".titleInp").value);
            itemsTime.push("At " + document.querySelector(".timeInp").value);
            itemsDesc.push(document.querySelector(".descInp").value);
            document.querySelector(".form").style.transform = 'translateY(-100%)';
            document.querySelector(".todolist").innerHTML = "";
            formListItem();
        }
    }

    function formListItem() {
        for (var i = 0; i < itemsTitles.length; i++) {
            document.querySelector(".todolist").innerHTML += "<div class='li1'><div class='title'>" + itemsTitles[i] + "</div><div class='time'>" + itemsTime[i] + "</div><br><marquee class='desc'>" + itemsDesc[i] + "</marquee><img onclick='deleteItem(" + i + ")' src=\"https://static.thenounproject.com/png/236306-200.png\" class=\"del\"><img class='tick' src='delivery-completed-unscreen.gif' onclick='strike(" + i + ")' style='position: relative;height: 23px;bottom: 60px;filter:invert(1);left:0;'></div><br>";
        }
    }

    function deleteItem(c) {
        itemsTitles.splice(c, 1);
        itemsTime.splice(c, 1);
        itemsDesc.splice(c, 1);
        document.querySelector(".todolist").innerHTML = '';
        formListItem();
    }

    function strike(c) {
        
        if (itemsTitles[c].includes("<strike>")) {
            itemsTitles[c] = itemsTitles[c].replace("<strike>", "");
            itemsTitles[c] = itemsTitles[c].replace("</strike>", "");
        }

        else {
            itemsTitles[c] = "<strike>" + itemsTitles[c] + "</strike>";
        }

        document.querySelector(".todolist").innerHTML = '';
        formListItem();
    }

    function closeForm() {
        document.querySelector(".form").style.transform = 'translateY(-100%)';
    }