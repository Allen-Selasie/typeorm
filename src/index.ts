import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { Car } from "./entity/Car";
import "reflect-metadata"
import { Console } from "console";


AppDataSource.initialize()
  .then(() => {
    console.log("Database connection successful!");
    app();  // Ensure app() is called after successful initialization
  })
  .catch((error) => console.log("Database connection error:", error));
 
 
 
  async function app() {
    // Find user with the firstName "Timber" and load related cars
    const user = await User.findOne({
        where: { firstName: "Timber" },
        relations: ["cars"] // Load related cars
    });

    // Check if the user was found
    if (!user) {
        console.log("User not found!");
        return;
    }

    // Find car with the name "RAV4"
    const car = await Car.findOneBy({
        name: "RAV4"
    });

    // Check if the car was found
    if (!car) {
        console.log("Car not found!");
        return;
    }

    // Assign the user as the author of the car
    car.author = user;

    // Save the car with the new author
    await car.save();

    console.log(`The user is:`, user, `\nThe car is:`, car);

    setTimeout(async () => {
        await user.reload(); // Reload user if necessary

        console.log("Cars owned by user:", user.cars);
    }, 5000);
}

