Feature: As a receptionist 
        I want to register students
        So that I can schedule an appointment

Scenario: Auto filling student’s data with database consultation
	Given I am at the register student page
	Given "Joãozinho" already had an appointment before
	Given "Joãozinho"’s course is "political science"
	Given "Joãozinho"’s CPF is "190823432-00"
	Given "Joãozinho"’s gender is "Male"
	Given "Joãozinho"’s telephone number is "99090-9876"
	When I select the "Selecionar Joãozinho" option
	Then I can see the name "Joãozinho", course "political science", CPF "190823432-00", gender "Male" and telephone number "99090-9876" at the register student page

Scenario: Unsuccessfully student registration
	Given I am at the register student page
	Given no professional have been chosen
	When I ask the system to register 
	Then I can see an error message

Scenario: Schedule an appointment
	Given I am at the Scheduling page
	Given the professional "Kátia" is available on "August" "10" at "8"
	When I select "Teixeira" as the "student"
	When I select "Kátia" as the "professional" 
	When I select "August" as the "month"
	When I select "10" as the "day"
	When I select "8" as the "hour"
	When I select "0" as the "minute"
	When I ask the system to schedule
	Then I can see the scheduled appointment on "August" "10" at "8"

Scenario: Search for an appointment
	Given  I am at the appointments page
	Given the professional "Estyvison" have scheduled appointments on "July" "3" at "2" and "4"
	When I select "Estyvison" as the "professional"
	When I select "July" as the "month"
	Then I can see "Estyvison"’s scheduled appointments on "July" "3" at "2" and "4" 