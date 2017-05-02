// A data structure for storing information about our clients
var clients = [
  {
    name: "Artemis Cooper",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
  {
    name: "Benjamin Button",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: [
      "2017/03/23 (J897QF)",
      "2017/01/06 (A34DZ6)",
    ]
  },
  {
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
  {
    name: "Jane Anderson",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
  {
    name: "Marcela Hernandez",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
  {
    name: "Pauline Dreyfus",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
  {
    name: "Rubio Junipero",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
  {
    name: "Tatiana Linsker",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
  {
    name: "Zsa Zsa Gabor",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  },
]
var client = clients["Johnny Appleseed"];

// Renders a list of all clients
function displayClients() {
  var pHtml = '<ul id="clients-list" data-role="listview" data-filter="true" data-filter-placeholder="search" data-autodividers="true">';
  for (var i = 0; i < clients.length; i++) {
      pHtml += '<li onclick="displayClientInfo(this)"><a href="#appleseed">' + clients[i].name + '</a></li>';
  }
  pHtml += '</ul>';
  $("#clients-list").replaceWith(pHtml);
  $(".p-content").enhanceWithin();
}

// Renders a specific client page
function displayClientInfo(param, name) {
  // Determines selected client
  var clientId = name || $(param)[0].textContent;
  for (var i = 0; i < clients.length; i++) {
    if (clients[i].name === clientId) {
      client = clients[i];
    }
  }
  // Header info
  var clientInfoHtml = '<p class="customer-info"> <strong>' + client.name + '</strong> <br>' + client.phone + '<br>';
  // Edit button
  clientInfoHtml += '<a href="#editClient" class="ui-btn" onclick="setupEditedClient(this)">Manage</a></p>';
  var clientListHtml = "";

  clientListHtml += '<ul class="group-list" data-role="listview">';
  clientListHtml += '<li data-role="list-divider">Groups</li>';
  // Populates the groups of a client
  for (var j = 0; j < client.groups.length; j++) {
    clientListHtml += '<li onclick="displayGroupInfo(this)"><a href="#navyrotc">' + client.groups[j] + '</a></li>';
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
  $(':checkbox').removeAttr('checked');
  client2 = {
    name: fullName,
    phone: phone,
    groups: checkedGroups,
    orders: []
  };
  clients = clients.concat(client2)
  displayClients();
}

// Edits an existing client
function setupEditedClient(param) {
  console.log('editing a client');
  var fullName = (client.name).split(" ");
  $('#edited-first-name')[0].value = fullName[0];
  $('#edited-last-name')[0].value = fullName[1];
  $('#edited-phone')[0].value = client.phone;

  groupCheckBoxes('group-cb2');
}

// Edits an existing client
function saveEditedClient() {
  var firstName = $('#edited-first-name')[0].value;
  var lastName = $('#edited-last-name')[0].value;
  client.name = firstName + " " + lastName;
  client.phone = $('#edited-phone')[0].value;
  var checkbox = $(':checked');
  var checkedGroups = [];
  for (var i = 0; i < checkbox.length; i++) {
    var cId = checkbox[i].id;
    var checkedGroup = $('label[for=' + cId + ']')[0].innerHTML;
    checkedGroups = checkedGroups.concat(checkedGroup);
  }
  $(':checkbox').removeAttr('checked');
  client.groups = checkedGroups;
  displayClients();
  displayClientInfo(null, client.name);
}

// Deletes a client
function deleteClient() {
  var index = clients.indexOf(client);
  clients.splice(index, 1);
  displayClients();
}

// Sets up advertising page
function adsSetup() {
  $("#textarea-ads").val('');
  groupCheckBoxes('group-cb');
}

function confirmMsg() {
  // $.mobile.changePage( "#confirmationPage", { role: "dialog" } );
  history.back();

  $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h3>Sent</h3></div>")
	.css({ display: "block",
    background: "white",
		opacity: 0.90,
		position: "fixed",
		padding: "7px",
		"text-align": "center",
		width: "270px",
		left: ($(window).width() - 284)/2,
		top: $(window).height()/1.5 })
	.appendTo( $.mobile.pageContainer ).delay( 1500 )
	.fadeOut( 400, function(){
		$(this).remove();
	});
}

$(function() {
  console.log('Fresh start!');

  displayClients(); //generate and render the html divs for the clients list
});
