resList Data By me:

{
        id:"res1",
        type:"restaurant",
        data:{
        name:"YNT-Guilty Grilled",
        cusine:[" Fast Food"," Chinese"],
        avgRating:"4.2",
        costForTwo:15000,
        deliveryTime:36,
        imgId:"7368ed44662f4da5852b1c883f60a08e",

        }
    },
    {
        id:"res2",
        type:"restaurant",
        data:{
        name:"Sky Pizza",
        cusine:["Pizzas"," Fast Food"," Dessert"],
        avgRating:"4.5",
        costForTwo:20000,
        deliveryTime:40,
        imgId:"f75ce42e9d9c9c3810af9a84bc04a433",
        },
    },
    {
        id:"res3",
        type:"restaurant",
        data:{
        name:"Homly Food",
        cusine:[" Indian"," Paratha"],
        avgRating:"4.4",
        costForTwo:10000,
        deliveryTime:30,
        imgId:"98afe36f30a1f5463aa9911b56859855",

        }
    },
    {
        id:"res4",
        type:"restaurant",
        data:{
        name:"Call me Chao",
        cusine:["Chinese","PAN Asian"],
        avgRating:"4.3",
        costForTwo:10000,
        deliveryTime:29,
        imgId:"gyreycu8yzo394ktluiq",

        }
    },
    {
        id:"res5",
        type:"restaurant",
        data:{
        name:"Zaika Biryani",
        cusine:["Biryani"],
        avgRating:"3.3",
        costForTwo:20000,
        deliveryTime:45,
        imgId:"3307572a9163ecd1e400fe59c303c499",

        }
    },
    {
        id:"res6",
        type:"restaurant",
        data:{
        name:"Momo Joint",
        cusine:[" Momo","Fastfood","Tibetian"],
        avgRating:"4.7",
        costForTwo:19900,
        deliveryTime:25,
        imgId:"b3zqpddp6gd78o4wxhzu",

        }
    },
    {
        id:"res7",
        type:"restaurant",
        data:{
        name:"Dessert World",
        cusine:["Cakes"," Snaks","Icecream"],
        avgRating:"4.6",
        costForTwo:10000,
        deliveryTime:20,
        imgId:"g79hwvvtkzjw06f1rrzy",

        }
    },
    {
        id:"res8",
        type:"restaurant",
        data:{
        name:"Dosa Story",
        cusine:["South Indian"," Dosa"],
        avgRating:"4.3",
        costForTwo:7000,
        deliveryTime:29,
        imgId:"FOOD_CATALOG/IMAGES/CMS/2025/1/27/46796f84-5be4-433a-95b4-7eb87fcadbd5_def91265-3a3a-4bc4-a78b-0562e4c8f9e2.jpg",

        }
    },
    {
        id:"res9",
        type:"restaurant",
        data:{
        name:"Wadewale",
        cusine:["Maharastrian"],
        avgRating:"4.7",
        costForTwo:5000,
        deliveryTime:15,
        imgId:"FOOD_CATALOG/IMAGES/CMS/2024/6/18/681b686a-9b7b-413b-9b67-4a978d5692a4_b282b55e-1e06-4283-aca4-46acc5b3ef1d.jpeg",

        }
    },
    {
        id:"res10",
        type:"restaurant",
        data:{
        name:"Roll ON",
        cusine:["Rolls","Indian"],
        avgRating:"4.4",
        costForTwo:10000,
        deliveryTime:30,
        imgId:"mxyfzubjnba2smi6fpfr",

        }
    },





    <div className="Rest-container">

            {
                resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
            }      
            </div>


            Data used in filter function:

            {
                    info: {
                      id: "2053",
                      name: "RushHrs",
                      cloudinaryImageId: "ueiq0zh6dfn38hagze3d",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Burgers",
                        "American",
                        "Salads",
                        "Fast Food",
                        "Desserts"
                      ],
                       avgRatingString: "4.5",
                       deliveryTime: "30",
                    },
    
                },
                 {
                    info: {
                      id: "2054",
                      name: "MCD",
                      cloudinaryImageId: "ueiq0zh6dfn38hagze3d",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Burgers",
                        "American",
                        "Salads",
                        "Fast Food",
                        "Desserts"
                      ],
                       avgRatingString: "3.9",
                       deliveryTime: "30",
                    },
    
                },
                {
                    info: {
                      id: "2055",
                      name: "RushHrs",
                      cloudinaryImageId: "ueiq0zh6dfn38hagze3d",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Burgers",
                        "American",
                        "Salads",
                        "Fast Food",
                        "Desserts"
                      ],
                       avgRatingString: "4.5",
                       deliveryTime: "30",
                    },
    
                },
                {
                    info: {
                      id: "2056",
                      name: "RushHrs",
                      cloudinaryImageId: "ueiq0zh6dfn38hagze3d",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Burgers",
                        "American",
                        "Salads",
                        "Fast Food",
                        "Desserts"
                      ],
                       avgRatingString: 4.3,
                       deliveryTime: "30",
                    },
    
                },