export class Quote {
    // [x: string]: Date;
    showAuthor: boolean;
    constructor(public id: number, public quote: string, public author: string, public submitter: string, public postDate: Date, public upvote:number, public downvote:number) {
        this.showAuthor=false;
    }
}
