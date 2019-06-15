import {annualDuesForAffiliation} from './affiliations/main';
import * as aff from './affiliations/affiliations';

describe('ALL', (): void => {
    it('does not include deprecated student status', (): void => {
        expect(aff.ALL).not.toContain(aff.DEPRECATED_STUDENT);
    });

    // Yes, making ALL a set would probably work nicely instead, but an array is simple
    // and the default Set type is frustratingly lacking in functionality.
    it('does not repeat any affiliations', (): void => {
        const seen = new Set();
        aff.ALL.forEach((affiliation): void => {
            expect(seen).not.toContain(affiliation);
            seen.add(affiliation);
        });
    });
});

describe('annualDuesForAffiliation', (): void => {
    it('returns dues for affiliation codes', (): void => {
        expect(annualDuesForAffiliation(aff.MIT_UNDERGRAD.code)).toEqual(15);
        expect(annualDuesForAffiliation(aff.MIT_GRAD_STUDENT.code)).toEqual(15);
        expect(annualDuesForAffiliation(aff.NON_MIT_UNDERGRAD.code)).toEqual(40);
        expect(annualDuesForAffiliation(aff.NON_MIT_GRAD_STUDENT.code)).toEqual(40);
        expect(annualDuesForAffiliation(aff.MIT_ALUM.code)).toEqual(40);
        expect(annualDuesForAffiliation(aff.MIT_AFFILIATE.code)).toEqual(30);
        expect(annualDuesForAffiliation(aff.NON_AFFILIATE.code)).toEqual(40);
    });

    it('throws an exception on the deprecated student status', (): void => {
        expect((): number =>
            annualDuesForAffiliation(aff.DEPRECATED_STUDENT.code),
        ).toThrow('Annual dues are not defined');
    });
});
