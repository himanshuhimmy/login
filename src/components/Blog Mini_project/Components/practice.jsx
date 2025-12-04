import { useState } from "react";

const [user, setUser] = useState([
  {
    routine: [
      {
        times: [
          { breakfastTime: "8:00AM" },
          { lunchTime: "1:00PM" },
          { dinnerTime: "8:00PM" },
          { offtime: "10:00PM" },
          { reachHome: "6:00PM" },
          { leaveWork: "5:00PM" },
          { wakeupTime: "6:00AM" },
          { workoutTime: "6:30AM" },
          { sleepTime: "11:00PM" },
        ],
        eatings: [
          {
            breakfastFood: [
              { item1: `poha`, carbs: 30, fats: 10, protien: 5 },
              { item2: `bread`, carbs: 40, fats: 20, protien: 10 },
            ],
          },
          {
            lunchFood: [
              { item1: `chapati`, carbs: 30, fats: 10, protien: 5 },
              { item2: `bhaji`, carbs: 50, fats: 10, protien: 15 },
            ],
          },
          {
            dinnerFood: [
              { item1: `rice`, carbs: 30, fats: 10, protien: 5 },
              { item2: `daal`, carbs: 50, fats: 10, protien: 15 },
            ],
          },
        ],
      },
    ],

    foodtypes: [
      { favouriteFood: "idli , dhosa ,menduvada" },
      { leastFavouriteFood: "broccoli , cabbage , brinjal" },
      { neutralFood: "paneer , aloo , chole" },
    ],

    badHabbits: [
      { habit1: { type: `smoking`, frequency: "daily" } },
      { habit2: { type: `alcohol`, frequency: "weekly" } },
      { habit3: { type: `over-eating`, frequency: "occasionally" } },
    ],

    specialConditions: [
      { condition1: { type: `diabetes`, file: "attachment" } },
      { condition2: { type: `hypertension`, file: "attachment" } },
    ],
    injurys: [
      { injury1: { type: `knee pain`, file: "attachment" } },
      { injury2: { type: `back pain`, file: "attachment" } },
    ],
    mesurements: [
      {
        weight: 70,
        height: 175,
        bmi: 22.9,
        chest: 95,
        waist: 80,
        belly: 85,
        hip: 90,
        biceps: 30,
        thigh: 50,
        calf: 35,
        shoeSize: 42,
        dressSize: "M",
        shoulders: 45,
      },
    ],

    allergies: [
      { allergy1: { type: `peanuts`, severity: "high" } },
      { allergy2: { type: `dust`, severity: "medium" } },
    ],

    stressLevels: [
      { level: "moderate", triggers: "workload, personal issues", outof10: 6 },
    ],
    goals: [
      { goal1: { type: `weight loss`, target: "5kg in 2 months" } },
      { goal2: { type: `muscle gain`, target: "3kg in 3 months" } },
    ],

    personalrecords: [
      { endurance: { distance: `5km`, time: "25 minutes" } },
      { benchPress: { weight: "80kg", reps: 10 } },
      { squats: { weight: "100kg", reps: 8 } },
      { deadlift: { weight: "120kg", reps: 6 } },
    ],

    adminAccess: [
      {
        access: true,

        payment: {
          first: [
            { amount: 5000 },
            { date: "2024-01-01" },
            { method: "credit card" },
            { status: "paid" },
            { receipt: "attachment" },
            { discount: 0 },
          ],
          second: [
            { amount: 5000 },
            { date: "2024-02-01" },
            { method: "credit card" },
            { status: "paid" },
            { receipt: "attachment" },
            { discount: 0 },
          ],
        },
      },
    ],

    graphData: [
      {
        month: "January",
        weight: 70,
        bmi: 22.9,
        endurance: 25,
        bodyfat: 18,
        musclemass: 40,
      },
      {
        month: "February",
        weight: 68,
        bmi: 22.5,
        endurance: 24,
        bodyfat: 17,
        musclemass: 41,
      },
    ],

    assingedDietPlans: [
      {
        month: "January",
        plan: "Weight Loss Plan",
        review: [
          { first: [{ issue: `time management`, issueStatus: false }] },
          {
            second: [{ issue: `time management`, issueStatus: false }],
          },
        ],
        status: false,
        meals: [
          {
            breakfast: [
              { item1: `poha`, carbs: 30, fats: 10, protien: 5 },
              { item2: `bread`, carbs: 40, fats: 20, protien: 10 },
            ],
          },
          {
            lunch: [
              { item1: `chapati`, carbs: 30, fats: 10, protien: 5 },
              { item2: `bhaji`, carbs: 50, fats: 10, protien: 15 },
            ],
          },
          {
            dinner: [
              { item1: `rice`, carbs: 30, fats: 10, protien: 5 },
              { item2: `daal`, carbs: 50, fats: 10, protien: 15 },
            ],
          },
        ],
      },
      {
        month: "February",
        plan: "Muscle Gain Plan",
        review: [
          { first: [{ issue: `time management`, issueStatus: false }] },
          {
            second: [{ issue: `time management`, issueStatus: false }],
          },
        ],
        status: true,
        meals: [
          {
            breakfast: [
              { item1: `poha`, carbs: 30, fats: 10, protien: 5 },
              { item2: `bread`, carbs: 40, fats: 20, protien: 10 },
            ],
          },
          {
            lunch: [
              { item1: `chapati`, carbs: 30, fats: 10, protien: 5 },
              { item2: `bhaji`, carbs: 50, fats: 10, protien: 15 },
            ],
          },
          {
            dinner: [
              { item1: `rice`, carbs: 30, fats: 10, protien: 5 },
              { item2: `daal`, carbs: 50, fats: 10, protien: 15 },
            ],
          },
        ],
      },
    ],
  },
]);
