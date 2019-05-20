const pages = [
  {
    description: "health",
    collapsed: false,
    selected: false,
    features: [
      { 
        description: "Book Appointment",
        selected: false,
        collapsed: false,
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
        collapsed: false, 
        editable: false,
        defects: [] 
      }
    ]
  },
  {
    description: "driver",
    collapsed: false,
    selected: false,
    features: [
      { 
        description: "Add Driver",
        selected: false,
        collapsed: false,
        editable: false,
        defects: [
          {
            description: "Unable to add driver", 
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
            description: "No Error Message shown", 
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
            description: "Driver dies irl", 
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
        description: "Remove Driver", 
        selected: false,
        collapsed: false, 
        editable: false,
        defects: [] 
      }
    ]
  },
  {
    description: "Live Map",
    collapsed: false,
    selected: false,
    features: [
      { 
        description: "Geofences",
        selected: false,
        collapsed: false,
        editable: false,
        defects: [
          {
            description: "Unable to create geofence", 
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
        ]
      },
      { 
        description: "Live Vehicles", 
        selected: false,
        collapsed: false, 
        editable: false,
        defects: [] 
      }
    ]
  }
];

export { pages }