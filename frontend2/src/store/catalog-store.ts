import { defineStore } from 'pinia'
import { PropertyCatalogType } from "@/types/types";

export const useCatalogStore = defineStore('catalogStore', {
    state: () => ({
        _catalog: [] as PropertyCatalogType[],
        _location: '' as string,
        _sortOrder: '' as 'asc' | 'desc', // Порядок сортировки
    }),
    getters: {
        catalog: (state) => state._catalog,
        dataRec: (state) => {
            return state._catalog.filter(item => item.rec)
        },
        dataActual: (state) => {
            return state._catalog.filter(item => item.actual)
        },
        dataStrong: (state) => {
            return state._catalog.filter(item => item.strong)
        },
        location: (state) => state._location,
        sortedCatalog: (state) => {
            // Возвращаем отсортированный каталог, учитывая порядок сортировки
            return [...state._catalog].sort((a, b) => {
                let comparison = a.price - b.price;
                return state._sortOrder === 'asc' ? comparison : -comparison;
            })
        }
    },
    actions: {
        setCatalog(newState: PropertyCatalogType[]) {
            this._catalog = newState;
            this.applySortOrder();  // Применяем сортировку после обновления каталога
        },
        setLocation(newLocation: string) {
            this._location = newLocation;
            console.log(this._location)
        },
        setSortOrder(sortOrder: 'asc' | 'desc') {
            if (['asc', 'desc'].includes(sortOrder)) {
                this._sortOrder = sortOrder;
                console.log(this._sortOrder)
                this.applySortOrder(); // Применяем сортировку после изменения порядка
            } else {
                console.error(`Invalid sort order: ${sortOrder}`);
            }
        },
        applySortOrder() {
            // Применяем сортировку к каталогу после изменения порядка
            this._catalog = this.sortedCatalog;
        }
    }
})
