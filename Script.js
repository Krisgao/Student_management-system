//get json data and save it to localstorage

if(localStorage.info){
    
    var updated = localStorage.getItem("info");
    var change = JSON.parse(updated);
}else{
$.ajax({
    type: "GET",
    url: "jqueryassignmentdummydata.json", // Using our resources.json file to serve results
    success: function (result) {
        //   console.log(result);
        localStorage.setItem("info", JSON.stringify(result));
    }
});}

//alert(updated);
// if(localStorage.info){
// $(document).ready(function () {
//     $("#click").click(function () {
//         var displayResources = $("#click");
//         displayResources.text("Loading data from JSON source...");
//                 var jsonstr = localStorage.getItem("info");
//                 var jsonfile = JSON.parse(jsonstr);
//                 var output =
//                     "<table><tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Options</th></tr>";
//                 for (var i = 0; i < 10; i++) {
//                     output +=
//                         "<tr><td>" +
//                         (i + 1) +
//                         "</td><td>" +
//                         jsonfile[i].firstname +
//                         "</td><td>" +
//                         jsonfile[i].lastname +
//                         "</td><td>" +
//                         jsonfile[i].email +
//                         "</td><td>" +
//                         jsonfile[i].location +
//                         "</td><td>" +
//                         jsonfile[i].phone +
//                         "</td><td>" +
//                         jsonfile[i].address.communication +
//                         "</td><td>" +
//                         jsonfile[i].address.permanent +
//                         "</td><td><input id = 'edit' type = 'button' value = 'Edit' onclick = 'edit(this)' /><input id = 'delete' type = 'button' value = 'Delete' onclick = 'del()' /></td></tr>";
//                 }
//                 output += "</table>";
//                 displayResources.html(output);
//                 $("table").addClass("table");
            
        
//     });
// });
// }else{
//     $.ajax({
//         type: "GET",
//         url: "jqueryassignmentdummydata.json", // Using our resources.json file to serve results
//         success: function (result) {
//             //   console.log(result);
//             localStorage.setItem("info", JSON.stringify(result));
//         }
//     });
// }

