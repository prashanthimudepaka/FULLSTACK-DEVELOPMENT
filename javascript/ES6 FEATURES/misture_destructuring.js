const employee = {
    id: 101,
    name: "John Doe",
    position: "Software Engineer",
    salary: 75000,
    contact: {
        email: "john.doe@example.com",
        phone: "+1 123-456-7890"
    },
    workHistory: [
        { company: "Google", duration: "2 years" },
        { company: "Microsoft", duration: "3 years" }
    ],
    skills: [
        ["JavaScript", "Advanced"],
        ["React", "Intermediate"],
        ["Node.js", "Beginner"]
    ]
};

// ✅ Mixture Destructuring
const {
    name: employeeName,
    position,
    salary,
    contact: { email, phone }, // Object Destructuring
    workHistory: [
        { company: firstCompany, duration: firstDuration }, // Array of Objects
        { company: secondCompany } // Extract only the company name of the second job
    ],
    skills: [ 
        [firstSkill, firstSkillLevel], // Nested Array
        [secondSkill] // Extract only the skill name from the second one
    ]
} = employee;

// ✅ Display Extracted Data
console.log(`Employee: ${employeeName}, Position: ${position}, Salary: $${salary}`);
console.log(`Contact: ${email}, Phone: ${phone}`);
console.log(`Previous Jobs: ${firstCompany} (${firstDuration}), ${secondCompany}`);
console.log(`Top Skills: ${firstSkill} (${firstSkillLevel}), ${secondSkill}`);
