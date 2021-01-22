interface Child {
    id: string;
    childName: string;
}

interface Parent {
    id: number;
    parentName: string;
}

export class Path {
    parent: Parent;
    child: Array<Child>;
    constructor(parent: Parent, child: Array<Child>) {
        this.parent = parent;
        this.child = child;
        
    }
}

