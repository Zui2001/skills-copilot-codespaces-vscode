function skillsMember()
{
    // Skills
    this.skills = [];
    this.skills.push("JavaScript");
    this.skills.push("HTML");
    this.skills.push("CSS");
    this.skills.push("PHP");
    this.skills.push("MySQL");
    this.skills.push("Node.js");
    this.skills.push("React.js");
    this.skills.push("Vue.js");
    this.skills.push("Angular.js");
    this.skills.push("Python");
    this.skills.push("Ruby");
    this.skills.push("Java");
    this.skills.push("C#");
    this.skills.push("C++");
    this.skills.push("C");
    this.skills.push("Swift");
    this.skills.push("Kotlin");
    this.skills.push("Objective-C");
    this.skills.push("R");
    this.skills.push("Scala");
    this.skills.push("Perl");
    this.skills.push("Go");
    this.skills.push("Shell");
    this.skills.push("TypeScript");
    this.skills.push("CoffeeScript");
    this.skills.push("Assembly");
    this.skills.push("Other");

    // Get skills
    this.getSkills = function() {
        return this.skills;
    }

    // Set skills
    this.setSkills = function(skills) {
        this.skills = skills;
    }

    // Add skill
    this.addSkill = function(skill) {
        this.skills.push(skill);
    }

    // Remove skill
    this.removeSkill = function(skill) {
        var index = this.skills.indexOf(skill);
        if (index > -1) {
            this.skills.splice(index, 1);
        }
    }
}
