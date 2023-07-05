import z from "zod";

class Validator {
  get userValidator() {
    return z.object({
      cuid: z.string(),
      email: z.string().email(),
      role: z.enum(["scout", "demoman", "pyro"]),
      whitelist: z.coerce.boolean(),
    });
  }

  gerUserFromQueryParams(params: URLSearchParams) {
    return this.userValidator.parse({
      cuid: params.get("cuid"),
      email: params.get("email"),
      role: params.get("role"),
      whitelist: params.get("whitelist"),
    });
  }
}

export { Validator };
