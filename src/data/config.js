const pages = [
  {
    description: "health",
    selected: false,
    features: [
      { 
        description: "Book Appointment",
        selected: false,
        editable: false,
        defects: [
          {
            description: "Unable to create booking", 
            editable: false,
            currentBehavior: "Should work",
            expectedBehavior: "Does not work",
            stepsToReproduce: "idk my bff Jan",
            severity: 2,
            createdAt: Date.now(),
            updatedAt: 0,
            deleted: false,
            deletedAt: 0
          },
          {
            description: "Unable to update appointment", 
            editable: false,
            currentBehavior: "Should work",
            expectedBehavior: "Does not work",
            stepsToReproduce: "idk my bff Jan",
            severity: 3,
            createdAt: Date.now(),
            updatedAt: 0,
            deleted: false,
            deletedAt: 0
          },
          {
            description: "Unable to save appointment", 
            editable: false,
            currentBehavior: "Should work",
            expectedBehavior: "Does not work",
            stepsToReproduce: "idk my bff Jan",
            severity: 4,
            createdAt: Date.now(),
            updatedAt: 0,
            deleted: false,
            deletedAt: 0
          }
        ]
      },
      { 
        description: "Cancel Appointment", 
        selected: false, 
        editable: false,
        defects: [] 
      }
    ]
  }
];

export { pages }