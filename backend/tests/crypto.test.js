const {verify, hash} = require('../utils/crypt/crypt');

test('Hash should match a respective password', async () => {
    const password = 'I124Q';
    const passwordHash = await hash(password);
    const condition = await verify(password, passwordHash);
    expect(condition).toBe(true);
});

test('Result of passwords hashing should be different each time', async () => {
    const password = 'KPI-FICT-IP95';
    const firstHash = await hash(password);
    const secondHash = await hash(password);
    expect(firstHash).not.toBe(secondHash);
});

test('Both two different hashes of the same password should match the password', async () => {
    const password = 'ARTEM-VLADIMIROV-IP95';
    const firstHash = await hash(password);
    const secondHash = await hash(password);
    const condition = await verify(password, firstHash) && await verify(password, secondHash);
    expect(condition).toBe(true);
});

test('Hashes length should be longer than 80 symbols in order for security', async () => {
    const password = 'ICEONICEONICE';
    const passwordHash = await hash(password);
    const condition = passwordHash.length >= 80;
    expect(condition).toBe(true);
});


