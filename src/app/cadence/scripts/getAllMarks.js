export const getAllMarks = `
    import AcademicRewardsSystem from 0xfe62afac91a25d47

    pub fun main(subjectName: String): {String: UInt64} {
        return AcademicRewardsSystem.getMarksOfAllStudentsInSubject(subjectName: subjectName)
    }

`;
