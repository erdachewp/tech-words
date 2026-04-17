export interface Word{
    _id?: string;
    name:string;
    description?: string;
    meaning?: string;
    article?: string; // an essay like note about the word
    brief?: string;
    source?: string | string[];
    topic?: string | string[];
    datePublished?: Date;
    dateUpdated?:Date | Date[];
//    source?: string;
    getWord(word: any): any;
    // getWord(id: string,
    //     name: string,
    //     brief?: string,
    //     meaning?: string,
    //     source?: string): any;
}