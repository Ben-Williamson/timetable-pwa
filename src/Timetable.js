import './Timetable.css';

let days = [
  {name: "Monday"},
  {name: "Tuesday"},
  {name: "Wednesday"},
  {name: "Thursday"},
  {name: "Friday"},
  {name: "Monday"},
  {name: "Tuesday"},
  {name: "Wednesday"},
  {name: "Thursday"},
  {name: "Friday"},
]

let events = [
  {
    day: 0,
    period: 0,
    name: "Free",
    person: "Ben Williamson"
  },
  // {
  //   day: 2,
  //   period: 3,
  //   name: "Free (PE)",
  //   person: "Ben Williamson"
  // },
  // {
  //   day: 2,
  //   period: 4,
  //   name: "Free (PE)",
  //   person: "Ben Williamson"
  // },
  {
    day: 3,
    period: 4,
    name: "Free",
    person: "Ben Williamson"
  },
  {
    day: 5,
    period: 4,
    name: "Free",
    person: "Ben Williamson"
  },
  {
    day: 7,
    period: 1,
    name: "Free",
    person: "Ben Williamson"
  },
  // {
  //   day: 7,
  //   period: 4,
  //   name: "Free (PE)",
  //   person: "Ben Williamson"
  // },
  {
    day: 9,
    period: 1,
    name: "Free",
    person: "Ben Williamson"
  },
  {
    day: 0,
    period: 1,
    name: "Free",
    person: "Fran Fenwick"
  },
  {
    day: 0,
    period: 3,
    name: "Free",
    person: "Fran Fenwick"
  },
  {
    day: 1,
    period: 4,
    name: "Free",
    person: "Fran Fenwick"
  },
  {
    day: 3,
    period: 2,
    name: "Free",
    person: "Fran Fenwick"
  },
  {
    day: 3,
    period: 3,
    name: "Free",
    person: "Fran Fenwick"
  },
  {
    day: 5,
    period: 0,
    name: "Free",
    person: "Fran Fenwick"
  },
  {
    day: 6,
    period: 4,
    name: "Free",
    person: "Fran Fenwick"
  },
  {
    day: 8,
    period: 1,
    name: "Free",
    person: "Fran Fenwick"
  },
  {
    day: 8,
    period: 4,
    name: "Free",
    person: "Fran Fenwick"
  },
  {
    day: 9,
    period: 3,
    name: "Free",
    person: "Fran Fenwick"
  },

  {
    day: 0,
    period: 0,
    name: "Free",
    person: "Sophie Palmer"
  },
  {
    day: 1,
    period: 3,
    name: "Free",
    person: "Sophie Palmer"
  },
  {
    day: 1,
    period: 4,
    name: "Free",
    person: "Sophie Palmer"
  },
  {
    day: 3,
    period: 4,
    name: "Free",
    person: "Sophie Palmer"
  },
  {
    day: 4,
    period: 3,
    name: "Free",
    person: "Sophie Palmer"
  },
  {
    day: 5,
    period: 4,
    name: "Free",
    person: "Sophie Palmer"
  },
  {
    day: 6,
    period: 1,
    name: "Free",
    person: "Sophie Palmer"
  },
  {
    day: 7,
    period: 1,
    name: "Free",
    person: "Sophie Palmer"
  },
  {
    day: 9,
    period: 0,
    name: "Free",
    person: "Sophie Palmer"
  },
  {
    day: 9,
    period: 1,
    name: "Free",
    person: "Sophie Palmer"
  },
  {"day": 0, "period": 1, "name": "Free", "person": "Stan Fitch"}, {"day": 0, "period": 2, "name": "Free", "person": "Stan Fitch"}, {"day": 1, "period": 4, "name": "Free", "person": "Stan Fitch"}, {"day": 3, "period": 0, "name": "Free", "person": "Stan Fitch"}, {"day": 3, "period": 1, "name": "Free", "person": "Stan Fitch"}, {"day": 3, "period": 2, "name": "Free", "person": "Stan Fitch"}, {"day": 5, "period": 0, "name": "Free", "person": "Stan Fitch"}, {"day": 5, "period": 3, "name": "Free", "person": "Stan Fitch"}, {"day": 8, "period": 4, "name": "Free", "person": "Stan Fitch"}, {"day": 9, "period": 2, "name": "Free", "person": "Stan Fitch"},

  {'day': 0, 'period': 1, 'name': 'Free', 'person': 'Alex Parker'}, {'day': 0, 'period': 2, 'name': 'Free', 'person': 'Alex Parker'}, {'day': 1, 'period': 4, 'name': 'Free', 'person': 'Alex Parker'}, {'day': 3, 'period': 0, 'name': 'Free', 'person': 'Alex Parker'}, {'day': 3, 'period': 1, 'name': 'Free', 'person': 'Alex Parker'}, {'day': 3, 'period': 2, 'name': 'Free', 'person': 'Alex Parker'}, {'day': 5, 'period': 0, 'name': 'Free', 'person': 'Alex Parker'}, {'day': 5, 'period': 3, 'name': 'Free', 'person': 'Alex Parker'}, {'day': 8, 'period': 4, 'name': 'Free', 'person': 'Alex Parker'}, {'day': 9, 'period': 2, 'name': 'Free', 'person': 'Alex Parker'},

  {'day': 0, 'period': 4, 'name': 'Free', 'person': 'Jess Gowers'}, {'day': 1, 'period': 3, 'name': 'Free', 'person': 'Jess Gowers'}, {'day': 1, 'period': 4, 'name': 'Free', 'person': 'Jess Gowers'}, {'day': 4, 'period': 0, 'name': 'Free', 'person': 'Jess Gowers'}, {'day': 4, 'period': 3, 'name': 'Free', 'person': 'Jess Gowers'}, {'day': 6, 'period': 1, 'name': 'Free', 'person': 'Jess Gowers'}, {'day': 7, 'period': 3, 'name': 'Free', 'person': 'Jess Gowers'}, {'day': 8, 'period': 3, 'name': 'Free', 'person': 'Jess Gowers'}, {'day': 9, 'period': 0, 'name': 'Free', 'person': 'Jess Gowers'},

  {'day': 1, 'period': 2, 'name': 'Free', 'person': 'Rithvik Sanga'}, {'day': 1, 'period': 3, 'name': 'Free', 'person': 'Rithvik Sanga'}, {'day': 1, 'period': 4, 'name': 'Free', 'person': 'Rithvik Sanga'}, {'day': 4, 'period': 1, 'name': 'Free', 'person': 'Rithvik Sanga'}, {'day': 4, 'period': 3, 'name': 'Free', 'person': 'Rithvik Sanga'}, {'day': 6, 'period': 1, 'name': 'Free', 'person': 'Rithvik Sanga'}, {'day': 7, 'period': 0, 'name': 'Free', 'person': 'Rithvik Sanga'}, {'day': 7, 'period': 1, 'name': 'Free', 'person': 'Rithvik Sanga'}, {'day': 8, 'period': 3, 'name': 'Free', 'person': 'Rithvik Sanga'}, {'day': 9, 'period': 0, 'name': 'Free', 'person': 'Rithvik Sanga'},

  {'day': 1, 'period': 0, 'name': 'Study', 'person': 'Ben Williamson'}, {'day': 1, 'period': 2, 'name': 'Study', 'person': 'Ben Williamson'}, {'day': 4, 'period': 1, 'name': 'Study', 'person': 'Ben Williamson'}, {'day': 6, 'period': 0, 'name': 'Study', 'person': 'Ben Williamson'}, {'day': 7, 'period': 1, 'name': 'Study', 'person': 'Ben Williamson'}, {'day': 8, 'period': 3, 'name': 'Study', 'person': 'Ben Williamson'},

  {'day': 1, 'period': 0, 'name': 'Study', 'person': 'Fran Fenwick'}, {'day': 1, 'period': 1, 'name': 'Study', 'person': 'Fran Fenwick'}, {'day': 1, 'period': 3, 'name': 'Study', 'person': 'Fran Fenwick'}, {'day': 4, 'period': 2, 'name': 'Study', 'person': 'Fran Fenwick'}, {'day': 4, 'period': 3, 'name': 'Study', 'person': 'Fran Fenwick'}, {'day': 5, 'period': 1, 'name': 'Study', 'person': 'Fran Fenwick'}, {'day': 6, 'period': 0, 'name': 'Study', 'person': 'Fran Fenwick'}, {'day': 6, 'period': 1, 'name': 'Study', 'person': 'Fran Fenwick'}, {'day': 8, 'period': 0, 'name': 'Study', 'person': 'Fran Fenwick'}, {'day': 9, 'period': 0, 'name': 'Study', 'person': 'Fran Fenwick'},

  {'day': 1, 'period': 0, 'name': 'Study', 'person': 'Sophie Palmer'}, {'day': 1, 'period': 2, 'name': 'Study', 'person': 'Sophie Palmer'}, {'day': 3, 'period': 2, 'name': 'Study', 'person': 'Sophie Palmer'}, {'day': 4, 'period': 1, 'name': 'Study', 'person': 'Sophie Palmer'}, {'day': 6, 'period': 0, 'name': 'Study', 'person': 'Sophie Palmer'}, {'day': 7, 'period': 0, 'name': 'Study', 'person': 'Sophie Palmer'}, {'day': 8, 'period': 3, 'name': 'Study', 'person': 'Sophie Palmer'}, {'day': 8, 'period': 4, 'name': 'Study', 'person': 'Sophie Palmer'},

  {'day': 1, 'period': 0, 'name': 'Study', 'person': 'Stan Fitch'}, {'day': 1, 'period': 3, 'name': 'Study', 'person': 'Stan Fitch'}, {'day': 2, 'period': 2, 'name': 'Study', 'person': 'Stan Fitch'}, {'day': 4, 'period': 3, 'name': 'Study', 'person': 'Stan Fitch'}, {'day': 4, 'period': 4, 'name': 'Study', 'person': 'Stan Fitch'}, {'day': 6, 'period': 0, 'name': 'Study', 'person': 'Stan Fitch'}, {'day': 6, 'period': 1, 'name': 'Study', 'person': 'Stan Fitch'}, {'day': 6, 'period': 3, 'name': 'Study', 'person': 'Stan Fitch'}, {'day': 7, 'period': 2, 'name': 'Study', 'person': 'Stan Fitch'}, {'day': 9, 'period': 0, 'name': 'Study', 'person': 'Stan Fitch'},

  {'day': 1, 'period': 0, 'name': 'Study', 'person': 'Alex Parker'}, {'day': 1, 'period': 3, 'name': 'Study', 'person': 'Alex Parker'}, {'day': 2, 'period': 2, 'name': 'Study', 'person': 'Alex Parker'}, {'day': 4, 'period': 3, 'name': 'Study', 'person': 'Alex Parker'}, {'day': 4, 'period': 4, 'name': 'Study', 'person': 'Alex Parker'}, {'day': 6, 'period': 0, 'name': 'Study', 'person': 'Alex Parker'}, {'day': 6, 'period': 1, 'name': 'Study', 'person': 'Alex Parker'}, {'day': 6, 'period': 3, 'name': 'Study', 'person': 'Alex Parker'}, {'day': 7, 'period': 2, 'name': 'Study', 'person': 'Alex Parker'}, {'day': 9, 'period': 0, 'name': 'Study', 'person': 'Alex Parker'},

  {'day': 0, 'period': 1, 'name': 'Study', 'person': 'Jess Gowers'}, {'day': 1, 'period': 0, 'name': 'Study', 'person': 'Jess Gowers'}, {'day': 2, 'period': 0, 'name': 'Study', 'person': 'Jess Gowers'}, {'day': 3, 'period': 2, 'name': 'Study', 'person': 'Jess Gowers'}, {'day': 5, 'period': 0, 'name': 'Study', 'person': 'Jess Gowers'}, {'day': 6, 'period': 0, 'name': 'Study', 'person': 'Jess Gowers'}, {'day': 6, 'period': 2, 'name': 'Study', 'person': 'Jess Gowers'}, {'day': 8, 'period': 2, 'name': 'Study', 'person': 'Jess Gowers'}, {'day': 8, 'period': 4, 'name': 'Study', 'person': 'Jess Gowers'}, {'day': 9, 'period': 4, 'name': 'Study', 'person': 'Jess Gowers'},

  {'day': 0, 'period': 0, 'name': 'Study', 'person': 'Rithvik Sanga'}, {'day': 0, 'period': 1, 'name': 'Study', 'person': 'Rithvik Sanga'}, {'day': 1, 'period': 0, 'name': 'Study', 'person': 'Rithvik Sanga'}, {'day': 3, 'period': 2, 'name': 'Study', 'person': 'Rithvik Sanga'}, {'day': 3, 'period': 4, 'name': 'Study', 'person': 'Rithvik Sanga'}, {'day': 5, 'period': 0, 'name': 'Study', 'person': 'Rithvik Sanga'}, {'day': 5, 'period': 4, 'name': 'Study', 'person': 'Rithvik Sanga'}, {'day': 6, 'period': 0, 'name': 'Study', 'person': 'Rithvik Sanga'}, {'day': 8, 'period': 4, 'name': 'Study', 'person': 'Rithvik Sanga'}, {'day': 9, 'period': 1, 'name': 'Study', 'person': 'Rithvik Sanga'},

  {day: 2, period: 3, name: "PE", person: "Everyone"},
  {day: 2, period: 4, name: "PE", person: "Everyone"},
  {day: 7, period: 4, name: "PE", person: "Everyone"}
]

