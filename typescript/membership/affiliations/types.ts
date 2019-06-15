// A two-letter code used to refer to this affiliation across environments
export enum AffiliationCode {
    MU = 'MU',
    MG = 'MG',
    NU = 'NU',
    NG = 'NG',
    MA = 'MA',
    ML = 'ML',
    NA = 'NA',
    S = 'S'
}

export class Affiliation {
    public code: AffiliationCode;
    // A human-readable label for this affiliation
    public value: string;
    // How much it costs to
    public annualDues: number;

    public constructor(code: AffiliationCode, value: string, annualDues: number) {
        this.code = code;
        this.value = value;
        this.annualDues = annualDues;
    }
}
