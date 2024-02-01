export const addSubject = `
    import AcademicRewardsSystem from 0xfe62afac91a25d47

    transaction(subjectName: String) {

        prepare(signer: AuthAccount) {
            // Only the account that deployed the contract or an authorized account should be able to add subjects
            AcademicRewardsSystem.addSubject(name: subjectName)
        }
    
        execute {
            log("Added new subject: \\(subjectName)")
        }
    }

`;
