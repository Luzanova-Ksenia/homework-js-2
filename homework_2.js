// pls make at least 5 persons
const people = [
    {
        id: 1,
        name: 'John',
        age: 19,
        moneyAmount: 100,
        desiredAlcoholName: 'whisky',
        desiredAlcoholAmount: 2,
    },
    {
        id: 2,
        name: 'Bob',
        age: 21,
        moneyAmount: 200,
        desiredAlcoholName: 'beer',
        desiredAlcoholAmount: 10,
    },
    {
        id: 3,
        name: 'Mike',
        age: 16,
        moneyAmount: 150,
        desiredAlcoholName: 'rum',
        desiredAlcoholAmount: 1,
    },
    {
        id: 4,
        name: 'James',
        age: 30,
        moneyAmount: 65,
        desiredAlcoholName: 'tequila',
        desiredAlcoholAmount: 5,
    },
    {
        id: 5,
        name: 'Robert',
        age: 48,
        moneyAmount: 230,
        desiredAlcoholName: 'wine',
        desiredAlcoholAmount: 12,
    },
];

// pls make at least 5 alcohol
const alcoholPriceForOneItem = {
    whisky: 23, // don't change this one
    beer: 10,
    rum: 20,
    tequila: 15,
    wine: 17,
    };

const LEGAL_AGE = 18; // don't change this

/**
 * Function is used to filter array of objects by age param, name of param is passed as second argument
 * If object has age above LEGAL_AGE -> it's returned in new array 
 * @param {Array} arr
 * @param {String} ageParamName
 * Returns filtered array
 * f.e function is called getLegalAgePeople(people, 'age');
 * 
 * tip: use .filter method
 */
function getLegalAgePeople(arr, ageParamName) {
    // WRITE CODE HERE
    const olds = arr.filter(person => person.age >= LEGAL_AGE);
    return olds;
};

//console.log(getLegalAgePeople(people, 'age'))

/**
 * Function is used to filter array of objects
 * If object has money amount more than alcohol price multiplied by alcohol amount -> it's returned to new array
 * @param {Array} arr 
 * Returns filtered array
 * f.e function is called getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
 * 
 * tip: use .filter method or for()
*/
function getPeopleWhoHaveMoneyForAlcohol(arr) {
    // WRITE CODE HERE
    const enoughMoney = [];
	
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].moneyAmount>= (alcoholPriceForOneItem[arr[i].desiredAlcoholName] * arr[i].desiredAlcoholAmount)){    
            enoughMoney.push(arr[i]);
        }
    }
	return enoughMoney;
}

//console.log(getPeopleWhoHaveMoneyForAlcohol(people));

/**
 * Function is used to get array of strings
 * @param {Array} arr 
 * Returns filtered array of strings like:
 * ["NAME bought COUNT bottles of ALCOHOL_NAME for SUM rubles"]
 * where NAME is name of person, COUNT is bottles count, ALCOHOL_NAME is name of alcohol, SUM is bottles count multipled by price for a bottle
 * f.e function is called buyAlcohole(legalAgePeople);
 * 
 * tip: use .map method or for()
*/

function buyAlcohol(arr) {
    // WRITE CODE HERE
    //let sum = arr.desiredAlcoholAmount * alcoholPriceForOneItem[arr.desiredAlcoholName]
    //console.log(arr.desiredAlcoholAmount)
    const allInfo = arr.map(who => `${who.name} bought ${who.desiredAlcoholAmount} bottles of ${who.desiredAlcoholName} for ${who.desiredAlcoholAmount * alcoholPriceForOneItem[who.desiredAlcoholName]} rubles`)
    return allInfo
}

//console.log(buyAlcohol(people));


// TEST FUNCTION. PLS DON'T TOUCH
function check() {
    try {
        const people = [{
            id: 1,
            name: 'a',
            age: 19,
            moneyAmount: 100,
            desiredAlcoholName: 'whisky',
            desiredAlcoholAmount: 2,
        }];
    
        const legalAgePeople = getLegalAgePeople(people, 'age');
        if (!legalAgePeople || legalAgePeople[0].id !== 1) {
            throw new Error('check getLegalAgePeople function');
        }

        const peopleWhoHaveMoney = getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
        if (!peopleWhoHaveMoney || peopleWhoHaveMoney[0].id !== 1) {
            throw new Error('check getPeopleWhoHaveMoneyForAlcohol function');
        }

        const checkResult = buyAlcohol(peopleWhoHaveMoney);
        
        if (!checkResult || checkResult[0] !== "a bought 2 bottles of whisky for 46 rubles") {
            throw new Error('check buyAlcohole function');
        }

        alert('Correct! You\'re awesome');
    } catch (err) {
        alert(err);
    }
}
