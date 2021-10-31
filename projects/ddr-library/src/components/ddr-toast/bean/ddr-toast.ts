export class DdrToast {
    title: string;
    message: string;
    type: string;

    constructor(title?: string, message?: string, type?: string){
        this.title = title;
        this.message = message;
        this.type = type;
    }
}
