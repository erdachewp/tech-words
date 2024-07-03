export interface Word{
    id?: string;
    name:string;
    description?: string;
    meaning?: string;
    article?: string; // an essay like note about the word
    brief?: string;

    source?: string;
    getWord(word: any): any;
    // getWord(id: string,
    //     name: string,
    //     brief?: string,
    //     meaning?: string,
    //     source?: string): any;
}