//show students base on numbers
$(document).ready(function () {
    $("#select").change(function () {
        document.getElementById("ShowButton").style.display = "inline";
        document.getElementById("addButton").style.display = "inline";
        document.getElementById("thisTable").style.visibility = "visible";
        var jsonstr = localStorage.getItem("info");
        var jsonfile = JSON.parse(jsonstr);
        if ($("#select").val() == "20") {
            var msg = "<table id = 'theRecords'>";
            jQuery("#thisTable").html(msg);
            msg += "<tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Options</th></tr>"
            for (var j = 0; j < 20; j++) {
                msg +=
                    "<tr><td>" +
                    (j + 1) +
                    "</td><td>" +
                    jsonfile[j].firstname +
                    "</td><td>" +
                    jsonfile[j].lastname +
                    "</td><td>" +
                    jsonfile[j].email +
                    "</td><td>" +
                    jsonfile[j].location +
                    "</td><td>" +
                    jsonfile[j].phone +
                    "</td><td>" +
                    jsonfile[j].address.communication +
                    "</td><td>" +
                    jsonfile[j].address.permanent +
                    "</td><td><input id = 'edit' type = 'button' value = 'Edit' onclick = 'edit(this)' /><input id = 'delete' type = 'button' value = 'Delete' onclick = 'del(this)' /></td></tr>";
            }
            msg += "</table>";
            jQuery('#thisTable').html(msg);

        }else if ($("#select").val() == "50") {
            var msg = "<table id = 'theRecords'>";
            jQuery("#thisTable").html(msg);
            msg += "<tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Options</th></tr>"
            for (var j = 0; j < 50; j++) {
                msg +=
                    "<tr><td>" +
                    (j + 1) +
                    "</td><td>" +
                    jsonfile[j].firstname +
                    "</td><td>" +
                    jsonfile[j].lastname +
                    "</td><td>" +
                    jsonfile[j].email +
                    "</td><td>" +
                    jsonfile[j].location +
                    "</td><td>" +
                    jsonfile[j].phone +
                    "</td><td>" +
                    jsonfile[j].address.communication +
                    "</td><td>" +
                    jsonfile[j].address.permanent +
                    "</td><td><input id = 'edit' type = 'button' value = 'Edit' onclick = 'edit(this)' /><input id = 'delete' type = 'button' value = 'Delete' onclick = 'del(this)' /></td></tr>";
            }
            msg += "</table>";
            jQuery('#thisTable').html(msg);

        } else if ($("#select").val() == "100") {
            var msg = "<table id = 'theRecords'>";
            jQuery("#thisTable").html(msg);
            msg += "<tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Options</th></tr>"
            for (var j = 0; j < 100; j++) {
                msg +=
                    "<tr><td>" +
                    (j + 1) +
                    "</td><td>" +
                    jsonfile[j].firstname +
                    "</td><td>" +
                    jsonfile[j].lastname +
                    "</td><td>" +
                    jsonfile[j].email +
                    "</td><td>" +
                    jsonfile[j].location +
                    "</td><td>" +
                    jsonfile[j].phone +
                    "</td><td>" +
                    jsonfile[j].address.communication +
                    "</td><td>" +
                    jsonfile[j].address.permanent +
                    "</td><td><input id = 'edit' type = 'button' value = 'Edit' onclick = 'edit(this)' /><input id = 'delete' type = 'button' value = 'Delete' onclick = 'del(this)' /></td></tr>";
            }
            msg += "</table>";
            jQuery('#thisTable').html(msg);

        } else if ($("#select").val() == "10") {
            var msg = "<table id = 'theRecords'>";
            jQuery("#thisTable").html(msg);
            msg += "<tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Options</th></tr>"
            for (var j = 0; j < 10; j++) {
                msg +=
                    "<tr><td>" +
                    (j + 1) +
                    "</td><td>" +
                    jsonfile[j].firstname +
                    "</td><td>" +
                    jsonfile[j].lastname +
                    "</td><td>" +
                    jsonfile[j].email +
                    "</td><td>" +
                    jsonfile[j].location +
                    "</td><td>" +
                    jsonfile[j].phone +
                    "</td><td>" +
                    jsonfile[j].address.communication +
                    "</td><td>" +
                    jsonfile[j].address.permanent +
                    "</td><td><input id = 'edit' type = 'button' value = 'Edit' onclick = 'edit(this)' /><input id = 'delete' type = 'button' value = 'Delete' onclick = 'del(this)' /></td></tr>";
            }
            msg += "</table>";
            jQuery('#thisTable').html(msg);

        }else if ($("#select").val() == "Select number") {
            document.getElementById("ShowButton").style.display = "none";
            var msg = "<table id = 'theRecords'><tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Options</th></tr></table>"
                ;
            jQuery("#thisTable").html(msg);
        }else if($("#select").val() == "All"){
            var msg = "<table id = 'theRecords'>";
            jQuery("#thisTable").html(msg);
            msg += "<tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Options</th></tr>"
            for (var j = 0; j < jsonfile.length; j++) {
                msg +=
                    "<tr><td>" +
                    (j + 1) +
                    "</td><td>" +
                    jsonfile[j].firstname +
                    "</td><td>" +
                    jsonfile[j].lastname +
                    "</td><td>" +
                    jsonfile[j].email +
                    "</td><td>" +
                    jsonfile[j].location +
                    "</td><td>" +
                    jsonfile[j].phone +
                    "</td><td>" +
                    jsonfile[j].address.communication +
                    "</td><td>" +
                    jsonfile[j].address.permanent +
                    "</td><td><input id = 'edit' type = 'button' value = 'Edit' onclick = 'edit(this)' /><input id = 'delete' type = 'button' value = 'Delete' onclick = 'del(this)' /></td></tr>";
            }
            msg += "</table>";
            jQuery('#thisTable').html(msg);

        }
    });
});
var isClick = false;

