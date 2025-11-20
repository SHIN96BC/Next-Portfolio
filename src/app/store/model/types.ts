// Infer the type of makeStore
import { makeStore } from '@Src/app/store/config/store';

export type AppStore = ReturnType<typeof makeStore>;
