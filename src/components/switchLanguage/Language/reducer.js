import {appLocale} from './locale/index'

const intinitalState = { locale: "en", message: appLocale["en"] };


export const reducer = (state = intinitalState, action) => {
  if (action.type === "changeLanguage") {
    if(state.locale !== action.payload){
      console.log('rerun')
    return {
      ...state,
      locale: action.payload,
      message: appLocale[action.payload]
    };}
  }
  return state
};
