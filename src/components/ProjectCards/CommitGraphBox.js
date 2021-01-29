import React, { useState, useEffect } from "react";
import * as axios from "axios";
import CommitGraph from "./CommitGraph";

function CommitGraphBox(props) {
  // const [state, setState] = useState(0);
  const [endDates, setEndDates] = useState([0, 0]);
  const [graphPoints, setGraphPoints] = useState([0]);

  const convertDay = date => {
    return Math.abs(date) / 86400000 - 18500;
  };

  const updateGraph = data => {
    const endDate = new Date(data[0].commit.author.date.slice(0, 10));
    const startDate = new Date(
      data[data.length - 1].commit.author.date.slice(0, 10)
    );
    setEndDates([startDate, endDate]);

    const dates = data.map(
      commit => new Date(commit.commit.author.date.slice(0, 10))
    );
    var prevDate = convertDay(startDate) - 1;

    var currGraphPoints = [];
    var commits = 0;

    dates
      .slice()
      .reverse()
      .forEach(date => {
        var newDate = convertDay(date);
        if (newDate === prevDate) {
          commits++;
        } else {
          currGraphPoints = [
            ...currGraphPoints,
            ...Array(newDate - prevDate).fill(commits)
          ];
          commits++;
        }
        prevDate = newDate;
      });
    currGraphPoints.push(commits);
    // currGraphPoints[n] = cum. number of commits up to day n after creation

    setGraphPoints(currGraphPoints);
  };

  useEffect(() => {
    const fetchData = async () => {
      let config = {
        headers: {
          accept: "application/vnd.github.v3+json"
        },
        params: {
          per_page: 100
        }
      };
      const resp = await axios.get(
        `https://api.github.com/repos/${props.github_owner}/${props.github_repo}/commits`,
        config
      );
      // setState(resp.data);
      updateGraph(resp.data);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function printDate(d) {
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "2-digit" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);
    return `${ye}/${mo}/${da}`;
  }

  return (
    <div className="project-graph">
      <CommitGraph graphPoints={graphPoints} />
      <div className="project-graph-label">
        Commits from {printDate(endDates[0])} to {printDate(endDates[1])}
      </div>
    </div>
  );
}

export default CommitGraphBox;
