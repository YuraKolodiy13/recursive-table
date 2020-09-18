export const data = [
  {
    id: "technical_barriers",
    tasks_by_years: [
      {year: 2017, amount: 5, done: 5},
      {year: 2020, amount: 2, done: 2},
      {year: 2018, amount: 10, done: 8, not_started: 2},
      {year: 2019, amount: 10, done: 8, not_started: 2},
      {year: 2021, amount: 1, not_started: 1},
    ],
    next_level: [
      {
        id: "vertical_legislation",
        tasks_by_years: [
          {year: 2017, amount: 5, done: 5},
          {year: 2020, amount: 2, done: 2},
          {year: 2018, amount: 10, done: 8, not_started: 2},
          {year: 2019, amount: 10, done: 8, not_started: 2},
          {year: 2021, amount: 1, not_started: 1},
        ],
        next_level: [
          {
            id: "protective_systems",
            tasks_by_years: [
              {year: 2018, amount: 22},
              {year: 2015, amount: 2}
            ],
          },
          {
            id: "protection_equipment",
            tasks_by_years: [
              {year: 2019, amount: 10},
              {year: 2015, amount: 2}
            ],
          },
          {
            id: "building_products",
            tasks_by_years: [
              {year: 2014, amount: 10},
              {year: 2015, amount: 2}
            ],
          },
          {
            id: "pressure_equipment",
            tasks_by_years: [
              {year: 2015, amount: 10},
              {year: 2016, amount: 2}
            ],
          }
        ],
      },
      {
        id: "horizontal_legislation",
        tasks_by_years: [
          {year: 2020, amount: 10},
          {year: 2018, amount: 2}
        ],
      }
    ],
  },
  {
    id: "phytosanitary_measures",
    next_level: [
      {
        id: "test-3",
        tasks_by_years: [
          {year: 2017, amount: 5, done: 5},
          {year: 2018, amount: 2},
        ],
      },
      {
        id: "test-223",
        tasks_by_years: [
          {year: 2017, amount: 10},
          {year: 2018, amount: 2},
        ],
      }
    ],
    tasks_by_years: [
      {year: 2020, amount: 56, not_started: 56},
      {year: 2019, amount: 42, done: 4, not_started: 38},
      {year: 2018, amount: 97, done: 11, not_started: 86},
    ]
  },
];