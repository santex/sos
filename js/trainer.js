// Global variables, bleugh
var morse;
var message;

// Useful methods

if(typeof(String.prototype.trim) === "undefined") {
  String.prototype.trim = function() {
    return String(this).replace(/^\s+|\s+$/g, '');
  };
}

function len(s) {
  return s.trim().length;
}

// jQuery form stuff

$("#wpm").on('blur', tieSpeeds());
$("#fwpm").on('blur', tieSpeeds());

function makeForm() {
  var $session = $("#session");
  var $sending = $("#sending");
  var $copying = $("#copying");

  $session.find(".top").html("1");
  $session.find(".bot").html(segments.length);

  changeCounter($session, 0);
  resetSubCounters();
  updateMessages();

  //events
  $("#session .prev").click(function() {
    changeCounter($session, -1);
    resetSubCounters();
    updateMessages();
  });
  $("#session .next").click(function() {
    changeCounter($session, 1);
    resetSubCounters();
    updateMessages();
  });
  $("#copying .prev").click(function() {
    changeCounter($copying, -1);
    updateMessages();
  });
  $("#copying .next").click(function() {
    changeCounter($copying, 1);
    updateMessages();
  });
  $("#sending .prev").click(function() {
    changeCounter($sending, -1);
    updateMessages();
  });
  $("#sending .next").click(function() {
    changeCounter($sending, 1);
    updateMessages();
  });

  $("#copying .play").click(function() {
    if (!$("#copying .play").hasClass("disabled")) {
      playM($("#copying .message").text());
    }
  });
  $("#sending .play").click(function() {
    if (!$("#sending .play").hasClass("disabled")) {
      var next = $("#sending .message").text();
      playM(next);
    }
  });
  $("#freeform .play").click(function() {
    playM($("#fmessage").val());
  });
  $(".stop").click(stopM);

  $("#callsign").change(updateMessages);
  $("#name").change(updateMessages);
  $("#state").change(updateMessages);
  $("#antenna").change(updateMessages);
  $("#power").change(updateMessages);
  $("#age").change(updateMessages);

}

//TODO: store state in cookie
//TODO: input validation?!

function resetSubCounters() {
  var session = parseInt($("#session .top").html()) - 1;

  var list = segments[session]["Copying"];
  $("#copying .top").html("1");
  $("#copying .bot").html(list.length);
  $("#copying .prev").addClass("disabled");
  $("#copying .next").removeClass("disabled");

  list = segments[session]["Sending"];
  $("#sending .top").html("1");
  $("#sending .bot").html(list.length);
  $("#sending .prev").addClass("disabled");
  $("#sending .next").removeClass("disabled");
}

function updateMessages() {
  var session = parseInt($("#session .top").html()) - 1;

  var top = parseInt($("#copying .top").html()) - 1;
  var message = fixMessage(segments[session]["Copying"][top]);
  $("#copying .message").html(message);
  if (message.search("\\[") != -1) {
    $("#copying .play").addClass("disabled");
  } else {
    $("#copying .play").removeClass("disabled");
  }

  top = parseInt($("#sending .top").html()) - 1;
  message = fixMessage(segments[session]["Sending"][top]);
  $("#sending .message").html(message);
  if (message.search("\\[") != -1) {
    $("#sending .play").addClass("disabled");
  } else {
    $("#sending .play").removeClass("disabled");
  }
}

function fixMessage(message) {
  message = fixToken(message, "your callsign", $("#callsign").val());
  message = fixToken(message, "your age", $("#age").val());
  message = fixToken(message, "your antenna", $("#antenna").val());
  message = fixToken(message, "your power", $("#power").val());
  message = fixToken(message, "your name", $("#name").val());
  message = fixToken(message, "your town/city and state abbreviation", $("#state").val());
  message = fixToken(message, "your town/city", $("#state").val()); /* need for Japanese version */
  return message;
}

 function addBin(text)
 {
  var length = text.length,
      output = [];
  for (var i = 0;i < length; i++) {
    var bin = text[i].charCodeAt().toString(2);
    output.push(Array(8-bin.length+1).join("0") + bin);
  }
  var res = output.join(" ");
  var bin_data = document.getElementById('bin_data');
  bin_data.value = res;
  return res;
}

function fixToken(message, token, replacement) {
  if (message.indexOf("[" + token + "]") != -1) {
    regexp = new RegExp("\\[" + token + "\\]", "g");
    if (replacement != "") {
      message = message.replace(regexp, "<span class='token good'>" + replacement + "</span>");
    } else {
      message = message.replace(regexp, "<span class='token bad'>[" + token + "]</span>");
    }
  }
  return message;
}

function changeCounter(obj, inc) {
  var top = parseInt(obj.find(".top").html());
  var max = parseInt(obj.find(".bot").html());
  if (inc == -1 && top > 1) {
    top = top - 1;
  } else if (inc == 1 && top < max) {
    top = top + 1;
  }
  if (top == 1) {
    obj.find(".prev").addClass("disabled");
  } else {
    obj.find(".prev").removeClass("disabled");
  }
  if (top == max) {
    obj.find(".next").addClass("disabled");
  } else {
    obj.find(".next").removeClass("disabled");
  }
  obj.find(".top").html(top);
}

// Morse stuff

function tieSpeeds() {
  var wpm = parseInt($("#wpm").val());
  var fwpm = parseInt($("#fwpm").val());
  $("#fwpm").val(fwpm > wpm ? wpm : fwpm);
}

function translateM(text, useProsigns) {
  var morse;
  if (useProsigns) {
    morse = String(text2morsePro(text));
  } else {
    morse = String(text2morse(text));
  }
  return morse;
}

function playM(text) {
  log("Text: " + text);
  var useProsigns = $("#useprosigns").prop("checked");
  var morse = translateM(text, useProsigns);
  var wpm = parseInt($("#wpm").val());
  var fwpm = parseInt($("#fwpm").val());
  var pitch = parseInt($("#pitch").val());
  var volume = parseFloat($("#volume").val());
  playMorse(morse, wpm, fwpm, pitch, volume);

  addBin(text);
  return true;
}

function stopM() {
  stopMorse();
}

// When DOM ready

$(document).ready(makeForm);
