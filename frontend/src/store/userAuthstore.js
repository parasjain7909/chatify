import { create } from "zustand";
export const useAuthStore = create((set) => ({              
    authuser:{name:"john",_id:123,email:"john@example.com",age:30},
    isLogin:false,
    login:()=>{
        console.log("we just logged in");
        set({ isLogin: true });
    }
}));