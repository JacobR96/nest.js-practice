import { Expose, Transform, Type } from "class-transformer";
import { User } from "../../users/user.entity";

export class ReportDto {
    @Expose()
    id: number;
    @Expose()
    price: number;
    @Expose()
    year: number;
    @Expose()
    lng: number;
    @Expose()
    lat: number;
    @Expose()
    make: string;
    @Expose()
    model: string;
    @Expose()
    mileage: number;
    @Expose()
    approved: boolean;

    @Expose()
    @Type(() => User) // Make sure to import and use the Type decorator if you haven't already.
    user: User; // Assuming you have a User entity that contains the 'id' property.

    @Transform(({ obj }) => obj.user?.id) // Use optional chaining (?.) to handle undefined 'user'.
    @Expose()
    userId: number;
}