//show more detail of students
function details() {
    isClick = true;
    // document.getElementById("showDetails").value = "Showed";
    // document.getElementById("showDetails").type = "hidden";
    var jsonstr = localStorage.getItem("info");
    var result = JSON.parse(jsonstr);
    if ($("#select").val() == "20") {
        var msg1 = "<table id = 'theRecords'>";
        jQuery("#thisTable").html(msg1);
        msg1 += "<tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Marks(English)</th><th>Marks(Science)</th><th>Marks(Computers)</th><th>Marks(Hardware)</th><th>Options</th></tr>"
        for (var j = 0; j < 20; j++) {
            msg1 +=
                "<tr><td>" +
                (j + 1) +
                "</td><td>" +
                result[j].firstname +
                "</td><td>" +
                result[j].lastname +
                "</td><td>" +
                result[j].email +
                "</td><td>" +
                result[j].location +
                "</td><td>" +
                result[j].phone +
                "</td><td>" +
                result[j].address.communication +
                "</td><td>" +
                result[j].address.permanent +
                "</td><td>" +
                result[j].marks.english + 
                "</td><td>" +
                result[j].marks.science +
                "</td><td>" +
                result[j].marks.computers +
                "</td><td>" +
                result[j].marks.hardware +
                "</td><td><input id = 'edit' type = 'button' value = 'Edit' onclick = 'edit(this)' /><input id = 'delete' type = 'button' value = 'Delete' onclick = 'del(this)' /></td></tr>";
        }
        msg1 += "</table>";
        jQuery('#thisTable').html(msg1);
    }else if ($("#select").val() == "50") {
        var msg1 = "<table id = 'theRecords'>";
        jQuery("#thisTable").html(msg1);
        msg1 += "<tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Marks(English)</th><th>Marks(Science)</th><th>Marks(Computers)</th><th>Marks(Hardware)</th><th>Options</th></tr>"
        for (var j = 0; j < 50; j++) {
            msg1 +=
                "<tr><td>" +
                (j + 1) +
                "</td><td>" +
                result[j].firstname +
                "</td><td>" +
                result[j].lastname +
                "</td><td>" +
                result[j].email +
                "</td><td>" +
                result[j].location +
                "</td><td>" +
                result[j].phone +
                "</td><td>" +
                result[j].address.communication +
                "</td><td>" +
                result[j].address.permanent +
                "</td><td>" +
                result[j].marks.english + 
                "</td><td>" +
                result[j].marks.science +
                "</td><td>" +
                result[j].marks.computers + 
                "</td><td>" +
                result[j].marks.hardware +
                "</td><td><input id = 'edit' type = 'button' value = 'Edit' onclick = 'edit(this)' /><input id = 'delete' type = 'button' value = 'Delete' onclick = 'del(this)' /></td></tr>";
        }
        msg1 += "</table>";
        jQuery('#thisTable').html(msg1);

    } else if ($("#select").val() == "100") {
        var msg1 = "<table id = 'theRecords'>";
        jQuery("#thisTable").html(msg1);
        msg1 += "<tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Marks(English)</th><th>Marks(Science)</th><th>Marks(Computers)</th><th>Marks(Hardware)</th><th>Options</th></tr>"
        for (var j = 0; j < 100; j++) {
            msg1 +=
                "<tr><td>" +
                (j + 1) +
                "</td><td>" +
                result[j].firstname +
                "</td><td>" +
                result[j].lastname +
                "</td><td>" +
                result[j].email +
                "</td><td>" +
                result[j].location +
                "</td><td>" +
                result[j].phone +
                "</td><td>" +
                result[j].address.communication +
                "</td><td>" +
                result[j].address.permanent +
                "</td><td>" +
                result[j].marks.english +
                "</td><td>" +
                result[j].marks.science + 
                "</td><td>" +
                result[j].marks.computers +
                "</td><td>" +
                result[j].marks.hardware +
                "</td><td><input id = 'edit' type = 'button' value = 'Edit' onclick = 'edit(this)' /><input id = 'delete' type = 'button' value = 'Delete' onclick = 'del(this)' /></td></tr>";
        }
        msg1 += "</table>";
        jQuery('#thisTable').html(msg1);
    }else if ($("#select").val() == "10") {
        var msg1 = "<table id = 'theRecords'>";
        jQuery("#thisTable").html(msg1);
        msg1 += "<tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Marks(English)</th><th>Marks(Science)</th><th>Marks(Computers)</th><th>Marks(Hardware)</th><th>Options</th></tr>"
        for (var j = 0; j < 10; j++) {
            msg1 +=
                "<tr><td>" +
                (j + 1) +
                "</td><td>" +
                result[j].firstname +
                "</td><td>" +
                result[j].lastname +
                "</td><td>" +
                result[j].email +
                "</td><td>" +
                result[j].location +
                "</td><td>" +
                result[j].phone +
                "</td><td>" +
                result[j].address.communication +
                "</td><td>" +
                result[j].address.permanent +
                "</td><td>" +
                result[j].marks.english +
                "</td><td>" +
                result[j].marks.science + 
                "</td><td>" +
                result[j].marks.computers +
                "</td><td>" +
                result[j].marks.hardware +
                "</td><td><input id = 'edit' type = 'button' value = 'Edit' onclick = 'edit(this)' /><input id = 'delete' type = 'button' value = 'Delete' onclick = 'del(this)' /></td></tr>";
        }
        msg1 += "</table>";
        jQuery('#thisTable').html(msg1);

    } else if ($("#select").val() == "Select number") {
        document.getElementById("ShowButton").style.display = "none";
        var msg1 = "<table id = 'theRecords'><tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Options</th></tr><table>"
            ;
        jQuery("#thisTable").html(msg1);
    }else if($("#select").val() == "All"){
        var msg1 = "<table id = 'theRecords'>";
        jQuery("#thisTable").html(msg1);
        msg1 += "<tr><th>Index</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Location</th><th>Phone</th><th>Address(communication)</th><th>Address(permanent)</th><th>Marks(English)</th><th>Marks(Science)</th><th>Marks(Computers)</th><th>Marks(Hardware)</th><th>Options</th></tr>"
        for (var j = 0; j < result.length; j++) {
            msg1 +=
                "<tr><td>" +
                (j + 1) +
                "</td><td>" +
                result[j].firstname +
                "</td><td>" +
                result[j].lastname +
                "</td><td>" +
                result[j].email +
                "</td><td>" +
                result[j].location +
                "</td><td>" +
                result[j].phone +
                "</td><td>" +
                result[j].address.communication +
                "</td><td>" +
                result[j].address.permanent +
                "</td><td>" +
                result[j].marks.english +
                "</td><td>" +
                result[j].marks.science + 
                "</td><td>" +
                result[j].marks.computers +
                "</td><td>" +
                result[j].marks.hardware +
                "</td><td><input id = 'edit' type = 'button' value = 'Edit' onclick = 'edit(this)' /><input id = 'delete' type = 'button' value = 'Delete' onclick = 'del(this)' /></td></tr>";
        }
        msg1 += "</table>";
        jQuery('#thisTable').html(msg1);
    }
}

