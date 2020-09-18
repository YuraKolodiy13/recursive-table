import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getNextLevelTasks, getTasks} from "../../store/actions/tasksAction";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import Material from "../../components/material/material";


const Home = () => {
  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const tasks = useSelector(state => state.tasksState.tasks);
  const nextLevelTasks = useSelector(state => state.tasksState.nextLevelTasks);
  const dispatch = useDispatch();

  const columns = [
    {
      dataField: 'id',
      text: 'Sectors'
    },
    {
      dataField: 'all_years',
      text: 'All years'
    },
    {
      dataField: '2014',
      text: '2014'
    },
    {
      dataField: '2015',
      text: '2015'
    },
    {
      dataField: '2016',
      text: '2016'
    },
    {
      dataField: '2017',
      text: '2017'
    },
    {
      dataField: '2018',
      text: '2018'
    },
    {
      dataField: '2019',
      text: '2019'
    },
    {
      dataField: '2020',
      text: '2020'
    },
  ];

  const expandRow = {
    renderer: row => (
      <>
        {console.log(row, 'row')}
        {row.next_level && (
          <>
            <p>request here</p>
            {console.log(nextLevelTasks, 'nextLevelTasks')}
          </>
        )}
      </>
    ),
    onlyOneExpanding: true
  };


  return (
    <div>
      home

      {/*{tasks.parts && (*/}
      {/*  <BootstrapTable*/}
      {/*    keyField='id'*/}
      {/*    data={tasks.parts.map(item => {*/}
      {/*      console.log(item, 'item')*/}
      {/*      return {*/}
      {/*        id: item.id,*/}
      {/*        // all_years: 32432,*/}
      {/*        next_level: item.next_level,*/}
      {/*        2014: item.tasks_by_years.find(el => el.year === 2014) && item.tasks_by_years.find(el => el.year === 2014).amount,*/}
      {/*        2015: item.tasks_by_years.find(el => el.year === 2015) && item.tasks_by_years.find(el => el.year === 2015).amount,*/}
      {/*        2016: item.tasks_by_years.find(el => el.year === 2016) && item.tasks_by_years.find(el => el.year === 2016).amount,*/}
      {/*        2017: item.tasks_by_years.find(el => el.year === 2017) && item.tasks_by_years.find(el => el.year === 2017).amount,*/}
      {/*        2018: item.tasks_by_years.find(el => el.year === 2018) && item.tasks_by_years.find(el => el.year === 2018).amount,*/}
      {/*        2019: item.tasks_by_years.find(el => el.year === 2019) && item.tasks_by_years.find(el => el.year === 2019).amount,*/}
      {/*        2020: item.tasks_by_years.find(el => el.year === 2020) && item.tasks_by_years.find(el => el.year === 2020).amount,*/}
      {/*      }*/}
      {/*    })}*/}
      {/*    columns={columns}*/}
      {/*    expandRow={expandRow}*/}
      {/*    noDataIndication="No results found"*/}
      {/*  />*/}
      {/*)}*/}


      <Material/>
    </div>
  )
};

export default Home;