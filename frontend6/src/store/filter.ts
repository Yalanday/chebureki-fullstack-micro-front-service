import {defineStore} from "pinia";

interface FilterState {
    filter: string;
}
export const useFilterStore = defineStore('filter', {
        state: (): FilterState => ({
        filter: '',
    }),

    getters: {
        currentFilter: (state: FilterState): string => state.filter,
    },

    actions: {
        setFilter(this: FilterState, newFilter: string): void {
            console.log(newFilter)
            this.filter = newFilter;
        },
    },
});
