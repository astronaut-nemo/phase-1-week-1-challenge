// Question: Challenge 3: Net Salary Calculator (Toy Problem)
// Given the basic salary and benefits of an employee, write a program that would calculate the Payee Tax, NHIF, NSSF Deductions and net salary.

const basicSalary = parseInt(window.prompt("Enter basic salary"));

const benefits = Math.round(2400 + (0.30*basicSalary));

const pensionablePay = window.prompt('Pensionable Pay'); //basicSalary - benefits;

const tier = window.prompt("Enter pension tier as either 'I' or 'II'");

// Calculate PAYE tax
let payeTax;
function calculatePayeTax(){
    if(basicSalary <= 24000){
        payeTax = (0.10 * basicSalary)
    }
    else if(basicSalary > 24000 && basicSalary <= 32333){
        payeTax = (0.25 * basicSalary)
    }
    else if(basicSalary > 32333){
        payeTax = (0.30 * basicSalary)
    }
    return Math.round(payeTax);
}

payeTax = Math.round(calculatePayeTax());

// Calculate NHIF deductions
let NHIF = 0;
function calculateNHIF(){
    switch(true){
        case basicSalary <= 5999:
            return NHIF = 150;

        case basicSalary <= 7999:
            return NHIF = 300;

        case basicSalary <= 11999:
            return NHIF = 400;

        case basicSalary <= 14999:
            return NHIF = 500;

        case basicSalary <= 19999:
            return NHIF = 600;

        case basicSalary <= 24999:
            return NHIF = 750;

        case basicSalary <= 29999:
            return NHIF = 850;

        case basicSalary <= 34999:
            return NHIF = 900;

        case basicSalary <= 39999:
            return NHIF = 950;

        case basicSalary <= 44999:
            return NHIF = 1000;

        case basicSalary <= 49999:
            return NHIF = 1100;

        case basicSalary <= 59999:
            return NHIF = 1200;

        case basicSalary <= 69999:
            return NHIF = 1300;

        case basicSalary <= 79999:
            return NHIF = 1400;

        case basicSalary <= 89999:
            return NHIF = 1500;
        
        case basicSalary <= 99999:
            return NHIF = 1500;

        case basicSalary >= 100000:
            return NHIF = 1700;
    }
}
NHIF = Math.round(calculateNHIF());

// Calculate NSSF deductions as 6% of pensionable pay, by first determining the pensionable pay
function calculatePensionablePay(){
    if(tier == 'I' && pensionablePay < 6000){
        return pensionablePay;
    } else if(tier == 'I' && pensionablePay >= 6000){
        return 6000;
    } else if(tier == 'II' && pensionablePay < 6000){
        return 6000;
    } else if(tier == 'II' && pensionablePay > 18000){
        return 18000;
    } else if(tier == 'II'){
        return pensionablePay;
    }
}
let NSSF = Math.round(0.06*(calculatePensionablePay()));


// Calculate total deductions
const deductions = (payeTax + NHIF + NSSF);

// Calculate net salary, which is equal to gross salary (basicSalary + benefits) - deductions (PAYE Tax + NHIF + NSSF)
const grossSalary = basicSalary + benefits;

const netSalary = grossSalary - deductions;

// Print out the values: Use terminal to view the output
console.log(`Basic salary: ${basicSalary}`);

console.log(`Benefits: ${benefits}`);

console.log(`Gross Salary: ${grossSalary}`);

console.log(`PAYE Tax: ${payeTax}`);

console.log((`NHIF: ${NHIF}`));

console.log(`NSSF: ${NSSF}`);

console.log(`Total deductions: ${deductions}`);

console.log(`Net Salary: ${netSalary}`);