const tab = "create table author : id number, name string, age number, city string, state string, country string";
const regexp = /create table ([a-z]+) \:(.+)/;
const parse = tab.match(regexp);

const tableName = parse[1];
let columns = parse[2];
columns = columns.split(",");

//console.log(tableName);
console.log(columns);



const database = {
    tables: {
        [tableName]: {
            columns: {},
            data: []
        }
    }
};

for (let column of columns) {
    column = column.trim().split(" ");
    const name = column[0];
    const type = column[1];

    database.tables[tableName].columns[name] = type;
}

console.log(JSON.stringify(database, undefined, " "));



//console.log(database);