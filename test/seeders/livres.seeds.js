const Format = require('../../models/Format')

const livresSeeds = {
    isbn10: {
        isbn: '2714493238',
        titre: 'Et c\'est ainsi que nous vivrons',
        auteur: 'Douglas Kennedy',
        editeur: 'Chloé Royer',
        format: Format.BROCHE,
    },
    isbn13: {
        isbn: '978-3-16-148410-0',
        titre: 'ISBN 13',
        auteur: 'Poupion Mickael',
        editeur: 'Poupion Mickael',
        format: Format.GRANDFORMAT,
    }
}

module.exports = livresSeeds;