import {AffiliationCode, Affiliation} from './types';
import * as affiliations from './affiliations';

// All affiliations _except_ for the deprecated student affiliation
export const ALL: Affiliation[] = [
    affiliations.MIT_UNDERGRAD,
    affiliations.MIT_GRAD_STUDENT,
    affiliations.NON_MIT_UNDERGRAD,
    affiliations.NON_MIT_GRAD_STUDENT,
    affiliations.MIT_ALUM,
    affiliations.MIT_AFFILIATE,
    affiliations.NON_AFFILIATE,
];

export function annualDuesForAffiliation(code: AffiliationCode): number {
    const affiliation = ALL.find(
        (aff: Affiliation): boolean => aff.code === code,
    );
    if (affiliation === undefined) {
    // This should only happen for the legacy "student" membership
        throw 'Annual dues are not defined!';
    }
    return affiliation.annualDues;
}
