const USER_MAIN_DATA = [
  {
    id: 12,
    userInfos: {
      firstName: "Jean",
      lastName: "Dupont",
      age: 42,
    },
    todayScore: 0.45,
    keyData: {
      calorieCount: 1330,
      proteinCount: 151,
      carbohydrateCount: 390,
      lipidCount: 10,
    },
  },
  {
    id: 18,
    userInfos: {
      firstName: "Jeanne",
      lastName: "Martin",
      age: 26,
    },
    score: 0.9,
    keyData: {
      calorieCount: 4600,
      proteinCount: 390,
      carbohydrateCount: 10,
      lipidCount: 10,
    },
  },
];

const USER_ACTIVITY = [
  {
    userId: 12,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 70,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 72,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 75,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 71,
        calories: 290,
      },
      {
        day: "2020-07-05",
        kilogram: 71,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 70,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 66,
        calories: 390,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 53,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 57,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 53,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 53,
        calories: 500,
      },
      {
        day: "2020-07-05",
        kilogram: 57,
        calories: 160,
      },
      {
        day: "2020-07-06",
        kilogram: 57,
        calories: 162,
      },
      {
        day: "2020-07-07",
        kilogram: 57,
        calories: 390,
      },
    ],
  },
];

const USER_AVERAGE_SESSIONS = [
  {
    userId: 12,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 23,
      },
      {
        day: 3,
        sessionLength: 45,
      },
      {
        day: 4,
        sessionLength: 50,
      },
      {
        day: 5,
        sessionLength: 30,
      },
      {
        day: 6,
        sessionLength: 35,
      },
      {
        day: 7,
        sessionLength: 18,
      },
    ],
  },
  {
    userId: 18,
    sessions: [
      {
        day: 1,
        sessionLength: 30,
      },
      {
        day: 2,
        sessionLength: 40,
      },
      {
        day: 3,
        sessionLength: 50,
      },
      {
        day: 4,
        sessionLength: 30,
      },
      {
        day: 5,
        sessionLength: 30,
      },
      {
        day: 6,
        sessionLength: 50,
      },
      {
        day: 7,
        sessionLength: 50,
      },
    ],
  },
];

const USER_PERFORMANCE = [
  {
    userId: 12,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 80,
        kind: 1,
      },
      {
        value: 120,
        kind: 2,
      },
      {
        value: 140,
        kind: 3,
      },
      {
        value: 50,
        kind: 4,
      },
      {
        value: 200,
        kind: 5,
      },
      {
        value: 90,
        kind: 6,
      },
    ],
  },
  {
    userId: 18,
    kind: {
      1: "cardio",
      2: "energy",
      3: "endurance",
      4: "strength",
      5: "speed",
      6: "intensity",
    },
    data: [
      {
        value: 200,
        kind: 1,
      },
      {
        value: 240,
        kind: 2,
      },
      {
        value: 80,
        kind: 3,
      },
      {
        value: 80,
        kind: 4,
      },
      {
        value: 220,
        kind: 5,
      },
      {
        value: 110,
        kind: 6,
      },
    ],
  },
];

export const mockData = {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
};
