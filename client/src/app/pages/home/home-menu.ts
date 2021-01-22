export class HomeMenu {
    id: number;
    cat_id: string;
    icon: string;
    title: string;

    constructor(id: number, cat_id: string, icon: string, title: string) {
        this.id = id;
        this.cat_id = cat_id;
        this.icon = icon;
        this.title = title;
    }
}
