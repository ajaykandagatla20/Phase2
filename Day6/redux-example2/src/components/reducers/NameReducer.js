

const initialState = {
    sname : ''
}

const NameReducer = (state = initialState, action) => { 

    switch(action.type) {
        case 'GAYATHRI' : 
            return {...state, sname : 'Hi I am Gayathri...'};
        case 'SRAVANI' : 
            return {...state, sname : 'Hi I am Sravani...'};
        case 'LAKSHYA' :
            return {...state, sname : 'Hi I am Lakshya...'};
        case 'ABHISHEK' : 
            return {...state, sname : 'Hi I am Abhishek...'};
        default : 
            return state;
    }

}


export const gayathri = () => ({type : 'GAYATHRI'});
export const sravani = () => ({type : 'SRAVANI'});
export const lakshya = () => ({type : 'LAKSHYA'});
export const abhishek = () => ({type : 'ABHISHEK'});

export default NameReducer;