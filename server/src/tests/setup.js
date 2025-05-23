import { afterAll, beforeAll } from "@jest/globals";
import { afterTestFunction, beforeTestFunction } from "../utils/jestUtils.js";

beforeAll(beforeTestFunction);
afterAll(afterTestFunction);
