type Publication = {
    citationKey: string;
    entryType: string;
    entryTags: {
        author: string;
        title: string;
        booktitle: string;
        journal?: string;
        series?: string;
        volume?: string;
        number?: string;
        articleno?: string;
        issue_date?: string;
        pages?: string;
        numpages?: string;
        year: string;
        url: string;
        eprint?: string;
        archivePrefix?: string;
        primaryClass?: string;
        _others_?: string;
        _miyashitacomurl_?: string;
        _videourl_?: string;
        _pressrelease_?: string;
    };
};

declare module 'bibtex-parse-js' {
    declare function toJSON(text: string): Publication[];
}
