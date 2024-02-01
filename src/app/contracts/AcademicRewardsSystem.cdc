pub contract AcademicRewardsSystem {

    pub struct MarksRecord {
        pub(set) var marks: UInt64

        init(marks: UInt64) {
            self.marks = marks
        }
    }

    pub struct Subject {
        pub let name: String

        init(name: String) {
            self.name = name
        }
    }

    pub var subjects: {String: Subject}
    pub var emailToSubjectMarks: {String: {String: MarksRecord}}

    init() {
        self.subjects = {}
        self.emailToSubjectMarks = {}
    }

    pub fun addSubject(name: String) {
        self.subjects[name] = Subject(name: name)
    }

    pub fun updateStudentMarks(subjectName: String, studentEmails: [String], marksArray: [UInt64]) {
        // Ensure the subject exists
        if self.subjects[subjectName] == nil {
            panic("Subject not found")
        }

        // Check if the arrays have the same length
        let length = studentEmails.length
        if length != marksArray.length {
            panic("The length of student emails and marks arrays must be equal.")
        }

        var index = 0
        while index < length {
            let email = studentEmails[index]
            let marks = marksArray[index]
            
            var subjectMarks = self.emailToSubjectMarks[email] ?? {}
            let currentMarks = subjectMarks[subjectName]?.marks ?? 0
            let totalMarks = currentMarks + marks
            let finalMarks = totalMarks > 100 ? 100 : totalMarks
            
            subjectMarks[subjectName] = MarksRecord(marks: UInt64(finalMarks))
            self.emailToSubjectMarks[email] = subjectMarks

            index = index + 1
        }
    }

    pub fun getStudentMarks(subjectName: String, email: String): UInt64 {
        let subjectMarks = self.emailToSubjectMarks[email] ?? {}
        return subjectMarks[subjectName]?.marks ?? 0
    }

    // Function to get the marks of all students in a specific subject
    pub fun getMarksOfAllStudentsInSubject(subjectName: String): {String: UInt64} {
        var studentMarks: {String: UInt64} = {}
        
        let emails = self.emailToSubjectMarks.keys
        var index = 0
        while index < emails.length {
            let email = emails[index]
            let subjectsMarks = self.emailToSubjectMarks[email]!

            // Check if the student has marks for the given subject
            if let marksRecord = subjectsMarks[subjectName] {
                studentMarks[email] = marksRecord.marks
            }

            index = index + 1
        }

        return studentMarks
    }
}
