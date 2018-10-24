const piroshkiModel = {
    data: [
        {
            name: 'Captain',
            filling: 'Chicken',
            size: 20
        },
        {
            name: 'Fried Meat',
            filling: 'Beef',
            size: 12
        }
    ],
    addPiroshki: function(name, filling, size) {
        let newPiroshki = {
            name: name,
            filling: filling,
            size: size
        };
        this.data.push(newPiroshki);
    },
    getAllPiroshkis: function() {
        return this.data;
    },
    getPiroshki: function(id) {
        return this.data[id];
    },
    updatePiroshki: function(id, name, filling, size) {
        let piroshki = {
            name,
            filling,
            size
        }        
        this.data[id] = piroshki;
    },
    deletePiroshki: function(id) {
        if (id < this.data.length && id >= 0) {
            return this.data.splice(id, 1);
        }
    }
};

module.exports = piroshkiModel;