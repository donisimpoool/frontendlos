var collateralrealestate =[
    {field:'Type of Real Estate',index:0},
    {field:'Condition',index:1},
    {field:'Year Build',index:2},
    {field:'Rooms',index:3},
    {field:'Address',index:4},
    {field:'Province',index:5},
    {field:'City',index:6},
    {field:'District',index:7},
    {field:'Size',index:8},
    {field:'Proof of Ownership',index:9},
    {field:'List File',index:10}
]

var collateralvehicle =[
    {field:'Type of Vehicle',index:0},
    {field:'Brand',index:1},
    {field:'Model',index:2},
    {field:'Type Transmision',index:3},
    {field:'Year',index:4},
    {field:'Mileage',index:5},
    {field:'List File',index:6}
]

var collateraldeposit =[
    {field:'Bank',index:0},
    {field:'Amount',index:1},
    {field:'Currency',index:2},
    {field:'Account Number',index:3},
    {field:'Due date',index:4},
    {field:'List File',index:5}
]
// idx 0 real estate , 1 vehicle, 2 deposit
export var listtypecollateral = [collateralrealestate,collateralvehicle,collateraldeposit]