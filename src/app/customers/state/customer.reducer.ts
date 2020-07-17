const initialstate ={
    customers:[
        {
            name:"Jhon Does",
            phone:"0190098889",
            address:"Jhon Doe, house, melno street",
            membership:"Platinum",
            id:1
        }
    ],
    loading:false,
    loaded:true
};

export function customerReducer(state= initialstate, action){
switch (action.type){
    case "LOAD_CUSTOMERS":{
        return{  
            ...state,
            loading:true,
            loaded:false    
        }; 
    }
    default:{
        return state;
    }
  }
} 