angular.module('myApp.treat-menu',[
    'core'
])

.controller("TreatMenuCtrl", [
    "$scope",
    function($scope) {
        $scope.softServeBannerObject = {
            bannerClass: "dark-vanilla-border bottom-border",
            title: "Treat Menu",
            content: "Soft Serve Flavors",
            info: "Chocolate, Vanilla, and Chocolate-Vanilla Swirl and Various Speciality Flavors (Change Every Two Weeks)",
            specialInfo: "Chocolate, Vanilla, and Chocolate-Vanilla Swirl and Various Speciality Flavors (Change Every Two Weeks)"
        };

        $scope.toppingsBlockListObject = {
            blockId: "topping-block-list",
            catHeader: "Topping Types",
            itemHeader: "Toppings - 69¢ each",
            itemObject: {
                0: {
                    displayName: 'M&Ms',
                    categories: ['Candy', 'Chocolate'],
                },
                1: {
                    displayName: "Reese's Peanut Butter Cups",
                    categories: ['Candy', 'Chocolate', 'Nuts'],
                },
                2: {
                    displayName: "Butterfinger",
                    categories: ['Candy', 'Chocolate'],
                },
                3: {
                    displayName: "Heath",
                    categories: ['Candy', 'Chocolate'],
                },
                4: {
                    displayName: "Snickers",
                    categories: ['Candy', 'Chocolate', 'Carmel'],
                },
                5: {
                    displayName: "Cocoa Pebbles",
                    categories: ['Chocolate', 'Cereal'],
                },
                6: {
                    displayName: "Fruity Pebbles",
                    categories: ['Cereal'],
                },
                7: {
                    displayName: "Rainbow Nerds",
                    categories: ['Candy',],
                },
                8: {
                    displayName: "Nutter Butters",
                    categories: ['Cookie', 'Nuts'],
                },
                9: {
                    displayName: "Gummy Bears",
                    categories: ['Candy', 'Gummy',],
                },
                10: {
                    displayName: "Cookies and Cream",
                    categories: ['Cookie', 'Chocolate'],
                },
                11: {
                    displayName: "Chocolate Rocks",
                    categories: ['Chocolate', 'Candy'],
                },
                12: {
                    displayName: "Chocolate Chips",
                    categories: ['Chocolate', 'Classic'],
                },
                13: {
                    displayName: "Fudge Mint Cookies",
                    categories: ['Chocolate', 'Cookie', 'Mint'],
                },
                14: {
                    displayName: "Shredded Coconut",
                    categories: ['Fruit', 'Tropical'],
                },
                15: {
                    displayName: "Crushed Waffle Cone",
                    categories: ['Cookie'],
                },
                16: {
                    displayName: "Graham Crackers",
                    categories: ['Cookie'],
                },
                17: {
                    displayName: "Mini Marshmallows",
                    categories: ['Marshmallow'],
                },
                18: {
                    displayName: "Peanuts",
                    categories: ['Nuts', 'Classic',],
                },
                19: {
                    displayName: "Peacans",
                    categories: ["Nuts"],
                },
                20: {
                    displayName: "Brownie Bites",
                    categories: ['Chocolate', 'Baked Goods'],
                },
                21: {
                    displayName: "Chocolate Chip Cookie Dough",
                    categories: ['Candy', 'Cookie', 'Chocolate', 'Classic',],
                },
                22: {
                    displayName: "Apple Pie Filling",
                    categories: ['Fruit', 'Baked Goods'],
                },
                23: {
                    displayName: "Cherry Pie Filling",
                    categories: ['Fruit', 'Baked Goods'],
                },
                24: {
                    displayName: "Banana",
                    categories: ['Fruit', 'Tropical'],
                },
                25: {
                    displayName: "Strawberry Topping",
                    categories: ['Fruit'],
                },
                26: {
                    displayName: "Pineapple",
                    categories: ['Fruit', 'Tropical'],
                },
                27: {
                    displayName: "Maraschino Cherries",
                    categories: ['Fruit', 'Classic'],
                },
                28: {
                    displayName: "Mango Sauce",
                    categories: ['Fruit', 'Tropical', 'Sauces'],
                },
                29: {
                    displayName: "Raspberry Sauce",
                    categories: ['Fruit', 'Sauces'],
                },
                30: {
                    displayName: "Hot Fudge",
                    categories: ['Chocolate', 'Classic'],
                },
                31: {
                    displayName: "Carmel Sauce",
                    categories: ['Carmel', 'Sauces'],
                },
                32: {
                    displayName: "Peanut Butter",
                    categories: ['Nuts'],
                },
                33: {
                    displayName: "Chocolate Sauce",
                    categories: ['Chocolate', 'Sauces', 'Classic',],
                },
                34: {
                    displayName: "Butterscotch Sauce",
                    categories: ['Sauces'],
                },
                35: {
                    displayName: "Marshmallow Sauce",
                    categories: ['Sauces', 'Marshmallow'],
                },
                36: {
                    displayName: "Chocolate Dip",
                    categories: ['Chocolate'],
                },
                37: {
                    displayName: "Whipped Cream",
                    categories: ['Classic'],
                },
            }
        };

        $scope.toppingObject = {
            0: {
                displayName: 'M&Ms',
                categories: ['Candy', 'Chocolate'],
            },
            1: {
                displayName: "Reese's Peanut Butter Cups",
                categories: ['Candy', 'Chocolate', 'Nuts'],
            },
            2: {
                displayName: "Butterfinger",
                categories: ['Candy', 'Chocolate'],
            },
            3: {
                displayName: "Heath",
                categories: ['Candy', 'Chocolate'],
            },
            4: {
                displayName: "Snickers",
                categories: ['Candy', 'Chocolate', 'Carmel'],
            },
            5: {
                displayName: "Cocoa Pebbles",
                categories: ['Chocolate', 'Cereal'],
            },
            6: {
                displayName: "Fruity Pebbles",
                categories: ['Cereal'],
            },
            7: {
                displayName: "Rainbow Nerds",
                categories: ['Candy',],
            },
            8: {
                displayName: "Nutter Butters",
                categories: ['Cookie', 'Nuts'],
            },
            9: {
                displayName: "Gummy Bears",
                categories: ['Candy', 'Gummy',],
            },
            10: {
                displayName: "Cookies and Cream",
                categories: ['Cookie', 'Chocolate'],
            },
            11: {
                displayName: "Chocolate Rocks",
                categories: ['Chocolate', 'Candy'],
            },
            12: {
                displayName: "Chocolate Chips",
                categories: ['Chocolate', 'Classic'],
            },
            13: {
                displayName: "Fudge Mint Cookies",
                categories: ['Chocolate', 'Cookie', 'Mint'],
            },
            14: {
                displayName: "Shredded Coconut",
                categories: ['Fruit', 'Tropical'],
            },
            15: {
                displayName: "Crushed Waffle Cone",
                categories: ['Cookie'],
            },
            16: {
                displayName: "Graham Crackers",
                categories: ['Cookie'],
            },
            17: {
                displayName: "Mini Marshmallows",
                categories: ['Marshmallow'],
            },
            18: {
                displayName: "Peanuts",
                categories: ['Nuts', 'Classic',],
            },
            19: {
                displayName: "Peacans",
                categories: ["Nuts"],
            },
            20: {
                displayName: "Brownie Bites",
                categories: ['Chocolate', 'Baked Goods'],
            },
            21: {
                displayName: "Chocolate Chip Cookie Dough",
                categories: ['Candy', 'Cookie', 'Chocolate', 'Classic',],
            },
            22: {
                displayName: "Apple Pie Filling",
                categories: ['Fruit', 'Baked Goods'],
            },
            23: {
                displayName: "Cherry Pie Filling",
                categories: ['Fruit', 'Baked Goods'],
            },
            24: {
                displayName: "Banana",
                categories: ['Fruit', 'Tropical'],
            },
            25: {
                displayName: "Strawberry Topping",
                categories: ['Fruit'],
            },
            26: {
                displayName: "Pineapple",
                categories: ['Fruit', 'Tropical'],
            },
            27: {
                displayName: "Maraschino Cherries",
                categories: ['Fruit', 'Classic'],
            },
            28: {
                displayName: "Mango Sauce",
                categories: ['Fruit', 'Tropical', 'Sauces'],
            },
            29: {
                displayName: "Raspberry Sauce",
                categories: ['Fruit', 'Sauces'],
            },
            30: {
                displayName: "Hot Fudge",
                categories: ['Chocolate', 'Classic'],
            },
            31: {
                displayName: "Carmel Sauce",
                categories: ['Carmel', 'Sauces'],
            },
            32: {
                displayName: "Peanut Butter",
                categories: ['Nuts'],
            },
            33: {
                displayName: "Chocolate Sauce",
                categories: ['Chocolate', 'Sauces', 'Classic',],
            },
            34: {
                displayName: "Butterscotch Sauce",
                categories: ['Sauces'],
            },
            35: {
                displayName: "Marshmallow Sauce",
                categories: ['Sauces', 'Marshmallow'],
            },
            36: {
                displayName: "Chocolate Dip",
                categories: ['Chocolate'],
            },
            37: {
                displayName: "Whipped Cream",
                categories: ['Classic'],
            },
        };

        $scope.categories = {
            "catList" : [
                "Cones and Bowls",
                "Mix Up",
                "Shakes and Malts",
                "Specialties",
                "Shaved Ice"
            ],
            "Cones and Bowls" : {
                "title" : "Cones and Bowls",
                "items" : [
                    "Mini Cone",
                    "Mini Bowl",
                    "Small",
                    "Medium",
                    "Large"
                ],
                "Mini Cone" : {
                    price : "75¢"
                },
                "Mini Bowl" : {
                    price : "$1.25"
                },
                "Small" : {
                    price : "$2.25",
                    description : "cake cone, sugar cone, or bowl"
                },
                "Medium" : {
                    price : "$2.75",
                    description : "cake cone, sugar cone, or bowl"
                },
                "Large" : {
                    price : "$3.25",
                    description : "cake cone, sugar cone, or bowl"
                }
            },
            "Mix Up" : {
                "title" : "Mix Up",
                "description" : "Choose soft serve flavor and one topping, mixed together in a cup",
                "specialInfo" : "Add additional toppings for 69¢ each",
                "items" : [
                    "Mini",
                    "Small",
                    "Medium",
                    "Large",
                    "Extra Large"
                ],
                "Mini" : {
                    price : "$2.99"
                },
                "Small" : {
                    price : "$3.79"
                },
                "Medium" : {
                    price : "$4.59"
                },
                "Large" : {
                    price : "$5.39"
                },
                "Extra Large" : {
                    price : "$5.99"
                }
            },
            "Shakes and Malts" : {
                "title" : "Shakes and Malts",
                "description" : "Flavors (choose one or multiple)",
                "specialInfo" : "vanilla, chocolate, peanut butter, caramel, butterscotch, marshmallow, cookies and creme, peppermint, chocolate-mint, hot fudge, strawberry, pineapple, raspberry, mango, banana, apple pie, cherry, chocolate chip cookie dough, brownie, Butterfinger, Reese's Peanut Butter Cups, Heath, Snickers, Fruity Pebbles, Cocoa Pebbles",
                "items" : [
                    "Mini",
                    "Small",
                    "Medium",
                    "Large",
                    "Extra Large"
                ],
                "Mini" : {
                    price : "$2.99"
                },
                "Small" : {
                    price : "$3.79"
                },
                "Medium" : {
                    price : "$4.59"
                },
                "Large" : {
                    price : "$5.39"
                },
                "Extra Large" : {
                    price : "$5.99"
                }
            },
            "Specialties" : {
                "title" : "Specialties",
                "specialInfo" : "Underlined descriptions indicate customizable options, let us know so we can make it just how you like it!",
                "items" : [
                    "Fro-Choco-Nana",
                    "Yummy Gummy Treat",
                    "Cookie Sandwich",
                    "Pineapple Whip",
                    "Soda Float",
                    "Sundae Your Way",
                    "Pound Cake Delite",
                    "Banana Split",
                    "Brownie Sundae",
                    "Reese's Explosion",
                    "Turtle Sundae",
                    "Inside-Out Drumstick Sundae"
                ],
                "Fro-Choco-Nana" : {
                    price : "$2.65",
                    description : "frozen banana on a stick dipped in chocolate, plain or a topping of your choice"
                },
                "Yummy Gummy Treat" : {
                    price : "$3.35",
                    description : "medium bowl of your choice of soft serve flavor, topped with gummy worms and cookies and creme"
                },
                "Cookie Sandwich" : {
                    price : "$3.25",
                    description : "vanilla soft serve sandwiched between two chocolate chip cookies"
                },
                "Pineapple Whip" : {
                    prices : {
                        "SMALL" : "$3.75",
                        "MEDIUM" : "$4.25",
                        "LARGE" : "$4.75"
                    },
                    description  : "vanilla soft serve submerged with pineapple juice and pineapple topping, served in a cup"
                },
                "Soda Float" : {
                    prices : {
                        "SMALL" : "$3.50",
                        "MEDIUM" : "$4.00",
                        "LARGE" : "$4.50"
                    },
                    description : "vanilla soft serve submerged in your choice of soda"
                },
                "Sundae Your Way" : {
                    prices : {
                        "SMALL" : "$3.75",
                        "MEDIUM" : "$4.25",
                        "LARGE" : "$4.75"
                    },
                    description : "your choice of soft serve flavor, your choice of topping, topped with whipped cream, peanuts, and a cherry"
                },
                "Pound Cake Delite" : {
                    price : "$5.79",
                    description : "warmed slice of pound cake, your choice of soft serve flavor, cherry or apple or strawberry topping, chocolate or caramel sauce, topped with whipped cream and peanuts"
                },
                "Banana Split" : {
                    price : "$5.79",
                    description : "three mounds of soft serve (your choice of flavors) on top of a banana, three toppings of your choice, topped with whipped cream, peanuts, and cherries, served in a paper tray",
                    specialInfo : "Traditional toppings: strawberries, pineapple, and hot fudge"
                },
                "Brownie Sundae" : {
                    price : "$5.00",
                    description : "warmed brownie, your choice of soft serve flavor, a topping of your choice, topped with whipped cream, peanuts, and a cherry, served in a large bowl"
                },
                "Reese's Explosion" : {
                    prices : {
                        "SMALL" : "$4.00",
                        "MEDIUM" : "$4.50",
                        "LARGE" : "$5.00"
                    },
                    description : "your choice of soft serve flavor, topped with Reese's Peanut Butter Cups, hot fudge, peanut butter, whipped cream, and peanuts"
                },
                "Turtle Sundae" : {
                    prices : {
                        "SMALL" : "$4.00",
                        "MEDIUM" : "$4.50",
                        "LARGE" : "$5.00"
                    },
                    description : "your choice of soft serve flavor, topped hot fudge, caramel, pecans, and whipped cream"
                },
                "Inside-Out Drumstick Sundae" : {
                    prices : {
                        "SMALL" : "$3.75",
                        "MEDIUM" : "$4.25",
                        "LARGE" : "$4.75"
                    },
                    description : "your choice of soft serve flavor, topped crushed waffle cone, hot fudge, and peanuts"
                }
            },
            "Shaved Ice" : {
                title : "Shaved Ice",
                description : "Flavors (choose one or multiple)",
                info : "blue raspberry, cherry, watermelon, grape, lemon-lime, strawberry, orange, root beer (SUGAR FREE: blue raspberry, cherry, grape, lemon-lime, strawberry)",
                specialInfo : "Make it an ice cream slush for $1 extra!",
                items : [
                    "Small",
                    "Medium",
                    "Large",
                    "Extra Large"
                ],
                "Small" : {
                    price : "$2.00"
                },
                "Medium" : {
                    price : "$2.50"
                },
                "Large" : {
                    price : "$3.00"
                },
                "Extra Large" : {
                    price : "$3.50"
                }
            }
        };
    }
])