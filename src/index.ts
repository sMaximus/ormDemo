import { DataSource } from "typeorm";
import { UserTest2 } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "userdb",
  synchronize: true,
  logging: true,
  entities: [__dirname + "/**/entity/*.ts"],
});

AppDataSource.initialize()
  .then(async () => {
    const user = new UserTest2();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await AppDataSource.manager.save(user);
    const users = await AppDataSource.manager.find(UserTest2);
    console.log(user);
  })
  .catch((error) => console.log(error));
