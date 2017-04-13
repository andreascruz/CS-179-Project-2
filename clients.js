//a data structure for storing information about the team
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
    orders: []
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
var client = clients[2];

function displayClients() { //creates the html elements to show the clients
  var clientsHtml = "";
  for (var i = 0; i < clients.length; i++) {
      clientsHtml += '<li class="clientItem" id="' + i + '"><a href="#appleseed">' + clients[i].name + '</a></li>';
  }
  $("#clientsList").html(clientsHtml);

  $(".clientItem").click(function() {
    var cliendId = $(this).attr('id');
    client = clients[cliendId];
    displayClientInfo();
  });
}

function displayClientInfo() { //creates the html elements to show the clients
  var clientInfoHtml = '<p class="customer-info"> <strong>' + client.name + '</strong> <br>' + client.phone + '</p>';
  var clientListHtml = "";

  clientListHtml += '<ul class="group-list" data-role="listview">';
  clientListHtml += '<li data-role="list-divider" class="ui-btn ui-icon-plus ui-btn-icon-right">Groups</li>';
  // Populates the groups of a client
  for (var j = 0; j < client.groups.length; j++) {
    clientListHtml += '<li>' + client.groups[j] + '</li>';
  }
  clientListHtml += '<li data-role="list-divider" class="ui-btn ui-icon-plus ui-btn-icon-right">Orders</li>';
  // Populates the orders of a client
  for (var j = 0; j < client.orders.length; j++) {
    clientListHtml += '<li>' + client.orders[j] + '</li>';
  }
  clientListHtml += '</ul>';

  $(".customer-img").attr("src", "pics/johnny-appleseed.jpg");
  $(".customer-info2").html(clientInfoHtml);
  $('.group-list').replaceWith(clientListHtml);
  $("#appleseed").enhanceWithin();
}

function newClient() {
  newClient = {
    name: "Artemis Cooper",
    phone: "+1 (012) 345-6789",
    groups: [],
    orders: []
  }
  clients.concat(newClient);
}

$(function() {
  console.log('clients.js loaded');
  displayClients(); //generate and render the html divs for the clients list
});
