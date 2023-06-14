import { defineStore } from 'pinia'

export const useLanguageStroe = defineStore('useLanguageStroe', { 
    state: () => {
      return { 
        isZH: true
       }
    },
    actions: {
        changeLanguage(value:string){
            this.isZH = !this.isZH
        }
    }

})