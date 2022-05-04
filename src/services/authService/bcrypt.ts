import bcrypt from 'bcrypt'

const saltRounds = 12

export const hashPw = async (pw: string) => {
  await bcrypt.hash(pw, saltRounds, function (err, hash) {
    if (err) {
      return err
    }
    return hash
    // Store hash in your password DB.
  });
}
