function buildRandomEmail(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let email = '';
    for (let i = 0; i < 10; i++) {
        email += chars[Math.floor(Math.random() * chars.length)];
    }
    email += '@example.com';
    return email;
}

function buildRandomPassword(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()';
    let password = '';
    for (let i = 0; i < 12; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

export {buildRandomEmail, buildRandomPassword}
