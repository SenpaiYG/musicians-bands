const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {

    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        x = await Band.create({
            name: "G-unit",
            genre: "Hip-Hop"
        });
        expect(x.name).toBe("G-unit");
        expect(x.genre).toBe("Hip-Hop");

    })

    test('can create a Musician', async () => {

        y = await Musician.create({
            name: "Jichael Fackson",
            instrument: "Guitar"
        });
        expect(y.name).toBe("Jichael Fackson");
        expect(y.instrument).toBe("Guitar");

    })
})