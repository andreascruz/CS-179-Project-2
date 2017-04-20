var groups = [
  {
    name: "Navy ROTC",
    members: [
      "Johnny Appleseed",
      "Jane Anderson",
      "Marcela Hernandez"
    ]
  },
  {
    name: "The Cooper Family",
    members: []
  },
  {
    name: "Harvard Women's Soccer",
    members: []
  },
  {
    name: "Boston University Marching Band",
    members: []
  },
  {
    name: "St. Paul Catholic Church",
    members: []
  },
]
var selectedGroup = groups[0];

// Renders a list of all groups
function displayGroups() {
  var pHtml = '<ul id="groups-list" data-role="listview" data-filter="true" data-filter-placeholder="search">';
  for (var i = 0; i < groups.length; i++) {
      pHtml += '<li onclick="displayGroupInfo(this)"><a href="#navyrotc">' + groups[i].name + '</a></li>';
  }
  pHtml += '</ul>';
  $("#groups-list").replaceWith(pHtml);
  $(".p-content").enhanceWithin();
}

// Renders a specific group page
function displayGroupInfo(param, name) {
  var clientId = name || $(param)[0].textContent;
  // Determines selected group
  for (var i = 0; i < groups.length; i++) {
    if (groups[i].name === clientId) {
      selectedGroup = groups[i];
    }
  }
  // Header info
  var groupInfoHtml = '<p class="customer-info"> <strong>' + selectedGroup.name + '</strong> <br>';

  // Edit button
  groupInfoHtml += '<a href="#editgroup" class="ui-btn" onclick="setupEditedgroup(this)">Edit</a></p>';
  var groupListHtml = "";

  // Members list
  groupListHtml += '<ul id="members-list" data-role="listview">';
  groupListHtml += '<li data-role="list-divider">Members</li>';
  for (var j = 0; j < selectedGroup.members.length; j++) {
    groupListHtml += '<li onclick="displayClientInfo(this)"><a href="#appleseed">' + selectedGroup.members[j] + '</a></li>';
  }
  groupListHtml += '</ul>';

  $(".group-img").attr("src", "pics/navy_rotc.bmp");
  $(".customer-info3").html(groupInfoHtml);
  $('#members-list').replaceWith(groupListHtml);
  $(".p-content").enhanceWithin();
}

// Populates members checkbox in new group page
function setupNewGroupPage() {
  console.log('new group page');
  var pageHTML = '<div id="members-checkboxes" data-role="fieldcontain">';
  pageHTML += '<fieldset data-role="controlgroup">';

  for(var i = 0; i < clients.length; i++) {
    pageHTML += '<input type="checkbox" name="checkbox-' + i + 'c" id="checkbox-' + i + 'c">';
    pageHTML += '<label for="checkbox-' + i + 'c">' + clients[i].name + '</label>';
  }

  $("#members-checkboxes").replaceWith(pageHTML);
  $(".p-content").enhanceWithin();
}

// Adds a new client to our array
function saveNewGroup() {
  console.log('creating new group');
  var name = $('#new-group-name')[0].value;
  var checkbox = $(':checked');
  var checkedMembers = [];
  for (var i = 0; i < checkbox.length; i++) {
    var cId = checkbox[i].id;
    console.log('cId', cId);
    var checkedMember = $('label[for=' + cId + ']')[0].innerHTML;
    checkedMembers = checkedMembers.concat(checkedMember);
  }
  $(':checkbox').removeAttr('checked');
  someGroup = {
    name: name,
    members: checkedMembers
  };
  groups = groups.concat(someGroup)
  displayGroups();
}

$(function() {
  displayGroups(); //generate and render the html divs for the groups list
});
