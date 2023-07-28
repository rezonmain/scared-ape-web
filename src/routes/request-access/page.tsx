import { Form, Link, useActionData, useSearchParams } from "react-router-dom";
import { LifecycleData } from "@/types/LifecycleData";
import Alert from "@/components/ui/Alert/Alert";
import { Box } from "@/components/ui/Box/Box";
import { Input } from "@/components/ui/Input/Input";
import { Button } from "@/components/ui/Button/Button";

export function RequestAccessPage() {
  const data = useActionData() as LifecycleData | undefined;
  const [params] = useSearchParams();

  return (
    <div className="mx-auto h-full flex items-center justify-center flex-col max-w-sm">
      <Alert
        title="Requesting access"
        type="default"
        message="If you've arrived here it means you're interested in exploring 🦍scared-ape and see my work, and we probably talked before hand, right?"
      />
      <Box className="w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-white text-center ">
          Request access
        </h1>
        {!params.has("email") ? (
          <Form method="post" className="flex flex-col gap-4 mt-8">
            <Input
              required
              type="email"
              id="email"
              name="email"
              label="Email"
              placeholder="user@acme.com"
              error={data?.error?.content?.error ?? undefined}
            />
            <Button type="submit">Submit</Button>
          </Form>
        ) : (
          <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 text-center">
            <p>
              Hey, thanks for requesting access, if approved you'll be notified
              at this email address: <strong>{params.get("email")}</strong>
            </p>
          </div>
        )}
        {!params.has("email") ? (
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Oops, not meant to be here?, don't worry{" "}
            <Link
              className="text-blue-600 hover:underline dark:text-blue-500"
              to="/auth"
            >
              click here to return to the login page
            </Link>
          </p>
        ) : (
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Made a typo?{" "}
            <Link
              className="text-blue-600 hover:underline dark:text-blue-500"
              to="/request-access?new="
            >
              request access again
            </Link>{" "}
            or{" "}
            <Link
              className="text-blue-600 hover:underline dark:text-blue-500"
              to="/auth"
            >
              got back to login
            </Link>
          </p>
        )}
      </Box>
    </div>
  );
}
