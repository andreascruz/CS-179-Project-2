// A data structure for storing information about our clients
var clients = {
  "Artemis Cooper" : {
    name: "Artemis Cooper",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
  "Benjamin Button" : {
    name: "Benjamin Button",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: [
      "2017/03/23 (J897QF)",
      "2017/01/06 (A34DZ6)",
    ]
  },
  "Johnny Appleseed" : {
    name: "Johnny Appleseed",
    phone: "+1 (012) 345-6789",
    groups: [
      "Boston University Marching Band",
      "Navy ROTC"
    ],
    orders: [
      "2017/03/23 (J897QF)",
      "2017/01/06 (A34DZ6)",
      "2016/10/15 (BC75L1)",
      "2017/08/11 (Y965GS)",
    ]
  },
  "Jane Anderson" : {
    name: "Jane Anderson",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
  "Marcela Hernandez" : {
    name: "Marcela Hernandez",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
  "Pauline Dreyfus" : {
    name: "Pauline Dreyfus",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
  "Rubio Junipero" : {
    name: "Rubio Junipero",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
  "Tatiana Linsker" : {
    name: "Tatiana Linsker",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
  "Zsa Zsa Gabor" : {
    name: "Zsa Zsa Gabor",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
}
var client = clients["Johnny Appleseed"];

// Renders a list of all clients
function displayClients() { //creates the html elements to show the clients
  var pHtml = '<ul id="clientsList" data-role="listview" data-filter="true" data-filter-placeholder="search" data-autodividers="true">';
  for (clientName in clients) {
      pHtml += '<li class="clientItem"><a href="#appleseed">' + clientName + '</a></li>';
  }
  pHtml += '</ul>';
  $("#clientsList").replaceWith(pHtml);
  $(".p-content").enhanceWithin();

  $(".clientItem").click(function() {
    var clientId = $(this)[0].textContent;
    client = clients[clientId];
    displayClientInfo();
  });
}

// Renders a specific client page
function displayClientInfo() { //creates the html elements to show the clients
  var clientInfoHtml = '<p class="customer-info"> <strong>' + client.name + '</strong> <br>' + client.phone + '</p>';
  var clientListHtml = "";

  clientListHtml += '<ul class="group-list" data-role="listview">';
  clientListHtml += '<li data-role="list-divider" class="ui-btn ui-icon-plus ui-btn-icon-right">Groups</li>';
  // Populates the groups of a client
  for (var j = 0; j < client.groups.length; j++) {
    clientListHtml += '<li>' + client.groups[j] + '</li>';
  }
  clientListHtml += '<li data-role="list-divider">Orders</li>';
  // Populates the orders of a client
  for (var j = 0; j < client.orders.length; j++) {
    clientListHtml += '<li onclick="displayNotification()"><a href="#sendNotification">' + client.orders[j] + '</a></li>';
  }
  clientListHtml += '</ul>';

  $(".customer-img").attr("src", "pics/johnny-appleseed.jpg");
  $(".customer-info2").html(clientInfoHtml);
  $('.group-list').replaceWith(clientListHtml);
  $(".p-content").enhanceWithin();
}

// Display personalized notifications
function displayNotification() {
  console.log('displaying notification');
  noteInfo = '<div id="sendNotificationClientInfo">';
  noteInfo += '<p>' + client.name + '</p>';
  noteInfo += '<p>' + client.phone + '</p>';
  $('#sendNotificationClientInfo').replaceWith(noteInfo);
}

// Adds a new client to our array
function newClient() {
  console.log('creating new client');
  var firstName = $('#new-first-name')[0].value;
  var lastName = $('#new-last-name')[0].value;
  var fullName = firstName + " " + lastName;
  var phone = $('#new-phone')[0].value;
  var checkbox = $(':checked');
  var checkedGroups = [];
  for (var i = 0; i < checkbox.length; i++) {
    var cId = checkbox[i].id;
    var checkedGroup = $('label[for=' + cId + ']')[1].innerHTML;
    checkedGroups = checkedGroups.concat(checkedGroup);
  }
  client2 = {
    name: fullName,
    phone: phone,
    groups: checkedGroups,
    orders: []
  };
  clients[fullName] = client2;
  displayClients();
}

function autoType() {
  var availableTags = [];
  for(i = 0; i < clients.length; i++)
  {
    availableTags = availableTags.concat(clients[i].name);
  }
  $( "#tags" ).autocomplete({
    source: availableTags
  });
}

$(function() {
  console.log('Fresh start!');

  displayClients(); //generate and render the html divs for the clients list
  autoType();
});
