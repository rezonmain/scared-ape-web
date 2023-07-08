import { Form, Link, useActionData, useSearchParams } from "react-router-dom";
import { Box } from "@/components/Box/Box";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { LifecycleData } from "@/types/LifecycleData";
import Alert from "@/components/Alert/Alert";

export function AuthPage() {
  const data = useActionData() as LifecycleData | undefined;
  const [params] = useSearchParams();

  return (
    <div className="mx-auto h-screen flex items-center justify-center flex-col max-w-sm">
      {params.has("challengeError") && (
        <>
          <Alert
            title="Error logging in"
            type="error"
            message={params.get("challengeError") ?? ""}
          />
        </>
      )}
      <Box className="max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-white text-center ">
          Log in to scared-ape 🦍
        </h1>
        {!params.has("challengeTo") ? (
          <Form method="post" className="flex flex-col gap-4 mt-8">
            <Input
              required
              type="email"
              id="email"
              name="email"
              label="Email"
              error={data?.error?.content?.error ?? undefined}
            />
            <Button type="submit">Log in</Button>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              You need to be whitelisted to be able to log in, you can request{" "}
              <Link
                className="text-blue-600 hover:underline dark:text-blue-500"
                to="/request-access"
              >
                access here
              </Link>
            </p>
          </Form>
        ) : (
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
            <p>
              An email has been sent to {params.get("challengeTo")}, with a
              login link.
            </p>
            <Link
              className="text-blue-600 hover:underline dark:text-blue-500"
              to="/auth"
            >
              <p>Click here to return to the login page</p>
            </Link>
          </div>
        )}
      </Box>
    </div>
  );
}
