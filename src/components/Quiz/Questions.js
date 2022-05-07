export const waterFrequency=[
    "Rarely",
    "one glass every 2 days",
    "one glass a day",
    "two glasses a day",
    "three glasses a day",
    "four glasses a day",
    "five glasses a day",
    "six glasses a day",
    "seven glasses a day",
    "8+ glasses a day"

]

export const exerciseFrequency=[
    "Never",
    "15 mins a week",
    "30 mins a week",
    "1 hour a week",
    "2 hours a week",
    "2 hours and a half a week",
    "3 hours a week",
    "4 hours a week",
    "5 hours a week",
    "6 hours +"

]

export const percentage=[
    "0%",
    "15%",
    "25%",
    "40%",
    "50%",
    "60%",
    "70%",
    "80%",
    "90%",
    "100%"

]

export const frequency=[
    "Never",
    "Once a month",
    "Twice a month",
    "Once a week",
    "Twice a week",
    "3-4 times a week",
    "5-6 times a week",
    "Once a day",
    "Twice a day",
    "Often"

]


export const Questions=[
    /*{
        Food:[Question in string format,1..10scores in function of frequency frequency]}  frequency is as follows :
1..........Never
2..........Once a month
3..........Twice a month
4..........Once a week
5..........Twice a week
6..........3-4 times a week
7..........5-6 times a week
8..........Once a day
9..........Twice a day
10.........Often


Score is accesed via Questions.<Food>[Frequency index]
*/
    ["Fish",0,1.5,2,  2.6,2.8,  3,3.2,  3.4,3.65, 3.75],

    ["Berries",0,1,1.9,2.8,2.9,3,3.6,3.65,3.7,3.75],

    ["Greens",0,0.2,0.6,1,2.8,3,3.3,3.6,3.7,3.75],

    ["Colorful Vegetables",0,0.2,0.4,0.6,1.2,1.8,2.8,3.2,3.4,3.75],

    ["Root Vegetables",0,0.2,0.4,0.6,1.2,1.8,2.8,3.2,3.4,3.75],

    ["Cabbage Vegetables",0,1.4,2,2.8,2.9,3.1,3.3,3.4,3.6,3.75],

    ["Vegetarian Protein",0,0.8,1.4,2.3,2.8,3,3.2,3.6,3.7,3.75],

    ["Poultry",0,1.5,2,2.4,2.8,3.1,3.4,3.75,1.6,0.6],

    ["Sea Food",0,2,3,3.6,3.75,3.4,3.3,3.2,2.4,1.5],

    ["Processed Meats",3,3.4,3.75,2,1.6,1.4,1,0.3,0.1,0],

    ["Red Meat",0,1.5,2,2.4,2.8,3.1,3.4,3.75,2.6,2],

    ["Eggs",0,1.5,2,2.4,2.8,3.1,3.4,3.75,2.6,2],

   ["Dairy",0,1.5,2,2.4,2.8,3.1,3.4,3.75,3.6,3],

    ["Sweetened Yoghurt",0,2,3,3.6,3.75,3.4,3.3,3.2,2.4,1.5],

    ["Cheese",3,3.4,3.75,2,1.6,1.4,1,0.3,0.1,0],

    ["Nuts or Seeds",0,2.6,3.75,3.6,3.6,3.5,3.45,3.1,2.2,1],

    ["Oils",0,1,2,3.75,3.6,2.3,1.4,1,0.4,0.2],

    ["Sugary Cereal",3.6,3.75,3.2,2.4,1.5,1,0.6,0.3,0.05,0],

    ["Plain-Cereal or Oats",0,0.1,0.3,0.5,1,1.3,2,2.8,3.5,3.75],
    
    ["Bread",0,1.5,2,2.4,2.8,3.1,3.4,3.75,3.6,3],
    
    ["Whole Grain Bread",0,2,2.3,2.9,3.1,3.4,3.5,3.7,3.725,3.75],

    ["Pasta",0,1.5,2,2.4,2.8,3.1,3.4,3.75,3.6,3],

    ["Whole Grain Pasta",0,2,2.3,2.9,3.1,3.4,3.5,3.7,3.725,3.75],

    ["Rice",0,1.5,2,2.4,2.8,3.1,3.4,3.75,3.6,3],

    ["Whole Grain Rice",0,2,2.3,2.9,3.1,3.4,3.5,3.7,3.725,3.75],

    ["Super Grains (quinoa, bulgur, amaranth ...)",0,0.1,0.3,0.5,1,1.3,2,2.8,3.5,3.75],

    ["Salty Snacks",3.6,3.75,3.2,2.4,1.5,1,0.6,0.3,0.05,0],

    ["Pastries",3.6,3.75,3.2,2.4,1.5,1,0.6,0.3,0.05,0],

    ["Desserts",3.6,3.75,3.2,2.4,1.5,1,0.6,0.3,0.05,0],

    ["Candy",3.6,3.75,3.2,2.4,1.5,1,0.6,0.3,0.05,0],

    ["Pizza or Pie",3.6,3.75,3.2,2.4,1.5,1,0.6,0.3,0.05,0],

    ["Fried Food",3.75,3.5,3.2,2.4,1.5,1,0.6,0.3,0.05,0],
    
    ["Take out or Fast Food",3.75,3.5,3.2,2.4,1.5,1,0.6,0.3,0.05,0],

    ["Water",0,0.2,0.4,0.6,1.2,1.8,2.8,3.2,3.4,3.75],

    ["Sugary Drinks",3.75,3.5,3.2,2.4,1.5,1,0.6,0.3,0.05,0],

    ["Fruit Juice",0,1.5,2,2.4,2.8,3.1,3.4,3.75,3.6,3],

    ["Alcohol",3.75,3.5,3.2,2.4,1.5,1,0.6,0.3,0.05,0],
    
    ["Moderate Exercise",0,0.2,0.4,0.6,1.2,1.8,2.8,3.2,3.4,3.75],

    ["High Intensity Exercise",0, 1.5 ,2 ,2.4 ,2.8 ,3.1 ,3.4,3.75,2.6,2],
    
    ["Strength Exercise",0, 1.5 ,2 ,2.4 ,2.8 ,3.1 ,3.4,3.75,2.6,2],

    ["Good Job!"]
    

    ]

// Data provided and studied from:
//https://health.gov/sites/default/files/2019-09/2015-2020_Dietary_Guidelines.pdf
//https://www.who.int/news-room/fact-sheets/detail/healthy-diet

//icons by https://icons8.com/