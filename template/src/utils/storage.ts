

const LISTENERS:Record<any, (action:string,key:string)=>void> = {};
export const addListener = (key:any,listener:(action:string,key:string)=>void) => {
  LISTENERS[key] = listener;
}
export const removeListener = (key:any) => {
  delete LISTENERS[key];
}
export const setItem = (key:string,value:any) => {
  localStorage.setItem(key,JSON.stringify(value));
}
export const getItem = (key:string) => {
    const value = localStorage.getItem(key);
    if (value){
        return JSON.parse(value);
    }
    return null
}
export const Storage:any={
    addListener,
    removeListener,
    setItem,
    getItem
}