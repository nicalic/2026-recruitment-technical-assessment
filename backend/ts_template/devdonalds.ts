import express, { Request, Response } from "express";

// ==== Type Definitions, feel free to add or modify ==========================
interface cookbookEntry {
  name: string;
  type: string;
}

interface requiredItem {
  name: string;
  quantity: number;
}

interface recipe extends cookbookEntry {
  requiredItems: requiredItem[];
}

interface ingredient extends cookbookEntry {
  cookTime: number;
}

// =============================================================================
// ==== HTTP Endpoint Stubs ====================================================
// =============================================================================
const app = express();
app.use(express.json());

// Store your recipes here!
const cookbook: (recipe | ingredient)[] = [];

// Task 1 helper (don't touch)
app.post("/parse", (req:Request, res:Response) => {
  const { input } = req.body;

  const parsed_string = parse_handwriting(input)
  if (parsed_string == null) {
    res.status(400).send("this string is cooked");
    return;
  } 
  res.json({ msg: parsed_string });
  return;
  
});

// [TASK 1] ====================================================================
// Takes in a recipeName and returns it in a form that 
const parse_handwriting = (recipeName: string): string | null => {
  // g -> global flag, i -> ignore case flag
  let name = recipeName.replace(/[-_]+/g, ' ').replace(/[^a-z\s]/gi, '');
  
  // trim whitespace and split into words by whitespaces
  let words = name.trim().split(/\s+/g);

  // transform each word to title case
  words = words.map(w => w.slice(0, 1).toUpperCase() + w.slice(1).toLowerCase());
  name = words.join(' ');

  // return null if no words left
  return name.length > 0 ? name : null;
}

// [TASK 2] ====================================================================
// Endpoint that adds a CookbookEntry to your magical cookbook
app.post("/entry", (req:Request, res:Response) => {
  // destructure fields from request body
  const { type, name, requiredItems, cookTime } = req.body;

  try {
    res.json(addEntry(type, name, requiredItems, cookTime));
  } catch(err) {
    // log error message to console
    console.log(err.message);
    res.status(400).json({});
  }
});

// Adds an entry to the cookbook after error checks and processing.
const addEntry = (type: string, name: string, requiredItems: requiredItem[] = [],
                  cookTime: number = -1) => {
  if (type !== "recipe" && type !== "ingredient") {
    throw new Error("type can only be \"recipe\" or \"ingredient\".");
  }

  if (cookbook.some(e => e.name === name)) {
    throw new Error("entry names must be unique");
  }

  let entry: recipe | ingredient;

  if (type === "ingredient") {
    if (cookTime < 0) {
      throw new Error("cookTime can only be greater than or equal to 0");
    }

    entry = { type, name, cookTime };
  } else {
    // type === 'recipe'
    // check unique element names
    const elements = new Set();
    requiredItems.forEach(e => elements.add(e.name.toLowerCase()));
    if (elements.size !== requiredItems.length) {
      throw new Error("Recipe requiredItems can only have one element per name.");
    }

    entry = { type, name, requiredItems };
  }

  cookbook.push(entry);
  return {};
}

// [TASK 3] ====================================================================
// Endpoint that returns a summary of a recipe that corresponds to a query name
app.get("/summary", (req:Request, res:Request) => {
  const name = req.query.name as string;

  try {
    res.json(summariseRecipe(name));
  } catch(err) {
    console.log(err.message);
    res.status(400).json({});
  }
});

// Reduces recipe down to name, cooktime and a list of ingredients.
const summariseRecipe = (name: string) => {
  const result = { name, cookTime: 0, ingredients: [] as requiredItem[] };

  // recursively add ingredients to result
  const addToSummary = (name: string, quantity: number, root: boolean = false) => {
    const entry = cookbook.find(e => e.name === name);
    // Array.find() returns undefined if not found
    if (entry === undefined) {
      throw new Error("Recipe or ingredient not in the cookbook.");
    }

    if ("cookTime" in entry) {
      // root name searched has to be a recipe
      if (root) throw new Error("searched name is NOT a recipe name");

      result.ingredients.push({ name, quantity });
      result.cookTime += entry.cookTime * quantity;
    } else {
      entry.requiredItems.forEach(i => addToSummary(i.name, i.quantity * quantity));
    }
  }

  addToSummary(name, 1, true);
  return result;
}

// =============================================================================
// ==== DO NOT TOUCH ===========================================================
// =============================================================================
const port = 8080;
app.listen(port, () => {
  console.log(`Running on: http://127.0.0.1:8080`);
});
