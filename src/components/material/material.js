import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button
} from "@material-ui/core";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import {data} from '../App/data'
import './material.scss'

const headers = [
  { key: "" },
  { key: "" },
  { key: "All years" },
  { key: "2014" },
  { key: "2015" },
  { key: "2016" },
  { key: "2017" },
  { key: "2018" },
  { key: "2019" },
  { key: "2020" },
  { key: "2021" },
  { key: "2022" },
  { key: "2023" },
  { key: "2024" },
  ];

export default function Material() {
  const [state, setState] = React.useState({});
  console.log(state);
  console.log(state["parentTasks"], 'state["parentTasks"]');
  if (state["parentTasks"] === undefined) {
    const newstate = { ...state, parentTasks: true };
    setState(newstate);
  }

  const handleClick = item => {
    const newstate = { ...state, [item]: !state[item] };
    setState(newstate);
  };

  function treeTable(taskTree, collapseId) {

    return taskTree && taskTree.map(task => {

      const amountByYear = task.tasks_by_years.reduce((prev, current) => prev + current.amount, 0);
      const doneByYear = task.tasks_by_years.reduce((prev, current) => prev + (current.done ? current.done : 0), 0);
      return (
        <>
          <TableRow hover className={state[collapseId] ? 'open' : 'closed'}>
            <TableCell className='toggle' style={{ padding: 0 }}>
              <Collapse
                key={collapseId}
                // component="table"
                in={state[collapseId]}
                timeout="auto"
                unmountOnExit
              >
                {task.next_level && (
                  <Button
                    key={task.id}
                    onClick={() => handleClick(task.id)}
                  >
                    {state[task.id] ? <ExpandLess /> : <ExpandMore />}
                  </Button>
                )}
              </Collapse>
            </TableCell>
            <TableCell className='task-name' style={{ padding: 0 }}>
              <Collapse
                key={collapseId}
                // component="table"
                in={state[collapseId]}
                timeout="auto"
                unmountOnExit
              >
                {task.id}
              </Collapse>
            </TableCell>
            <TableCell style={{ padding: 0 }}>
              <Collapse
                key={collapseId}
                // component="table"
                in={state[collapseId]}
                timeout="auto"
                unmountOnExit
              >
                <div className="task-info">
                  <p>{Math.floor(doneByYear * 100 / amountByYear)}%</p>
                  <span>{amountByYear}</span>
                </div>
              </Collapse>
            </TableCell>
            {headers.slice(2).map(({ key, format = value => value }) => {
              const currentItem = task.tasks_by_years.find(el => el.year === +key);
              return (
                <TableCell style={{ padding: 0 }}>
                  {!currentItem
                    ? <></>
                    :<Collapse
                      key={collapseId}
                      // component="table"
                      in={state[collapseId]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <div className="task-info">
                        <p>{currentItem.done ? Math.floor(currentItem.done * 100 / currentItem.amount) : 0}%</p>
                        <span>{currentItem.amount}</span>
                      </div>
                    </Collapse>
                  }
                </TableCell>
              )
            })}
          </TableRow>
          {treeTable(task.next_level, task.id)}
        </>
      )
    });
  }

  return (
    <div className='table'>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map(({ key }) => (
              <TableCell key={key}>
                <div>{key}</div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{treeTable(data, "parentTasks")}</TableBody>
      </Table>
    </div>
  );
}
