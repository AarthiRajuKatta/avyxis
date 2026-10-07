export const role_data = [
  {
    id: "super-admin",
    name: "SUPER ADMIN",
    sub: "Platform Owner",
    desc: "Complete oversight of the platform, managing billing, global roles, menus, and company onboarding.",
    sections: [
      { title: "Dashboard", items: ["View overall system stats", "Monitor total companies & users", "Track usage metrics in real-time"] },
      { title: "Company Management", items: ["Create company & onboard new clients", "Edit company details & update logo", "Activate/Deactivate access controls"] },
      { title: "Admin Management", items: ["Create admin logins for companies", "Reset system credentials", "Manage overall admin access workflows"] },
      { title: "Subscription / Billing", items: ["Manage subscription pricing & duration plans", "Track company payments effectively", "Monitor global billing statuses"] },
      { title: "System Settings", items: ["Configure fixed global roles", "Manage visibility of menus globally", "Assign menus to specific roles"] },
      { title: "Reports", items: ["View company-wise usage reports", "Inspect high-level activity logs"] },
    ]
  },
  {
    id: "company-admin",
    name: "COMPANY ADMIN",
    sub: "Client Entity",
    desc: "Full control over a specific company's operations, employees, workflows, and structural settings.",
    sections: [
      { title: "Dashboard", items: ["View key company stats", "Monitor active employees & attendance trends", "Observe overall payroll metrics"] },
      { title: "Employee Hub", items: ["View, search, and edit Employee List", "Add new employee onboarding forms", "Manage exit formalities & resignations seamlessly"] },
      { title: "Attendance Control", items: ["Mark or view daily attendance records", "Manage employee movement via Gate Passes", "Approve & track Leave Entries", "Finalize cycle via Attendance Process", "Handle Double Present special cases"] },
      { title: "Payroll Operations", items: ["Run monthly Salary Process", "Handle Advance Requests & Approvals", "Manage Uniform Entries & equivalent deductions"] },
      { title: "Request Approvals", items: ["Approve or reject Shift Requests", "Manage Week Off Requests proactively", "Allow Edit Permissions for corrections"] },
      { title: "Extensive Reports", items: ["Attendance & Salary Registers", "Gate Pass logs & Resignation updates", "Leave Entry & Week Off Summaries", "Advance Pending & Penalty Fine tracking"] },
      { title: "Settings & Options", items: ["Role Access Control configurations", "Company Branding (Logo & Details)", "Assign permissions strictly bound to roles"] },
    ]
  },
  {
    id: "hr-manager",
    name: "HR MANAGER",
    sub: "Human Resources",
    desc: "Dedicated to employee lifecycle operations, daily attendance, requests, and structured onboarding.",
    sections: [
      { title: "Overview Dashboard", items: ["View HR-specific organizational stats", "Track onboarding and exit rates"] },
      { title: "Employee Oversight", items: ["Add & Edit employee details", "Administer Exit Formalities flawlessly"] },
      { title: "Attendance Tracking", items: ["Mark attendance for daily tracking updates", "Manage Leave Entries", "Execute Attendance Process workflows"] },
      { title: "Request Handling", items: ["Approve incoming Shift Requests", "Acknowledge and manage Week Off configurations"] },
      { title: "Insights & Reports", items: ["Generate internal Employee Reports", "Extract detailed Leave Reports for insights"] },
    ]
  },
  {
    id: "accounts",
    name: "ACCOUNTS",
    sub: "Payroll Executive",
    desc: "Laser-focused on managing executing payroll processes, distributing slips, and enforcing deductions.",
    sections: [
      { title: "Salary & Payroll", items: ["Run the core monthly Salary Process", "Finalize compensation structures"] },
      { title: "Deductions App", items: ["Approve and recover manual advances", "Track detailed uniform deductions continually"] },
      { title: "Salary Records", items: ["View and download the bulk Salary Register", "Generate direct PaySlips automatically for employees"] },
      { title: "Auditing & Reports", items: ["Analyze deep Advance Reports", "Monitor Fine Reports and company penalties"] },
    ]
  },
  {
    id: "employee",
    name: "EMPLOYEE",
    sub: "Self-Service",
    desc: "A comprehensive self-service capability portal for members to view history, logs, and directly raise requests.",
    sections: [
      { title: "Personal Hub", items: ["View personal information summaries", "Overview critical status announcements"] },
      { title: "My Attendance", items: ["Observe real-time daily status", "Apply for upcoming leaves directly", "Raise conditional Gate Passes anytime"] },
      { title: "My Requests", items: ["Communicate Shift Change requests", "Propose customized Week Off demands", "Request Edit Permission safely and fast"] },
      { title: "My Salary & Payslips", items: ["Open & download current monthly PaySlip securely", "Analyze complete past Salary History documentation"] },
    ]
  }
];
