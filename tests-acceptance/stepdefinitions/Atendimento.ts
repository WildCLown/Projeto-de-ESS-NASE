import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
import request = require("request-promise")

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

var base_url = "http://localhost:3000/";

let sleep = (ms => new Promise(resolve => setTimeout(resolve, ms)));

let sameCPF = ((elem, cpf) => elem.element(by.name('cpflist')).getText().then(text => text === cpf));
let sameName = ((elem, name) => elem.element(by.name('nomelist')).getText().then(text => text === name));
let sameCourse = ((elem, course) => elem.element(by.name('cursolist')).getText().then(text => text === course));
let sameGender = ((elem, gender) => elem.element(by.name('generolist')).getText().then(text => text === gender));
let sameTnumber = ((elem, tnumber) => elem.element(by.name('telefonelist')).getText().then(text => text === tnumber));
let sameMonth = ((elem, month) => elem.element(by.name('meslist')).getText().then(text => text === month));
let sameDay = ((elem, day) => elem.element(by.name('dialist')).getText().then(text => text === day));
let sameHour = ((elem, hour) => elem.element(by.name('horalist')).getText().then(text => text === hour));

// Comparadores para os <input>
let sameCPF2 = ((elem, cpf) => elem.element(by.name('cpfbox')).getAttribute('value').then(text => text === cpf));
let sameName2 = ((elem, name) => elem.element(by.name('nomebox')).getAttribute('value').then(text => text === name));
let sameCourse2 = ((elem, course) => elem.element(by.name('cursobox')).getAttribute('value').then(text => text === course));
let sameGender2 = ((elem, gender) => elem.element(by.name('generobox')).getAttribute('value').then(text => text === gender));
let sameTnumber2 = ((elem, tnumber) => elem.element(by.name('telefonebox')).getAttribute('value').then(text => text === tnumber));

let pAND = ((p, q) => p.then(a => q.then(b => a && b)))
let pAND3 = ((x, y, z) => x.then(a => y.then(b => z.then(c => a && b && c))));
let pAND4 = ((x, y, z, v) => x.then(a => y.then(b => z.then(c => v.then(d => a && b && c && d)))));
let pAND5 = ((x, y, z, v, w) => x.then(a => y.then(b => z.then(c => v.then(d => w.then(e => a && b && c && d && e))))));

