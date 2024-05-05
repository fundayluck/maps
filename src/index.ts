import { User } from "./user";
// import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const user = new User();
const user2 = new User();
const map = new CustomMap("map");

map.addUserMarker(user);
map.addUserMarker(user2);
