// Import category images
import cakesImg from '@/assets/desserts/cakes.jpg';
import cookiesImg from '@/assets/desserts/cookies.jpg';
import piesImg from '@/assets/desserts/pies.jpg';
import iceCreamImg from '@/assets/desserts/ice-cream.jpg';
import macaronsImg from '@/assets/desserts/macarons.jpg';
import donutsImg from '@/assets/desserts/donuts.jpg';
import pastriesImg from '@/assets/desserts/pastries.jpg';
import puddingImg from '@/assets/desserts/pudding.jpg';
import browniesImg from '@/assets/desserts/brownies.jpg';
import italianImg from '@/assets/desserts/italian.jpg';
import asianImg from '@/assets/desserts/asian.jpg';
import frozenImg from '@/assets/desserts/frozen.jpg';

// Import type images
import chocolateCakeImg from '@/assets/types/chocolate-cake.jpg';
import ubeCakeImg from '@/assets/types/ube-cake.jpg';
import redVelvetImg from '@/assets/types/red-velvet.jpg';
import cheesecakeImg from '@/assets/types/cheesecake.jpg';
import chocolateChipImg from '@/assets/types/chocolate-chip.jpg';
import sugarCookiesImg from '@/assets/types/sugar-cookies.jpg';
import oatmealRaisinImg from '@/assets/types/oatmeal-raisin.jpg';
import snickerdoodleImg from '@/assets/types/snickerdoodle.jpg';
import applePieImg from '@/assets/types/apple-pie.jpg';
import pumpkinPieImg from '@/assets/types/pumpkin-pie.jpg';
import pecanPieImg from '@/assets/types/pecan-pie.jpg';
import lemonMeringueImg from '@/assets/types/lemon-meringue.jpg';
import vanillaIceCreamImg from '@/assets/types/vanilla-ice-cream.jpg';
import chocolateIceCreamImg from '@/assets/types/chocolate-ice-cream.jpg';
import strawberryIceCreamImg from '@/assets/types/strawberry-ice-cream.jpg';
import mintChipImg from '@/assets/types/mint-chip.jpg';
import classicBrownieImg from '@/assets/types/classic-brownie.jpg';
import walnutBrownieImg from '@/assets/types/walnut-brownie.jpg';
import creamCheeseBrownieImg from '@/assets/types/cream-cheese-brownie.jpg';
import blondeBrownieImg from '@/assets/types/blonde-brownie.jpg';
import vanillaCupcakeImg from '@/assets/types/vanilla-cupcake.jpg';
import redVelvetCupcakeImg from '@/assets/types/red-velvet-cupcake.jpg';
import lemonCupcakeImg from '@/assets/types/lemon-cupcake.jpg';
import chocolateCupcakeImg from '@/assets/types/chocolate-cupcake.jpg';
import glazedDonutImg from '@/assets/types/glazed-donut.jpg';
import chocolateDonutImg from '@/assets/types/chocolate-donut.jpg';
import bostonCreamImg from '@/assets/types/boston-cream.jpg';
import cinnamonSugarImg from '@/assets/types/cinnamon-sugar.jpg';
import chocolatePuddingImg from '@/assets/types/chocolate-pudding.jpg';
import vanillaPuddingImg from '@/assets/types/vanilla-pudding.jpg';
import ricePuddingImg from '@/assets/types/rice-pudding.jpg';
import breadPuddingImg from '@/assets/types/bread-pudding.jpg';
import fruitTartImg from '@/assets/types/fruit-tart.jpg';
import lemonTartImg from '@/assets/types/lemon-tart.jpg';
import chocolateTartImg from '@/assets/types/chocolate-tart.jpg';
import custardTartImg from '@/assets/types/custard-tart.jpg';
import chocolateMousseImg from '@/assets/types/chocolate-mousse.jpg';
import strawberryMousseImg from '@/assets/types/strawberry-mousse.jpg';
import mangoMousseImg from '@/assets/types/mango-mousse.jpg';
import coffeeMousseImg from '@/assets/types/coffee-mousse.jpg';

export interface Recipe {
  name: string;
  description: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  steps: string[];
}

export interface DessertType {
  id: string;
  name: string;
  emoji: string;
  image: string;
  recipe: Recipe;
}

export interface DessertCategory {
  id: string;
  name: string;
  emoji: string;
  description: string;
  image: string;
  types: DessertType[];
}

