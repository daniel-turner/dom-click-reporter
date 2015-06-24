var Reporter = function() {

  var report = {};

  function updateReport(clickEvent) {

    if(clickEvent.target.id !== "" && report.hasOwnProperty(clickEvent.target.id)) {

      report[clickEvent.target.id].push(clickEvent);
    }

    if(clickEvent.target.className !== "" && report.hasOwnProperty(clickEvent.target.className)) {

      report[clickEvent.target.className].push(clickEvent);
    }

    if(clickEvent.target.id !== "" && !report.hasOwnProperty(clickEvent.target.id)) {

      report[clickEvent.target.id] = [clickEvent];
    }

    if(clickEvent.target.className !== "" && !report.hasOwnProperty(clickEvent.target.className)) {

      report[clickEvent.target.className] = [clickEvent];
    }

    if(clickEvent.target.id === "" && clickEvent.target.className === "") {

      if(report.hasOwnProperty(clickEvent.target)) {

        report[clickEvent.target].push(clickEvent);

      } else {

        report[clickEvent.target] = [clickEvent];
      }
    }

    console.log(report);
  };

  document.body.addEventListener('click', updateReport);
}