// hooks/useAsyncComponent.ts
import { defineAsyncComponent } from 'vue';
import LoadingComponent from '@/components/LoadingComponent.vue';
import ErrorComponent from '@/components/ErrorComponent.vue';
import type { Component } from 'vue';

interface AsyncComponentOptions {
    moduleKey: string; // Ключ для модуля
    loadingComponent?: Component; // Компонент для загрузки
    errorComponent?: Component; // Компонент для ошибки
    delay?: number; // Задержка перед показом загрузочного компонента
    timeout?: number; // Таймаут загрузки компонента
}

type ModuleMap = {
    [key: string]: () => Promise<any>;
};

const moduleMap: ModuleMap = {
    'frontend-1': () => import('frontend-1/App'),
    'frontend-2': () => import('frontend-2/App'),
    'frontend-3': () => import('frontend-3/App'),
    'frontend-4': () => import('frontend-4/App'),
    'frontend-5': () => import('frontend-5/App'),
    'frontend-6': () => import('frontend-6/App'),
};

export function useAsyncComponent({
                                      moduleKey,
                                      loadingComponent = LoadingComponent,
                                      errorComponent = ErrorComponent,
                                      delay = 200,
                                      timeout = 3000,
                                  }: AsyncComponentOptions) {
    if (!moduleMap[moduleKey]) {
        throw new Error(`Модуль с ключом "${moduleKey}" не найден в moduleMap`);
    }

    return defineAsyncComponent({
        loader: moduleMap[moduleKey],
        loadingComponent,
        errorComponent,
        delay,
        timeout,
    });
}
