import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";

export const signInEmailPassword = async (email: string, password: string) => {
    console.log("soy pass",password)
  if (!email || !password) return null;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const dbUser = createUser(email, password);
    return dbUser;
  }

  if (!bcrypt.compareSync(password, user.password ?? "")) {
    return null;
  }
  return user;
};

const createUser = (email: string, password: string) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);

  const user = prisma.user.create({
    data: {
      email,
      password: bcrypt.hashSync(password,salt),
      name: email.split("@")[0],
    },
  });

  return user;
};