//Edit a student info
function edit(a) {
    var trobj = a.parentNode.parentNode;
    var tdobj = trobj.getElementsByTagName("td");
    if(isClick == false){
    document.getElementById("index").value = tdobj[0].innerHTML;
    document.getElementById("firstname").value = tdobj[1].innerHTML;
    document.getElementById("lastname").value = tdobj[2].innerHTML;
    document.getElementById("email").value = tdobj[3].innerHTML;
    document.getElementById("location").value = tdobj[4].innerHTML;
    document.getElementById("phone").value = tdobj[5].innerHTML;
    document.getElementById("address1C").value = tdobj[6].innerHTML;
    document.getElementById("address2P").value = tdobj[7].innerHTML;
    document.getElementById("editModal").style.visibility = "visible";
    $("#backGround").show();
    var popUp = document.getElementById("editModal");
    popUp.style.top = "200px";
    popUp.style.left = "600px";
    popUp.style.width = "300px";
    popUp.style.height = "500px";
}else{
    document.getElementById("index1").value = tdobj[0].innerHTML;
    document.getElementById("firstname1").value = tdobj[1].innerHTML;
    document.getElementById("lastname1").value = tdobj[2].innerHTML;
    document.getElementById("email1").value = tdobj[3].innerHTML;
    document.getElementById("location1").value = tdobj[4].innerHTML;
    document.getElementById("phone1").value = tdobj[5].innerHTML;
    document.getElementById("address1C1").value = tdobj[6].innerHTML;
    document.getElementById("address2P1").value = tdobj[7].innerHTML;
    document.getElementById("thismarks").value = tdobj[8].innerHTML;
    document.getElementById("thismarks1").value = tdobj[9].innerHTML;
    document.getElementById("thismarks2").value = tdobj[10].innerHTML;
    document.getElementById("thismarks3").value = tdobj[11].innerHTML;
    document.getElementById("editModal1").style.visibility = "visible";
    $("#backGround").show();
    var popUp1 = document.getElementById("editModal1");
    popUp1.style.top = "100px";
    popUp1.style.left = "600px";
    popUp1.style.width = "300px";
    popUp1.style.height = "580px";
}
   
}
function editclose() {
    if(isClick){
        document.getElementById("editModal1").style.visibility = "hidden";
        $("#backGround").hide();
    }else{
        document.getElementById("editModal").style.visibility = "hidden";
        $("#backGround").hide();
    }
    
    
}
//    var updated = localStorage.getItem("info");
//    var change = JSON.parse(updated);
function editsubmit() {
        if(isClick){
            var index = document.getElementById("index1").value - 1;
            change[index].firstname = document.getElementById("firstname1").value;
            change[index].lastname = document.getElementById("lastname1").value;
            change[index].email = document.getElementById("email1").value;
            change[index].phone = document.getElementById("phone1").value;
            change[index].location = document.getElementById("location1").value;
            change[index].address.communication = document.getElementById("address1C1").value;
            change[index].address.permanet = document.getElementById("address2P1").value;
            change[index].marks.english = document.getElementById("thismarks").value;
            change[index].marks.science = document.getElementById("thismarks1").value;
            change[index].marks.computers = document.getElementById("thismarks2").value;
            change[index].marks.hardware = document.getElementById("thismarks3").value;
            document.getElementById("editModal1").style.visibility = "hidden";
        }else{
            var index = document.getElementById("index").value - 1;
            change[index].firstname = document.getElementById("firstname").value;
            change[index].lastname = document.getElementById("lastname").value;
            change[index].email = document.getElementById("email").value;
            change[index].phone = document.getElementById("phone").value;
            change[index].location = document.getElementById("location").value;
            change[index].address.communication = document.getElementById("address1C").value;
            change[index].address.permanet = document.getElementById("address2P").value;
            document.getElementById("editModal").style.visibility = "hidden";
        }
        
        
    
    localStorage.setItem("info", JSON.stringify(change));
}
//delete a student's all info in json file
function del(a){
    var trobj = a.parentNode.parentNode;
    var tdobj = trobj.getElementsByTagName("td");
    var delIndex = tdobj[0].innerHTML;
    document.getElementById("index2").value = delIndex;
    document.getElementById("editModal2").style.visibility = "visible";
    $("#backGround").show();
    var popUp = document.getElementById("editModal2");
    popUp.style.top = "200px";
    popUp.style.left = "600px";
    popUp.style.width = "400px";
    popUp.style.height = "200px";
}
function cancel(){
    document.getElementById("editModal2").style.visibility = "hidden";
    $("#backGround").hide();
}
function deleteSubmit(){
      var num = document.getElementById("index2").value - 1;
      change.splice(num, 1);
      
      localStorage.setItem("info", JSON.stringify(change));
}
// add new students info with Drag and drop
function add(){
    document.getElementById("editModal3").style.visibility = "visible";
    $("#backGround").show();
    var popUp2 = document.getElementById("editModal3");
    popUp2.style.top = "100px";
    popUp2.style.left = "600px";
    popUp2.style.width = "600px";
    popUp2.style.height = "580px";
}
function notRegister(){
    document.getElementById("editModal3").style.visibility = "hidden";
    $("#backGround").hide();
}
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
  function registerthis(){
      //var a = document.getElementById("div3");
      var ftname = document.getElementById("newfirstname").value;
      var ltname = document.getElementById("newlastname").value;
      var newemail = document.getElementById("newemail").value;
      var newphone = document.getElementById("newphone").value;
      var addressC = document.getElementById("newaddress1C").value;
      var addressP = document.getElementById("newaddress2P").value;
      var En = document.getElementById("thisnewmarks").value;
      var Com = document.getElementById("thisnewmarks2").value;
      var newscience = document.getElementById("thisnewmarks1").value;
      var newhardware = document.getElementById("thisnewmarks3").value;
      var loc = document.getElementById("div3").innerText;
      if ($('#div3').children().length == 0 || ftname == "" || ltname == "" || email == "" || phone == "" || addressC == "" || addressP == "" || En == "" || Com == "" || newscience == "" || newhardware == "" || loc == "") {
        alert("You should fill all blanks!");
      }else{
        var newstudent = {
            firstname: ftname,
            lastname: ltname,
            email: newemail,
            location: loc,
            phone: newphone,
            address: {
                communication: addressC,
                permanent: addressP
            },
            marks: {
                english: En,
                science: newscience,
                computers: Com,
                hardware: newhardware
            }

        }
        change.push(newstudent);
        localStorage.setItem("info", JSON.stringify(change));
        return true;
      }
      
  }
  // Search a student
  $('#txt-search').keyup(function(){
    var searchField = $(this).val();
    if(searchField === '')  {
        $('#filter-records').html('');
        return;
    }
    var regex = new RegExp(searchField, "i");
    var output = '<div class="row">';
    var count = 1;
      $.each(change, function(key, val){
        if ((val.firstname.search(regex) != -1) || (val.lastname.search(regex) != -1) || (val.phone.search(regex) != -1) || (val.location.search(regex) != -1)) {
          output += '<div class="col-md-6 well">';
          output += '<div class="col-md-7">';
          output += '<h5>' + val.firstname + ' ' + val.lastname + '</h5>';
          output += '<p>' + val.phone + '</p>'
          output += '<p>' + val.location + '</p>'
          output += '<p>' + val.email + '</p>'
          output += '</div>';
          output += '</div>';
          if(count % 2 == 0){
            output += '</div><div class="row">'
          }
          count++;
        }
      });
      output += '</div>';
      $('#filter-records').html(output);
});
//scroll event
function myscroll() {
    var elmnt = document.getElementById("thisTable");
    var x = elmnt.scrollLeft;
    var y = elmnt.scrollTop;
  }
$(function() {
    $(document).scroll(function() {
      var y = $(this).scrollTop();

    if ((y + $(window).height()) == ($(document).height())) {
      $('#samplebottom').fadeIn();
      return;
    }
  
      if ((x + divs.offsetWidth) == (elmnt.offsetWidth)) {
        $('#sampleright').show();
      } else {
        $('#sampleright').fadeOut();
      }
    });
  })