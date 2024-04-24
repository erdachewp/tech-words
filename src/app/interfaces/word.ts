export interface Word{
    id?: string;
    name: string;
    description?: string;
    brief?: string;
    meaning?: string;
    source?: string;
    getWord(word: any): any;
    // getWord(id: string,
    //     name: string,
    //     brief?: string,
    //     meaning?: string,
    //     source?: string): any;
}