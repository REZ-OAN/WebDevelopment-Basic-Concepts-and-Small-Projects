/**
 * Title : Emvironment variables
 * Description : Handle all environment related things
 * Author : Rezoan Ahmed Abir (Rez_Wizardry)
 * Date : 10/10/23
 */
// dependencies

// module scaffolding
const environments = {};

environments.staging = {
    PORT: 3000,
    envName: 'staging',
    secretKey: 'hojoborolohjblh',
    maxChecks: 5,
    twilio: {
        fromPhone: '+12293983908',
        AccountSID: 'AC5e775c3e7a4872ba8f9bde7d6da75478',
        Auth: '04277ec6c6140c55944b22fdb409c643',
    },
};

environments.production = {
    PORT: 5000,
    envName: 'production',
    secretKey: 'borohojolobhjl',
    maxChecks: 5,
    twilio: {
        fromPhone: '+12293983908',
        AccountSID: 'AC5e775c3e7a4872ba8f9bde7d6da75478',
        Auth: '04277ec6c6140c55944b22fdb409c643',
    },
};
// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

module.exports = environmentToExport;
