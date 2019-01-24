import { todos } from "./todos";

describe("todos reducer", () => {
  it("should handle initial state", () => {
    expect(todos.reducer(undefined, {})).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });

  it("should handle add", () => {
    expect(
      todos.reducer([], todos.actions.add({ text: "Run the tests" }))
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 0
      }
    ]);

    expect(
      todos.reducer(
        [
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        todos.actions.add({ text: "Run the tests" })
      )
    ).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0
      },
      {
        text: "Run the tests",
        completed: false,
        id: 1
      }
    ]);

    expect(
      todos.reducer(
        [
          {
            text: "Use Redux",
            completed: false,
            id: 0
          },
          {
            text: "Run the tests",
            completed: false,
            id: 1
          }
        ],
        todos.actions.add({ text: "Fix the tests" })
      )
    ).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0
      },
      {
        text: "Run the tests",
        completed: false,
        id: 1
      },
      {
        text: "Fix the tests",
        completed: false,
        id: 2
      }
    ]);
  });

  it("should handle delete", () => {
    expect(
      todos.reducer(
        [
          {
            text: "Use Redux",
            completed: false,
            id: 0
          },
          {
            text: "Run the tests",
            completed: false,
            id: 1
          }
        ],
        todos.actions.delete({ id: 1 })
      )
    ).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });

  it("should handle edit", () => {
    expect(
      todos.reducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        todos.actions.edit({ text: "Fix the tests", id: 1 })
      )
    ).toEqual([
      {
        text: "Fix the tests",
        completed: false,
        id: 1
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });

  it("should handle complete", () => {
    expect(
      todos.reducer(
        [
          {
            text: "Run the tests",
            completed: false,
            id: 1
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        todos.actions.complete({ id: 1 })
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: true,
        id: 1
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });

  it("should handle completeAll", () => {
    expect(
      todos.reducer(
        [
          {
            text: "Run the tests",
            completed: true,
            id: 1
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        todos.actions.completeAll()
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: true,
        id: 1
      },
      {
        text: "Use Redux",
        completed: true,
        id: 0
      }
    ]);

    // Unmark if all todos are currently completed
    expect(
      todos.reducer(
        [
          {
            text: "Run the tests",
            completed: true,
            id: 1
          },
          {
            text: "Use Redux",
            completed: true,
            id: 0
          }
        ],
        todos.actions.completeAll()
      )
    ).toEqual([
      {
        text: "Run the tests",
        completed: false,
        id: 1
      },
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });

  it("should handle clearCompleted", () => {
    expect(
      todos.reducer(
        [
          {
            text: "Run the tests",
            completed: true,
            id: 1
          },
          {
            text: "Use Redux",
            completed: false,
            id: 0
          }
        ],
        todos.actions.clearCompleted()
      )
    ).toEqual([
      {
        text: "Use Redux",
        completed: false,
        id: 0
      }
    ]);
  });

  it("should not generate duplicate ids after clearCompleted", () => {
    expect(
      [
        todos.actions.complete({ id: 0 }),
        todos.actions.clearCompleted(),
        todos.actions.add({
          text: "Write more tests"
        })
      ].reduce(todos.reducer, [
        {
          id: 0,
          completed: false,
          text: "Use Redux"
        },
        {
          id: 1,
          completed: false,
          text: "Write tests"
        }
      ])
    ).toEqual([
      {
        text: "Write tests",
        completed: false,
        id: 1
      },
      {
        text: "Write more tests",
        completed: false,
        id: 2
      }
    ]);
  });
});
