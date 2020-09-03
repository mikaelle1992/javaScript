//console.log(parse);
//console.log(tabNome);

const database = {
    tables: {},
    createTable(table) {
        // o json nao mostra function
        const table = "create table author : id number, name string, age number, city string, state string, country string";
        const regexp = /create table ([a-z]+) \:(.+)/;
        const parse = table.match(regexp);
        const tabNome = parse[1];
        this.tables[tabNome] = {
            col: {},
            data: []
        };
        let col = parse[2];
        col = col.split(",");

        for (let column of columns) {
            column = column.trim().split(" ");
            const name = column[0];
            const type = column[1];

            this.tables[tableName].columns[name] = type;
        }


    }
};