function event(day, period) {
    var output = [];
  events.forEach((event, i) => {
    if(event.day === day && event.period === period) {
      output.push(
        <div key={event.name + event.person}>
          <p><span className={event.name}>{event.name}</span> - {event.person}</p>
        </div>
      );
    }
  });
  if(output.length > 0) {
      return output;
  } else {
    return (
      <p>No one's free.</p>
    )
  }
}

function eventsForPeriod(day, period) {
  return (
    <div key={day, period} className="period">
      <p className="periodLabel">period {period+ 1}</p>
      {event(day, period)}
    </div>
  )
}

function eventsForDay(day) {
  let output = [];

  for(var j = 0; j < 5; j++) { // for each period
      output.push(eventsForPeriod(day, j));
  }
  return output
}

function day(d) {
  return (
    <div key={d} className="day">
      <p className="dayName">{days[d].name} - {d<4 ? "Week 1" : "Week 2"}</p>
      {eventsForDay(d)}
    </div>
  );
}

function Timetable() {
  return (
    <div id="timetable">
    <div className="labels">
      <p></p>
      <p>Period 1</p>
      <p>Period 2</p>
      <p>Period 3</p>
      <p>Period 4</p>
      <p>Period 5</p>
    </div>
    {days.map(function (d, i) {
      return day(i);
    })}
    </div>
  )
}

// {days.map(function (d, i) {
//   return day(i);
// })}


export default Timetable;