export const dessertCategories: DessertCategory[] = [
  {
    id: "cakes",
    name: "Cakes",
    emoji: "🎂",
    description: "Soft, fluffy, and perfect for celebrations",
    image: cakesImg,
    types: [
      {
        id: "chocolate-cake",
        name: "Chocolate Cake",
        emoji: "🍫",
        image: chocolateCakeImg,
        recipe: {
          name: "Classic Chocolate Cake",
          description: "Rich, moist, and decadently chocolatey",
          prepTime: "30 mins",
          cookTime: "35 mins",
          servings: 12,
          ingredients: [
            "2 cups all-purpose flour",
            "2 cups sugar",
            "3/4 cup unsweetened cocoa powder",
            "2 teaspoons baking soda",
            "1 teaspoon baking powder",
            "1 teaspoon salt",
            "2 eggs",
            "1 cup buttermilk",
            "1 cup hot water",
            "1/2 cup vegetable oil",
            "2 teaspoons vanilla extract"
          ],
          steps: [
            "Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
            "In a large bowl, combine flour, sugar, cocoa, baking soda, baking powder, and salt.",
            "Add eggs, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes.",
            "Stir in hot water (batter will be thin). Pour into prepared pans.",
            "Bake for 30-35 minutes or until a toothpick inserted comes out clean.",
            "Cool in pans for 10 minutes, then remove to wire racks to cool completely.",
            "Frost with your favorite chocolate frosting and serve."
          ]
        }
      },
      {
        id: "ube-cake",
        name: "Ube Cake",
        emoji: "💜",
        image: ubeCakeImg,
        recipe: {
          name: "Filipino Ube Cake",
          description: "Purple yam cake with creamy ube flavor",
          prepTime: "40 mins",
          cookTime: "30 mins",
          servings: 10,
          ingredients: [
            "2 1/2 cups cake flour",
            "1 3/4 cups sugar",
            "1 tablespoon baking powder",
            "1/2 teaspoon salt",
            "3/4 cup ube halaya (purple yam jam)",
            "1/2 cup vegetable oil",
            "7 egg yolks",
            "3/4 cup coconut milk",
            "1 teaspoon ube extract",
            "7 egg whites",
            "1/2 teaspoon cream of tartar"
          ],
          steps: [
            "Preheat oven to 325°F (165°C). Prepare a 10-inch tube pan.",
            "Sift together flour, 1 cup sugar, baking powder, and salt.",
            "In another bowl, mix ube halaya, oil, egg yolks, coconut milk, and ube extract.",
            "Add dry ingredients to wet ingredients and mix until smooth.",
            "Beat egg whites with cream of tartar until foamy, gradually add remaining sugar until stiff peaks form.",
            "Fold egg whites into the batter in three additions.",
            "Pour into pan and bake for 55-60 minutes. Invert and cool completely.",
            "Top with ube buttercream frosting."
          ]
        }
      },
      {
        id: "red-velvet",
        name: "Red Velvet",
        emoji: "❤️",
        image: redVelvetImg,
        recipe: {
          name: "Red Velvet Cake",
          description: "Stunning red cake with cream cheese frosting",
          prepTime: "25 mins",
          cookTime: "30 mins",
          servings: 12,
          ingredients: [
            "2 1/2 cups all-purpose flour",
            "1 1/2 cups sugar",
            "1 teaspoon baking soda",
            "1 teaspoon salt",
            "1 teaspoon cocoa powder",
            "1 1/2 cups vegetable oil",
            "1 cup buttermilk",
            "2 large eggs",
            "2 tablespoons red food coloring",
            "1 teaspoon vanilla extract",
            "1 teaspoon white vinegar"
          ],
          steps: [
            "Preheat oven to 350°F (175°C). Grease three 9-inch cake pans.",
            "Mix flour, sugar, baking soda, salt, and cocoa powder in a large bowl.",
            "Whisk oil, buttermilk, eggs, food coloring, vanilla, and vinegar in another bowl.",
            "Pour wet ingredients into dry and mix until just combined.",
            "Divide batter among pans and bake for 25-30 minutes.",
            "Cool completely before frosting with cream cheese frosting.",
            "Decorate with cake crumbs on the sides."
          ]
        }
      },
      {
        id: "cheesecake",
        name: "Cheesecake",
        emoji: "🧀",
        image: cheesecakeImg,
        recipe: {
          name: "New York Cheesecake",
          description: "Creamy, dense, and absolutely divine",
          prepTime: "20 mins",
          cookTime: "1 hour",
          servings: 12,
          ingredients: [
            "2 cups graham cracker crumbs",
            "1/4 cup sugar",
            "1/2 cup melted butter",
            "4 packages (8 oz each) cream cheese, softened",
            "1 cup sugar",
            "1 cup sour cream",
            "1 teaspoon vanilla extract",
            "4 large eggs"
          ],
          steps: [
            "Preheat oven to 325°F (165°C). Mix crumbs, sugar, and butter. Press into springform pan.",
            "Beat cream cheese and sugar until smooth. Add sour cream and vanilla.",
            "Add eggs one at a time, mixing on low after each.",
            "Pour over crust. Bake for 55-60 minutes until center is almost set.",
            "Turn off oven, crack door open, let cool in oven for 1 hour.",
            "Refrigerate for at least 4 hours or overnight.",
            "Serve with fresh berries or fruit sauce."
          ]
        }
      }
    ]
  },
  {
    id: "cookies",
    name: "Cookies",
    emoji: "🍪",
    description: "Crispy, chewy, and utterly irresistible",
    image: cookiesImg,
    types: [
      {
        id: "chocolate-chip",
        name: "Chocolate Chip",
        emoji: "🍫",
        image: chocolateChipImg,
        recipe: {
          name: "Classic Chocolate Chip Cookies",
          description: "Chewy centers with crispy edges",
          prepTime: "15 mins",
          cookTime: "12 mins",
          servings: 24,
          ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1 teaspoon salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup packed brown sugar",
            "2 large eggs",
            "2 teaspoons vanilla extract",
            "2 cups chocolate chips"
          ],
          steps: [
            "Preheat oven to 375°F (190°C).",
            "Mix flour, baking soda, and salt in a bowl.",
            "Beat butter and sugars until creamy. Add eggs and vanilla.",
            "Gradually blend in flour mixture. Stir in chocolate chips.",
            "Drop rounded tablespoons onto ungreased baking sheets.",
            "Bake for 9-11 minutes or until golden brown.",
            "Cool on baking sheet for 2 minutes, then transfer to wire rack."
          ]
        }
      },
      {
        id: "sugar-cookies",
        name: "Sugar Cookies",
        emoji: "⭐",
        image: sugarCookiesImg,
        recipe: {
          name: "Soft Sugar Cookies",
          description: "Buttery, soft, and perfect for decorating",
          prepTime: "20 mins",
          cookTime: "10 mins",
          servings: 36,
          ingredients: [
            "2 3/4 cups all-purpose flour",
            "1 teaspoon baking soda",
            "1/2 teaspoon baking powder",
            "1 cup butter, softened",
            "1 1/2 cups sugar",
            "1 egg",
            "1 teaspoon vanilla extract",
            "1/2 teaspoon almond extract"
          ],
          steps: [
            "Mix flour, baking soda, and baking powder.",
            "Cream butter and sugar until fluffy. Add egg and extracts.",
            "Gradually add flour mixture. Chill dough for 1 hour.",
            "Preheat oven to 375°F (190°C).",
            "Roll out dough and cut with cookie cutters.",
            "Bake for 8-10 minutes until edges are lightly golden.",
            "Cool and decorate with royal icing if desired."
          ]
        }
      },
      {
        id: "oatmeal-raisin",
        name: "Oatmeal Raisin",
        emoji: "🥣",
        image: oatmealRaisinImg,
        recipe: {
          name: "Chewy Oatmeal Raisin Cookies",
          description: "Hearty oats with plump raisins",
          prepTime: "15 mins",
          cookTime: "12 mins",
          servings: 24,
          ingredients: [
            "1 cup butter, softened",
            "1 cup packed brown sugar",
            "1/2 cup granulated sugar",
            "2 eggs",
            "1 teaspoon vanilla",
            "1 1/2 cups flour",
            "1 teaspoon baking soda",
            "1 teaspoon cinnamon",
            "3 cups old-fashioned oats",
            "1 cup raisins"
          ],
          steps: [
            "Preheat oven to 350°F (175°C).",
            "Cream butter and sugars. Add eggs and vanilla.",
            "Mix flour, baking soda, and cinnamon. Add to butter mixture.",
            "Stir in oats and raisins.",
            "Drop by rounded tablespoons onto baking sheets.",
            "Bake for 10-12 minutes.",
            "Cool on pan for 5 minutes before transferring."
          ]
        }
      },
      {
        id: "snickerdoodle",
        name: "Snickerdoodle",
        emoji: "🌀",
        image: snickerdoodleImg,
        recipe: {
          name: "Classic Snickerdoodles",
          description: "Soft cookies coated in cinnamon sugar",
          prepTime: "15 mins",
          cookTime: "10 mins",
          servings: 30,
          ingredients: [
            "2 3/4 cups flour",
            "2 teaspoons cream of tartar",
            "1 teaspoon baking soda",
            "1/2 teaspoon salt",
            "1 cup butter, softened",
            "1 1/2 cups sugar",
            "2 eggs",
            "3 tablespoons sugar (for coating)",
            "3 teaspoons cinnamon (for coating)"
          ],
          steps: [
            "Preheat oven to 400°F (200°C).",
            "Mix flour, cream of tartar, baking soda, and salt.",
            "Cream butter and sugar. Add eggs.",
            "Blend in flour mixture.",
            "Mix coating sugar and cinnamon in a small bowl.",
            "Roll dough into balls and coat in cinnamon sugar.",
            "Bake for 8-10 minutes until set but not hard."
          ]
        }
      }
    ]
  },
  {
    id: "pies",
    name: "Pies",
    emoji: "🥧",
    description: "Flaky crusts with delicious fillings",
    image: piesImg,
    types: [
      {
        id: "apple-pie",
        name: "Apple Pie",
        emoji: "🍎",
        image: applePieImg,
        recipe: {
          name: "Classic Apple Pie",
          description: "Warm spiced apples in buttery crust",
          prepTime: "45 mins",
          cookTime: "50 mins",
          servings: 8,
          ingredients: [
            "2 pie crusts (homemade or store-bought)",
            "6 cups sliced peeled apples",
            "3/4 cup sugar",
            "2 tablespoons flour",
            "1 teaspoon cinnamon",
            "1/4 teaspoon nutmeg",
            "1 tablespoon lemon juice",
            "2 tablespoons butter",
            "1 egg (for egg wash)"
          ],
          steps: [
            "Preheat oven to 425°F (220°C).",
            "Place one crust in a 9-inch pie plate.",
            "Mix apples, sugar, flour, spices, and lemon juice. Pour into crust.",
            "Dot with butter. Cover with second crust and crimp edges.",
            "Cut slits in top crust. Brush with beaten egg.",
            "Bake for 15 minutes, then reduce to 350°F and bake 35-40 more minutes.",
            "Cool before serving. Best with vanilla ice cream."
          ]
        }
      },
      {
        id: "pumpkin-pie",
        name: "Pumpkin Pie",
        emoji: "🎃",
        image: pumpkinPieImg,
        recipe: {
          name: "Classic Pumpkin Pie",
          description: "Creamy spiced pumpkin custard",
          prepTime: "20 mins",
          cookTime: "1 hour",
          servings: 8,
          ingredients: [
            "1 pie crust",
            "1 can (15 oz) pumpkin puree",
            "3/4 cup sugar",
            "1 teaspoon cinnamon",
            "1/2 teaspoon ginger",
            "1/4 teaspoon cloves",
            "1/2 teaspoon salt",
            "2 eggs",
            "1 can (12 oz) evaporated milk"
          ],
          steps: [
            "Preheat oven to 425°F (220°C).",
            "Place crust in pie plate and crimp edges.",
            "Mix pumpkin, sugar, spices, and salt.",
            "Beat in eggs, then gradually add evaporated milk.",
            "Pour into crust.",
            "Bake for 15 minutes, then reduce to 350°F for 40-50 minutes.",
            "Cool completely. Serve with whipped cream."
          ]
        }
      },
      {
        id: "pecan-pie",
        name: "Pecan Pie",
        emoji: "🌰",
        image: pecanPieImg,
        recipe: {
          name: "Southern Pecan Pie",
          description: "Gooey caramel filling with crunchy pecans",
          prepTime: "15 mins",
          cookTime: "55 mins",
          servings: 8,
          ingredients: [
            "1 pie crust",
            "1 cup corn syrup",
            "3 eggs",
            "1 cup sugar",
            "2 tablespoons melted butter",
            "1 teaspoon vanilla",
            "1/4 teaspoon salt",
            "1 1/2 cups pecan halves"
          ],
          steps: [
            "Preheat oven to 350°F (175°C).",
            "Place crust in pie plate.",
            "Beat corn syrup, eggs, sugar, butter, vanilla, and salt.",
            "Stir in pecans.",
            "Pour into crust.",
            "Bake for 50-55 minutes until set.",
            "Cool completely before serving."
          ]
        }
      },
      {
        id: "lemon-meringue",
        name: "Lemon Meringue",
        emoji: "🍋",
        image: lemonMeringueImg,
        recipe: {
          name: "Lemon Meringue Pie",
          description: "Tangy lemon curd with fluffy meringue",
          prepTime: "30 mins",
          cookTime: "25 mins",
          servings: 8,
          ingredients: [
            "1 baked pie crust",
            "1 1/2 cups sugar",
            "6 tablespoons cornstarch",
            "1/2 teaspoon salt",
            "2 cups water",
            "4 egg yolks",
            "1/2 cup lemon juice",
            "2 tablespoons butter",
            "4 egg whites",
            "6 tablespoons sugar (for meringue)"
          ],
          steps: [
            "Cook sugar, cornstarch, salt, and water until thick.",
            "Whisk egg yolks, temper with hot mixture, return to pot and cook 2 more minutes.",
            "Remove from heat, stir in lemon juice and butter. Pour into crust.",
            "Preheat oven to 350°F (175°C).",
            "Beat egg whites to soft peaks, gradually add sugar until stiff and glossy.",
            "Spread meringue over hot filling, sealing edges.",
            "Bake for 12-15 minutes until golden. Cool before serving."
          ]
        }
      }
    ]
  },
  {
    id: "ice-cream",
    name: "Ice Cream",
    emoji: "🍨",
    description: "Frozen creamy delights",
    image: iceCreamImg,
    types: [
      {
        id: "vanilla-ice-cream",
        name: "Vanilla Bean",
        emoji: "🍦",
        image: vanillaIceCreamImg,
        recipe: {
          name: "Homemade Vanilla Ice Cream",
          description: "Classic creamy vanilla with real vanilla beans",
          prepTime: "20 mins",
          cookTime: "4 hours (freeze)",
          servings: 8,
          ingredients: [
            "2 cups heavy cream",
            "1 cup whole milk",
            "3/4 cup sugar",
            "1 vanilla bean (or 2 tsp vanilla extract)",
            "4 egg yolks",
            "Pinch of salt"
          ],
          steps: [
            "Heat cream, milk, and half the sugar. Scrape in vanilla bean seeds.",
            "Whisk egg yolks with remaining sugar until pale.",
            "Slowly pour hot cream into yolks, whisking constantly.",
            "Return to pot and cook until mixture coats a spoon (170°F).",
            "Strain into a bowl and chill completely (at least 4 hours).",
            "Churn in ice cream maker according to manufacturer's directions.",
            "Freeze until firm, about 2-4 hours."
          ]
        }
      },
      {
        id: "chocolate-ice-cream",
        name: "Chocolate",
        emoji: "🍫",
        image: chocolateIceCreamImg,
        recipe: {
          name: "Rich Chocolate Ice Cream",
          description: "Deeply chocolatey and velvety smooth",
          prepTime: "25 mins",
          cookTime: "4 hours (freeze)",
          servings: 8,
          ingredients: [
            "2 cups heavy cream",
            "1 cup whole milk",
            "3/4 cup sugar",
            "1/2 cup cocoa powder",
            "4 oz dark chocolate, chopped",
            "4 egg yolks",
            "1 teaspoon vanilla"
          ],
          steps: [
            "Heat cream, milk, sugar, and cocoa until steaming.",
            "Remove from heat, add chopped chocolate and stir until melted.",
            "Whisk egg yolks in a bowl. Slowly add hot chocolate mixture.",
            "Return to pot and cook until thickened (170°F).",
            "Strain, add vanilla, and chill completely.",
            "Churn in ice cream maker.",
            "Freeze until firm."
          ]
        }
      },
      {
        id: "strawberry-ice-cream",
        name: "Strawberry",
        emoji: "🍓",
        image: strawberryIceCreamImg,
        recipe: {
          name: "Fresh Strawberry Ice Cream",
          description: "Made with real strawberries",
          prepTime: "20 mins",
          cookTime: "4 hours (freeze)",
          servings: 8,
          ingredients: [
            "2 cups fresh strawberries",
            "1 cup sugar, divided",
            "2 cups heavy cream",
            "1 cup whole milk",
            "4 egg yolks",
            "1 teaspoon vanilla",
            "1 tablespoon lemon juice"
          ],
          steps: [
            "Mash strawberries with 1/4 cup sugar and lemon juice. Let sit.",
            "Heat cream, milk, and 1/2 cup sugar.",
            "Whisk yolks with remaining sugar. Temper with hot cream.",
            "Cook until thickened. Strain and chill.",
            "Stir in strawberry mixture.",
            "Churn in ice cream maker.",
            "Freeze until firm."
          ]
        }
      },
      {
        id: "mint-chip",
        name: "Mint Chip",
        emoji: "🌿",
        image: mintChipImg,
        recipe: {
          name: "Mint Chocolate Chip Ice Cream",
          description: "Refreshing mint with chocolate chips",
          prepTime: "20 mins",
          cookTime: "4 hours (freeze)",
          servings: 8,
          ingredients: [
            "2 cups heavy cream",
            "1 cup whole milk",
            "3/4 cup sugar",
            "4 egg yolks",
            "1 1/2 teaspoons peppermint extract",
            "Green food coloring (optional)",
            "1 cup mini chocolate chips"
          ],
          steps: [
            "Heat cream, milk, and half the sugar.",
            "Whisk yolks with remaining sugar.",
            "Temper yolks with hot cream, return to pot and cook until thickened.",
            "Strain, add peppermint extract and food coloring if using.",
            "Chill completely.",
            "Churn in ice cream maker, adding chips in last 5 minutes.",
            "Freeze until firm."
          ]
        }
      }
    ]
  },
  {
    id: "brownies",
    name: "Brownies",
    emoji: "🟫",
    description: "Fudgy squares of chocolate heaven",
    image: browniesImg,
    types: [
      {
        id: "classic-brownie",
        name: "Classic Fudge",
        emoji: "🍫",
        image: classicBrownieImg,
        recipe: {
          name: "Fudgy Brownies",
          description: "Dense, rich, and incredibly fudgy",
          prepTime: "15 mins",
          cookTime: "25 mins",
          servings: 16,
          ingredients: [
            "1/2 cup butter",
            "1 cup sugar",
            "2 eggs",
            "1 teaspoon vanilla",
            "1/3 cup cocoa powder",
            "1/2 cup flour",
            "1/4 teaspoon salt",
            "1/4 teaspoon baking powder"
          ],
          steps: [
            "Preheat oven to 350°F (175°C). Grease an 8-inch square pan.",
            "Melt butter. Stir in sugar, eggs, and vanilla.",
            "Beat in cocoa, flour, salt, and baking powder.",
            "Spread in prepared pan.",
            "Bake for 20-25 minutes. Do not overbake.",
            "Cool in pan before cutting.",
            "Store in airtight container."
          ]
        }
      },
      {
        id: "walnut-brownie",
        name: "Walnut",
        emoji: "🥜",
        image: walnutBrownieImg,
        recipe: {
          name: "Walnut Brownies",
          description: "Fudgy brownies loaded with crunchy walnuts",
          prepTime: "15 mins",
          cookTime: "30 mins",
          servings: 16,
          ingredients: [
            "1/2 cup butter",
            "1 cup sugar",
            "2 eggs",
            "1 teaspoon vanilla",
            "1/3 cup cocoa powder",
            "1/2 cup flour",
            "1/4 teaspoon salt",
            "1 cup chopped walnuts"
          ],
          steps: [
            "Preheat oven to 350°F (175°C). Grease an 8-inch pan.",
            "Melt butter, stir in sugar, eggs, and vanilla.",
            "Add cocoa, flour, and salt. Mix well.",
            "Fold in walnuts.",
            "Spread in pan and bake 25-30 minutes.",
            "Cool completely before cutting.",
            "Top with extra walnuts if desired."
          ]
        }
      },
      {
        id: "cream-cheese-brownie",
        name: "Cream Cheese Swirl",
        emoji: "🧀",
        image: creamCheeseBrownieImg,
        recipe: {
          name: "Cream Cheese Swirl Brownies",
          description: "Marbled with tangy cream cheese",
          prepTime: "20 mins",
          cookTime: "35 mins",
          servings: 16,
          ingredients: [
            "Brownie batter (from classic recipe)",
            "8 oz cream cheese, softened",
            "1/4 cup sugar",
            "1 egg",
            "1/2 teaspoon vanilla"
          ],
          steps: [
            "Prepare brownie batter as directed.",
            "Beat cream cheese, sugar, egg, and vanilla until smooth.",
            "Spread 2/3 of brownie batter in greased 9x13 pan.",
            "Drop spoonfuls of cream cheese mixture over brownie batter.",
            "Drop remaining brownie batter by spoonfuls.",
            "Swirl with a knife to create marble effect.",
            "Bake at 350°F for 30-35 minutes. Cool and cut."
          ]
        }
      },
      {
        id: "blonde-brownie",
        name: "Blondie",
        emoji: "🌟",
        image: blondeBrownieImg,
        recipe: {
          name: "Butterscotch Blondies",
          description: "Brown sugar base with butterscotch flavor",
          prepTime: "10 mins",
          cookTime: "25 mins",
          servings: 16,
          ingredients: [
            "1/2 cup butter, melted",
            "1 cup packed brown sugar",
            "1 egg",
            "1 teaspoon vanilla",
            "1 cup flour",
            "1/2 teaspoon baking powder",
            "1/2 teaspoon salt",
            "1/2 cup butterscotch chips"
          ],
          steps: [
            "Preheat oven to 350°F (175°C).",
            "Mix melted butter and brown sugar.",
            "Beat in egg and vanilla.",
            "Stir in flour, baking powder, and salt.",
            "Fold in butterscotch chips.",
            "Spread in greased 8-inch pan.",
            "Bake 20-25 minutes. Don't overbake."
          ]
        }
      }
    ]
  },
  {
    id: "cupcakes",
    name: "Cupcakes",
    emoji: "🧁",
    description: "Individual portions of cake perfection",
    image: chocolateCupcakeImg,
    types: [
      {
        id: "vanilla-cupcake",
        name: "Vanilla",
        emoji: "🍦",
        image: vanillaCupcakeImg,
        recipe: {
          name: "Classic Vanilla Cupcakes",
          description: "Light, fluffy, and perfectly sweet",
          prepTime: "20 mins",
          cookTime: "22 mins",
          servings: 12,
          ingredients: [
            "1 1/2 cups flour",
            "1 1/2 teaspoons baking powder",
            "1/4 teaspoon salt",
            "1/2 cup butter, softened",
            "1 cup sugar",
            "2 eggs",
            "2 teaspoons vanilla",
            "1/2 cup milk"
          ],
          steps: [
            "Preheat oven to 350°F (175°C). Line muffin tin with cupcake liners.",
            "Whisk flour, baking powder, and salt.",
            "Cream butter and sugar until fluffy. Add eggs and vanilla.",
            "Alternate adding flour mixture and milk.",
            "Fill liners 2/3 full.",
            "Bake 18-22 minutes until a toothpick comes out clean.",
            "Cool completely before frosting with buttercream."
          ]
        }
      },
      {
        id: "red-velvet-cupcake",
        name: "Red Velvet",
        emoji: "❤️",
        image: redVelvetCupcakeImg,
        recipe: {
          name: "Red Velvet Cupcakes",
          description: "Stunning red with cream cheese frosting",
          prepTime: "25 mins",
          cookTime: "22 mins",
          servings: 18,
          ingredients: [
            "1 1/4 cups flour",
            "2 tablespoons cocoa powder",
            "1/2 teaspoon salt",
            "1/2 cup butter, softened",
            "1 cup sugar",
            "2 eggs",
            "1/2 cup buttermilk",
            "1 tablespoon red food coloring",
            "1 teaspoon vanilla",
            "1/2 teaspoon baking soda",
            "1 teaspoon vinegar"
          ],
          steps: [
            "Preheat oven to 350°F (175°C). Prepare cupcake liners.",
            "Sift flour, cocoa, and salt together.",
            "Cream butter and sugar. Add eggs one at a time.",
            "Mix buttermilk, food coloring, and vanilla.",
            "Alternate adding dry and wet ingredients to butter mixture.",
            "Fold in baking soda mixed with vinegar.",
            "Bake 18-22 minutes. Frost with cream cheese frosting."
          ]
        }
      },
      {
        id: "lemon-cupcake",
        name: "Lemon",
        emoji: "🍋",
        image: lemonCupcakeImg,
        recipe: {
          name: "Lemon Cupcakes",
          description: "Bright and zesty with lemon buttercream",
          prepTime: "20 mins",
          cookTime: "20 mins",
          servings: 12,
          ingredients: [
            "1 1/2 cups flour",
            "1 1/2 teaspoons baking powder",
            "1/4 teaspoon salt",
            "1/2 cup butter, softened",
            "1 cup sugar",
            "2 eggs",
            "Zest of 2 lemons",
            "3 tablespoons lemon juice",
            "1/2 cup milk"
          ],
          steps: [
            "Preheat oven to 350°F (175°C).",
            "Mix flour, baking powder, and salt.",
            "Cream butter and sugar. Add eggs, zest, and juice.",
            "Alternate adding flour and milk.",
            "Fill liners 2/3 full.",
            "Bake 18-20 minutes.",
            "Top with lemon buttercream and zest."
          ]
        }
      },
      {
        id: "chocolate-cupcake",
        name: "Chocolate",
        emoji: "🍫",
        image: chocolateCupcakeImg,
        recipe: {
          name: "Devil's Food Cupcakes",
          description: "Rich, moist, and deeply chocolatey",
          prepTime: "20 mins",
          cookTime: "22 mins",
          servings: 18,
          ingredients: [
            "1 3/4 cups flour",
            "2 cups sugar",
            "3/4 cup cocoa powder",
            "2 teaspoons baking soda",
            "1 teaspoon salt",
            "2 eggs",
            "1 cup buttermilk",
            "1 cup hot coffee",
            "1/2 cup oil",
            "1 teaspoon vanilla"
          ],
          steps: [
            "Preheat oven to 350°F (175°C).",
            "Mix all dry ingredients in a large bowl.",
            "Add eggs, buttermilk, oil, and vanilla. Beat until combined.",
            "Stir in hot coffee (batter will be thin).",
            "Fill liners 2/3 full.",
            "Bake 18-22 minutes.",
            "Cool and frost with chocolate ganache or buttercream."
          ]
        }
      }
    ]
  },
  {
    id: "donuts",
    name: "Donuts",
    emoji: "🍩",
    description: "Fried or baked rings of sweetness",
    image: donutsImg,
    types: [
      {
        id: "glazed-donut",
        name: "Classic Glazed",
        emoji: "✨",
        image: glazedDonutImg,
        recipe: {
          name: "Classic Glazed Donuts",
          description: "Light and airy with sweet glaze",
          prepTime: "2 hours",
          cookTime: "15 mins",
          servings: 12,
          ingredients: [
            "2 1/4 teaspoons active dry yeast",
            "3/4 cup warm milk",
            "1/4 cup sugar",
            "1/4 cup butter, softened",
            "2 egg yolks",
            "2 3/4 cups flour",
            "Oil for frying",
            "2 cups powdered sugar",
            "1/4 cup milk (for glaze)"
          ],
          steps: [
            "Dissolve yeast in warm milk with a pinch of sugar. Let sit 5 minutes.",
            "Mix in sugar, butter, egg yolks, and flour. Knead until smooth.",
            "Let rise for 1 hour until doubled.",
            "Roll out and cut into donut shapes. Let rise 30 more minutes.",
            "Heat oil to 375°F (190°C). Fry donuts 1 minute per side.",
            "Drain on paper towels.",
            "Dip in glaze made from powdered sugar and milk."
          ]
        }
      },
      {
        id: "chocolate-donut",
        name: "Chocolate Frosted",
        emoji: "🍫",
        image: chocolateDonutImg,
        recipe: {
          name: "Chocolate Frosted Donuts",
          description: "Topped with rich chocolate glaze",
          prepTime: "2 hours",
          cookTime: "15 mins",
          servings: 12,
          ingredients: [
            "Basic donut recipe",
            "1/2 cup butter",
            "1/4 cup cocoa powder",
            "2 cups powdered sugar",
            "1 teaspoon vanilla",
            "3 tablespoons milk",
            "Sprinkles (optional)"
          ],
          steps: [
            "Prepare and fry donuts according to classic glazed recipe.",
            "Melt butter in a saucepan.",
            "Whisk in cocoa powder until smooth.",
            "Remove from heat. Add powdered sugar, vanilla, and milk.",
            "Whisk until smooth glaze forms.",
            "Dip tops of cooled donuts in glaze.",
            "Add sprinkles before glaze sets."
          ]
        }
      },
      {
        id: "boston-cream",
        name: "Boston Cream",
        emoji: "🥮",
        image: bostonCreamImg,
        recipe: {
          name: "Boston Cream Donuts",
          description: "Filled with vanilla cream, topped with chocolate",
          prepTime: "2.5 hours",
          cookTime: "20 mins",
          servings: 12,
          ingredients: [
            "Basic donut recipe (no holes)",
            "2 cups milk",
            "1/2 cup sugar",
            "3 tablespoons cornstarch",
            "3 egg yolks",
            "2 teaspoons vanilla",
            "Chocolate glaze"
          ],
          steps: [
            "Make donuts without cutting holes. Fry and cool.",
            "Heat milk in a saucepan.",
            "Whisk sugar, cornstarch, and yolks. Temper with hot milk.",
            "Cook until thick. Add vanilla. Cool completely.",
            "Fill a piping bag with pastry cream.",
            "Poke a hole in each donut and fill with cream.",
            "Dip tops in chocolate glaze."
          ]
        }
      },
      {
        id: "cinnamon-sugar",
        name: "Cinnamon Sugar",
        emoji: "🌀",
        image: cinnamonSugarImg,
        recipe: {
          name: "Cinnamon Sugar Donuts",
          description: "Warm donuts coated in cinnamon sugar",
          prepTime: "2 hours",
          cookTime: "15 mins",
          servings: 12,
          ingredients: [
            "Basic donut recipe",
            "1/2 cup sugar",
            "2 teaspoons cinnamon",
            "1/4 cup melted butter"
          ],
          steps: [
            "Prepare and fry donuts according to classic recipe.",
            "Mix sugar and cinnamon in a shallow bowl.",
            "While donuts are still warm, brush with melted butter.",
            "Toss in cinnamon sugar to coat completely.",
            "Serve immediately for best results.",
            "These are best eaten warm and fresh.",
            "Store any leftovers in airtight container."
          ]
        }
      }
    ]
  },
  {
    id: "puddings",
    name: "Puddings",
    emoji: "🍮",
    description: "Creamy, smooth comfort desserts",
    image: puddingImg,
    types: [
      {
        id: "chocolate-pudding",
        name: "Chocolate",
        emoji: "🍫",
        image: chocolatePuddingImg,
        recipe: {
          name: "Creamy Chocolate Pudding",
          description: "Silky smooth chocolate perfection",
          prepTime: "15 mins",
          cookTime: "10 mins",
          servings: 6,
          ingredients: [
            "2/3 cup sugar",
            "1/4 cup cocoa powder",
            "3 tablespoons cornstarch",
            "1/4 teaspoon salt",
            "2 3/4 cups milk",
            "2 tablespoons butter",
            "1 teaspoon vanilla"
          ],
          steps: [
            "Whisk sugar, cocoa, cornstarch, and salt in a saucepan.",
            "Gradually whisk in milk until smooth.",
            "Cook over medium heat, stirring constantly, until thickened.",
            "Remove from heat. Stir in butter and vanilla.",
            "Pour into serving dishes.",
            "Cover with plastic wrap directly on surface to prevent skin.",
            "Chill for at least 2 hours before serving."
          ]
        }
      },
      {
        id: "vanilla-pudding",
        name: "Vanilla",
        emoji: "🍦",
        image: vanillaPuddingImg,
        recipe: {
          name: "Classic Vanilla Pudding",
          description: "Rich and creamy vanilla custard",
          prepTime: "10 mins",
          cookTime: "10 mins",
          servings: 6,
          ingredients: [
            "2/3 cup sugar",
            "3 tablespoons cornstarch",
            "1/4 teaspoon salt",
            "2 3/4 cups milk",
            "2 tablespoons butter",
            "1 1/2 teaspoons vanilla"
          ],
          steps: [
            "Combine sugar, cornstarch, and salt in saucepan.",
            "Gradually stir in milk.",
            "Cook over medium heat, stirring constantly.",
            "Bring to a boil and cook 1 minute until thick.",
            "Remove from heat. Stir in butter and vanilla.",
            "Pour into dishes, cover, and chill.",
            "Top with whipped cream if desired."
          ]
        }
      },
      {
        id: "rice-pudding",
        name: "Rice",
        emoji: "🍚",
        image: ricePuddingImg,
        recipe: {
          name: "Creamy Rice Pudding",
          description: "Warm and comforting with cinnamon",
          prepTime: "5 mins",
          cookTime: "45 mins",
          servings: 6,
          ingredients: [
            "1/2 cup uncooked rice",
            "2 cups milk",
            "1/3 cup sugar",
            "1/4 teaspoon salt",
            "1 egg, beaten",
            "2/3 cup raisins",
            "1 teaspoon vanilla",
            "Cinnamon for topping"
          ],
          steps: [
            "Cook rice in water according to package directions.",
            "Stir in 1 1/2 cups milk, sugar, and salt.",
            "Cook over medium heat until thick, about 20 minutes.",
            "Mix egg with remaining milk. Stir into rice.",
            "Cook 1 minute more, stirring constantly.",
            "Remove from heat. Add raisins and vanilla.",
            "Serve warm or cold, sprinkled with cinnamon."
          ]
        }
      },
      {
        id: "bread-pudding",
        name: "Bread",
        emoji: "🍞",
        image: breadPuddingImg,
        recipe: {
          name: "Classic Bread Pudding",
          description: "Custardy bread with vanilla sauce",
          prepTime: "20 mins",
          cookTime: "45 mins",
          servings: 8,
          ingredients: [
            "6 cups cubed bread",
            "2 cups milk",
            "4 eggs",
            "1 1/2 cups sugar",
            "2 teaspoons vanilla",
            "1/2 cup raisins",
            "1/4 cup melted butter",
            "1 teaspoon cinnamon"
          ],
          steps: [
            "Preheat oven to 350°F (175°C). Grease a 9x13 pan.",
            "Soak bread cubes in milk for 10 minutes.",
            "Beat eggs with sugar, vanilla, and cinnamon.",
            "Pour egg mixture over bread. Add raisins and butter.",
            "Mix gently and pour into prepared pan.",
            "Bake 40-45 minutes until set and golden.",
            "Serve warm with vanilla sauce or whipped cream."
          ]
        }
      }
    ]
  },
  {
    id: "tarts",
    name: "Tarts",
    emoji: "🥮",
    description: "Elegant pastries with delicious fillings",
    image: pastriesImg,
    types: [
      {
        id: "fruit-tart",
        name: "Fresh Fruit",
        emoji: "🍓",
        image: fruitTartImg,
        recipe: {
          name: "Fresh Fruit Tart",
          description: "Buttery crust with pastry cream and fresh fruits",
          prepTime: "45 mins",
          cookTime: "25 mins",
          servings: 8,
          ingredients: [
            "1 1/4 cups flour",
            "1/2 cup powdered sugar",
            "1/2 cup cold butter",
            "1 egg yolk",
            "Pastry cream",
            "Assorted fresh fruits",
            "Apricot jam for glaze"
          ],
          steps: [
            "Pulse flour, sugar, and butter until crumbly. Add yolk.",
            "Press into tart pan. Chill 30 minutes.",
            "Preheat oven to 375°F (190°C). Bake crust 20-25 minutes.",
            "Cool completely.",
            "Spread pastry cream over cooled crust.",
            "Arrange fresh fruits decoratively on top.",
            "Brush with warmed apricot jam for shine."
          ]
        }
      },
      {
        id: "lemon-tart",
        name: "Lemon",
        emoji: "🍋",
        image: lemonTartImg,
        recipe: {
          name: "French Lemon Tart",
          description: "Silky lemon curd in crisp pastry",
          prepTime: "30 mins",
          cookTime: "35 mins",
          servings: 8,
          ingredients: [
            "1 baked tart shell",
            "4 eggs",
            "1 cup sugar",
            "2/3 cup lemon juice",
            "Zest of 2 lemons",
            "1/2 cup butter, cubed",
            "Powdered sugar for dusting"
          ],
          steps: [
            "Whisk eggs and sugar in a saucepan.",
            "Add lemon juice and zest.",
            "Cook over medium heat, stirring constantly, until thickened.",
            "Remove from heat. Whisk in butter piece by piece.",
            "Strain into baked tart shell.",
            "Chill until set, at least 4 hours.",
            "Dust with powdered sugar before serving."
          ]
        }
      },
      {
        id: "chocolate-tart",
        name: "Chocolate",
        emoji: "🍫",
        image: chocolateTartImg,
        recipe: {
          name: "Dark Chocolate Tart",
          description: "Rich, decadent chocolate ganache",
          prepTime: "30 mins",
          cookTime: "25 mins",
          servings: 10,
          ingredients: [
            "1 baked chocolate tart shell",
            "8 oz dark chocolate, chopped",
            "1 cup heavy cream",
            "2 tablespoons butter",
            "1 teaspoon vanilla",
            "Flaky sea salt"
          ],
          steps: [
            "Place chocolate in a bowl.",
            "Heat cream until simmering. Pour over chocolate.",
            "Let sit 2 minutes, then stir until smooth.",
            "Add butter and vanilla. Stir until combined.",
            "Pour into cooled tart shell.",
            "Chill until set, about 2 hours.",
            "Sprinkle with flaky salt before serving."
          ]
        }
      },
      {
        id: "custard-tart",
        name: "Custard",
        emoji: "🥚",
        image: custardTartImg,
        recipe: {
          name: "Portuguese Custard Tarts",
          description: "Creamy custard with caramelized top",
          prepTime: "30 mins",
          cookTime: "20 mins",
          servings: 12,
          ingredients: [
            "1 sheet puff pastry",
            "1 cup sugar",
            "1/3 cup water",
            "2 cups milk",
            "6 egg yolks",
            "1/4 cup flour",
            "1 teaspoon vanilla",
            "Cinnamon for dusting"
          ],
          steps: [
            "Roll puff pastry tightly. Cut into 12 rounds.",
            "Press into muffin tins, forming shells.",
            "Make sugar syrup: boil sugar and water to soft ball stage.",
            "Heat milk. Whisk yolks with flour. Combine all.",
            "Cook until thick. Add vanilla.",
            "Fill pastry shells 2/3 full.",
            "Bake at 500°F (260°C) for 15-20 minutes until tops char."
          ]
        }
      }
    ]
  },
  {
    id: "mousse",
    name: "Mousse",
    emoji: "🫧",
    description: "Light and airy whipped desserts",
    image: italianImg,
    types: [
      {
        id: "chocolate-mousse",
        name: "Chocolate",
        emoji: "🍫",
        image: chocolateMousseImg,
        recipe: {
          name: "French Chocolate Mousse",
          description: "Light, airy, and intensely chocolatey",
          prepTime: "30 mins",
          cookTime: "4 hours (chill)",
          servings: 6,
          ingredients: [
            "6 oz dark chocolate, chopped",
            "3 tablespoons butter",
            "3 eggs, separated",
            "2 tablespoons sugar",
            "1 cup heavy cream",
            "Pinch of salt"
          ],
          steps: [
            "Melt chocolate and butter together. Cool slightly.",
            "Whisk in egg yolks one at a time.",
            "Beat egg whites with salt to soft peaks. Add sugar, beat to stiff peaks.",
            "Whip cream to soft peaks.",
            "Fold whites into chocolate, then fold in whipped cream.",
            "Divide among serving glasses.",
            "Chill at least 4 hours. Top with more whipped cream."
          ]
        }
      },
      {
        id: "strawberry-mousse",
        name: "Strawberry",
        emoji: "🍓",
        image: strawberryMousseImg,
        recipe: {
          name: "Fresh Strawberry Mousse",
          description: "Light and fruity with real strawberries",
          prepTime: "25 mins",
          cookTime: "4 hours (chill)",
          servings: 6,
          ingredients: [
            "2 cups fresh strawberries",
            "1/2 cup sugar",
            "1 tablespoon lemon juice",
            "1 packet gelatin",
            "3 tablespoons water",
            "1 1/2 cups heavy cream"
          ],
          steps: [
            "Puree strawberries with sugar and lemon juice.",
            "Bloom gelatin in water. Melt gently.",
            "Stir gelatin into strawberry puree.",
            "Whip cream to soft peaks.",
            "Fold whipped cream into strawberry mixture.",
            "Pour into serving dishes.",
            "Chill until set, at least 4 hours."
          ]
        }
      },
      {
        id: "mango-mousse",
        name: "Mango",
        emoji: "🥭",
        image: mangoMousseImg,
        recipe: {
          name: "Tropical Mango Mousse",
          description: "Sweet and tropical with fresh mango",
          prepTime: "25 mins",
          cookTime: "4 hours (chill)",
          servings: 6,
          ingredients: [
            "2 ripe mangoes, pureed",
            "1/3 cup sugar",
            "1 tablespoon lime juice",
            "1 packet gelatin",
            "3 tablespoons water",
            "1 1/2 cups heavy cream"
          ],
          steps: [
            "Blend mango puree with sugar and lime juice.",
            "Bloom gelatin in water, then melt.",
            "Stir melted gelatin into mango puree.",
            "Whip cream to soft peaks.",
            "Fold cream into mango mixture in two additions.",
            "Divide among serving glasses.",
            "Refrigerate until set. Garnish with fresh mango."
          ]
        }
      },
      {
        id: "coffee-mousse",
        name: "Coffee",
        emoji: "☕",
        image: coffeeMousseImg,
        recipe: {
          name: "Espresso Mousse",
          description: "Rich coffee flavor in a light mousse",
          prepTime: "25 mins",
          cookTime: "4 hours (chill)",
          servings: 6,
          ingredients: [
            "2 tablespoons instant espresso",
            "3 tablespoons hot water",
            "4 oz white chocolate, chopped",
            "1 1/2 cups heavy cream",
            "3 egg whites",
            "2 tablespoons sugar"
          ],
          steps: [
            "Dissolve espresso in hot water.",
            "Melt white chocolate. Stir in espresso.",
            "Whip 1 cup cream to soft peaks. Fold into chocolate.",
            "Beat egg whites with sugar to stiff peaks.",
            "Fold whites into chocolate mixture.",
            "Pipe or spoon into serving glasses.",
            "Chill 4 hours. Top with remaining whipped cream."
          ]
        }
      }
    ]
  }
];
