import { DdrAction } from './../../../common/ddr-action';
export class DdrBlockItem<T> {
    item: T;
    borderColor?: string;
    actions?: DdrAction<T>[];
}
