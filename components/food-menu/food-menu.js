angular.module('myApp.food-menu',[
    'core'
])

.controller("FoodMenuCtrl", [
    "$scope",
    function($scope) {
        $scope.mealBannerObject = {
            bannerClass: "chocolate-border bottom-border",
            title: "Food Menu",
            content: "Make It A Meal for $2.00",
            info: "Add to any food purchase",
            specialInfo: "Add chips, a brownie or chocolate chip cookie, and a water or soda",
            lastBanner: true
        };

        $scope.categories = {
            "catList" : [
                "Food",
                "Sides",
                "Drinks"
            ],
            "Food" : {
                title : "Food",
                items : [
                    "1/4 Pound All Beef Hot Dog",
                    "Chicked Salad Sandwich",
                    "Pulled Pork",
                    "Soft Pretzel",
                    "Soft Pretzel with Cheese",
                    "Cream Cheese Stuffy Soft Pretzel",
                    "Nachos with Cheese"
                ],
                "1/4 Pound All Beef Hot Dog" : {
                    price : "$2.99",
                    description : "Free toppi​ngs: ketchup, mustard, onions, relish",
                    info : "Add nacho cheese: 35¢"
                },
                "Chicked Salad Sandwich" : {
                    price : "$3.49"
                },
                "Pulled Pork" : {
                    price : "$3.49"
                },
                "Soft Pretzel" : {
                    price : "$2.25"
                },
                "Soft Pretzel with Cheese" : {
                    price : "$2.25"
                },
                "Cream Cheese Stuffy Soft Pretzel" : {
                    price : "$2.25"
                },
                "Nachos with Cheese" : {
                    price : "$2.25",
                    description : "Jalepenos available upon request"
                }
            },
            "Sides" : {
                title : "Sides",
                items : [
                    "Plain Potato Chips",
                    "Brownie",
                    "Chocolate Chip Cookie"
                ],
                "Plain Potato Chips" : {
                    price : "89¢"
                },
                "Brownie" : {
                    price : "89¢"
                },
                "Chocolate Chip Cookie" : {
                    price : "89¢"
                }
            },
            "Drinks" : {
                title : "Drinks",
                items : [
                    "Can of Soda",
                    "Water Bottle",
                    "Juice Box",
                    "Gatorade",
                    "Powerade"
                ],
                "Can of Soda" : {
                    price : "89¢"
                },
                "Water Bottle" : {
                    price : "89¢"
                },
                "Juice Box" : {
                    price : "89¢"
                },
                "Gatorade" : {
                    price : "$1.50"
                },
                "Powerade" : {
                    price : "$1.50"
                }
            }
        };
    }
])