defineSupportCode(function ({ Given, When, Then }) {

     // Cenario 1

    Given(/^I am at the register student page$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('TaGui');
        await $("a[name='Atendimento']").click();
        await $("a[name='registro']").click();
    })
    
    Given(/^"([^\"]*)" already had an appointment before$/, async (name) => {
        await element(by.buttonText('Buscar aluno existente')).click();
        var allalunos : ElementArrayFinder = element.all(by.name('alunolist'));
        allalunos.filter(elem => sameName(elem,name)).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    Given(/^"([^\"]*)"´s course is "([^\"]*)"$/, async (name, course) => {
        var allalunos : ElementArrayFinder = element.all(by.name('alunolist'));
        allalunos.filter(elem => pAND(sameCourse(elem,course),sameName(elem,name))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    Given(/^"([^\"]*)"´s CPF is "([^\"]*)"$/, async (name, cpf) => {
        var allalunos : ElementArrayFinder = element.all(by.name('alunolist'));
        allalunos.filter(elem => pAND(sameCPF(elem,cpf),sameName(elem,name))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    Given(/^"([^\"]*)"´s gender is "([^\"]*)"$/, async (name, gender) => {
        var allalunos : ElementArrayFinder = element.all(by.name('alunolist'));
        allalunos.filter(elem => pAND(sameGender(elem,gender),sameName(elem,name))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    Given(/^"([^\"]*)"´s telephone number is "([^\"]*)"$/, async (name, tnumber) => {
        var allalunos : ElementArrayFinder = element.all(by.name('alunolist'));
        allalunos.filter(elem => pAND(sameTnumber(elem,tnumber),sameName(elem,name))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    When(/^I select the "([^\"]*)" option$/, async (buttonName) => {
        await element(by.buttonText(<string> buttonName)).click();
    });

    Then(/^I can see the name "([^\"]*)", course "([^\"]*)", CPF "([^\"]*)", gender "([^\"]*)" and telephone number "([^\"]*)" at the register student page$/, async (name, course, cpf, gender, tnumber) => {
        var entradas : ElementArrayFinder = element.all(by.id('boxes'));
        entradas.filter(elem => pAND5(sameCPF2(elem,cpf),sameName2(elem,name),sameTnumber2(elem,tnumber),sameGender2(elem,gender),sameCourse2(elem,course))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    // Cenario 2

    Given(/^No professional has been chosen$/, async () => {
        var entradas : ElementArrayFinder = element.all(by.id('boxes'));
        entradas.filter(elem => sameName2(elem,'')).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    When(/^I ask the system to register$/, async () => {
        await request.post(base_url + "agendamento").then(body =>
        expect(body).to.include('failure')).catch(e =>
        expect(e).equal(null));
    });

    Then(/^I can see the error message$/, async () => {
        var errorMessage : ElementArrayFinder = element.all(by.name('errorMessage'));
        errorMessage.filter(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    // Cenario 3

    Given(/^I am at the Scheduling page$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('TaGui');
        await $("a[name='Atendimento']").click();
        await $("a[name='marcarConsulta']").click();
    })

    Given(/^the professional "([^\"]*)" is available on "([^\"]*)" "(\d*)" at "([^\"]*)"$/, async (professional, month, day, hour) => {
        var allprofessionals : ElementArrayFinder = element.all(by.name('professionallist'));
        allprofessionals.filter(elem => pAVAILABLE(availableDate(elem,month, day, hour),sameName(elem,name))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    When(/^I select "([^\"]*)" as the "([^\"]*)"$/, async (option, optionlist) => {
        var box = "input[name='" + <string>optionlist + "box']";
        await $(box).sendKeys(<string>option);
    });

    When(/^I ask the system to schedule$/, async () => {
        await request.post(base_url + "agendamento").then(body =>
        expect(body).to.include('success')).catch(e =>
        expect(e).equal(null));
    });

    Then(/^I can see the schedule appointment on "([^\"]*)" "(\d*)" at "([^\"]*)"$/, async (month, day, hour) => {
        var allappointment : ElementArrayFinder = element.all(by.name('calendar'));
        allappointment.filter(elem => pAND(sameMonth(elem,month),sameDay(elem,day),sameHour(elem,hour))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    // Cenario 4

    Given(/^I am at the appointments page$/, async () => {
        await browser.get("http://localhost:4200/");
        await expect(browser.getTitle()).to.eventually.equal('TaGui');
        await $("a[name='Atendimento']").click();
        await $("a[name='buscarConsulta']").click();
    })

    Given(/^the professional "([^\"]*)" have schedule appointments on "([^\"]*)" "(\d*)" at "([^\"]*)"$/, async (professional, month, day, hour) => {
        var allschedules : ElementArrayFinder = element.all(by.name('consultalist'));
        allschedules.filter(elem => pAND4(sameName(elem, professional), sameMonth(elem, month), sameDay(elem, day), sameHour(elem, hour))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

    Then(/^I can see "([^\"]*)"'s schedule appointments on "([^\"]*)" "(\d*)" at "([^\"]*)"$/, async (professional, month, day, hour) => {
        var allappointment : ElementArrayFinder = element.all(by.name('consultaquerylist'));
        allappointment.filter(elem => pAND4(sameName(elem, professional), sameMonth(elem, month), sameDay(elem, day), sameHour(elem, hour))).then(elems => expect(Promise.resolve(elems.length)).to.eventually.equal(1));
    });

})
