import bcrypt from "bcrypt";

async function hashPassword(password) {
  const saltRounds = 10;
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
}

async function checkPassword(password, hashedPassword) {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
}

export { checkPassword, hashPassword };
