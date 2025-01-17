import {Store} from "pinia";

export function useMiddleware<T extends Store>(store: T, storeName: string) {
    store.$onAction((context: any) => {
        try {
            if (context.args.length > 0) {
                console.log(`Действие в ${storeName} :`, context.name, `c агументами :`, context.args)
            } else {
                console.log(`Действие в ${storeName} :`, context.name)
            }
        } catch (error) {
            console.log(`Ошибка в ${storeName}`)
        }
    })
}

