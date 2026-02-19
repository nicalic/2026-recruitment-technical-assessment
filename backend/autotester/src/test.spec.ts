const request = require("supertest");

describe("Task 1", () => {
  describe("POST /parse", () => {
    const getTask1 = async (inputStr) => {
      return await request("http://localhost:8080")
        .post("/parse")
        .send({ input: inputStr });
    };

    it("example1", async () => {
      const response = await getTask1("Riz@z RISO00tto!");
      expect(response.body).toStrictEqual({ msg: "Rizz Risotto" });
    });

    it("example2", async () => {
      const response = await getTask1("alpHa-alFRedo");
      expect(response.body).toStrictEqual({ msg: "Alpha Alfredo" });
    });

    // test for multiple whitespaces (including trailing and leading)
    it("white space example", async () => {
      const response = await getTask1("   Skibidi___Spaghetti  ");
      expect(response.body).toStrictEqual({ msg: "Skibidi Spaghetti" });
    });

    // test for zero length (null)
    it("null example", async () => {
      const response = await getTask1("__1234--(!)  ");
      expect(response.status).toBe(400);
    })

    it("error case", async () => {
      const response = await getTask1("");
      expect(response.status).toBe(400);
    });
  });
});

describe("Task 2", () => {
  describe("POST /entry", () => {
    const putTask2 = async (data) => {
      return await request("http://localhost:8080").post("/entry").send(data);
    };

    it("Add Ingredients", async () => {
      const entries = [
        { type: "ingredient", name: "Egg", cookTime: 6 },
        { type: "ingredient", name: "Lettuce", cookTime: 1 },
      ];
      for (const entry of entries) {
        const resp = await putTask2(entry);
        expect(resp.status).toBe(200);
        expect(resp.body).toStrictEqual({});
      }
    });

    it("Add Recipe", async () => {
      const meatball = {
        type: "recipe",
        name: "Meatball",
        requiredItems: [{ name: "Beef", quantity: 1 }],
      };
      const resp1 = await putTask2(meatball);
      expect(resp1.status).toBe(200);
    });

    it("Congratulations u burnt the pan pt2", async () => {
      const resp = await putTask2({
        type: "ingredient",
        name: "beef",
        cookTime: -1,
      });
      expect(resp.status).toBe(400);
    });

    it("Congratulations u burnt the pan pt3", async () => {
      const resp = await putTask2({
        type: "pan",
        name: "pan",
        cookTime: 20,
      });
      expect(resp.status).toBe(400);
    });

    it("Unique names", async () => {
      const resp = await putTask2({
        type: "ingredient",
        name: "Beef",
        cookTime: 10,
      });
      expect(resp.status).toBe(200);

      const resp2 = await putTask2({
        type: "ingredient",
        name: "Beef",
        cookTime: 8,
      });
      expect(resp2.status).toBe(400);

      const resp3 = await putTask2({
        type: "recipe",
        name: "Beef",
        requiredItems: [],
      });
      expect(resp3.status).toBe(400);
    });

    // test for one element per name in requiredItems
    it("One element per name in requiredItems", async () => {
      const resp = await putTask2({
        type: "recipe",
        name: "Burger",
        requiredItems: [
          { name: "Beef", quantity: 1 },
          { name: "Lettuce", quantity: 1 },
          { name: "Beef", quantity: 3 }
        ]
      });
      expect(resp.status).toBe(400);
    });
  });
});

describe("Task 3", () => {
  describe("GET /summary", () => {
    const postEntry = async (data) => {
      return await request("http://localhost:8080").post("/entry").send(data);
    };

    const getTask3 = async (name) => {
      return await request("http://localhost:8080").get(
        `/summary?name=${name}`
      );
    };

    it("What is bro doing - Get empty cookbook", async () => {
      const resp = await getTask3("nothing");
      expect(resp.status).toBe(400);
    });

    it("What is bro doing - Get ingredient", async () => {
      const resp = await postEntry({
        type: "ingredient",
        name: "beef",
        cookTime: 2,
      });
      expect(resp.status).toBe(200);

      const resp2 = await getTask3("beef");
      expect(resp2.status).toBe(400);
    });

    it("Unknown missing item", async () => {
      const cheese = {
        type: "recipe",
        name: "Cheese",
        requiredItems: [{ name: "Not Real", quantity: 1 }],
      };
      const resp1 = await postEntry(cheese);
      expect(resp1.status).toBe(200);

      const resp2 = await getTask3("Cheese");
      expect(resp2.status).toBe(400);
    });

    // Ingredients exist in cookbook, but one missing ingredient
    it("Search cookbook for missing item", async () => {
      const resp1 = await postEntry({
        type: "recipe",
        name: "Sandwich",
        requiredItems: [
          { name: "Chicken", quantity: 1 },
          { name: "Spinach", quantity: 1 },
          { name: "Bun", quantity: 2 }
        ]
      });
      expect(resp1.status).toBe(200);

      const resp2 = await postEntry({
        type: "ingredient",
        name: "Chicken",
        cookTime: 5
      });
      expect(resp2.status).toBe(200);

      const resp3 = await postEntry({
        type: "ingredient",
        name: "Spinach",
        cookTime: 2
      });
      expect(resp3.status).toBe(200);

      const resp4 = await getTask3("Sandwich");
      expect(resp4.status).toBe(400);
    });

    it("Bro cooked", async () => {
      const meatball = {
        type: "recipe",
        name: "Skibidi",
        requiredItems: [{ name: "Bruh", quantity: 1 }],
      };
      const resp1 = await postEntry(meatball);
      expect(resp1.status).toBe(200);

      const resp2 = await postEntry({
        type: "ingredient",
        name: "Bruh",
        cookTime: 2,
      });
      expect(resp2.status).toBe(200);

      const resp3 = await getTask3("Skibidi");
      expect(resp3.status).toBe(200);
    });

    // test returned object matches spec
    it("Correct result", async () => {
      const resp1 = await postEntry({
        type: "recipe",
        name: "Burger",
        requiredItems: [
          { name: "Patty", quantity: 1 },
          { name: "Lettuce", quantity: 1 },
          { name: "Bun", quantity: 2 }
        ]
      });
      expect(resp1.status).toBe(200);

      const resp2 = await postEntry({
        type: "ingredient",
        name: "Bun",
        cookTime: 4
      });
      expect(resp2.status).toBe(200);

      const resp3 = await postEntry({
        type: "recipe",
        name: "Patty",
        requiredItems: [
          { name: "Chicken", quantity: 3 }
        ]
      });
      expect(resp3.status).toBe(200);

      const finalResp = await getTask3("Burger");
      expect(finalResp.status).toBe(200);
      //.toStrictEqual does not check array order! See jest docs
      expect(finalResp.body).toStrictEqual({
        "name": "Burger",
        "cookTime": 24,
        "ingredients": [
          {
            "name": "Chicken",
            "quantity": 3
          },
          {
            "name": "Lettuce",
            "quantity": 1
          },
          {
            "name": "Bun",
            "quantity": 2
          }
        ]
      });
    });
  });
});
