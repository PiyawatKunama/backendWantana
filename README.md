## Installation

```bash
npm i
```

## Running the app

```bash
npm run start:dev
```

## Running the app

```bash
/////////////////////////////////////////////////////
General query / mutation (CRUD)
If have function in resolver can use
can add more relation for query , (relations.ts)
if you want custom -> https://typeorm.io/#/relations
////////////////////////////////////////////////////

//create type clothe
mutation {
createTypeClothe(createTypeClotheInput: { name: "typeB" }) {
id
key
}
}

//create sort clothe
mutation {
createSortClothe(createSortClotheInput: { name: "sortB" }) {
id
key
}
}

//create special clothe
mutation {
createSpecialClothe(createSpecialClotheInput: { name: "doll" }) {
id
key
}
}

// create customer
mutation {
createCustomer(
createCustomerInput: {
idCard: "1234567890123"
firstName: "FirstName"
lastName: "LastName"
address: "-"
phoneNumber: " 0812345678"
email: "firstName@test.com"
}
) {
id
key
}
}

//create employee
mutation {
createEmployee(
createEmployeeInput: {
idCard: "3210987654321"
firstName: "emFirst"
lastName: "emLast"
address: "-"
phoneNumber: "0912345678"
email: "emFirst@test.com"
password: "wtfIsThat"
role: SUB_ADMIN
}
) {
id
key
role
}
}

//create order
mutation {
createOrder(createOrderInput: { employeeId: 1, customerId: 1 }) {
key
primaryOrderId
orderIndex
status
employee {
key
}
customer {
key
}
}
}

//create normal clothe
mutation {
createClothe(
createClotheInput: { typeClotheId: 1, sortClotheId: 1, orderId: 1 }
) {
id
key
}
}

//create special cloth
mutation {
createClothe(createClotheInput: { specialClothId: 1, orderId: 1 }) {
id
key
}
}

//create sub order
mutation {
createOrder(
createOrderInput: { employeeId: 1, customerId: 1, primaryOrderId: 1 }
) {
id
key
primaryOrderId
orderIndex
status
employee {
key
}
customer {
key
}
}
}

//update cloth order id
mutation {
updateClothe(updateClotheInput: { ids: [2, 3], orderId: 5 })
}

// Find By Primary Id
query {
findOneByPrimaryId(id: 1) {
id
primaryOrderId
clothes {
id
clotheHasProblems {
id
problemClothe {
name
}
}
typeClothe {
name
}
sortClothe {
name
}
specialClothe {
id
}
}
}
}

// create problem
mutation {
createProblemClothe(createProblemClotheInput: { name: "Problem1" }) {
id
}
}

// add problem to clothe
query {
findOneByPrimaryId(id: 1) {
id
primaryOrderId
clothes {
id
clotheHasProblems {
id
problemClothe {
name
}
}
typeClothe {
name
}
sortClothe {
name
}
specialClothe {
id
}
}
}
}

// find clothe
query {
clothes {
clotheHasProblems {
id
status
problemClothe {
name
}
}
typeClothe {
name
}
sortClothe {
name
}
specialClothe {
id
}
}
}

//create line message
mutation{
createNotificationMassage(createNotificationMassageInput:{status:IN, Massage:"cloth In"}){
id
key
status
Massage
}
}

const MessageToCustomer = (lineText: string, lineUserId: string) => {
const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
        lineText,
        lineUserId,
    });

    const requestOptions: any = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
    };

    fetch('https://linewantana.herokuapp.com/messageToCustomer', requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));

};

// getMassageByStatus
query {
getMassageByStatus(status: IN)
}
```
