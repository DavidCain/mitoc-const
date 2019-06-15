import {AffiliationCode, Affiliation} from './types';

export const MIT_UNDERGRAD = new Affiliation(
    AffiliationCode.MU,
    'MIT undergrad',
    15
);

export const MIT_GRAD_STUDENT = new Affiliation(
    AffiliationCode.MG,
    'MIT grad student',
    15
);
export const MIT_AFFILIATE = new Affiliation(
    AffiliationCode.MA,
    'MIT affiliate',
    30
);
export const NON_MIT_UNDERGRAD = new Affiliation(
    AffiliationCode.NU,
    'Non-MIT undergrad',
    40
);
export const NON_MIT_GRAD_STUDENT = new Affiliation(
    AffiliationCode.NG,
    'Non-MIT grad student',
    40
);
export const MIT_ALUM = new Affiliation(AffiliationCode.ML, 'MIT alum', 40);
export const NON_AFFILIATE = new Affiliation(
    AffiliationCode.NA,
    'Non-affiliate',
    40
);

// All affiliations _except_ for the deprecated student affiliation
export const ALL: Affiliation[] = [
    MIT_UNDERGRAD,
    MIT_GRAD_STUDENT,
    NON_MIT_UNDERGRAD,
    NON_MIT_GRAD_STUDENT,
    MIT_ALUM,
    MIT_AFFILIATE,
    NON_AFFILIATE
];

// This status reflects a student where we don't know their affiliation!
// (MIT students are $15, other students are $40)
export const DEPRECATED_STUDENT = new Affiliation(
    AffiliationCode.S,
    'Student',
    40
);
