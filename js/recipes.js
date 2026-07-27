
const recipes = [
  {
    id: 1,
    name: "Caprese Sandwich",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    image:
      "https://images.pexels.com/photos/30925490/pexels-photo-30925490.jpeg?auto=compress&cs=tinysrgb&h=700&fit=crop&w=1000",
    rating: 4.5,
    reviewsCount: 189,
    difficulty: "Easy",
    cuisine: "Italian",
    prepTime: 10,
    cookTime: 5,
    servings: 2,

    ingredients: [
      "1 ciabatta bread",
      "200g fresh mozzarella, sliced",
      "2 large tomatoes, sliced",
      "Fresh basil leaves",
      "3 tablespoons pesto",
      "2 tablespoons balsamic glaze",
      "Olive oil",
      "Salt and pepper",
    ],

    instructions: [
      "Slice the ciabatta bread in half lengthwise.",
      "Spread pesto generously on both halves of the bread.",
      "Layer the mozzarella slices on the bottom half.",
      "Add the tomato slices and fresh basil leaves on top.",
      "Drizzle with olive oil and balsamic glaze, then season with salt and pepper.",
      "Close the sandwich, press gently, and slice in half to serve.",
    ],

    nutrition: {
      calories: 420,
      protein: 18,
      carbs: 45,
      fat: 20,
    },

    tips: [
      "Use fresh buffalo mozzarella for the creamiest texture.",
      "Toast the ciabatta lightly first for extra crunch.",
      "Salt the tomato slices and let them sit 5 minutes to remove excess water before assembling.",
    ],
  },

  {
    id: 2,
    name: "Chicken Shawarma Wrap",
    description: "Juicy marinated chicken wrapped in flatbread with garlic sauce and pickles",
    image:
      "https://images.pexels.com/photos/29306505/pexels-photo-29306505.jpeg?auto=compress&cs=tinysrgb&h=700&fit=crop&w=1000",
    rating: 4.7,
    reviewsCount: 254,
    difficulty: "Easy",
    cuisine: "Middle Eastern",
    prepTime: 20,
    cookTime: 15,
    servings: 3,

    ingredients: [
      "500g chicken breast, sliced thin",
      "2 tablespoons yogurt",
      "2 garlic cloves, minced",
      "1 lemon, juiced",
      "1 tablespoon shawarma spice mix",
      "3 flatbreads or pita",
      "3 tablespoons garlic sauce (toum)",
      "Pickles, sliced",
      "1 tomato, sliced",
      "Shredded lettuce",
    ],

    instructions: [
      "Mix yogurt, garlic, lemon juice, and shawarma spice, then coat the chicken and marinate for at least 30 minutes.",
      "Grill or pan-sear the chicken until golden and fully cooked, about 8-10 minutes.",
      "Warm the flatbread on a dry pan for a few seconds on each side.",
      "Spread garlic sauce over the flatbread.",
      "Layer the chicken, pickles, tomato, and lettuce.",
      "Roll the wrap tightly and slice in half to serve.",
    ],

    nutrition: {
      calories: 520,
      protein: 34,
      carbs: 48,
      fat: 20,
    },

    tips: [
      "Marinate the chicken overnight for deeper flavor.",
      "A hot pan or grill gives the chicken slightly charred edges, just like real shawarma.",
      "Wrap the roll in foil for a few minutes before slicing — it helps it hold together.",
    ],
  },

  {
    id: 3,
    name: "Beef Tacos",
    description: "Seasoned ground beef in crispy shells with fresh toppings",
    image:
      "https://images.pexels.com/photos/17812436/pexels-photo-17812436.jpeg?auto=compress&cs=tinysrgb&h=700&fit=crop&w=1000",
    rating: 4.6,
    reviewsCount: 312,
    difficulty: "Easy",
    cuisine: "Mexican",
    prepTime: 15, 
    cookTime: 15, 
    servings: 4,

    ingredients: [
      "500g ground beef",
      "8 taco shells",
      "1 onion, diced",
      "2 garlic cloves, minced",
      "2 tablespoons taco seasoning",
      "1 cup shredded cheese",
      "Shredded lettuce",
      "1 tomato, diced",
      "Sour cream",
      "1 lime, cut into wedges",
    ],

    instructions: [
      "Cook the onion and garlic in a pan until softened.",
      "Add the ground beef and cook until browned, breaking it up as it cooks.",
      "Stir in the taco seasoning and a splash of water, then simmer for 5 minutes.",
      "Warm the taco shells in the oven or a dry pan.",
      "Fill each shell with beef, cheese, lettuce, and tomato.",
      "Top with sour cream and a squeeze of lime before serving.",
    ],

    nutrition: {
      calories: 480,
      protein: 26,
      carbs: 34,
      fat: 24,
    },

    tips: [
      "Drain excess fat from the beef for a less greasy filling.",
      "Warm shells crack less than cold ones when you fill them.",
      "Add a diced jalapeño for extra heat.",
    ],
  },

  {
    id: 4,
    name: "Greek Salad",
    description: "Crisp vegetables, olives, and feta tossed in a light dressing",
    image:
      "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&h=700&fit=crop&w=1000",
    rating: 4.4,
    reviewsCount: 167,
    difficulty: "Easy",
    cuisine: "Mediterranean",
    prepTime: 15,
    cookTime: 0, 
    servings: 4,

    ingredients: [
      "1 cucumber, chopped",
      "3 tomatoes, chopped",
      "1/2 red onion, thinly sliced",
      "1 green bell pepper, sliced",
      "1/2 cup kalamata olives",
      "200g feta cheese, in a block",
      "3 tablespoons olive oil",
      "1 tablespoon red wine vinegar",
      "1 teaspoon dried oregano",
      "Salt, to taste",
    ],

    instructions: [
      "Chop the cucumber, tomatoes, onion, and bell pepper and combine in a large bowl.",
      "Add the olives and toss gently.",
      "Place the block of feta on top rather than crumbling it, for a traditional look.",
      "Whisk together olive oil, vinegar, oregano, and salt.",
      "Drizzle the dressing over the salad just before serving.",
      "Serve with crusty bread on the side.",
    ],

    nutrition: {
      calories: 280,
      protein: 8,
      carbs: 12,
      fat: 22,
    },

    tips: [
      "Use ripe, in-season tomatoes for the best flavor.",
      "Keep the feta in a block rather than crumbling it for an authentic touch.",
      "Salt draws water out of vegetables, so dress the salad right before eating.",
    ],
  },

  {
    id: 5,
    name: "Chicken Alfredo Pasta",
    description: "Creamy parmesan sauce tossed with fettuccine and grilled chicken",
    image:
      "https://images.pexels.com/photos/37336685/pexels-photo-37336685.jpeg?auto=compress&cs=tinysrgb&h=700&fit=crop&w=1000",
    rating: 4.8,
    reviewsCount: 421,
    difficulty: "Medium",
    cuisine: "Italian",
    prepTime: 10, 
    cookTime: 25,
    servings: 4,

    ingredients: [
      "400g fettuccine",
      "2 chicken breasts, sliced",
      "3 tablespoons butter",
      "3 garlic cloves, minced",
      "1 1/2 cups heavy cream",
      "1 cup grated parmesan",
      "Salt and pepper",
      "Fresh parsley, chopped",
    ],

    instructions: [
      "Cook the fettuccine in salted boiling water until al dente, then drain.",
      "Season the chicken with salt and pepper and sear in a pan until cooked through, then set aside.",
      "In the same pan, melt the butter and cook the garlic until fragrant.",
      "Pour in the heavy cream and simmer for 2-3 minutes.",
      "Stir in the parmesan until the sauce is smooth and thickened.",
      "Slice the chicken, then toss it with the pasta and sauce. Garnish with parsley.",
    ],

    nutrition: {
      calories: 650,
      protein: 38,
      carbs: 52,
      fat: 32,
    },

    tips: [
      "Save a cup of pasta water before draining — it helps loosen the sauce if it gets too thick.",
      "Freshly grated parmesan melts smoother than pre-shredded cheese.",
      "Don't let the cream boil hard, or the sauce can separate.",
    ],
  },

  {
    id: 6,
    name: "Vegetable Stir Fry",
    description: "Crisp mixed vegetables tossed in a savory garlic-ginger sauce",
    image:
      "https://images.pexels.com/photos/19105514/pexels-photo-19105514.jpeg?auto=compress&cs=tinysrgb&h=700&fit=crop&w=1000",
    rating: 4.3,
    reviewsCount: 145,
    difficulty: "Easy",
    cuisine: "Asian",
    prepTime: 15,  
    cookTime: 10,  
    servings: 3,

    ingredients: [
      "1 cup broccoli florets",
      "1 carrot, sliced",
      "1 bell pepper, sliced",
      "1 cup snap peas",
      "2 garlic cloves, minced",
      "1 tablespoon ginger, minced",
      "3 tablespoons soy sauce",
      "1 tablespoon sesame oil",
      "1 teaspoon cornstarch",
      "2 green onions, sliced",
    ],

    instructions: [
      "Wash and chop all the vegetables into similar-sized pieces.",
      "Mix the soy sauce, sesame oil, and cornstarch in a small bowl to make the sauce.",
      "Heat a wok or large pan over high heat.",
      "Stir-fry the garlic and ginger for 30 seconds, then add the vegetables.",
      "Cook for 4-5 minutes, tossing frequently, until vegetables are crisp-tender.",
      "Pour in the sauce and cook for 1-2 more minutes until it thickens. Garnish with green onions.",
    ],

    nutrition: {
      calories: 220,
      protein: 6,
      carbs: 28,
      fat: 10,
    },

    tips: [
      "Keep the heat high and don't overcrowd the pan, or the vegetables will steam instead of sear.",
      "Cut vegetables to similar sizes so they cook evenly.",
      "Serve over steamed rice or noodles for a full meal.",
    ],
  },

];